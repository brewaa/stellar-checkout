<template>
  <div :class="['sco_component', 'sco_component--transaction_details', { 'sco_loaded' : loaded }]" v-show="accountConfirmation.complete">
    <div class="sco_component_i">
      <div class="sco_component_title">3. Transaction Details</div>
      <div class="sco_component_results" v-show="loaded">
        {{transactionDetails.transactionHash}}
        <textarea class="sco_offscreen" v-model="transactionDetails.transactionXdr"></textarea>
      </div>
      <div class="sco_error_elem" v-if="error"><p>{{error}}</p></div>
      <span class="sco_spinner">
        <i class="fas fa-spinner fa-spin"></i>
      </span>
    </div>
  </div>
</template>
<script>
import constants from 'app/constants'
import { mapActions, mapState } from 'vuex'
import { buildTransaction } from 'utils/stellarsdk.helper'
// import {copy} from 'utils/clipboard'
export default {
  components: {
  },
  computed: {
    complete: {
      get () {
        return this.$store.state.transactionDetails.complete
      },
      set (value) {
        this.transactionDetailsSet({
          complete: value
        })
      }
    },
    error: {
      get () {
        return this.$store.state.transactionDetails.error
      },
      set (value) {
        this.transactionDetailsErrorSet(value)
      }
    },
    transactionDetails: {
      get () {
        return this.$store.state.transactionDetails
      },
      set (value) {
        this.transactionDetailsSet(value)
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
    ...mapState({
      accountConfirmation: 'accountConfirmation',
      accountConfirmed: state => state.accountConfirmation.complete,
      dto: 'dto',
      network: 'network'
    })
  },
  data () {
    return {
      loaded: false,
      xdr: null
    }
  },
  methods: {
    // copyToClipboard: function (e) {
    // copy.call(this, this.transactionXdr)
    // },
    load: function () {
      buildTransaction(this.network, this.dto)
        .then(result => {
          this.transactionDetails = {
            transaction: result,
            transactionHash: result.hash().toString('hex'),
            transactionXdr: result.toEnvelope().toXDR('base64')
          }
          this.transactionStatus = {
            status: constants.TX_STATUS.created
          }
          // console.log(result)
          // var xdr = new window.StellarSdk.xdr.Transaction({
          //   sourceAccount: result.source,
          //   fee: result.fee,
          //   seqNum: result.sequence,
          //   timeBounds: null,
          //   memo: result.memo,
          //   operations: result.operations,
          //   ext: null
          // })
          // console.log(xdr)
          this.loaded = true
          this.complete = true
        }).catch(err => {
          console.log(err)
          this.error = err
        })
    },
    ...mapActions([
      'transactionDetailsSet',
      'transactionDetailsErrorSet',
      'transactionStatusSet'])
  },
  watch: {
    accountConfirmed (newVal) {
      if (!newVal) {
        return
      }
      this.error = null
      this.loaded = false
      setTimeout(e => {
        this.load()
      }, 400)
    }
  }
}
</script>
