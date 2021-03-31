<template>
  <div class="blob">
    <div class="image" style="clip-path: url(#clip-path)">
      test
    </div>
    <svg width="0" height="0" viewBox="0 0 200 200">
      <defs>
        <clipPath id="clip-path">
          <path transform="translate(100 100)" class="blob" :d="d" />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script>
import SimplexNoise from 'simplex-noise'

export default {
  data () {
    const points = this.createPoints()

    return {
      points,
      d: this.getSpline(points),
      noiseStep: 0.002,
      noiseOffset: 10,
      simplex: new SimplexNoise()
    }
  },
  mounted () {
    this.animate()
  },
  methods: {
    // based on https://dev.to/georgedoescode/tutorial-build-a-smooth-animated-blob-using-svg-js-3pne

    createPoints () {
      const points = []
      // how many points do we need
      const numPoints = 6
      // used to equally space each point around the circle
      const angleStep = (Math.PI * 2) / numPoints
      // the radius of the circle
      const rad = 75

      for (let i = 1; i <= numPoints; i++) {
        // x & y coordinates of the current point
        const theta = i * angleStep

        const x = 100 + Math.cos(theta) * rad
        const y = 100 + Math.sin(theta) * rad

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
      }

      return points
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
  .image {
    position: relative;
    height: 400px;
    width: 400px;

    background-image: url("~assets/lines/lines-grey.jpg");
    background-size: cover;
  }
}
</style>
