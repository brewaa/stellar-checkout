<template>
  <div class="sco_component sco_component--network_selector">
    <div class="sco_component_i">
      <div class="sco_component_title">
        <div class="title">Network</div>
        <div class="sco_component_title_aside">
          <div class="sco_network_selector sco_selector">
            <a :class="['sco_selector_value', 'sco_selector_value--off', { 'sco_selector_value--selected': isTestNetwork }]" @click="click" data-value="test">test</a>
            <a :class="['sco_selector_value', 'sco_selector_value--on', { 'sco_selector_value--selected': isPublicNetwork }]" @click="click" data-value="public">public</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    isTestNetwork: function () {
      return this.network.name === 'test'
    },
    isPublicNetwork: function () {
      return this.network.name === 'public'
    },
    network: {
      get () {
        return this.$store.state.network
      },
      set (value) {
        this.networkSet(value)
      }
    }
  },
  methods: {
    click: function (e) {
      e.preventDefault()
      var val = e.target.getAttribute('data-value')
      this.network = val
    },
    ...mapActions(['networkSet'])
  }
}
</script>
