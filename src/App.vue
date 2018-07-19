<template>
  <div class="sco stellar_checkout">
    <NetworkSelector />
    <StellarTicker />
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
  created () {
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
