<template>
  <div class="sco_component_results_data">
    <div class="sco_component_results_heading">
      <div>AccountID</div>
      <div>{{account.id }}</div>
    </div>
    <div class="sco_balances">
      <div class="sco_component_heading">Balances</div>
      <div class="sco_balances_balance" v-for="bal in filteredBalances" :key="bal.asset_code">
        <div class="sco_balances_balance_asset_code">{{bal | assetCode}}</div>
        <div class="sco_balances_balance_bal">
          {{bal.balance | decimal7}}
          <span class="sco_balances_balance_bal_asset_code">{{bal | assetCode}}</span>
        </div>
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
