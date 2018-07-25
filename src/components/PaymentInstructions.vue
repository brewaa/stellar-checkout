<template>
  <div :class="['sco_component', 'sco_component--payment_instructions', { 'sco_loaded' : loaded, 'sco_component--collapsed': complete }]" v-show="paymentOptionsComplete">
    <div class="sco_component_i">
      <textarea ref="xdrEnvelope" class="sco_offscreen" v-model="transaction.xdr" readonly></textarea>
      <div class="sco_component_title">4. Instructions</div>
      <div class="sco_component_results" v-show="loaded">
        <div class="sco_component_text" v-show="paymentOptions.method === 'ledger'">
          <p>Please confirm the transaction on your Ledger Wallet device</p>
        </div>
        <div class="sco_component_text" v-show="paymentOptions.method === 'tx_signer'">
          <p>The transaction XDR envelope will be copied to your clipboard. Paste this into the textarea provided in the Transaction Signer.</p>
          <div class="sco_component--button_row">
            <button class="sco_button" @click.prevent="goToTxSigner">Go to Transaction Signer</button>
          </div>
        </div>
        <div v-show="paymentOptions.method === 'byo'">
          <div class="sco_component_text">
            <p>To complete this transaction, send a payment with the following details:</p>
          </div>
          <div class="sco_component_results_heading" v-if="federation.accountTo.account">
            <div>To</div>
            <div>{{federation.accountTo.account.account_id}}</div>
          </div>
          <div class="sco_component_results_heading">
            <div>Amount</div>
            <div>{{options.amount}}</div>
          </div>
          <div class="sco_component_results_heading">
            <div>Asset</div>
            <div>{{options.asset().code}}</div>
          </div>
          <div class="sco_component_results_heading">
            <div>Memo</div>
            <div>{{options.memo}}</div>
          </div>
          <div class="sco_component_results_heading">
            <div>Memo type</div>
            <div>{{options.memoHash()}}</div>
          </div>
          <div class="sco_component_results_heading" v-if="federation.accountFrom.account">
            <div>From</div>
            <div>{{federation.accountFrom.account.account_id}}</div>
          </div>
          <div class="sco_component_results_heading">
            <div>Transaction XDR</div>
          </div>
          <div class="sco_component_qrcode">
            <div class="sco_component_qrcode_i">
              <qrcode :value="transaction.xdr"
                :options="{ size: 256 }"
                v-show="transaction.xdr"
                 @click.prevent="copyXdrToClipboard">
              </qrcode>
              <button class="sco_button" @click.prevent="copyXdrToClipboard">Copy Transaction XDR</button>
            </div>
          </div>
        </div>
        <!-- <div class="sco_component--button_row">
          <a @click.prevent>Choose a different payment method</a>
        </div> -->
      </div>
      <div class="sco_component_error" v-if="error"><p>{{error}}</p></div>
      <span class="sco_spinner">
        <i class="fas fa-spinner fa-spin"></i>
      </span>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import { copy } from 'utils/clipboard'
export default {
  props: {
  },
  computed: {
    paymentOptions: {
      get () {
        return this.$store.state.paymentOptions
      },
      set (value) {
        this.paymentOptionsSet(value)
      }
    },
    ...mapState({
      federation: 'federation',
      network: 'network',
      options: 'options',
      paymentOptionsComplete: state => state.paymentOptions.complete,
      transaction: 'transaction'
    })
  },
  data () {
    return {
      complete: false,
      error: null,
      loaded: false
    }
  },
  methods: {
    copyXdrToClipboard: function () {
      copy.call(this, this.$refs.xdrEnvelope)
    },
    goToTxSigner: function () {
      this.copyXdrToClipboard()
      window.open('https://www.stellar.org/laboratory/#txsigner?xdr=' + this.transaction.currentXdr + '&network=' + this.network.name, '_blank')
    },
    ...mapActions([
      'paymentOptionsSet'])
  },
  watch: {
    paymentOptionsComplete (newVal) {
      if (!newVal) {
        return
      }
      this.loaded = false
      setTimeout(e => {
        this.loaded = true
      }, 400)
    }
  }
}
</script>
