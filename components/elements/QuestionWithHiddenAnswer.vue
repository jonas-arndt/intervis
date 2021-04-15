<template>
  <div class="hidden-content-block">
    <p>
      <slot></slot>
    </p>
    <div class="hidden-content-wrapper">
      <span><slot name="toggle"></slot></span>
      <div class="hidden-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
