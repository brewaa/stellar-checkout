import {init} from './app';
import constants from './constants';
import {validateConfig} from './utils/config.checker';

export default {
	name: constants.APP.name,
	ui: {
		render: function(selector, opts) {
			this.selector = selector;
			this.options = {};
			this.options.selector = selector;
			this.options.currency = opts.currency;
			this.options.destinationKey = opts.destinationKey;
			this.options.env = opts.env || 'development';
			this.options.memo = opts.memo;
			this.options.redirectUrl = opts.redirectUrl;
			this.options.onSubmit = opts.onSubmit;
			this.options.stylesheet = opts.stylesheet;
			this.options.total = opts.total;

			var self = this;

			// window.addEventListener('error', function(e) {
			// });

			// window.addEventListener('unhandledrejection', function(ev) {
			// 	console.log(ev);
			// });

			document.addEventListener('DOMContentLoaded', function() {

				validateConfig(self.options)
				.then(function() {
					init(self.options);
				});

			});
		}
	}
};