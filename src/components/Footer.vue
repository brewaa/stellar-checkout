<template>
  <div :class="['sco_component', 'sco_component--footer', 'sco_loaded']">
    <div class="sco_component_i">
      <div class="sco_component_results">
        <div class="sco_component--button_row">
          <div class="sco_caption">
              &copy; {{year}} <a :href="url" target="_blank">{{brand}}</a>
          </div>
          <div class="sco_caption">
            <a href="https://github.com/brewaa/stellar-checkout" target="_blank">Source Code</a>
            <a href="https://github.com/brewaa/stellar-checkout/blob/master/LICENCE" target="_blank">License</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import constants from 'app/constants'
export default {
  computed: {
    url: function () {
      return 'https://' + this.domain + '/'
    }
  },
  data () {
    return {
      brand: constants.APP.brand,
      domain: constants.APP.domain,
      year: new Date().getFullYear()
    }
  }
}
</script>
