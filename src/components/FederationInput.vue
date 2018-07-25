<template>
  <div :class="['sco_component', 'sco_component--federation', { 'sco_loaded' : loaded, 'sco_component--collapsed': complete }]">
      <div class="sco_component_i">
        <div class="sco_component_title">{{title}}
          <div class="sco_component_title_aside">
            <span class="sco_icon">
              <i class="fas fa-question-circle"></i>
            </span>
            <input type="checkbox" v-model="isComplete" :disabled="!complete" />
          </div>
        </div>
        <div class="sco_component_results">
          <form class="sco_form" v-on:submit.prevent v-show="showLedger">
            <div class="sco_component_text">
              Your Ledger Wallet is connected. You will have to confirm the account displayed on your device screen (in the next step).
            </div>
            <div class="sco_component--button_row">
              <button class="sco_button"
                @click="ledgerVerify"
                :disabled="ledgerVerificationInProgress">
                  Continue
              </button>
            </div>
          </form>
          <form class="sco_form" v-on:submit.prevent v-show="!showLedger">
            <section class="sco_field">
              <label for="sco_federation_input" class="sco_field_label" v-if="labelText">{{labelText}}
                <!-- <i class="fa fa-question-circle" /> -->
              </label>
              <div class="sco_field_input sco_field_input--input">
                <input id="sco_federation_input"
                  autocomplete="off"
                  :placeholder="placeholderText"
                  ref="input"
                  type="text"
                  v-model="input" />
                <span class="sco_spinner"></span>
              </div>
              <div class="sco_field_note" v-if="noteText">{{noteText}}</div>
            </section>
            <div class="sco_component--button_row">
              <input class="sco_button"
                @click="doFederation"
                :disabled="!input || complete"
                type="submit"
                :value="buttonText" />
            </div>
          </form>
        </div>
        <span class="sco_spinner">
          <i class="fas fa-spinner fa-spin"></i>
        </span>
        <div class="sco_component_error" v-if="error" v-html="error"></div>
      </div>
    </div>
</template>
<script>
import merge from 'lodash.merge'
import { getPublicKey } from 'services/ledger.stellar'
import { getFederatedAddress, isFederatedAddress } from 'utils/stellarsdk.helper'
const FEDERATION_EVENT = 'federation'
export default {
  props: {
    account: {
      type: Object
    },
    errorMsg: {
      type: String
    },
    query: {
      type: String
    },
    labelText: {
      type: String
    },
    ledgerConnected: {
      type: Boolean,
      default: false
    },
    network: {
      type: String
    },
    noteText: {
      type: String
    },
    placeholderText: {
      type: String
    },
    title: {
      type: String,
      default: '1. Verify your address'
    },
    useLedger: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object
    }
  },
  computed: {
    buttonText: function () {
      var result = 'Enter stellar address'
      if (typeof this.input === 'string' && this.input.trim().length > 0) {
        result = 'Verify stellar address'
      }
      if (this.complete) {
        result = 'Confirm stellar address'
      }
      return result
    },
    isComplete: {
      get () {
        return this.complete
      },
      set (value) {
        this.complete = value
        this.$emit(FEDERATION_EVENT, merge({}, this.$data))
      }
    },
    showLedger: function () {
      return this.useLedger && this.ledgerConnected
    }
  },
  created () {
    if (typeof this.input === 'string' && this.input.length > 0) {
      this.doFederation().then(() => {
        this.loaded = true
      })
      return
    }
    setTimeout(() => {
      this.loaded = true
    }, 1200)
  },
  data () {
    return {
      complete: false,
      error: null,
      ledgerBip32Path: '44\'/148\'/0\'',
      ledgerVerificationInProgress: false,
      ledgerVerified: false,
      loaded: false,
      input: this.query,
      publicKey: null,
      stellarAddress: null
    }
  },
  methods: {
    doFederation: async function () {
      this.isComplete = false
      this.error = null
      this.loaded = false
      var input = this.input ? this.input.trim() : ''
      if (input.length === 0) {
        this.loaded = true
        this.$emit(FEDERATION_EVENT, merge({}, this.$data))
        return
      }
      if (window.StellarSdk.StrKey.isValidEd25519PublicKey(input)) {
        this.complete = true
        this.publicKey = input
        this.$emit(FEDERATION_EVENT, merge({}, this.$data))
        return
      }
      if (isFederatedAddress(input)) {
        var addr = getFederatedAddress(input)
        if (!addr) {
          return
        }
        try {
          var fedSvr = await window.StellarSdk.FederationServer.createForDomain(addr.homeDomain)
          var fedRecord = await fedSvr.resolveAddress(addr.handle)
          this.complete = true
          this.publicKey = fedRecord.account_id
          this.stellarAddress = fedRecord.stellar_address
          this.$emit(FEDERATION_EVENT, merge({}, this.$data))
        } catch (err) {
          this.error = 'Error: could not resolve stellar address'
          this.loaded = true
          this.$emit(FEDERATION_EVENT, merge({}, err))
        }
        return
      }
      var err = 'Error: invalid address'
      this.error = err
      this.loaded = true
      this.$emit(FEDERATION_EVENT, merge({}, this.$data))
    },
    ledgerVerify: function () {
      this.ledgerVerificationInProgress = true
      getPublicKey(this.ledgerBip32Path, true, false)
        .then(publicKey => {
          this.complete = true
          this.ledgerVerified = true
          this.publicKey = publicKey
          this.ledgerVerificationInProgress = false
          this.$emit(FEDERATION_EVENT, merge({}, this.$data))
        })
        .catch(e => {
          console.log(e)
          this.error = e.message
          this.ledgerVerificationInProgress = false
        })
    }
  },
  watch: {
    account (newVal) {
      this.loaded = true
      this.complete = true
    },
    errorMsg (newVal) {
      this.isComplete = false
      this.loaded = true
      this.error = newVal
    },
    network () {
      this.doFederation()
    }
  }
}
</script>
