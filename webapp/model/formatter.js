sap.ui.define([], function () {
	"use strict";

	return {
		getPricing: function (price) {

			if (price < 800) {
				return "Cheap";
			} else {
				return "Expensive";
			}
		}
	};
});