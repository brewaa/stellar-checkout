<template>
  <div :class="['sco_component', 'sco_component--payment_instructions', { 'sco_loaded' : loaded, 'sco_component--collapsed': complete }]" v-show="paymentOptionsComplete">
    <div class="sco_component_i">
      <textarea ref="xdrEnvelope" class="sco_offscreen" v-model="transactionDetails.transactionXdr" readonly></textarea>
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
          <div class="sco_component_results_heading">
            <div>To</div>
            <div>{{dto.payment.to}}</div>
          </div>
          <div class="sco_component_results_heading">
            <div>Amount</div>
            <div>{{dto.payment.amount}}</div>
          </div>
          <div class="sco_component_results_heading">
            <div>Asset</div>
            <div>{{dto.payment.asset.code}}</div>
          </div>
          <div class="sco_component_results_heading">
            <div>Memo</div>
            <div>{{dto.payment.memo}}</div>
          </div>
          <div class="sco_component_results_heading">
            <div>Memo type</div>
            <div>{{dto.payment.memoType}}</div>
          </div>
          <div class="sco_component_results_heading">
            <div>From</div>
            <div>{{dto.payment.from}}</div>
          </div>
          <div class="sco_component_results_heading">
            <div>Transaction XDR</div>
          </div>
          <div class="sco_component_qrcode">
            <div class="sco_component_qrcode_i">
              <qrcode :value="transactionDetails.transactionXdr"
                :options="{ size: 256 }"
                v-show="transactionDetails.transactionXdr"
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
      dto: 'dto',
      network: 'network',
      paymentOptionsComplete: state => state.paymentOptions.complete,
      transactionDetails: 'transactionDetails'
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
      window.open('https://www.stellar.org/laboratory/#txsigner?xdr=' + this.transactionDetails.transactionXdr + '&network=' + this.network.name, '_blank')
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
