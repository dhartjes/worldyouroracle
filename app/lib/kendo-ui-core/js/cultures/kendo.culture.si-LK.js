module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(313);
	module.exports = __webpack_require__(313);


/***/ },

/***/ 313:
/***/ function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["si-LK"] = {
	        name: "si-LK",
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": ",",
	            ".": ".",
	            groupSize: [3,2],
	            percent: {
	                pattern: ["-n %","n %"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3,2],
	                symbol: "%"
	            },
	            currency: {
	                name: "Sri Lanka Rupee",
	                abbr: "LKR",
	                pattern: ["($ n)","$ n"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "රු."
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["ඉරිදා","සඳුදා","අඟහරුවාදා","බදාදා","බ්‍රහස්පතින්දා","සිකුරාදා","සෙනසුරාදා"],
	                    namesAbbr: ["ඉරිදා","සඳුදා","කුජදා","බුදදා","ගුරුදා","කිවිදා","ශනිදා"],
	                    namesShort: ["ඉ","ස","අ","බ","බ්‍ර","සි","සෙ"]
	                },
	                months: {
	                    names: ["ජනවාරි","පෙබරවාරි","මාර්තු","අ‌ප්‍රේල්","මැයි","ජූනි","ජූලි","අ‌ගෝස්තු","සැප්තැම්බර්","ඔක්තෝබර්","නොවැම්බර්","දෙසැම්බර්"],
	                    namesAbbr: ["ජන.","පෙබ.","මාර්තු.","අප්‍රේල්.","මැයි","ජූනි","ජූලි","අගෝ.","සැප්.","ඔක්.","නොවැ.","දෙසැ."]
	                },
	                AM: ["පෙ.ව.","පෙ.ව.","පෙ.ව."],
	                PM: ["ප.ව.","ප.ව.","ප.ව."],
	                patterns: {
	                    d: "yyyy-MM-dd",
	                    D: "yyyy MMMM' මස 'dd' වැනිදා 'dddd",
	                    F: "yyyy MMMM' මස 'dd' වැනිදා 'dddd tt h:mm:ss",
	                    g: "yyyy-MM-dd tt h:mm",
	                    G: "yyyy-MM-dd tt h:mm:ss",
	                    m: "MMMM dd",
	                    M: "MMMM dd",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "tt h:mm",
	                    T: "tt h:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "yyyy MMMM",
	                    Y: "yyyy MMMM"
	                },
	                "/": "-",
	                ":": ":",
	                firstDay: 1
	            }
	        }
	    }
	})(this);


/***/ }

/******/ });