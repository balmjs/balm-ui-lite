<template>
  <svg :width="size" :height="size" class="mdl-circle" viewBox="-25 -25 400 400">
    <circle class="mdl-circle__bg" 
    :cx="r" 
    :cy="r" 
    :r="r" 
    :stroke-width="strokeWidth" 
    :stroke="stroke" 
     />
    <circle 
    :class="['mdl-circle__front', {'no-transition': !animate}]"
    :cx="r" 
    :cy="r" 
    :r="r" 
    :transform="`rotate(-90, ${r}, ${r})`"
    :stroke-linecap="lineStyle" 
    :stroke="progressColor" 
    :stroke-width="progressWidth" 
    :stroke-dasharray="perimeter"
    :stroke-dashoffset="strokeDashoffset" 
    />
    <text dx="-25" x="50%" y="50%"> 
      <slot></slot>
    </text>
  </svg>
</template>
<script>
export default {
  name: 'ui-circle',
  props: {
    animate: {
      type: Boolean,
      default: true
    },
    size: {
      type: [Number, String],
      default: '100%'
    },
    strokeWidth: {
      type: [Number, String],
      default: 20
    },
    strokeLinecap: {
      type: [Number, String],
      // ['butt', 'round', 'square']
      default: 'round'
    },
    stroke: {
      type: String,
      default: '#e4e7f6'
    },
    progressColor: {
      type: String,
      default: '#ff4081'
    },
    progress: {
      default: 0,
      validator(val) {
        return 0 <= val && val <= 100;
      }
    },
    progressWidth: {
      type: [Number, String],
      default() {
        return this.strokeWidth;
      }
    }
  },
  data() {
    return {
      r: 175
    };
  },
  computed: {
    perimeter() {
      return Math.round(2 * Math.PI * this.r);
    },
    strokeDashoffset() {
      let progress = +this.progress;
      return Math.round((100 - progress) / 100 * this.perimeter);
    },
    lineStyle() {
      if (typeof this.strokeLinecap === 'number') {
        return ['butt', 'round', 'square'][this.strokeLinecap];
      }
      return this.strokeLinecap;
    }
  }
};
</script>
