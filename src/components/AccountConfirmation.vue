<template>
  <div :class="[baseCssClass(), 'sco_component--account_confirmation']" v-show="federationComplete && !transaction.success">
    <div class="sco_component_i">
      <div class="sco_component_header">
        <div class="title">{{title}}</div>
        <div class="feature"></div>
        <div class="complete_icon">
          <input type="checkbox" v-model="isComplete" :disabled="!isComplete" />
        </div>
      </div>
      <div class="sco_component_results">
        <AccountDetails :account="federation.accountFrom.account" v-if="federation.accountFrom.account" />
        <form class="sco_form" v-show="federation.accountFrom.account">
          <div class="sco_component--button_row">
            <button class="sco_button" @click="confirmClick" :disabled="awaitingConfirmation || accountConfirmation.complete">{{buttonText}}</button>
          </div>
        </form>
      </div>
      <div class="sco_component_error" v-if="error">
        <icon icon="exclamation-circle"></icon>
        <span v-html="error"></span>
      </div>
      <span class="sco_component_spinner">
        <icon icon="spinner" spin pulse></icon>
      </span>
    </div>
  </div>
</template>
<script>
import constants from 'app/constants'
import { mapActions, mapState } from 'vuex'
import { getPublicKey } from 'services/ledger.stellar'
import AccountDetails from 'components/AccountDetails'
import BaseComponent from 'components/.base.component.mixin'
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
    isComplete: {
      get () {
        return this.$store.state.accountConfirmation.complete
      },
      set (value) {
        this.complete = value
        this.accountConfirmationSet({
          complete: value
        })
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
      accountFrom: state => state.federation.accountFrom,
      federationComplete: state => state.federation.complete,
      networkName: state => state.network.name,
      transaction: 'transaction'
    })
  },
  data () {
    return {
      awaitingConfirmation: false,
      title: 'Loading account details...'
    }
  },
  mixins: [
    BaseComponent
  ],
  methods: {
    confirmClick: function (e) {
      e.preventDefault()
      this.awaitingConfirmation = true
      if (this.ledgerConnected) {
        getPublicKey(this.federation.ledgerBip32Path, false, true)
          .then(publicKey => {
            this.federation = {
              complete: true,
              accountFrom: {
                ledgerConfirmed: true
              }
            }
            this.accountConfirmation = {
              complete: true
            }
            this.awaitingConfirmation = false
            this.complete = true
          })
          .catch(e => {
            console.log(e)
            this.ledgerErrorSet(e.message)
            this.awaitingConfirmation = false
          })
      } else {
        this.accountConfirmation = {
          complete: true
        }
        this.awaitingConfirmation = false
        this.complete = true
      }
    },
    isLoaded: function () {
      this.title = 'Confirm your account'
      this.loaded = true
      this.transactionStatusUpdate(constants.TX_STATUS.account_confirmation)
    },
    ...mapActions([
      'accountConfirmationSet',
      'federationSet',
      'ledgerErrorSet',
      'paymentOptionsClear',
      'transactionStatusUpdate'])
  },
  watch: {
    federationComplete (newVal) {
      if (!newVal) {
        return
      }
      this.loaded = false
      this.complete = false
      setTimeout(() => {
        this.isLoaded()
      }, 400)
    }
  }
}
</script>
