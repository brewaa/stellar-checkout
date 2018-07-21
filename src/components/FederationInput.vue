<template>
  <div :class="['sco_component', 'sco_component--federation', { 'sco_loaded' : loaded, 'sco_component--collapsed':complete }]">
      <div class="sco_component_i">
        <div class="sco_component_title">{{title}}
          <div class="sco_component_title_aside">
            <span class="sco_icon">
              <i class="fas fa-question-circle"></i>
            </span>
            <input type="checkbox" v-model="complete" :disabled="!complete" />
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
              <label for="sco_federation_input" class="sco_field_label">Stellar address
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
              <div class="sco_field_note">Enter a stellar address OR public key into this field</div>
            </section>
            <div class="sco_component--button_row">
              <input class="sco_button"
                @click="doFederation"
                :disabled="!input || complete"
                type="submit"
                :value="buttonText" />
            </div>
          </form>
          <div class="sco_component_error" v-if="error"><p v-html="error"></p></div>
        </div>
        <span class="sco_spinner">
          <i class="fas fa-spinner fa-spin"></i>
        </span>
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
    title: {
      type: String,
      default: '1. Verify your address'
    },
    placeholderText: {
      type: String
    },
    ledgerConnected: {
      type: Boolean,
      default: false
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
      if (this.input.trim().length > 0) {
        result = 'Verify stellar address'
      }
      if (this.complete) {
        result = 'Confirm stellar address'
      }
      return result
    },
    showLedger: function () {
      return this.useLedger && this.ledgerConnected
    }
  },
  created () {
    setTimeout(() => {
      this.loaded = true
    }, 1200)
  },
  data () {
    return {
      complete: false,
      error: null,
      ledgerVerificationInProgress: false,
      ledgerVerified: false,
      loaded: false,
      input: '',
      publicKey: null,
      stellarAddress: null
    }
  },
  methods: {
    doFederation: async function () {
      var input = this.input.trim()
      if (input.length === 0) {
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
          var fedRecord = fedSvr.resolveAddress(addr.handle)
          this.complete = true
          this.publicKey = fedRecord.account_id
          this.stellarAddress = fedRecord.stellar_address
        } catch (err) {
          console.log(err)
          this.error = 'Error: network error'
        }
        this.$emit(FEDERATION_EVENT, this.$data)
        return
      }
      var err = 'Error: could not resolve stellar address'
      this.complete = true
      this.error = err
      this.$emit(FEDERATION_EVENT, this.$data)
    },
    ledgerVerify: function () {
      this.ledgerVerificationInProgress = true
      getPublicKey(this.federation.ledgerBip32Path, true, false)
        .then(publicKey => {
          this.complete = true
          this.ledgerVerified = true
          this.publicKey = publicKey
          this.ledgerVerificationInProgress = false
          this.$emit(FEDERATION_EVENT, this.$data)
        })
        .catch(e => {
          console.log(e)
          this.error = e.message
          this.ledgerVerificationInProgress = false
        })
    }
  }
}
</script>
