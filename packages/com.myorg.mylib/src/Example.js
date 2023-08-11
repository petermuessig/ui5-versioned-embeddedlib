/*!
 * ${copyright}
 */

// Provides control __namespace__.Example.
sap.ui.define(["./library", "sap/ui/core/Control", "./ExampleRenderer"], function (library, Control, ExampleRenderer) {
	"use strict";

	// refer to library types
	var ExampleColor = library.ExampleColor;

	/**
	 * Constructor for a new <code>__namespace__.Example</code> control.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * Some class description goes here.
	 * @extends sap.ui.core.Control
	 *
	 * @author Peter Muessig
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @alias __namespace__.Example
	 */
	var Example = Control.extend(
		"__namespace__.Example",
		/** @lends __namespace__.Example.prototype */ {
			metadata: {
				library: "__namespace__",
				properties: {
					/**
					 * The text to display.
					 */
					text: {
						type: "string",
						group: "Data",
						defaultValue: null
					},
					/**
					 * The color to use (default to "Default" color).
					 */
					color: {
						type: "__namespace__.ExampleColor",
						group: "Appearance",
						defaultValue: ExampleColor.Default
					}
				},
				events: {
					/**
					 * Event is fired when the user clicks the control.
					 */
					press: {}
				}
			},
			renderer: ExampleRenderer,
			onclick: function () {
				this.firePress();
			}
		}
	);
	return Example;
});
