export const modernCollection = {
	name: "The Modern Web",
	areas: [
		{
			skills: [
				{
					name: "Streams",
					description: {
						text: "Learn about streams and how they can help you effeciently transporting data.",
						links: [
							["Mozilla - Streams", "https://developer.mozilla.org/en-US/docs/Web/API/Streams_API"],
							["Mozilla - Streams API concepts", "https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Concepts"],
							["Experimenting with the Streams API", "https://deanhume.com/experimenting-with-the-streams-api/"],
							["WHATWG - Streams", "https://streams.spec.whatwg.org/"],
						]
					},
					skills: [
						{
							name: "Media Streams",
							description: {
								text: "Learn about media streams and how it is possible to get a stream to device specific hardware such as the camera or microphone.",
								links: [
									["Mozilla - Media Streams API", "https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API"]
									["Mozilla - Image Capture API", "https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Image_Capture_API"],
									["Mozilla - mediaDevices.getUserMedia()", "https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia"],
									["W3C - Media Capture and Streams", "https://w3c.github.io/mediacapture-main/#dom-mediastream"],
								]
							}
						},
						{
							name: "Media Recorder",
							description: {
								text: "Learn how to use the media recorder API to record media streams.",
								links: [
									["Mozilla - MediaStream Recording API", "https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API"],
									["Media Recorder API Demo", "https://addpipe.com/media-recorder-api-demo/"],
									["WTC - MediaStream Recording", "https://www.w3.org/TR/mediastream-recording/"],
									["What Web Can Do Today - Recording Media", "https://whatwebcando.today/recording.html"],
								]
							},
						},
						{
							name: "Web RTC",
							description: {
								text: "Learn how to use Web RTC for establishing real-time communication.",
								links: [
									["Mozilla - WebRTC API", "https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API"],
									["WebRTC - Getting Started", "https://webrtc.org/start/"],
									["WebRTC samples", "https://webrtc.github.io/samples/"],
									["Wikipedia - WebRTC", "https://en.wikipedia.org/wiki/WebRTC"],
									["What Web Can Do Today - WebRTC", "https://whatwebcando.today/realtime.html"],
								]
							}
						},
						{
							name: "Screen Capture",
							description: {
								text: "Learn how to use the Screen Capture API for recording the screen.",
								links: [
									["Mozilla - Screen Capture API", "https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API"],
									["dev.to - Intro to Screen Capture API", "https://dev.to/al_khovansky/intro-to-screen-capture-api-scanning-qr-codes-bgi"],
									["W3C - Screen Capture", "https://www.w3.org/TR/screen-capture/"],
								]
							},
						},
						{
							name: "Generators",
							description: {
								text: "Learn how generators can be used creating streams.",
								links: [
									["Functional JavaScript - Streams", "https://blog.jeremyfairbank.com/javascript/functional-javascript-streams-2/"],
									["Understanding Generators with Examples", "https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5"],
									["Mozilla - function*", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*"],
									["Mozilla - Iterators and generators", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators"],
									["Mozilla - yield*", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*"],
								]
							},
						}
					]
				},
				{
					name: "Speech Synthesis",
					description: {
						text: "Learn how the speech synthesis API can help you converting text to speech.",
						links: [
							["Google Devs - Web apps that talk", "https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API"],
							["Mozilla - window.speechSynthesis", "https://developer.mozilla.org/en-US/docs/Web/API/Window/speechSynthesis"],
							["Mozilla - SpeechSynthesis", "https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis"],
							["W3C - Web Speech API", "https://w3c.github.io/speech-api"],
							["The Speech Synthesis API", "https://flaviocopes.com/speech-synthesis-api/"],
						]
					},
				},
				{
					name: "Web Sockets",
					description: {
						text: "Learn about web sockets and how you can push data to your web app.",
						links: [
							["Mozilla - Websockets API", "https://developer.mozilla.org/en-US/docs/Web/API/Websockets_API"],
							["What are Web Sockets?", "https://medium.com/@dominik.t/what-are-web-sockets-what-about-rest-apis-b9c15fd72aac"],
							["HTML5 Rocks - Introducing WebSockets", "https://www.html5rocks.com/en/tutorials/websockets/basics/"],
							["WHATWG - Web sockets", "https://html.spec.whatwg.org/multipage/web-sockets.html"],
						]
					}
				},
				{
					name: "Geolocation",
					description: {
						text: "Learn how to ask the user for permission to the location.",
						links: [
							["Mozilla - Geolocation API", "https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API"],
							["Alligrator - Using the Geolocation API", "https://alligator.io/js/geolocation-api/"],
							["Google Maps Platform - Displaying User Position on Maps", "https://developers.google.com/maps/documentation/javascript/geolocation"],
							["What Web Can Do Today - Geolocation", "https://whatwebcando.today/geolocation.html"],
						]
					},
				},
				{
					name: "Device orientation & motion",
					description: {
						text: "Learn how to measure the orientation and motion of the device.",
						links: [
							["Mozilla - Detecting device orientation", "https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation"],
							["W3C - DeviceOrientation Event Specification", "https://www.w3.org/TR/orientation-event/"],
							["HTML5 Rocks - Introduction", "https://www.html5rocks.com/en/tutorials/device/orientation/index.html"],
							["What Web Can Do Today - Device Position", "https://whatwebcando.today/device-position.html"],
							["W3C - Generic Sensor API", "https://www.w3.org/TR/generic-sensor/"],
							["Mozilla - Sensor APIs", "https://developer.mozilla.org/en-US/docs/Web/API/Sensor_APIs"],
							["Google Devs - Sensors For The Web", "https://developers.google.com/web/updates/2017/09/sensors-for-the-web"],
						]
					},
				},
				{
					name: "Fullscreen",
					description: {
						text: "Learn how to use the fullscreen API to give the user a more immersive experience when needed.",
						links: [
							["Mozilla - Fullscreen API", "https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API"],
							["Google Devs - Let Your Content Do the Talking", "https://developers.google.com/web/updates/2011/10/Let-Your-Content-Do-the-Talking-Fullscreen-API"],
							["David Walsh - Fullscreen API", "https://davidwalsh.name/fullscreen"],
						]
					},
				},
				{
					name: "Variable Fonts",
					description: {
						text: "Learn how to use variable fonts and how it is possible to customize fonts without the need for loading more.",
						links: [
							["v-fonts", "https://v-fonts.com/"],
							["Mozilla - Variable fonts guide", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide"],
							["Google Devs - Introduction to variable fonts", "https://developers.google.com/web/fundamentals/design-and-ux/typography/variable-fonts"],
							["Supercharged - Variable Fonts", "https://www.youtube.com/watch?v=B42rUMdcB7c"]
						]
					}
				},
				{
					name: "Web XR",
					description: {
						text: "Learn how to use Web XR for virtual- and augmented reality experiences.",
						links: [
							["Mozilla - WebXR Device API", "https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API"],
							["Google Devs - Welcome to the immersive web", "https://developers.google.com/web/updates/2018/05/welcome-to-immersive"],
							["New API to Bring Augmented Reality to the Web", "https://hacks.mozilla.org/2018/09/webxr/"],
							["W3C - WebXR Device API", "https://immersive-web.github.io/webxr/"],
						]
					},
				},
				{
					name: "HTTP/2",
					description: {
						text: "Learn about the faster and more convenient HTTP/2 protocol.",
						links: [
							["Google Devs - Introduction to HTTP/2", "https://developers.google.com/web/fundamentals/performance/http2/"],
							["Wikipedia - HTTP/2", "https://en.wikipedia.org/wiki/HTTP/2"],
							["HTTP/2: the difference between HTTP/1.1", "https://medium.com/@factoryhr/http-2-the-difference-between-http-1-1-benefits-and-how-to-use-it-38094fa0e95b"],
							["HTTP/2 - FAQ", "https://http2.github.io/faq/"],
							["Why turning on HTTP/2 was a mistake", "https://www.lucidchart.com/techblog/2019/04/10/why-turning-on-http2-was-a-mistake/"],
						]
					},
				},
				{
					name: "Payment Request API",
					description: {
						text: "Learn about the payment request API and how it can help monetize your web app.",
						links: [
							["Mozilla - Payment Request API", "https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API"],
							["Codelabs - Payment Request API", "https://developers.google.com/web/fundamentals/codelabs/payment-request-api"],
							["What Web Can Do Today - Payments", "https://whatwebcando.today/payments.html"],
							["W3C - Payment Request API", "https://www.w3.org/TR/payment-request/"],
							["Google Devs - Introduction to the Payment Request API", "https://developers.google.com/web/ilt/pwa/introduction-to-the-payment-request-api"],
						]
					},
				},
				{
					name: "Web Audio",
					description: {
						text: "Learn how to use the Web Audio API to add audio to your web app.",
						links: [
							["Mozilla - Using the Web Audio API", "https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API"],
							["Mozilla - Web Audio API", "https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API"],
							["W3C - Web Audio API", "https://www.w3.org/TR/webaudio/"],
							["HTML5 Rocks - Getting Started with Web Audio API", "https://www.html5rocks.com/en/tutorials/webaudio/intro/"],
							["All You Need to Know About the Web Audio API", "https://medium.com/better-programming/all-you-need-to-know-about-the-web-audio-api-3df170559378"],
							["Alligator - Your First Steps with the Web Audio API", "https://alligator.io/js/first-steps-web-audio-api/"],
						]
					}
				},
				{
					name: "Web Bluetooth",
					description: {
						text: "Learn how to use the Web Bluetooth API to connect with nearby devices.",
						links: [
							["Mozilla - Web Bluetooth API", "https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API"],
							["Google Devs - Interact with Bluetooth devices", "https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web"],
							["What Web Can Do Today -	Bluetooth", "https://whatwebcando.today/bluetooth.html"],
							["W3C - Web Bluetooth", "https://webbluetoothcg.github.io/web-bluetooth/"],
							["Web Bluetooth Samples", "https://googlechrome.github.io/samples/web-bluetooth/"],
						]
					},
				},
				{
					name: "Web USB",
					description: {
						text: "Learn how to use the Web USB API to connect with hardware through a cable.",
						links: [
							["Mozilla - USB", "https://developer.mozilla.org/en-US/docs/Web/API/USB"],
							["WICG - Web USB", "https://github.com/WICG/webusb"],
							["Google Devs - Access USB Devices on the Web", "https://developers.google.com/web/updates/2016/03/access-usb-devices-on-the-web"],
							["What Web Can Do Today -	Web USB", "https://whatwebcando.today/usb.html"],
						]
					},
				},
				{
					name: "Credentials Manager API",
					description: {
						text: "Learn about the Credentials Manager API and how it can help you authenticating users.",
						links: [
							["Mozilla - Credential Management API", "https://developer.mozilla.org/en-US/docs/Web/API/Credential_Management_API"],
							["Google Devs - The Credential Management API", "https://developers.google.com/web/fundamentals/security/credential-management"],
							["Google Devs - Sign in Users", "https://developers.google.com/web/fundamentals/security/credential-management/retrieve-credentials"],
							["Google Devs - Save Credentials from Forms", "https://developers.google.com/web/fundamentals/security/credential-management/save-forms"],
							["What Web Can Do Today - Credentials", "https://whatwebcando.today/credentials.html"],
						]
					},
				},
				{
					name: "Houdini",
					description: {
						text: "Learn about the Houdini project and get excited about the future of CSS.",
						links: [
							["Google Devs - Houdini, Demystifying CSS", "https://developers.google.com/web/updates/2016/05/houdini"],
							["web.dev - Smarter custom properties", "https://web.dev/css-props-and-vals/"]
							["CSS Houdini Experiments", "https://css-houdini.rocks/"],
							["Interactive Introduction to CSS Houdini", "http://houdini.glitch.me/"],
							["W3C - CSS Houdini Wiki", "https://github.com/w3c/css-houdini-drafts/wiki"],
							["Google Devs - Houdini's Animation Worklet", "https://developers.google.com/web/updates/2018/10/animation-worklet"],
						]
					}
				},
				{
					name: "Project Fugu",
					description: {
						text: "Learn about Project Fugu project and get excited about the future of the web.",
						links: [
							["Our commitment to a more capable web", "https://blog.chromium.org/2018/11/our-commitment-to-more-capable-web.html"],
							["Web Capabilities (Fugu)", "https://www.chromium.org/teams/web-capabilities-fugu"],
							["Chromium Bugs - Fugu", "https://bugs.chromium.org/p/chromium/issues/list?q=proj-fugu"],
							["Google Devs - Unlocking new capabilities for the web", "https://developers.google.com/web/updates/capabilities"],
							["Youtube - Unlocking New Capabilities for the Web", "https://www.youtube.com/watch?v=GSiUzuB-PoI"],
						]
					},
				},
				{
					name: "Observers",
					description: {
						text: "Learn about the observer pattern and get comfortable concepts such as subjects and observers.",
						links: [
							["Javascript Observers and You", "https://chromatichq.com/blog/javascript-observers-and-you"],
							["How to Use the Observable Pattern in JavaScript", "https://webdevstudios.com/2019/02/19/observable-pattern-in-javascript/"],
							["Wikipedia - Publish–subscribe pattern", "https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern"],
							["The Observer Pattern with Vanilla JavaScript", "https://medium.com/@patrickackerman/the-observer-pattern-with-vanilla-javascript-8f85ea05eaa8"],
						]
					},
					skills: [
						{
							name: "Mutation Observer",
							description: {
								text: "Learn how to use the Mutation Observer API to get informed about changes to the DOM.",
								links: [
									["Mozilla - MutationObserver", "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver"],
									["Listening to the DOM changes with MutationObserver", "https://medium.com/@abbeal/listening-to-the-dom-changes-with-mutationobserver-b53a068a58d2"],
									["David Walsh - MutationObserver API", "https://davidwalsh.name/mutationobserver-api"],
									["javascript.info - Mutation observer", "https://javascript.info/mutation-observer"],
									["WHATWG - Mutation observers", "https://dom.spec.whatwg.org/#mutation-observers"],
								]
							},
						},
						{
							name: "Intersection Observer",
							description: {
								text: "Learn how to use the Intersection Observer API can help you detect when an element is visible on the screen.",
								links: [
									["Mozilla - Intersection Observer API", "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"],
									["W3C - Intersection Observer", "https://www.w3.org/TR/intersection-observer/"],
									["Google Devs - Trust is Good, Observation is Better", "https://developers.google.com/web/updates/2019/02/intersectionobserver-v2"],
									["CSS Tricks - An Explanation of Intersection Observers", "https://css-tricks.com/an-explanation-of-how-the-intersection-observer-watches/"],
									["Understanding the Intersection Observer API in JavaScript", "https://medium.com/better-programming/understanding-intersection-observer-api-in-javascript-bb1bf04b8081"],
									["CSS Tricks - A Few Functional Uses for Intersection Observer", "https://css-tricks.com/a-few-functional-uses-for-intersection-observer-to-know-when-an-element-is-in-view/"],
									["google Devs - An event for CSS position:sticky", "https://developers.google.com/web/updates/2017/09/sticky-headers"],
								]
							},
						},
						{
							name: "Resize Observer",
							description: {
								text: "Learn how to use the Resize Observer API to get informed when the element resizes.",
								links: [
									["Mozilla - Resize Observer API", "https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API"],
									["Google Devs - It’s Like document.onresize for Elements", "https://developers.google.com/web/updates/2016/10/resizeobserver"],
									["Alligator - A Look at the Resize Observer JavaScript API", "https://alligator.io/js/resize-observer/"],
									["David Walsh - Resize Observer", "https://davidwalsh.name/resize-observer"],
								]
							}
						},
						{
							name: "Performance Observer",
							description: {
								text: "Learn how the Performance Observer API can help you get information about the performance of your web app.",
								links: [
									["Mozilla - Long Tasks API", "https://developer.mozilla.org/en-US/docs/Web/API/Long_Tasks_API"]
									["Mozilla - PerformanceObserver", "https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver"],
									["Google Devs - Efficient Access to Performance Data", "https://developers.google.com/web/updates/2016/06/performance-observer"],
								]
							}
						}
					]
				},
				{
					name: "Scrollsnapping",
					description: {
						text: "Learn about the Scrollsnapping API and how it can help you provide an intuitive experience when scrolling.",
						links: [
							["CSS Tricks - Practical CSS Scroll Snapping", "https://css-tricks.com/practical-css-scroll-snapping/"],
							["CSS Tricks - Introducing CSS Scroll Snap Points", "https://css-tricks.com/introducing-css-scroll-snap-points/"],
							["Google Devs - Well-Controlled Scrolling with CSS Scroll Snap", "https://developers.google.com/web/updates/2018/07/css-scroll-snap"],
							["Mozilla - CSS Scroll Snap", "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap"],
							["The scroll-snap-* Properties", "https://webkit.org/demos/scroll-snap/index.html"],
						]
					},
				},
				{
					name: "Web Assembly",
					description: {
						text: "Learn about Web Assembly and how it opens up the playing field for new types of web apps.",
						links: [
							["Mozilla - WebAssembly Concepts", "https://developer.mozilla.org/en-US/docs/WebAssembly/Concepts"],
							["Mozilla - WebAssembly", "https://developer.mozilla.org/en-US/docs/WebAssembly"],
							["dev.to - Why the heck is everyone talking about WebAssembly?", "https://dev.to/captainsafia/why-the-heck-is-everyone-talking-about-webassembly-455a"],
							["Introduction to Web Assembly", "https://medium.com/beginners-guide-to-mobile-web-development/introduction-to-web-assembly-6cb6466a3478"],
							["Google Codelabs - An Introduction to Web Assembly", "https://codelabs.developers.google.com/codelabs/web-assembly-intro/index.html#0"],
							["How We Used WebAssembly To Speed Up Our Web App By 20X", "https://www.smashingmagazine.com/2019/04/webassembly-speed-web-app/"],
							["Google Devs - WebAssembly", "https://developers.google.com/web/updates/2019/02/hotpath-with-wasm"],
						]
					},
				},
				{
					name: "Beacon",
					description: {
						text: "Learn how the Beacon API can help you send data to endpoints before the user closes the page.",
						links: [
							["Mozilla - sendBeacon", "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon"],
							["Mozilla - Using the Beacon API", "https://developer.mozilla.org/en-US/docs/Web/API/Beacon_API/Using_the_Beacon_API"],
							["Logging Activity With The Web Beacon API", "https://www.smashingmagazine.com/2018/07/logging-activity-web-beacon-api/"],
						]
					}
				},
				{
					name: "Clipboard",
					description: {
						text: "Learn about the Clipboard API and how it can help you copy and paste data.",
						links: [
							["Mozilla - Clipboard", "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard"],
							["What Web Can Do Today - Clipboard (Copy & Paste)", "https://whatwebcando.today/clipboard.html"],
							["Google Devs - Image Support for the Async Clipboard API", "https://developers.google.com/web/updates/2019/07/image-support-for-async-clipboard"],
						]
					}
				},
				{
					name: "Share",
					description: {
						text: "Learn how the Web Share API can help users sharing your web app.",
						links: [
							["Mozilla - Share", "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share"],
							["Google Devs - Introducing the Web Share API", "https://developers.google.com/web/updates/2016/09/navigator-share"],
							["Google Devs - Registering as a Share Target", "https://developers.google.com/web/updates/2018/12/web-share-target"],
							["CSS Tricks - How to Use the Web Share API", "https://css-tricks.com/how-to-use-the-web-share-api/"],
							["The Web Share API", "https://blog.arnellebalane.com/the-web-share-api-2cbb3e6cf007"],
						]
					}
				},
				{
					name: "Performance API",
					description: {
						text: "Learn about the Performance API and how it can help you monitor the performance of the device.",
						links: [
							["Mozilla - Performance", "https://developer.mozilla.org/en-US/docs/Web/API/Performance"],
							["Mozilla - performance.measure()", "https://developer.mozilla.org/en-US/docs/Web/API/Performance/measure"],
							["CSS Tricks - Breaking Down the Performance API", "https://css-tricks.com/breaking-performance-api/"],
							["Google Devs - Assessing Loading Performance", "https://developers.google.com/web/fundamentals/performance/navigation-and-resource-timing/"],
							["Mozilla - Performance Specifications", "https://developer.mozilla.org/en-US/docs/Web/API/Performance_API#Specifications"],
							["Mozilla - Performance Timeline", "https://developer.mozilla.org/en-US/docs/Web/API/Performance_Timeline"],
						]
					}
				},
				{
					name: "Gamepad API",
					description: {
						text: "Learn how the Gamepad API can help you integrate with various controllers such as an x-box or playstation controller",
						links: [
							["Mozilla - Using the Gamepad API", "https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API"],
							["Mozilla - Gamepad API", "https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API"],
							["luser - Gamepad Test", "http://luser.github.io/gamepadtest/"],
							["Mozilla - Implementing controls using the Gamepad API", "https://developer.mozilla.org/en-US/docs/Games/Techniques/Controls_Gamepad_API"],
						]
					}
				},
				{
					name: "Network Information API",
					description: {
						text: "Learn how the Network Information API can give you information about the state of the network of your users.",
						links: [
							["Mozilla - Network Information API", "https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API"],
							["Addy Osmani - Adaptive Serving", "https://addyosmani.com/blog/adaptive-serving/"],
							["W3C - Network Information API", "https://wicg.github.io/netinfo/"],
							["Network Information API Sample", "https://googlechrome.github.io/samples/network-information/"],
							["What Web Can Do Today - Network Type & Speed", "https://whatwebcando.today/network-type-speed.html"],
						]
					},
				},
				{
					name: "Speech Recognition",
					description: {
						text: "Learn how to use the Speech Recognition API to analyze speech.",
						links: [
							["Mozilla - Using the Web Speech API", "https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API"],
							["David Walsh - JavaScript Speech Recognition", "https://davidwalsh.name/speech-recognition"],
							["Mozilla - SpeechRecognition", "https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition"],
							["Mozilla - Web Speech API", "https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API"],
							["Github - web-speech-api", "https://github.com/mdn/web-speech-api/"],
							["What Web Can Do Today - Speech Recognition", "https://whatwebcando.today/speech-recognition.html"],
						]
					},
				},
				{
					name: "Interaction Media Queries",
					description: {
						text: "Learn how to use Interaction Media Queries to optimize the user experience for the specific type of device.",
						links: [
							["Introducing CSS Interaction Media Queries", "https://medium.com/@rossbulat/introducing-css-interaction-media-queries-38eea48f4221"],
							["Mozilla - Media features", "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features"],
							["Touch Devices Should Not Be Judged By Their Size", "https://css-tricks.com/touch-devices-not-judged-size/"],
							["Interaction Media Features and their potential", "https://dev.opera.com/articles/media-features/"],
							["W3C - Interaction Media Features", "https://www.w3.org/TR/mediaqueries-4/#mf-interaction"],
							["What Web Can Do Today - Pointing Device Adaptation", "https://whatwebcando.today/pointer-adaptation.html"],
						]
					},
				},
				{
					name: "Presentation",
					description: {
						text: "Learn how to use the Presentation API to allow your web app to use the presentation display mode in the browser or at an external display device.",
						links: [
							["Mozilla - Presentation API", "https://developer.mozilla.org/en-US/docs/Web/API/Presentation_API"],
							["What Web Can Do Today - Presentation Features", "https://whatwebcando.today/presentation.html"],
							["Google Devs - Present web pages to secondary attached displays", "https://developers.google.com/web/updates/2018/04/present-web-pages-to-secondary-attached-displays"],
							["W3C - Presentation API", "https://w3c.github.io/presentation-api"],
						]
					},
				},
				{
					name: "Native File System",
					description: {
						text: "Learn how to use the Native File System API to interact with files on the user's local device.",
						links: [
							["Google Devs - The Native File System API", "https://developers.google.com/web/updates/2019/08/native-file-system"],
							["Github - Native File System", "https://github.com/WICG/native-file-system/blob/master/EXPLAINER.md"],
							["W3C - Native File System", "https://wicg.github.io/native-file-system/"],
							["Native File System Web API - Chromium Security Model", "https://docs.google.com/document/d/1NJFd-EWdUlQ7wVzjqcgXewqC5nzv_qII4OvlDtK6SE8/edit#heading=h.7nki9mck5t64"],
							["Chromestatus - Native File System", "https://www.chromestatus.com/feature/6284708426022912"],
							["W3C - File API", "https://w3c.github.io/FileAPI/"],
						]
					},
				},
				{
					name: "Browser Extensions",
					description: {
						text: "Learn how to build browser extensions to enhance the functionality of your browser.",
						links: [
							["Mozilla - Browser Extensions", "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions"],
							["Chrome - What are extensions?", "https://developer.chrome.com/extensions"],
							["Chrome - Getting Started with Extensions", "https://developer.chrome.com/extensions/getstarted"],
							["Youtube - Google Chrome Extensions", "https://www.youtube.com/view_play_list?p=CA101D6A85FE9D4B"],
						]
					},
				},
				{
					name: "Shape Detection",
					description: {
						text: "Learn how to use the Shape Detection API to detect shapes such as faces or barcodes in pictures.",
						links: [
							["W3C - Accelerated Shape Detection in Images", "https://wicg.github.io/shape-detection-api/"],
							["Google Devs - A Picture is Worth a Thousand Words", "https://developers.google.com/web/updates/2019/01/shape-detection"],
							["Github - Shape Detection API Specification", "https://github.com/WICG/shape-detection-api"],
							["Introduction to the Shape Detection API", "https://blog.arnellebalane.com/introduction-to-the-shape-detection-api-e07425396861"],
							["Face detection using Shape Detection API", "https://paul.kinlan.me/face-detection/"],
						]
					},
				}
			]
		}
	]
}