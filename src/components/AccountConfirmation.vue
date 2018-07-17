<template>
  <div :class="['sco_component', 'sco_component--account_confirmation', { 'sco_loaded' : loaded, 'sco_component--collapsed': accountConfirmation.complete }]" v-show="federation.complete">
    <div class="sco_component_i">
      <div class="sco_component_title">{{title}}
        <div class="sco_component_title_aside">
          <input type="checkbox" v-model="complete" :disabled="!complete" />
        </div>
      </div>
      <div class="sco_component_results" v-if="!error">
        <AccountDetails :account="accountConfirmation.account" v-if="accountConfirmation.account" />
        <form class="sco_form" v-show="accountConfirmation.account">
          <div class="sco_component--button_row">
            <button class="sco_button" @click="confirmClick" :disabled="awaitingConfirmation || accountConfirmation.complete">{{buttonText}}</button>
          </div>
        </form>
      </div>
      <div class="sco_component_error" v-if="error"><p v-html="error"></p></div>
      <span class="sco_spinner">
        <i class="fas fa-spinner fa-spin"></i>
      </span>
    </div>
  </div>
</template>
<script>
import constants from 'app/constants'
import { mapActions, mapState } from 'vuex'
import { getPublicKey } from 'services/ledger.stellar'
import AccountDetails from 'components/AccountDetails'
export default {
  props: {
    ledgerConnected: {
      type: Boolean
    }
  },
  components: {
    AccountDetails
  },
  computed: {
    accountConfirmation: {
      get () {
        return this.$store.state.accountConfirmation
      },
      set (value) {
        this.accountConfirmationSet(value)
      }
    },
    buttonText: function () {
      var result = 'Confirm'
      if (this.ledgerConnected) {
        result = 'Confirm on your Ledger device'
      }
      return result
    },
    complete: {
      get () {
        return this.$store.state.accountConfirmation.complete
      },
      set (value) {
        this.accountConfirmationSet({
          complete: value
        })
      }
    },
    error: {
      get () {
        return this.federationError || this.$store.state.accountConfirmation.error
      },
      set (value) {
        this.accountConfirmationError(value)
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
    ...mapState({
      federationComplete: state => state.federation.complete,
      networkName: state => state.network.name
    })
  },
  data () {
    return {
      awaitingConfirmation: false,
      loaded: false,
      title: '2. Loading account details...'
    }
  },
  methods: {
    confirmClick: function (e) {
      e.preventDefault()
      this.awaitingConfirmation = true
      if (this.ledgerConnected) {
        getPublicKey(this.federation.ledgerBip32Path, false, true)
          .then(publicKey => {
            this.federation = {
              complete: true,
              ledgerConfirmed: true
            }
            this.complete = true
            this.awaitingConfirmation = false
          })
          .catch(e => {
            console.log(e)
            this.ledgerErrorSet(e.message)
            this.awaitingConfirmation = false
          })
      } else {
        this.complete = true
        this.awaitingConfirmation = false
      }
    },
    isLoaded: function () {
      this.title = '2. Confirm your account'
      this.loaded = true
      this.transactionStatusUpdate(constants.TX_STATUS.account_confirmation)
    },
    ...mapActions([
      'accountLoad',
      'accountConfirmationClear',
      'accountConfirmationError',
      'accountConfirmationSet',
      'federationSet',
      'ledgerErrorSet',
      'paymentOptionsClear',
      'transactionStatusUpdate'])
  },
  watch: {
    federationComplete (newVal) {
      // if (!newVal) {
      //   return
      // }
      this.accountConfirmationClear()
      this.paymentOptionsClear()
      // this.error = null
      this.loaded = false
      if (this.federation.error) {
        this.error = this.federation.error
        return
      }
      if (this.federation.publicKey) {
        setTimeout(e => {
          this.transactionStatusUpdate(constants.TX_STATUS.account_confirmation_loading_account)
          this.accountLoad(this.federation.publicKey)
            .then(e => {
              this.isLoaded()
            })
            .catch(err => {
              var msg = 'Error'
              var css = 'sco_network_tag sco_network_tag--' + this.networkName.toLowerCase()
              if (err.response && err.response.status === 404) { // window.StellarSdk.NotFoundError ?
                msg += ': account cannot be found on the <span class="' + css + '">' + this.networkName + '</span> network'
              }
              this.error = msg
              this.isLoaded()
            })
        }, 400)
      }
    }
  }
}
</script>
