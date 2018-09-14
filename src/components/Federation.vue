<template>
  <div class="sco_component_group" v-show="!transaction.success">
     <FederationInput :query="options.to"
      :allowEdit="!options.to"
      label-text="stellar address or public key"
      placeholder-text="Recipient address..."
      title="To"
      :use-ledger="false"
      v-model="federation.accountTo"
      v-on:federation="handleFederationResponseTo" />
    <FederationInput :query="options.from"
      label-text="stellar address or public key"
      :ledger-connected="ledgerConnected"
      noteText=""
      placeholder-text="Your stellar address..."
      title="From"
      :use-ledger="true"
      v-model="federation.accountFrom"
      v-on:federation="handleFederationResponseFrom" />
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import FederationInput from 'components/FederationInput'
export default {
  props: {
    ledgerConnected: {
      type: Boolean,
      default: false
    }
  },
  components: {
    FederationInput
  },
  computed: {
    fromTitle: function () {
      return !this.options.to ? 'From' : 'Verify your address'
    },
    ...mapState([
      'federation',
      'network',
      'options',
      'transaction'])
  },
  data () {
    return {
    }
  },
  methods: {
    handleFederationResponseFrom: function (e) {
      this.accountFromSet(e)
        .catch(err => {
          console.log(err)
        })
    },
    handleFederationResponseTo: function (e) {
      this.accountToSet(e)
        .catch(err => {
          console.log(err)
        })
    },
    ...mapActions([
      'accountFromSet',
      'accountToSet'
    ])
  }
}
</script>
