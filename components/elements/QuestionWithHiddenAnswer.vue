<template>
  <div class="hidden-content-block">
    <p>
      <slot />
    </p>
    <div class="hidden-content-wrapper">
      <span><slot name="toggle" /></span>
      <div class="hidden-content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
