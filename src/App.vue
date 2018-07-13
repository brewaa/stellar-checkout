<template>
  <div class="sco stellar_checkout">
    <NetworkSelector />
    <StellarTicker />
    <OrderSummary />
    <Federation :ledger-connected="ledgerConnected" />
    <AccountConfirmation :ledger-connected="ledgerConnected" />
    <TransactionDetails />
    <PaymentOptions :ledger-connected="ledgerConnected" />
    <PaymentInstructions />
    <TransactionStatus />
    <Ledger v-on:ledgerconnected="onLedgerConnected"
      v-on:ledgerdisconnected="onLedgerDisconnected" />
    <Footer />
  </div>
</template>
<script>
import NetworkSelector from 'components/NetworkSelector'
import StellarTicker from 'components/StellarTicker'
import OrderSummary from 'components/OrderSummary'
import Federation from 'components/Federation'
import Ledger from 'components/Ledger'
import AccountConfirmation from 'components/AccountConfirmation'
import TransactionDetails from 'components/TransactionDetails'
import PaymentOptions from 'components/PaymentOptions'
import PaymentInstructions from 'components/PaymentInstructions'
import TransactionStatus from 'components/TransactionStatus'
import Footer from 'components/Footer'
export default {
  name: 'App',
  components: {
    NetworkSelector,
    StellarTicker,
    OrderSummary,
    Federation,
    Ledger,
    AccountConfirmation,
    TransactionDetails,
    PaymentOptions,
    PaymentInstructions,
    TransactionStatus,
    Footer
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
