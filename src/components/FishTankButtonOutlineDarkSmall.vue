<template>
  <FishTankBaseButton
    v-bind="$attrs"
    class="button--outline-dark ft-button--outline-small"
    v-on="$listeners"
  >
    <slot/>
  </FishTankBaseButton>
</template>

<script lang="ts">
import Vue from "vue"
import FishTankBaseButton from "./FishTankBaseButton.vue"

export default Vue.extend({
  name: "FishTankButtonOutlineDarkSmall",
  introduction: "Small Dark Outline Button",
  description: "Small Dark Outline Button",
  token:[`
    <FishTankButtonOutlineDarkSmall>Filter</FishTankButtonOutlineDarkSmall>
  `],
  components: {
    FishTankBaseButton
  }
})
</script>

<style lang="scss">

  @import '../styles/mixins';
  @import "../../node_modules/@fishtank/colors/dist/index";
  @import "../../node_modules/@fishtank/type/dist/index";

  .button--outline-dark {
    background-color: transparent;
    border-color: $color-white;
    border-width: 2px;
    color: $color-white;

    &:hover {
      color: $color-gray-dark;
      background-color: $color-white;
    }
    &:disabled {
      color: $color-gray-dark;
      border-color: $color-gray-dark;

      &:hover{
        background-color: transparent;
      }
    }
    &:active {
      background-color: $color-secondary-darker;
      border-color: $color-secondary-darker;
    }
  }

  .ft-button--outline-small{
    height: 24px;
    border-width: 1px;
    padding: 1px 8px 2px 8px;
    line-height: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.1px;
    text-align: center;
  }

</style>
