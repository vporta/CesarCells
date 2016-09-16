(function (window) {
    var TTAM_DOMAIN = 'https://www.23andme.com';
    var API_DOMAIN = 'https://api.23andme.com';

    function makeQuery(params) {
        var param_list = [], param;
        for (param in params) {
            if (params.hasOwnProperty(param)) {
                param_list.push(window.encodeURIComponent(param) + '=' +
                                window.encodeURIComponent(params[param]));
            }
        }
        return param_list.join('&');
    }

    function iframeLoad(elem_id, src, message_id, options) {
        var DEFAULT_WIDTH = 400,
            LOAD_TIMEOUT = 5000,
            POLL_INTERVAL = 1000,
            timeout_id = null,
            interval_id = null,
            old_hash = window.location.hash,
            element = window.document.getElementById(elem_id),
            iframe = window.document.createElement('iframe');

        if (!element) {
            throw new Error("Element " + elem_id + " not found.");
        }
        options = options || {};

        iframe.setAttribute('src', src);
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('frameborder', 0);
        iframe.style.width = (options.width || DEFAULT_WIDTH) + 'px';
        iframe.style.height = 0;
        iframe.style.visibility = 'hidden';
        element.appendChild(iframe);

        function iframeSuccess(data_str) {
            var data = data_str.split('_');
            if (data[0] === message_id) {
                window.clearTimeout(timeout_id);
                iframe.style.height = data[1] + 'px';
                iframe.style.visibility = 'visible';
                while (iframe.previousSibling) {
                    iframe.parentNode.removeChild(iframe.previousSibling);
                }
                if (options.success instanceof Function) {
                    options.success();
                }
            }
        }

        function parseMessage(event) {
            if (event.origin === TTAM_DOMAIN) {
                iframeSuccess(event.data);
            }
        }

        function parseHash() {
            var new_hash = window.location.hash;
            if (new_hash !== old_hash) {
                old_hash = new_hash;
                iframeSuccess(new_hash.substr(1));
            }
        }

        function iframeError() {
            if (window.postMessage) {
                if (window.removeEventListener) {
                    window.removeEventListener('message', parseMessage, false);
                } else {
                    window.detachEvent('onmessage', parseMessage);
                }
            } else {
                window.clearInterval(interval_id);
            }
            if (options.error instanceof Function) {
                options.error();
            }
        }

        timeout_id = window.setTimeout(iframeError, LOAD_TIMEOUT);
        if (window.postMessage) {
            if (window.addEventListener) {
                window.addEventListener('message', parseMessage, false);
            } else {
                window.attachEvent('onmessage', parseMessage);
            }
        } else {
            interval_id = window.setInterval(parseHash, POLL_INTERVAL);
        }
    }

    function buttonLoad(elem_id, src, options) {
        var element = window.document.getElementById(elem_id),
            iframe = window.document.createElement('iframe');
        if (!element) {
            throw new Error("Element " + elem_id + " not found.");
        }
        options = options || {};

        iframe.setAttribute('src', src);
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('frameborder', 0);
        iframe.style.width = '300px';
        iframe.style.height = '45px';
        iframe.style.visibility = 'hidden';
        element.appendChild(iframe);
        iframe.style.visibility = 'visible';
    }

    window.TTAM = function (api_key) {
        function makeUrl(path, params, api) {
            if (api_key) {
                params.api_key = api_key;
            }
            var base = api ? API_DOMAIN : TTAM_DOMAIN;
            return base + path + '?' + makeQuery(params);
        }

        return {
            snpTable: function (elem_id, snp, params, options) {
                var path = '/you/explorer/snpit_table/' + snp + '/';
                iframeLoad(elem_id, makeUrl(path, params), snp, options);
            },
            connectButton: function (elem_id, scopes, options) {
                var path = '/connect_button/';
                var params = {"scopes": scopes};
                buttonLoad(elem_id, makeUrl(path, params, true), options);
            }
        };
    };
}(window));
