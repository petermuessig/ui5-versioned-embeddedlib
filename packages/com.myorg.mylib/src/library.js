/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library __namespace__.
 */
sap.ui.define([
	"sap/ui/core/library"
], function () {
	"use strict";

	// delegate further initialization of this library to the Core
	// Hint: sap.ui.getCore() must still be used to support preload with sync bootstrap!
	sap.ui.getCore().initLibrary({
		name: "__namespace__",
		version: "${version}",
		dependencies: [ // keep in sync with the ui5.yaml and .library files
			"sap.ui.core"
		],
		types: [
			"__namespace__.ExampleColor"
		],
		interfaces: [],
		controls: [
			"__namespace__.Example"
		],
		elements: [],
		noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
	});

	/**
	 * Some description about <code>__namespace__</code>
	 *
	 * @namespace
	 * @name __namespace__
	 * @author Peter Muessig
	 * @version ${version}
	 * @public
	 */
	var thisLib = __namespace__;

	/**
	 * Semantic Colors of the <code>__namespace__.Example</code>.
	 *
	 * @enum {string}
	 * @public
	 */
	thisLib.ExampleColor = {

		/**
		 * Default color (brand color)
		 * @public
		 */
		Default : "Default",

		/**
		 * Highlight color
		 * @public
		 */
		Highlight : "Highlight"

	};

	return thisLib;

});
