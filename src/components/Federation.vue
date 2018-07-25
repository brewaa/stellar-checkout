<template>
  <div class="sco_component_group">
     <FederationInput :query="options.to"
      :account="federation.accountTo.account"
      :error-msg="federationResponseToError"
      :network="network.name"
      placeholder-text="Enter recipient address..."
      title="To"
      :use-ledger="false"
      v-model="federationResponseTo"
      v-on:federation="handleFederationResponseTo"
      v-show="!options.to" />
    <FederationInput :query="options.from"
      :account="federation.accountFrom.account"
      :error-msg="federationResponseFromError"
      label-text="Enter your stellar address"
      :ledger-connected="ledgerConnected"
      noteText="Stellar addresses are divided into two parts separated by *, the username and the domain. For example: you*stellarcheckout.com. If you don't have a stellar address, you can just enter your public key."
      :network="network.name"
      placeholder-text="Enter your address..."
      title="1. Verify your address"
      :use-ledger="true"
      v-model="federationResponseFrom"
      v-on:federation="handleFederationResponseFrom" />
  </div>
</template>
<script>
import merge from 'lodash.merge'
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
    // error: {
    //   get () {
    //     return this.$store.state.federation.error
    //   },
    //   set (value) {
    //     this.federationErrorSet(value)
    //   }
    // },
    federation: {
      get () {
        return this.$store.state.federation
      },
      set (value) {
        this.federationSet(value)
      }
    },
    ...mapState([
      'network',
      'options'])
  },
  data () {
    return {
      federationResponseFrom: {},
      federationResponseFromError: null,
      federationResponseTo: {},
      federationResponseToError: null
    }
  },
  methods: {
    handleFederationResponseFrom: function (e) {
      var x = merge(this.federationResponseFrom, e)
      // if (x.error) {
      //   this.error = x.error
      //   return
      // }
      if (!x.complete) {
        this.federation = {
          complete: false
        }
        return
      }
      this.accountFromSet(x)
        .then(response => {
          this.processFederationResponse(e)
        })
        .catch(err => {
          this.federationResponseFromError = err.message
          this.federation = {
            complete: false
          }
        })
    },
    handleFederationResponseTo: function (e) {
      var x = merge(this.federationResponseTo, e)
      // if (x.error) {
      //   this.error = x.error
      //   return
      // }
      if (!x.complete) {
        this.federation = {
          complete: false
        }
        return
      }
      this.accountToSet(x)
        .then(response => {
          this.processFederationResponse(e)
        })
        .catch(err => {
          this.federationResponseToError = err.message
        })
    },
    processFederationResponse: function (response) {
      var isComplete = response.complete // accFrom.account !== null && accTo.account !== null &&
      this.federation = {
        complete: isComplete
      }
    },
    ...mapActions([
      'accountFromSet',
      'accountToSet',
      'federationSet'
    ])
  }
}
</script>
