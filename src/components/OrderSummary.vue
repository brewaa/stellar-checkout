<template>
  <div :class="['sco_component', 'sco_component--ordersummary', 'sco_loaded', { 'sco_component--collapsed': complete }]">
    <div class="sco_component_i">
      <div class="sco_component_title">
        Order Summary
        <div class="sco_component_title_aside">
          #{{ dto.order_id || dto.invoice.id }}
          <input type="checkbox" v-model="complete" />
        </div>
      </div>
      <div class="sco_component_results">
        <div class="sco_component_results_data">
          <div class="sco_balances">
            <div class="sco_balances_balance">
              <div class="sco_balances_balance_label">Total</div>
              <div class="sco_balances_balance_asset_code adorned">{{dto.invoice.currency}}</div>
              <div class="sco_balances_balance_bal">{{dto.meta.invoiceTotalFormatted}}</div>
            </div>
            <div class="sco_balances_balance">
              <div class="sco_balances_balance_label">=</div>
              <div class="sco_balances_balance_asset_code adorned">{{dto.payment.asset.code}}</div>
              <div class="sco_balances_balance_bal">{{dto.meta.invoicePriceInLumensFormatted}}</div>
            </div>
            <div class="sco_balances_balance sco_balances_balance_total">
              <div class="sco_balances_balance_label">Total</div>
              <div class="sco_balances_balance_bal">
                {{dto.meta.invoicePriceInLumensFormatted}}
                <span class="sco_balances_balance_bal_asset_code">{{dto.payment.asset.code}}</span>
              </div>
            </div>
            <div class="sco_balances_meta">
              {{dto.meta.currencyConversionDescription}}<br />
              Last updated: {{stellarTicker.updated}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      dto: 'dto',
      stellarTicker: state => state.ticker.stellar
    })
  },
  data () {
    return {
      complete: true
    }
  }
}
</script>
