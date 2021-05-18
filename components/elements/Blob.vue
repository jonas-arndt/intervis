<template>
  <div class="blob">
    <div ref="inside" class="inside">
      <svg v-if="width > 0 && height > 0" :viewBox="viewBox">
        <foreignObject
          :width="width"
          :height="height"
          :clip-path="`url(#${clipPathId})`"
          requiredExtensions="http://www.w3.org/1999/xhtml"
        >
          <div
            :style="{ top: -top+'px', left: -left+'px' }"
            class="shape-background-wrapper"
          >
            <slot />
          </div>
        </foreignObject>
        <defs>
          <clipPath :id="clipPathId">
            <path :transform="`translate(${noiseOffset}, ${noiseOffset})`" :d="d" />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script>
import SimplexNoise from 'simplex-noise'
import { scaleLinear } from 'd3-scale'

export default {
  props: {
    pointList: {
      type: Array,
      required: true,
      default: () => []
    },
    clipPathId: {
      type: String,
      default: () => 'shape-' + Math.floor(Math.random() * 1000) + '-clip-path'
    },
    parentRect: {
      type: Object,
      default: () => { return { top: 0, left: 0 } }
    }
  },
  data () {
    return {
      simplex: new SimplexNoise(),

      // configuration
      noiseStep: 0.001,
      noiseOffset: 10,

      // component
      width: 0,
      height: 0,
      top: 0,
      left: 0,

      // data
      data: this.getDataDimensions(),

      // shape
      points: [],
      d: undefined
    }
  },
  computed: {
    viewBox () {
      return `0 0 ${this.width} ${this.height}`
    }
  },
  mounted () {
    this.updatePosition()
    this.animate()

    // set component size
    const boundingRect = this.$refs.inside.getBoundingClientRect()
    this.width = boundingRect.width
    this.height = boundingRect.height

    // set shape
    this.points = this.createPoints()
    this.d = this.spline(this.points)
  },
  methods: {
    updatePosition () {
      const rect = this.$el.getBoundingClientRect()

      this.top = rect.top - this.parentRect.top
      this.left = rect.left
    },
    getScale () {
      const ratioX = this.width / (this.data.maxX - this.data.minX)
      const ratioY = this.height / (this.data.maxY - this.data.minY)
      if (ratioX < ratioY) {
        return scaleLinear()
          .domain([this.data.minX, this.data.maxX])
          .range([0, this.width - 2 * this.noiseOffset])
      } else {
        return scaleLinear()
          .domain([this.data.minY, this.data.maxY])
          .range([0, this.height - 2 * this.noiseOffset])
      }
    },
    createPoints () {
      const scale = this.getScale()

      const points = []
      this.pointList.forEach((item, i) => {
        const x = scale(item[0])
        const y = scale(item[1])

        // store the point
        points.push({
          x,
          y,
          /* we need to keep a reference to the point's original {x, y} coordinates
                  for when we modulate the values later */
          originX: x,
          originY: y,
          // more on this in a moment!
          noiseOffsetX: Math.random() * 1000,
          noiseOffsetY: Math.random() * 1000
        })
      })

      return points
    },
    getDataDimensions () {
      let minX = 0
      let minY = 0
      let maxX = 0
      let maxY = 0

      this.pointList.forEach((item, i) => {
        minX = item[0] < minX ? item[0] : minX
        minY = item[1] < minY ? item[1] : minY
        maxX = item[0] > maxX ? item[0] : maxX
        maxY = item[1] > maxY ? item[1] : maxY
      })

      return { minX, minY, maxX, maxY }
    },
    animate () {
      this.d = this.getSpline(this.points)

      // for every point...
      for (let i = 0; i < this.points.length; i++) {
        const point = this.points[i]

        // return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
        const nX = this.noise(point.noiseOffsetX, point.noiseOffsetX)
        const nY = this.noise(point.noiseOffsetY, point.noiseOffsetY)
        // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
        const x = this.map(nX, -1, 1, point.originX - this.noiseOffset, point.originX + this.noiseOffset)
        const y = this.map(nY, -1, 1, point.originY - this.noiseOffset, point.originY + this.noiseOffset)

        // update the point's current coordinates
        point.x = x
        point.y = y

        // progress the point's x, y values through "time"
        point.noiseOffsetX += this.noiseStep
        point.noiseOffsetY += this.noiseStep
      }

      requestAnimationFrame(this.animate)
    },
    map (n, start1, end1, start2, end2) {
      return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2
    },
    noise (x, y) {
      return this.simplex.noise2D(x, y)
    },
    getSpline (points) {
      return this.spline(points, 1, true)
    },

    // @georgedoescode/spline

    formatPoints (points, close) {
      points = [...points]
      // so that coords can be passed as objects or arrays
      if (!Array.isArray(points[0])) {
        points = points.map(({ x, y }) => [x, y])
      }

      if (close) {
        const lastPoint = points[points.length - 1]
        const secondToLastPoint = points[points.length - 2]

        const firstPoint = points[0]
        const secondPoint = points[1]

        points.unshift(lastPoint)
        points.unshift(secondToLastPoint)

        points.push(firstPoint)
        points.push(secondPoint)
      }

      return points.flat()
    },
    spline (points = [], tension = 1, close = false) {
      points = this.formatPoints(points, close)

      const size = points.length
      const last = size - 4

      const startPointX = close ? points[2] : points[0]
      const startPointY = close ? points[3] : points[1]

      let path = 'M' + [startPointX, startPointY]

      const startIteration = close ? 2 : 0
      const maxIteration = close ? size - 4 : size - 2
      const inc = 2

      for (let i = startIteration; i < maxIteration; i += inc) {
        const x0 = i ? points[i - 2] : points[0]
        const y0 = i ? points[i - 1] : points[1]

        const x1 = points[i + 0]
        const y1 = points[i + 1]

        const x2 = points[i + 2]
        const y2 = points[i + 3]

        const x3 = i !== last ? points[i + 4] : x2
        const y3 = i !== last ? points[i + 5] : y2

        const cp1x = x1 + ((x2 - x0) / 6) * tension
        const cp1y = y1 + ((y2 - y0) / 6) * tension

        const cp2x = x2 - ((x3 - x1) / 6) * tension
        const cp2y = y2 - ((y3 - y1) / 6) * tension

        path += 'C' + [cp1x, cp1y, cp2x, cp2y, x2, y2]
      }

      return path
    }

    // end @georgedoescode/spline
  }
}
</script>

<style lang="scss" scoped>
.blob {
  .inside {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }

  .shape-background-wrapper {
    position: relative;

    & > * {
      width: 100vw;
      height: 100vh;
    }
  }
}
</style>
