<template>
  <div class="sco stellar_checkout">
    <NetworkSelector v-show="settings.showNetworkSelector" />
    <StellarTicker v-show="settings.showTicker" />
    <TransactionDetails />
    <Federation :ledger-connected="ledgerConnected" />
    <AccountConfirmation :ledger-connected="ledgerConnected" />
    <PaymentOptions :ledger-connected="ledgerConnected" />
    <PaymentInstructions />
    <Ledger v-on:ledgerconnected="onLedgerConnected"
      v-on:ledgerdisconnected="onLedgerDisconnected" />
  </div>
</template>
<script>
import NetworkSelector from 'components/NetworkSelector'
import StellarTicker from 'components/StellarTicker'
import TransactionDetails from 'components/TransactionDetails'
import Federation from 'components/Federation'
import Ledger from 'components/Ledger'
import AccountConfirmation from 'components/AccountConfirmation'
import PaymentOptions from 'components/PaymentOptions'
import PaymentInstructions from 'components/PaymentInstructions'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    NetworkSelector,
    StellarTicker,
    TransactionDetails,
    Federation,
    Ledger,
    AccountConfirmation,
    PaymentOptions,
    PaymentInstructions
  },
  computed: {
    ...mapState([
      'settings'
    ])
  },
  data () {
    return {
      ledgerConnected: false
    }
  },
  methods: {
    onLedgerConnected: function (e) {
      this.ledgerConnected = true
    },
    onLedgerDisconnected: function (e) {
      this.ledgerConnected = false
    }
  }
}
</script>
