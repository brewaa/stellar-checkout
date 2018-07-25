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
    <!-- <div :class="['sco_component', 'sco_component--federation', { 'sco_loaded' : loaded, 'sco_component--collapsed': federation.complete }]">
      <div class="sco_component_i">
        <div class="sco_component_title">{{title}}
          <div class="sco_component_title_aside">
            <input type="checkbox" v-model="complete" :disabled="!complete" />
          </div>
        </div>
        <div class="sco_component_results">
          <form class="sco_form" v-on:submit.prevent v-show="ledgerConnected">
            <div class="sco_component_text">
              Your Ledger Wallet is connected. You will have to confirm the account displayed on your device screen (in the next step).
            </div>
            <div class="sco_component--button_row">
              <button class="sco_button"
                @click="ledgerVerify"
                :disabled="ledgerVerificationInProgress">
                  Continue
              </button>
            </div>
          </form>
          <form class="sco_form" v-on:submit.prevent v-show="!ledgerConnected">
            <section class="sco_field">
              <label for="sco_federation_input" class="sco_field_label">Enter your Stellar Address
                <i class="fa fa-question-circle" />
              </label>
              <div class="sco_field_input sco_field_input--input">
                <input id="sco_federation_input"
                  autocomplete="off"
                  placeholder=""
                  ref="input"
                  type="text"
                  v-model="input" />
                <span class="sco_spinner"></span>
              </div>
              <div class="sco_field_note">Stellar addresses are divided into two parts separated by <i>*</i>, the username and the domain. For example: <i>you*stellarcheckout.com</i>. If you don't have a stellar address, you can just enter your public key.</div>
            </section>
            <div class="sco_component--button_row">
              <input class="sco_button"
                @click="doFederation"
                :disabled="!input || complete"
                type="submit"
                :value="buttonText" />
            </div>
          </form>
          <div class="sco_component_error" v-if="federation.error"><p v-html="federation.error"></p></div>
        </div>
        <span class="sco_spinner">
          <i class="fas fa-spinner fa-spin"></i>
        </span>
      </div>
    </div> -->
  </div>
</template>
<script>
import merge from 'lodash.merge'
import { mapActions, mapState } from 'vuex'
// import { getPublicKey } from 'services/ledger.stellar'
// import { getFederatedAddress, isFederatedAddress } from 'utils/stellarsdk.helper'
import FederationInput from 'components/FederationInput'
export default {
  props: {
    // title: {
    //   type: String,
    //   default: '1. Verify your address'
    // },
    ledgerConnected: {
      type: Boolean,
      default: false
    }
  },
  components: {
    FederationInput
  },
  computed: {
    // buttonText: function () {
    //   var result = 'Enter your stellar address'
    //   if (this.input.trim().length > 0) {
    //     result = 'Verify your stellar address'
    //   }
    //   if (this.complete) {
    //     result = 'Confirm your stellar address'
    //   }
    //   return result
    // },
    // complete: {
    //   get () {
    //     return this.$store.state.federation.complete
    //   },
    //   set (value) {
    //     this.federationSet({
    //       complete: value
    //     })
    //   }
    // },
    error: {
      get () {
        return this.$store.state.federation.error
      },
      set (value) {
        this.federationErrorSet(value)
      }
    },
    federation: {
      get () {
        return this.$store.state.federation
      },
      set (value) {
        this.federationSet(value)
      }
    },
    ...mapState([
      // 'dto',
      'network',
      'options'])
  },
  // created () {
  //   this.input = this.dto.payment.from || ''
  //   setTimeout(() => {
  //     this.loaded = true
  //   }, 1200)
  // },
  data () {
    return {
      federationResponseFrom: {},
      federationResponseFromError: null,
      federationResponseTo: {},
      federationResponseToError: null
      // ledgerVerificationInProgress: false,
      // loaded: false,
      // input: ''
    }
  },
  methods: {
    // doFederation: async function () {
    //   this.federationClear()
    //   var input = this.input.trim()
    //   if (input.length === 0) {
    //     return
    //   }
    //   if (window.StellarSdk.StrKey.isValidEd25519PublicKey(input)) {
    //     this.federation = {
    //       complete: true,
    //       publicKey: input
    //     }
    //     return
    //   }
    //   if (isFederatedAddress(input)) {
    //     var addr = getFederatedAddress(input)
    //     if (!addr) {
    //       return
    //     }
    //     try {
    //       var fedSvr = await window.StellarSdk.FederationServer.createForDomain(addr.homeDomain)
    //       var fedRecord = fedSvr.resolveAddress(addr.handle)
    //       this.federation = {
    //         complete: true,
    //         publicKey: fedRecord.account_id,
    //         stellarAddress: fedRecord.stellar_address
    //       }
    //     } catch (err) {
    //       console.log(err)
    //       this.federationErrorSet('Error: network error')
    //     }
    //     // window.StellarSdk.FederationServer
    //     //   .createForDomain(addr.homeDomain)
    //     //   .then(federationServer => {
    //     //     // todo: resolve DKIF, show extended verification results, secure tick etc.
    //     //     // var host = 'federation._stellardomainkey.' + addr.homeDomain
    //     //     // window.browser.dns.resolve(host).then(e => {
    //     //     //   console.log(e)
    //     //     // })
    //     //     return federationServer.resolveAddress(addr.handle)
    //     //   })
    //     //   .then(federationRecord => {
    //     //     this.federation = {
    //     //       complete: true,
    //     //       publicKey: federationRecord.account_id,
    //     //       stellarAddress: federationRecord.stellar_address
    //     //     }
    //     //   })
    //     //   .catch(err => {
    //     //     console.log(err)
    //     //     this.federationErrorSet('Error: network error')
    //     //   })
    //     return
    //   }
    //   var err = 'Error: could not resolve stellar address'
    //   this.federation = {
    //     complete: true,
    //     error: err
    //   }
    // },
    handleFederationResponseFrom: function (e) {
      var x = merge(this.federationResponseFrom, e)
      if (x.error) {
        this.error = x.error
        return
      }
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
          console.log(404040404040)
          console.log(err)
          this.federationResponseFromError = err.message
          this.federation = {
            complete: false
          }
        })
    },
    handleFederationResponseTo: function (e) {
      var x = merge(this.federationResponseTo, e)
      if (x.error) {
        this.error = x.error
        return
      }
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
      // var fed = this.federation
      // var accFrom = fed.accountFrom
      // var accTo = fed.accountTo
      var isComplete = response.complete // accFrom.account !== null && accTo.account !== null &&
      this.federation = {
        complete: isComplete
      }
    },
    // ledgerVerify: function () {
    //   this.ledgerVerificationInProgress = true
    //   getPublicKey(this.federation.ledgerBip32Path, true, false)
    //     .then(publicKey => {
    //       this.federation = {
    //         complete: true,
    //         ledgerVerified: true,
    //         publicKey: publicKey
    //       }
    //       this.ledgerVerificationInProgress = false
    //     })
    //     .catch(e => {
    //       console.log(e)
    //       this.federation = {
    //         error: e.message
    //       }
    //       this.ledgerErrorSet(e.message)
    //       this.ledgerVerificationInProgress = false
    //     })
    // },
    // showError: function (err) {
    //   console.log(err)
    //   var msg = 'Error'
    //   if (err.response && err.response.status === 404) {
    //     msg += `: account cannot be found on the ${this.networkName.toUpperCase()} network`
    //   }
    //   this.error = msg
    // },
    ...mapActions([
      'accountFromSet',
      'accountToSet',
      // 'federationClear',
      'federationSet',
      'federationErrorSet'
      // 'ledgerErrorSet',
      // 'transactionStatusUpdate'
    ])
  }
  // watch: {
  //   network () {
  //     this.complete = false
  //     setTimeout(e => {
  //       this.doFederation()
  //     }, 400)
  //   }
  // }
}
</script>
