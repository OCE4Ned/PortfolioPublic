// Copyright Epic Games, Inc. All Rights Reserved.

import { Config, PixelStreaming } from '@epicgames-ps/lib-pixelstreamingfrontend-ue5.3';
import { Application, PixelStreamingApplicationStyle } from '@epicgames-ps/lib-pixelstreamingfrontend-ui-ue5.3';
const PixelStreamingApplicationStyles =
    new PixelStreamingApplicationStyle();
PixelStreamingApplicationStyles.applyStyleSheet();

document.body.onload = function() {
	// Example of how to set the logger level
	// Logger.SetLoggerVerbosity(10);

	// Create a config object
	const config = new Config({ useUrlParams: true });

	// Create a Native DOM delegate instance that implements the Delegate interface class
	const stream = new PixelStreaming(config);

	const application = new Application({
		stream,
		onColorModeChanged: (isLightMode) => PixelStreamingApplicationStyles.setColorMode(isLightMode)
	});
	// document.getElementById("centrebox").appendChild(application.rootElement);

	// custom
	document.getElementById("playercontainer").appendChild(application.rootElement);

	// Get the button:
	let topbutton = document.getElementById("topbutton");
	window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			topbutton.style.display = "block";
		} else {
			topbutton.style.display = "none";
		}
	}

	topbutton.addEventListener('click', () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	});

	//document.body.appendChild(application.rootElement); // originally used
}
