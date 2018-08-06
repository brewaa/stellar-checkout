<template>
  <div :class="[baseCssClass(), 'sco_component--federation']">
      <div class="sco_component_i">
        <div class="sco_component_title">
          <div class="title">{{title}}</div>
          <div class="complete_icon">
            <input type="checkbox" v-model="isComplete" :disabled="!isComplete" />
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
              <label for="sco_federation_input" class="sco_field_label" v-if="labelText">{{labelText}}</label>
              <div class="sco_field_input sco_field_input--input">
                <input id="sco_federation_input"
                  autocomplete="off"
                  :placeholder="placeholderText"
                  ref="input"
                  type="text"
                  v-model="input" />
                <span class="sco_spinner">
                  <icon icon="spinner" spin pulse></icon>
                </span>
              </div>
              <div class="sco_field_note" v-if="noteText">{{noteText}}</div>
            </section>
            <div class="sco_component--button_row">
              <button class="sco_button"
                @click="doFederation"
                :disabled="!input || isComplete"
                type="submit">{{buttonText}}
              </button>
            </div>
          </form>
        </div>
        <span class="sco_spinner">
          <icon icon="spinner" spin pulse></icon>
        </span>
        <div class="sco_component_error" v-if="error">
          <icon icon="exclamation-circle"></icon>
          <span v-html="error"></span>
        </div>
      </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import { merge } from 'lodash-es'
import { getPublicKey } from 'services/ledger.stellar'
import { getFederatedAddress, isFederatedAddress, loadAccount } from 'utils/stellarsdk.helper'
import BaseComponent from 'components/.base.component.mixin'
const FEDERATION_EVENT = 'federation'
export default {
  props: {
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
      if (this.isComplete) {
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
        this.account = !value ? null : this.account
        this.$emit(FEDERATION_EVENT, merge(this.value, this.$data))
      }
    },
    showLedger: function () {
      return this.useLedger && this.ledgerConnected
    },
    ...mapState([
      'network'
    ])
  },
  created () {
    if (typeof this.input === 'string' && this.input.length > 0) {
      this.doFederation()
      return
    }
    setTimeout(() => {
      this.loaded = true
    }, 1200)
  },
  data () {
    return {
      account: null,
      ledgerAppVersion: null,
      ledgerBip32Path: '44\'/148\'/0\'',
      ledgerConfirmed: false,
      ledgerError: null,
      ledgerVerificationInProgress: false,
      ledgerVerified: false,
      input: this.query,
      publicKey: null,
      stellarAddress: null
    }
  },
  mixins: [
    BaseComponent
  ],
  methods: {
    doFederation: async function () {
      await this.resolveAddress().then(() => {
        this.loaded = true
      })
    },
    resolveAddress: async function () {
      this.account = null
      this.complete = false
      this.error = null
      this.loaded = false
      this.publicKey = null
      var input = this.input ? this.input.trim() : ''
      if (input.length === 0) {
        this.$emit(FEDERATION_EVENT, merge(this.value, this.$data))
        return
      }
      if (window.StellarSdk.StrKey.isValidEd25519PublicKey(input)) {
        try {
          this.account = await loadAccount(this.network, input)
          this.complete = true
          this.publicKey = input
          this.$emit(FEDERATION_EVENT, merge(this.value, this.$data))
        } catch (err) {
          this.error = err.message
          this.loaded = true
          this.$emit(FEDERATION_EVENT, merge(this.value, this.$data))
        }
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
          this.account = await loadAccount(this.network, fedRecord.account_id)
          this.complete = true
          this.publicKey = fedRecord.account_id
          this.stellarAddress = fedRecord.stellar_address
          this.$emit(FEDERATION_EVENT, merge(this.value, this.$data))
        } catch (err) {
          this.error = err.message
          this.loaded = true
          this.$emit(FEDERATION_EVENT, merge(this.value, this.$data))
        }
        return
      }
      var err = 'invalid address'
      this.error = err
      this.$emit(FEDERATION_EVENT, merge(this.value, this.$data))
    },
    ledgerVerify: async function () {
      this.ledgerVerificationInProgress = true
      getPublicKey(this.ledgerBip32Path, true, false)
        .then(async publicKey => {
          this.account = await loadAccount(this.network, publicKey)
          this.complete = true
          this.ledgerVerified = true
          this.publicKey = publicKey
          this.ledgerVerificationInProgress = false
          this.$emit(FEDERATION_EVENT, merge(this.value, this.$data))
        })
        .catch(e => {
          console.log(e)
          this.error = e.message
          this.loaded = true
          this.ledgerVerificationInProgress = false
          this.$emit(FEDERATION_EVENT, merge(this.value, this.$data))
        })
    }
  },
  watch: {
    network () {
      this.doFederation()
    }
  }
}
</script>
