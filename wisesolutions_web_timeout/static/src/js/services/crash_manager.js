odoo.define('wisesolutions_web_timeout.CrashManagerWise', function (require) {
    "use strict";
    
    var core = require('web.core');
    var ajax = require('web.ajax');
    
    var _t = core._t;

    ajax.jsonRpc('/crash_manager/message', 'call').then(function (msg) {
        function session_expired_wise(cm) {
            return {
                display: function () {
                    cm.show_warning({type: _t("Odoo Session Expired"), message: _t(msg)});
                }
            };
        }
        core.crash_registry.add('odoo.http.SessionExpiredException', session_expired_wise);
        core.crash_registry.add('werkzeug.exceptions.Forbidden', session_expired_wise);
    });

});