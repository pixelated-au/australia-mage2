/**
 * Fontis Australia Extension for Magento 2
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/osl-3.0.php
 *
 * @category   Fontis
 * @package    Fontis_Australia
 * @copyright  Copyright (c) 2016 Fontis Pty. Ltd. (http://www.fontis.com.au)
 * @license    http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */
define(
    [
        "ko",
        "Magento_Checkout/js/view/payment/default"
    ],
    function (ko, Component) {
        "use strict";

        return Component.extend({
            defaults: {
                template: "Fontis_Australia/payment/fontis_australia/bpay"
            },

            /**
             * Get the merchant-configured message about BPAY to display to customer.
             *
             * @returns {String}
             */
            getMessage: function() {
                var config = window.checkoutConfig.payment[this.item.method];
                if (config.message) {
                    return config.message;
                } else {
                    return "";
                }
            }
        });
    }
);