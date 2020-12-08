/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"kpmg/home/exercise3/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});