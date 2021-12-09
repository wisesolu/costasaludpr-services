# -*- coding: utf-8 -*-
{
    'name': " Costasaludpr-Services custom write fields",

    'summary': """
        This module is to create custom write by and write date for specific models'.
    """,

    'description': """
        Task id:  2687678
        'This module is to create custom write by and write date for specific models'.
    """,
    'author': 'Odoo Ps',
    'version': '1.0.0',

    'depends': ['base', 'helpdesk', 'contacts', 'write_record_mixin'],

    'data': [
        'views/helpdesk_views.xml',
        'views/res_partner_views.xml',
    ],
    'installable': True,
}
