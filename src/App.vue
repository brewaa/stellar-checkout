<template>
  <div class="sco stellar_checkout">
    <NetworkSelector v-if="options.showNetworkSelector" />
    <StellarTicker v-if="options.showTicker" />
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
import { mapActions, mapState } from 'vuex'
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
      'dto',
      'options'
    ])
  },
  created () {
    // if (this.dto.payment.to) {
    //   this.accountToSet(this.dto.payment.to)
    //     .catch(err => {
    //       console.log(err)
    //       this.error = `Error: [to] param. Account cannot be found on the ${this.networkName}</span> network`
    //     })
    // }
  },
  data () {
    return {
      error: null,
      ledgerConnected: false
    }
  },
  methods: {
    onLedgerConnected: function (e) {
      this.ledgerConnected = true
    },
    onLedgerDisconnected: function (e) {
      this.ledgerConnected = false
    },
    ...mapActions(['accountToSet'])
  }
}
</script>
