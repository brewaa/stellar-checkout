<template>
  <div class="sco_component--account_details">
    <div class="sco_component_row">
      <div>ID</div>
      <div class="sco_component_row_aside">{{account.id }}</div>
    </div>
    <div class="sco_component_results_heading"><div>Balances</div></div>
    <div class="sco_component_row" v-for="bal in filteredBalances" :key="bal.asset_code">
      <div>{{bal | assetCode}}</div>
      <div class="sco_component_row_aside">
        {{bal.balance | decimal7}}<span class="currency">{{bal | assetCode}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import {formatAssetCode, formatDecimal7, formatPublicKey} from 'utils/formatter'

export default {
  props: {
    account: {}
  },
  computed: {
    filteredBalances: function () {
      var xlm = this.account.balances.filter(e => {
        return e.asset_type === 'native'
      })
      var other = this.account.balances.filter(e => {
        return e.asset_type !== 'native'
      })
      return [...xlm, ...other]
    }
  },
  filters: {
    assetCode: function (input) {
      return formatAssetCode(input)
    },
    decimal7: function (input) {
      return formatDecimal7(input)
    },
    publicKey: function (input) {
      return formatPublicKey(input)
    }
  }
}
</script>
