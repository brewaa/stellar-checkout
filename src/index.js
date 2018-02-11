import {init} from './app';
import constants from './constants';
import {Err} from './utils/error';
import sdkHelper from './utils/stellarsdk.helper';
import {validateConfig} from './utils/config.checker';

export default {
	name: constants.APP_NAME,
	ui: {
		render: function(selector, opts) {
			this.selector = selector;
			this.options = {};
			this.options.currency = opts.currency;
			this.options.elem = null;
			this.options.endpointTickerUrl = opts.endpointTickerUrl || constants.STELLAR_CHECKOUT_API_TICKER_URL;
			this.options.env = opts.env || 'development';
			this.options.memo = opts.memo;
			this.options.destinationKey = opts.destinationKey;
			this.options.redirectUrl = opts.redirectUrl;
			this.options.total = opts.total;
			this.options.onSubmit = opts.onSubmit;

			var self = this;

			validateConfig(this.options)
			.catch(function(error) {
				console.log(constants.APP.name + ' CONFIGURATION_ERROR');
				console.log(new Err(error).toString());
			})
			.then(function() {
				sdkHelper.loadSdk(function() {
					init(selector, self.options);
				});	
			});
		}
	}
};