# -*- coding: utf-8 -*-
# Copyright (c) 2021, Iyanuoluwa and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
# import frappe
from frappe.model.document import Document
import random

random_number = random.randint(100000, 999999)

class VisitLogArrival(Document):
	def before_save(self):
		self.passcode = random_number
