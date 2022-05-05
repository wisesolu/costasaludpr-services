# -*- coding: utf-8 -*-
from odoo import fields, models, api


class Users(models.Model):
    _inherit = 'res.users'

    allow_update_write = fields.Boolean(string="Don't Allow Last Update Write", default=False)

