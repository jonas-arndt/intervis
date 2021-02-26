<template>
  <div ref="flip-container" :class="['flip-container', 'layout', flipped ? 'flipped' : '']">
    <div class="flipper">
      <div class="front">
        <slot name="front" />
      </div>
      <div class="back">
        <slot name="back" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flipped: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

// from https://davidwalsh.name/css-flip

/* entire container, keeps perspective */
.flip-container {
  perspective: 100vw;
  transform-style: preserve-3d;
}

/*  UPDATED! flip the pane when hovered */
.flip-container.flipped .back {
  transform: rotateY(0deg);
}
.flip-container.flipped .front {
  transform: rotateY(180deg);
}

.flip-container, .flipper, .front, .back {
  height: 100%;
  width: 100%;
}

/* flip speed goes here */
.flipper {
  transition: 0.6s;
  transform-style: preserve-3d;

  position: relative;
}

/* hide back of pane during swap */
.front, .back {
  backface-visibility: hidden;
  transition: 0.6s;
  transform-style: preserve-3d;

  position: absolute;
  top: 0;
  left: 0;
}

/*  UPDATED! front pane, placed above back */
.front {
  z-index: 2;
  transform: rotateY(0deg);
}

/* back, initially hidden pane */
.back {
  transform: rotateY(-180deg);
}

/*
Some vertical flip updates
*/
.vertical.flip-container {
  position: relative;
}

.vertical .back {
  transform: rotateX(180deg);
}

.vertical.flip-container.flipped .back {
  transform: rotateX(0deg);
}

.vertical.flip-container.flipped .front {
  transform: rotateX(180deg);
}

.front, .back {
  overflow-y: scroll;
  overflow-x: hidden;
}

</style>
