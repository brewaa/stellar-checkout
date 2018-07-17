<template>
  <div class="sco_component sco_component--ledger">
    <div class="sco_component_i" v-show="!federationComplete && !connected">
      <form class="sco_form" v-on:submit.prevent>
        <div class="sco_component--button_row">
          <button class="sco_button" :disabled="!connected">
            Sign with Ledger Wallet
          </button>
        </div>
      </form>
    </div>
    <div class="sco_component_i" v-if="connected">
      <div class="sco_component--button_row">
        <div class="sco_caption">
            Ledger Stellar App v.{{version}} - {{ version ? 'Connected' : 'Disconnected'}}
        </div>
        <div class="sco_caption">
          <form v-on:submit.prevent>
            BIP32PATH: <input v-model="bip32Path" />
          </form>
        </div>
        <div class="sco_caption">
          <span class="verified" v-if="verified"> Verified &#10003;</span>
          <span class="verified" v-if="confirmed"> Confirmed &#10003;</span>
        </div>
      </div>
    </div>
   </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import { open } from 'services/ledger.stellar'
export const LEDGER_EVENT_CONNECTED = 'ledgerconnected'
export const LEDGER_EVENT_DISCONNECTED = 'ledgerdisconnected'
export default {
  computed: {
    bip32Path: {
      get () {
        return this.$store.state.federation.ledgerBip32Path
      },
      set (value) {
        return this.ledgerUpdate({
          complete: false,
          ledgerBip32Path: value
        })
      }
    },
    connected: {
      get () {
        return this.isConnected
      },
      set (value) {
        this.isConnected = value
      }
    },
    error: {
      get () {
        return this.$store.state.federation.ledgerError
      },
      set (value) {
        this.ledgerErrorSet(value)
      }
    },
    ledger: {
      get () {
        return this.$store.state.federation
      },
      set (value) {
        this.ledgerUpdate(value)
      }
    },
    ...mapState({
      confirmed: state => state.federation.ledgerConfirmed,
      federationComplete: state => state.federation.complete,
      publicKey: state => state.federation.publicKey,
      verified: state => state.federation.ledgerVerified,
      version: state => state.federation.ledgerAppVersion
    })
  },
  data () {
    return {
      isConnected: false,
      interval: 1000
    }
  },
  created () {
    this.$once(LEDGER_EVENT_CONNECTED, this.updateLedgerInfo)
    setInterval(e => {
      this.ledgerConnect()
    }, this.interval)
  },
  methods: {
    ledgerConnect: function () {
      return open(5, 5)
        .then(api => {
          return new Promise((resolve, reject) => {
            api.getAppConfiguration().then(result => {
              this.connected = true
              this.$emit(LEDGER_EVENT_CONNECTED, result)
              resolve(api)
            }).catch(err => {
              reject(err)
            })
          })
        })
        .catch(err => {
          this.connected = false
          this.$emit(LEDGER_EVENT_DISCONNECTED, err)
          // this.$once(LEDGER_EVENT_CONNECTED, this.updateLedgerInfo)
          // self.error = err // don't pollute the state. this is fired every second. propogate connected state via <App /> ledgerConnected prop
        })
    },
    updateLedgerInfo: function (e) {
      this.ledger = {
        ledgerAppVersion: e.version,
        ledgerError: null
      }
    },
    ...mapActions([
      'ledgerErrorSet',
      'ledgerUpdate'])
  },
  watch: {

  }
}
</script>
