<template>
  <div :class="[baseCssClass(), 'sco_component--payment_instructions']" v-show="paymentOptionsComplete && !transaction.success">
    <div class="sco_component_i">
      <textarea ref="xdrEnvelope" class="sco_offscreen" v-model="transaction.xdr" readonly></textarea>
      <div class="sco_component_header">
        <div class="title">4. Instructions</div>
      </div>
      <div class="sco_component_results" v-show="loaded">
        <div class="sco_component_text" v-if="paymentOptions.method === 'ledger'">
          <p>Please confirm the transaction on your Ledger Wallet device</p>
        </div>
        <div class="sco_component_text" v-if="paymentOptions.method === 'tx_signer'">
          <p>The transaction XDR envelope will be copied to your clipboard. Paste this into the textarea provided in the Transaction Signer.</p>
          <div class="sco_component--button_row">
            <button class="sco_button" @click.prevent="goToTxSigner">Go to Transaction Signer</button>
          </div>
        </div>
        <div v-show="paymentOptions.method === 'byo'">
          <div class="sco_component_text">
            <p>To complete this transaction, send a payment with the following details:</p>
          </div>
          <div class="sco_component_row" v-if="federation.accountTo.account">
            <div>To</div>
            <div class="sco_component_row_aside">{{federation.accountTo.account.account_id}}</div>
          </div>
          <div class="sco_component_row">
            <div>Amount</div>
            <div class="sco_component_row_aside">{{transaction.amount}}</div>
          </div>
          <div class="sco_component_row">
            <div>Asset</div>
            <div class="sco_component_row_aside">{{transaction.asset().code}}</div>
          </div>
          <div class="sco_component_row">
            <div>Memo</div>
            <div class="sco_component_row_aside">{{transaction.memo}}</div>
          </div>
          <div class="sco_component_row">
            <div>Memo Type</div>
            <div class="sco_component_row_aside">{{transaction.memoType()}}</div>
          </div>
          <div class="sco_component_row" v-if="federation.accountFrom.account">
            <div>From</div>
            <div class="sco_component_row_aside">{{federation.accountFrom.account.account_id}}</div>
          </div>
          <div class="sco_component_row">
            <div>Transaction XDR</div>
          </div>
          <div class="sco_qrcode">
            <div class="sco_qrcode_i">
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
import { mapActions, mapState } from 'vuex'
import { copy } from 'utils/clipboard'
import BaseComponent from 'components/.base.component.mixin'
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
  mixins: [
    BaseComponent
  ],
  methods: {
    copyXdrToClipboard: function () {
      copy.call(this, this.$refs.xdrEnvelope)
    },
    goToTxSigner: function () {
      this.copyXdrToClipboard()
      window.open('https://www.stellar.org/laboratory/#txsigner?xdr=' + this.transaction.xdr + '&network=' + this.network.name, '_blank')
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
