import json

import frappe
from frappe import _

@frappe.whitelist(methods=['GET'])
def get_cureent_user():
    if not frappe.has_permission("Travel Admin"):
        frappe.throw(_
        ("You do not have a <b>Travel</b> role. Please contact your administrator to add your user profile as a <b>Travel User </b>.")
        ,title= _("Insufficient permissions. Please contact your administrator."))
    return frappe.get_cached_doc("User",{"name": frappe.session.user})
