
<template>
  <div 
    :class="[gradientClass, spinnerSize, alignClass]" 
    :aria-busy="`${loading}`"
    class="spinner" 
    role="alert">
    <svg 
      height="100" 
      width="100">
      <defs>
        <linearGradient 
          :id="gradientClass" 
          x1="0%" 
          y1="0%" 
          x2="100%" 
          y2="0%">
          <stop 
            class="stop-class-1" 
            offset="0%" />
          <stop 
            class="stop-class-2" 
            offset="100%" />
        </linearGradient>
      </defs>
      <circle 
        class="spinner-base" 
        cx="50" 
        cy="50" />
      <circle
        :style="{strokeDasharray: `${strokeDashArray}`}"
        :class="['spinner-gradient', {'pause-spinner': !loading}]"
        cx="50" 
        cy="50" 
        @stop-spinner="stopSpinner" />
    </svg>
  </div>
</template>
  
<script>
import Vue from 'vue'
import a11y from '@/util/a11y'

export default Vue.extend({
  name: 'FishTankLoaderSpinner',
  mixins:[
    a11y
  ],
  props: {
    theme: {
      type:String,
      default:"bgov",
      required:true,
      description: "Brand color theme",
      availableThemes: ["bgov", "blaw", "notification-1", "notification-2", "notification-3"]
    },
    size: {
      type:String,
      default: "medium",
      required:true,
      description: "Component Size",
      availableSizes: ["small", "medium", "large"]
    },
    align: {
      type:String,
      default: "center",
      required: false
    },
    loading:{
      type:Boolean,
      default:true,
      required:false
    }
  },
  data () {
    return{
      smallDash: 26,
      smallDashMax: 52,
      mediumDash: 50,
      mediumDashMax: 100,
      largeDash: 100,
      largeDashMax: 200,
      body: window.document.getElementsByName('body')
    }
  },
  computed:{
    gradientClass: function(){ return "spinner--" + this.theme + "-gradient"},
    spinnerSize: function(){ return "spinner--" + this.size},
    alignClass: function() { return "spinner--align-" + this.align},
    strokeDashArray: function(){
      let countDown = this.size === 'small' ? this.smallDash : 
        this.size === 'medium' ? this.mediumDash :this.largeDash
      return countDown
    }
  },
  watch: {
    loading: function(isLoading) {
      isLoading ? null : this.stopSpinner()
    }
  },
  methods:{
    stopSpinner: function(){
      var spinInt = window.setInterval( ()=>{
        if (this[this.size + 'Dash'] >= this[this.size + 'DashMax']){
          window.clearInterval(spinInt)
          this.$emit('spinner-done')
          this.loading = false
          document.body.setAttribute('aria-busy',this.loading)
          return
        } else {
          this[this.size + 'Dash']++
        }
      }, (0.57*([this.size + 'Dash'] * 2)))
      
    }
  }
})
</script>

<style lang="scss">
  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";

  .spinner{
    .spinner-base{
      fill: none;
      stroke: transparent;
    }
    .spinner-gradient{
      fill: none;
      stroke-linecap: round;
      transform: rotate(0deg);
      transform-origin: center center;
      animation: loading .75s linear infinite;
    }
    .pause-spinner{
      animation-play-state: paused;
    }
    //sizes
    &.spinner--small{
      circle.spinner-base, circle.spinner-gradient{
        r: 8px;
        stroke-width: 4;
      }
      circle.spinner-gradient{
        stroke-dasharray: 26;
      }
    }
    &.spinner--medium{
      circle.spinner-base, circle.spinner-gradient{
        r: 15px;
        stroke-width: 6;
      }
      circle.spinner-gradient{
        // stroke-dasharray: 50;
      }
    }
    &.spinner--large{
      circle.spinner-base, circle.spinner-gradient{
      r: 30px;
      stroke-width: 12;
    }
    circle.spinner-gradient{
      // stroke-dasharray: 100;
    }
  }
  //colors
  &.spinner--bgov-gradient{
    circle.spinner-gradient{
      stroke: url(#spinner--bgov-gradient);
    }
    linearGradient{
      stop.stop-class-1{
        stop-color: $color-bgov-navy;
      }
      stop.stop-class-2{
        stop-color: $color-bgov-purple;
      }
    }
  }
  &.spinner--blaw-gradient{
    circle.spinner-gradient{
      stroke: url(#spinner--blaw-gradient);
    }
    linearGradient{
      stop.stop-class-1{
        stop-color: $color-blaw-blue;
      }
      stop.stop-class-2{
        stop-color: $color-blaw-blue;
      }
    }
  }
  &.spinner--notification-1-gradient{
    circle.spinner-gradient{
      stroke: url(#spinner--notification-1-gradient);
    }
    linearGradient{
      stop.stop-class-1{
        stop-color: $color-notification-1;
      }
      stop.stop-class-2{
        stop-color: $color-notification-1;
      }
    }
  }
  &.spinner--notification-2-gradient{
    circle.spinner-gradient{
      stroke: url(#spinner--notification-2-gradient);
    }
    linearGradient{
      stop.stop-class-1{
        stop-color: $color-notification-2;
      }
      stop.stop-class-2{
        stop-color: $color-notification-2;
      }
    }
  }
  &.spinner--notification-3-gradient{
    circle.spinner-gradient{
      stroke: url(#spinner--notification-3-gradient);
    }
    linearGradient{
      stop.stop-class-1{
        stop-color: $color-notification-3;
      }
      stop.stop-class-2{
        stop-color: $color-notification-3;
      }
    }
  }
  &.spinner--align-center {
    text-align: center;
  }
  &.spinner--align-left {
    text-align: left;
  }
  &.spinner--align-right {
    text-align: right;
  }
  
  @keyframes loading{
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }
}

</style>