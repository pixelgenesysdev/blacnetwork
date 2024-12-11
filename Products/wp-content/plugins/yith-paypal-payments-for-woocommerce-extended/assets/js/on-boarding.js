const yith_ppcp_onboarding = {
    BUTTON_SELECTOR: '[data-yith-paypal-onboard-button]',
    PAYPAL_JS_ID: 'yith-onboarding-paypal-js',
    _timeout: false,

    STATE_START: 'start',
    STATE_ONBOARDED: 'onboarded',

    init: function() {
		window.opener = null;
        document.addEventListener('DOMContentLoaded', this.reload);
    },

    reload: function() {
        const buttons = document.querySelectorAll(yith_ppcp_onboarding.BUTTON_SELECTOR);

        if (buttons.length > 0) {
            // Add event listeners to buttons preventing link clicking if PayPal init failed.
            buttons.forEach(
                (element) => {
                    if (element.hasAttribute('data-yith-ppcp-button-initialized')) {
                        return;
                    }

                    element.addEventListener(
                        'click',
                        (e) => {
                            if (!element.hasAttribute('data-yith-ppcp-button-initialized') || 'undefined' === typeof window.PAYPAL) {
                                e.preventDefault();
                            }
                        }
                    );
                }
            );

            // Clear any previous PayPal scripts.
            [yith_ppcp_onboarding.PAYPAL_JS_ID, 'signup-js', 'biz-js'].forEach(
                (scriptID) => {
                    const scriptTag = document.getElementById(scriptID);

                    if (scriptTag) {
                        scriptTag.parentNode.removeChild(scriptTag);
                    }

                    if ('undefined' !== typeof window.PAYPAL) {
                        delete window.PAYPAL;
                    }
                }
            );

            // Load PayPal scripts.
            const paypalScriptTag = document.createElement('script');
            paypalScriptTag.id = yith_ppcp_onboarding.PAYPAL_JS_ID;
            paypalScriptTag.src = 'https://www.paypal.com/webapps/merchantboarding/js/lib/lightbox/partner.js';
            const partnerID = yith_ppwc_login.partnerId;

            document.body.appendChild(paypalScriptTag);

            const observer = new MutationObserver(() => {
                const script = document.head.querySelector('#signup-js');
                if (script) {
                    buttons.forEach(
                        (element) => {
                            const href = element.getAttribute('href');
                            element.setAttribute('href', href + '&partnerId=' + partnerID);
                        }
                    );
                    observer.disconnect(); // Stop observing
                }
            });

            observer.observe(document.head, {
                childList: true,
                subtree: true
            });

            if (yith_ppcp_onboarding._timeout) {
                clearTimeout(yith_ppcp_onboarding._timeout);
            }

            yith_ppcp_onboarding._timeout = setTimeout(
                () => {
                    buttons.forEach((element) => {
                        element.setAttribute('data-yith-ppcp-button-initialized', 'true');
                    });

                    if ('undefined' !== window.PAYPAL.apps.Signup) {
                      window.PAYPAL.apps.Signup.render();
                    }

                },
                1000
            );
        }
    }
};

yith_ppcp_onboarding.init();