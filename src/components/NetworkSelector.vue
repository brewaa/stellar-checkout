<template>
  <div :class="[baseCssClass(), 'sco_component--network_selector']">
    <div class="sco_component_i">
      <div class="sco_component_header">
        <div class="title">Network</div>
        <div class="feature">
          <div class="sco_network_selector sco_selector">
            <a :class="['sco_selector_value', { 'sco_selector_value--selected': isTestNetwork }]" @click="click" data-value="test">test</a>
            <a :class="['sco_selector_value', { 'sco_selector_value--selected': isPublicNetwork }]" @click="click" data-value="public">public</a>
            <a :class="['sco_selector_value', { 'sco_selector_value--selected': isCustomNetwork }]" @click="click" data-value="custom">custom</a>
          </div>
        </div>
      </div>
      <div class="sco_component_results">
        <div class="sco_component_row">
          <div>URI</div>
          <div class="sco_component_row_aside">
            <input type="text" v-model="networkUri">
          </div>
        </div>
        <div class="sco_component_row sco_component_row">
          <div>Passphrase</div>
          <div class="sco_component_row_aside">
            <input type="text" v-model="networkPassphrase">
          </div>
        </div>
        <div class="sco_component_row sco_component_row">
          <div>&nbsp;</div>
          <div class="sco_component_row_aside">
            <button @click="updateNetwork">Update</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import BaseComponent from 'components/.base.component.mixin'
export default {
  computed: {
    isCustomNetwork: function () {
      return this.networkName === 'custom'
    },
    isTestNetwork: function () {
      return this.networkName === 'test'
    },
    isPublicNetwork: function () {
      return this.networkName === 'public'
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
  created () {
    this.complete = true
    this.loaded = true
  },
  data () {
    return {
      networkName: this.$store.state.network.name,
      networkPassphrase: this.$store.state.options.networkPassphrase,
      networkUri: this.$store.state.options.networkUri
    }
  },
  mixins: [
    BaseComponent
  ],
  methods: {
    click: function (e) {
      e.preventDefault()
      var val = e.target.getAttribute('data-value')
      this.networkName = val
      if (this.networkName === 'custom') {
        this.complete = false
      } else {
        this.updateState(val)
      }
    },
    updateNetwork: function (e) {
      e.preventDefault()
      this.updateState('custom')
    },
    updateState: function (networkName) {
      this.network = {
        name: networkName,
        passphrase: this.networkPassphrase,
        uri: this.networkUri
      }
      this.complete = true
    },
    ...mapActions([
      'networkSet'
    ])
  }
}
</script>
