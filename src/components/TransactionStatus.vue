<template>
  <div :class="['sco_component', 'sco_component--transaction_results', { 'sco_loaded' : loaded }]" v-show="paymentOptionsComplete">
    <div class="sco_component_i">
      <div class="sco_component_title">
        <span class="sco_spinner1" v-if="!error">
          <i class="fas fa-spinner fa-spin"></i>
        </span> Transaction Status
      </div>
      <div class="sco_component_results" v-show="loaded">
        <div class="sco_component_text" v-if="!error">
          {{transactionStatus.status.title}}
          {{transactionStatus.status.desc}}
          <div v-if="transactionStatus.success">
            hash: {{transactionStatus.result.hash}}
          </div>
        </div>
        <div class="sco_component_error" v-if="error">
          <p>{{error}}</p>
        </div>
        <div class="sco_component_text" v-if="error">
          <a href="#" @click.prevent="tryAgain">Try again...</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import constants from 'app/constants'
import { mapActions, mapState } from 'vuex'
import { fetchTransaction } from 'utils/stellarsdk.helper'
export default {
  props: {
  },
  computed: {
    complete: {
      get () {
        return this.$store.state.transactionStatus.complete
      },
      set (value) {
        this.transactionStatusSet({
          complete: value
        })
      }
    },
    error: {
      get () {
        return this.$store.state.transactionStatus.error
      },
      set (value) {
        this.transactionStatusErrorSet(value)
      }
    },
    paymentOptions: {
      get () {
        return this.$store.state.paymentOptions
      },
      set (value) {
        this.paymentOptionsSet(value)
      }
    },
    transactionStatus: {
      get () {
        return this.$store.state.transactionStatus
      },
      set (value) {
        this.transactionStatusSet(value)
      }
    },
    transactionStatusError: {
      get () {
        return this.$store.state.transactionStatus.error
      },
      set (value) {
        this.transactionStatusErrorSet(value)
      }
    },
    ...mapState({
      network: 'network',
      paymentOptionsComplete: state => state.paymentOptions.complete,
      transactionDetails: 'transactionDetails',
      transactionResult: state => state.transactionStatus.result
    })
  },
  data () {
    return {
      loaded: false
    }
  },
  methods: {
    tryAgain: function () {
      this.paymentOptions = {
        complete: false
      }
    },
    ...mapActions([
      'paymentOptionsSet',
      'transactionStatusSet',
      'transactionStatusErrorSet'])
  },
  watch: {
    paymentOptionsComplete (newVal) {
      if (!newVal) {
        return
      }
      this.error = null
      this.loaded = true
      setTimeout(e => {
        this.transactionStatus = {
          error: null,
          status: this.paymentOptions.method === 'ledger' ? constants.TX_STATUS.ledger_in_progress : constants.TX_STATUS.listening_for_transaction
        }
      }, 400)
    },
    transactionResult () {
      if (this.transactionStatus.success) {
        fetchTransaction(this.network, this.transactionStatus.result.hash)
          .then(tx => {
            this.transactionStatus = {
              transaction: tx
            }
          })
      }
    }
  }
}
</script>
