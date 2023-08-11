sap.ui.define(["./BaseController", "sap/m/MessageBox", "com/myorg/mylib/v1_0_0/Example"], function (BaseController, MessageBox, Example) {
	"use strict";

	return BaseController.extend("com.myorg.myapp.controller.Main", {
		onInit: function() {
			debugger;
			this.byId("page").addContent(new Example({
				text: "Hello Cheng!"
			}));
		},
		sayHello: function () {
			MessageBox.show("Hello World!");
		}
	});
});
