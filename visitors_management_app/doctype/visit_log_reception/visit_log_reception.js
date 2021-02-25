// Copyright (c) 2021, Iyanuoluwa and contributors
// For license information, please see license.txt

frappe.ui.form.on('Visit Log Reception', {
	refresh: function(frm) {

		frm.add_custom_button('Record Exit', () => {
			frappe.new_doc('Visit Log Departure', {
				visit_log_arrival: frm.doc.name
			})
		}) 
	 }
});
