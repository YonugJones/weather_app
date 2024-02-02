/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst apiKey = '6ec94825a2e54e1e93b194332242301';\nlet weatherData;\nconst getWeather = async () => {\n  console.log('getting weather...');\n  try {\n    const citySearch = document.getElementById('search-input').value;\n    if (citySearch !== '') {\n      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${citySearch}`, {\n        mode: 'cors'\n      });\n      const cityWeather = await response.json();\n      weatherData = {\n        'city': cityWeather.location.name,\n        'region': cityWeather.location.region,\n        'country': cityWeather.location.country,\n        'tempF': cityWeather.current.temp_f,\n        'condition': cityWeather.current.condition.text,\n        'icon': cityWeather.current.condition.icon,\n        'feelsLikeF': cityWeather.current.feelslike_f,\n        'tempC': cityWeather.current.temp_c,\n        'feelsLikeC': cityWeather.current.feelslike_c,\n        'windMPH': cityWeather.current.wind_mph,\n        'windKPH': cityWeather.current.wind_kph,\n        'humidity': cityWeather.current.humidity\n      };\n      return weatherData;\n    }\n    return null;\n  } catch (error) {\n    return null;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);\n\n//# sourceURL=webpack://template/./src/api.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\nconst renderWeatherInfo = (weatherData, isFahrenheit) => {\n  console.log('renderWeatherInfo inititated');\n  const display = document.querySelector('.display');\n  display.textContent = '';\n  const locationSection = document.createElement('div');\n  locationSection.classList.add('location-section');\n  display.appendChild(locationSection);\n  const locationText = document.createElement('p');\n  if (weatherData.region && weatherData.region !== weatherData.city) {\n    locationText.textContent = `${weatherData.city} (${weatherData.region}), ${weatherData.country}`;\n  } else {\n    locationText.textContent = `${weatherData.city}, ${weatherData.country}`;\n  }\n  locationSection.appendChild(locationText);\n  const conditionsSection = document.createElement('div');\n  conditionsSection.classList.add('conditions-section');\n  display.appendChild(conditionsSection);\n  const icon = document.createElement('img');\n  icon.src = weatherData.icon;\n  icon.classList.add('icon');\n  conditionsSection.appendChild(icon);\n  const conditions = document.createElement('p');\n  conditions.textContent = weatherData.condition;\n  conditionsSection.appendChild(conditions);\n  const tempSection = document.createElement('div');\n  tempSection.classList.add('temperature-section');\n  display.appendChild(tempSection);\n  const temp = document.createElement('p');\n  if (isFahrenheit) {\n    temp.textContent = `Temperature: ${weatherData.tempF}°F / Feels like ${weatherData.feelsLikeF}°F`;\n  } else {\n    temp.textContent = `Temperature: ${weatherData.tempC}°C / Feels like ${weatherData.feelsLikeC}°C`;\n  }\n  tempSection.appendChild(temp);\n  const extras = document.createElement('div');\n  extras.classList.add('extras-section');\n  display.appendChild(extras);\n  const windSection = document.createElement('div');\n  windSection.classList.add('wind-section');\n  extras.appendChild(windSection);\n  const windIcon = document.createElement('div');\n  windIcon.innerHTML = '<i class=\"fa-solid fa-wind\"></i>';\n  windIcon.classList.add('icon');\n  windSection.appendChild(windIcon);\n  const windSpeed = document.createElement('p');\n  if (isFahrenheit) {\n    windSpeed.textContent = `${weatherData.windMPH} mph`;\n  } else {\n    windSpeed.textContent = `${weatherData.windKPH} kph`;\n  }\n  windSection.appendChild(windSpeed);\n  const humiditySection = document.createElement('div');\n  humiditySection.classList.add('humidity-section');\n  extras.appendChild(humiditySection);\n  const humidityIcon = document.createElement('div');\n  humidityIcon.innerHTML = '<i class=\"fa-solid fa-water\"></i>';\n  humidityIcon.classList.add('icon');\n  humiditySection.appendChild(humidityIcon);\n  const humidity = document.createElement('p');\n  humidity.textContent = `${weatherData.humidity}%`;\n  humiditySection.appendChild(humidity);\n  const unitsSection = document.createElement('div');\n  unitsSection.classList.add('units-section');\n  display.appendChild(unitsSection);\n  const fahrenheit = document.createElement('p');\n  fahrenheit.classList.add('units-fahrenheit');\n  if (isFahrenheit) {\n    fahrenheit.classList.add('active');\n  }\n  fahrenheit.textContent = '°F';\n  unitsSection.appendChild(fahrenheit);\n  const slash = document.createElement('p');\n  slash.textContent = '/';\n  unitsSection.appendChild(slash);\n  const celsius = document.createElement('p');\n  celsius.classList.add('units-celsius');\n  if (!isFahrenheit) {\n    celsius.classList.add('active');\n  }\n  celsius.textContent = '°C';\n  unitsSection.appendChild(celsius);\n  (0,_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(isFahrenheit);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderWeatherInfo);\n\n//# sourceURL=webpack://template/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n(0,_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://template/./src/index.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\nfunction toggleUnits(isFahrenheit) {\n  console.log('toggleUnits initiated');\n  const fahrenheit = document.querySelector('.units-fahrenheit');\n  const celsius = document.querySelector('.units-celsius');\n  if (fahrenheit && celsius) {\n    fahrenheit.addEventListener('click', async () => {\n      if (!isFahrenheit) {\n        const weatherData = await (0,_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        (0,_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(weatherData, true);\n      }\n    });\n    celsius.addEventListener('click', async () => {\n      if (isFahrenheit) {\n        const weatherData = await (0,_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        (0,_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(weatherData, false);\n      }\n    });\n  }\n}\nconst searchBtn = document.getElementById('search-btn');\nsearchBtn.addEventListener('click', async event => {\n  event.preventDefault();\n  const isFahrenheit = true;\n  const weatherData = await (0,_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  if (weatherData) {\n    (0,_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(weatherData, isFahrenheit);\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleUnits);\n\n//# sourceURL=webpack://template/./src/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;