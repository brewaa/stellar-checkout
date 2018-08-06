<template>
  <div class="sco_component_group" v-show="!transaction.success">
     <FederationInput :query="options.to"
      placeholder-text="Enter recipient address..."
      title="To"
      :use-ledger="false"
      v-model="federation.accountTo"
      v-on:federation="handleFederationResponseTo"
      v-show="!options.to" />
    <FederationInput :query="options.from"
      label-text="Enter your stellar address"
      :ledger-connected="ledgerConnected"
      noteText="Stellar addresses are divided into two parts separated by *, the username and the domain. For example: you*stellarcheckout.com. If you don't have a stellar address, you can just enter your public key."
      placeholder-text="Enter your address..."
      title="1. Verify your address"
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
