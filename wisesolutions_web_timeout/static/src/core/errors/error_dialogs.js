import { SessionExpiredDialog } from "web/static/src/core/errors/error_dialogs";

import { registry } from "@web/core/registry";

SessionExpiredDialog.bodyTemplate = "wisesolutions_web_timeout.SessionExpiredDialogBody";

registry
    .category("error_dialogs")
    .add("odoo.http.SessionExpiredException", SessionExpiredDialog)
    .add("werkzeug.exceptions.Forbidden", SessionExpiredDialog)