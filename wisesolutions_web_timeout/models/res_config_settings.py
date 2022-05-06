# -*- coding: utf-8 -*-

from odoo import api, models, fields

class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    next_timeout = fields.Float(string="Session Timeout (Hours)", config_parameter='next_timeout', default=98)