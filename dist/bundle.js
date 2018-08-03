/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

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

	module.exports = __webpack_require__(438);


/***/ },

/***/ 420:
/***/ function(module, exports) {

	module.exports = __webpack_require__(0);

/***/ },

/***/ 422:
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },

/***/ 438:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(jQuery) {(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(420)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "core",
	    name: "Core",
	    category: "framework",
	    description: "The core of the Kendo framework."
	};

	/*jshint eqnull: true, loopfunc: true, evil: true, boss: true, freeze: false*/
	(function($, window, undefined) {
	    var kendo = window.kendo = window.kendo || { cultures: {} },
	        extend = $.extend,
	        each = $.each,
	        isArray = $.isArray,
	        proxy = $.proxy,
	        noop = $.noop,
	        math = Math,
	        Template,
	        JSON = window.JSON || {},
	        support = {},
	        percentRegExp = /%/,
	        formatRegExp = /\{(\d+)(:[^\}]+)?\}/g,
	        boxShadowRegExp = /(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+)?/i,
	        numberRegExp = /^(\+|-?)\d+(\.?)\d*$/,
	        FUNCTION = "function",
	        STRING = "string",
	        NUMBER = "number",
	        OBJECT = "object",
	        NULL = "null",
	        BOOLEAN = "boolean",
	        UNDEFINED = "undefined",
	        getterCache = {},
	        setterCache = {},
	        slice = [].slice;

	    kendo.version = "$KENDO_VERSION".replace(/^\s+|\s+$/g, '');

	    function Class() {}

	    Class.extend = function(proto) {
	        var base = function() {},
	            member,
	            that = this,
	            subclass = proto && proto.init ? proto.init : function () {
	                that.apply(this, arguments);
	            },
	            fn;

	        base.prototype = that.prototype;
	        fn = subclass.fn = subclass.prototype = new base();

	        for (member in proto) {
	            if (proto[member] != null && proto[member].constructor === Object) {
	                // Merge object members
	                fn[member] = extend(true, {}, base.prototype[member], proto[member]);
	            } else {
	                fn[member] = proto[member];
	            }
	        }

	        fn.constructor = subclass;
	        subclass.extend = that.extend;

	        return subclass;
	    };

	    Class.prototype._initOptions = function(options) {
	        this.options = deepExtend({}, this.options, options);
	    };

	    var isFunction = kendo.isFunction = function(fn) {
	        return typeof fn === "function";
	    };

	    var preventDefault = function() {
	        this._defaultPrevented = true;
	    };

	    var isDefaultPrevented = function() {
	        return this._defaultPrevented === true;
	    };

	    var Observable = Class.extend({
	        init: function() {
	            this._events = {};
	        },

	        bind: function(eventName, handlers, one) {
	            var that = this,
	                idx,
	                eventNames = typeof eventName === STRING ? [eventName] : eventName,
	                length,
	                original,
	                handler,
	                handlersIsFunction = typeof handlers === FUNCTION,
	                events;

	            if (handlers === undefined) {
	                for (idx in eventName) {
	                    that.bind(idx, eventName[idx]);
	                }
	                return that;
	            }

	            for (idx = 0, length = eventNames.length; idx < length; idx++) {
	                eventName = eventNames[idx];

	                handler = handlersIsFunction ? handlers : handlers[eventName];

	                if (handler) {
	                    if (one) {
	                        original = handler;
	                        handler = function() {
	                            that.unbind(eventName, handler);
	                            original.apply(that, arguments);
	                        };
	                        handler.original = original;
	                    }
	                    events = that._events[eventName] = that._events[eventName] || [];
	                    events.push(handler);
	                }
	            }

	            return that;
	        },

	        one: function(eventNames, handlers) {
	            return this.bind(eventNames, handlers, true);
	        },

	        first: function(eventName, handlers) {
	            var that = this,
	                idx,
	                eventNames = typeof eventName === STRING ? [eventName] : eventName,
	                length,
	                handler,
	                handlersIsFunction = typeof handlers === FUNCTION,
	                events;

	            for (idx = 0, length = eventNames.length; idx < length; idx++) {
	                eventName = eventNames[idx];

	                handler = handlersIsFunction ? handlers : handlers[eventName];

	                if (handler) {
	                    events = that._events[eventName] = that._events[eventName] || [];
	                    events.unshift(handler);
	                }
	            }

	            return that;
	        },

	        trigger: function(eventName, e) {
	            var that = this,
	                events = that._events[eventName],
	                idx,
	                length;

	            if (events) {
	                e = e || {};

	                e.sender = that;

	                e._defaultPrevented = false;

	                e.preventDefault = preventDefault;

	                e.isDefaultPrevented = isDefaultPrevented;

	                events = events.slice();

	                for (idx = 0, length = events.length; idx < length; idx++) {
	                    events[idx].call(that, e);
	                }

	                return e._defaultPrevented === true;
	            }

	            return false;
	        },

	        unbind: function(eventName, handler) {
	            var that = this,
	                events = that._events[eventName],
	                idx;

	            if (eventName === undefined) {
	                that._events = {};
	            } else if (events) {
	                if (handler) {
	                    for (idx = events.length - 1; idx >= 0; idx--) {
	                        if (events[idx] === handler || events[idx].original === handler) {
	                            events.splice(idx, 1);
	                        }
	                    }
	                } else {
	                    that._events[eventName] = [];
	                }
	            }

	            return that;
	        }
	    });


	     function compilePart(part, stringPart) {
	         if (stringPart) {
	             return "'" +
	                 part.split("'").join("\\'")
	                     .split('\\"').join('\\\\\\"')
	                     .replace(/\n/g, "\\n")
	                     .replace(/\r/g, "\\r")
	                     .replace(/\t/g, "\\t") + "'";
	         } else {
	             var first = part.charAt(0),
	                 rest = part.substring(1);

	             if (first === "=") {
	                 return "+(" + rest + ")+";
	             } else if (first === ":") {
	                 return "+$kendoHtmlEncode(" + rest + ")+";
	             } else {
	                 return ";" + part + ";$kendoOutput+=";
	             }
	         }
	     }

	    var argumentNameRegExp = /^\w+/,
	        encodeRegExp = /\$\{([^}]*)\}/g,
	        escapedCurlyRegExp = /\\\}/g,
	        curlyRegExp = /__CURLY__/g,
	        escapedSharpRegExp = /\\#/g,
	        sharpRegExp = /__SHARP__/g,
	        zeros = ["", "0", "00", "000", "0000"];

	    Template = {
	        paramName: "data", // name of the parameter of the generated template
	        useWithBlock: true, // whether to wrap the template in a with() block
	        render: function(template, data) {
	            var idx,
	                length,
	                html = "";

	            for (idx = 0, length = data.length; idx < length; idx++) {
	                html += template(data[idx]);
	            }

	            return html;
	        },
	        compile: function(template, options) {
	            var settings = extend({}, this, options),
	                paramName = settings.paramName,
	                argumentName = paramName.match(argumentNameRegExp)[0],
	                useWithBlock = settings.useWithBlock,
	                functionBody = "var $kendoOutput, $kendoHtmlEncode = kendo.htmlEncode;",
	                fn,
	                parts,
	                idx;

	            if (isFunction(template)) {
	                return template;
	            }

	            functionBody += useWithBlock ? "with(" + paramName + "){" : "";

	            functionBody += "$kendoOutput=";

	            parts = template
	                .replace(escapedCurlyRegExp, "__CURLY__")
	                .replace(encodeRegExp, "#=$kendoHtmlEncode($1)#")
	                .replace(curlyRegExp, "}")
	                .replace(escapedSharpRegExp, "__SHARP__")
	                .split("#");

	            for (idx = 0; idx < parts.length; idx ++) {
	                functionBody += compilePart(parts[idx], idx % 2 === 0);
	            }

	            functionBody += useWithBlock ? ";}" : ";";

	            functionBody += "return $kendoOutput;";

	            functionBody = functionBody.replace(sharpRegExp, "#");

	            try {
	                fn = new Function(argumentName, functionBody);
	                fn._slotCount = Math.floor(parts.length / 2);
	                return fn;
	            } catch(e) {
	                throw new Error(kendo.format("Invalid template:'{0}' Generated code:'{1}'", template, functionBody));
	            }
	        }
	    };

	function pad(number, digits, end) {
	    number = number + "";
	    digits = digits || 2;
	    end = digits - number.length;

	    if (end) {
	        return zeros[digits].substring(0, end) + number;
	    }

	    return number;
	}

	    //JSON stringify
	(function() {
	    var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
	        gap,
	        indent,
	        meta = {
	            "\b": "\\b",
	            "\t": "\\t",
	            "\n": "\\n",
	            "\f": "\\f",
	            "\r": "\\r",
	            "\"" : '\\"',
	            "\\": "\\\\"
	        },
	        rep,
	        toString = {}.toString;


	    if (typeof Date.prototype.toJSON !== FUNCTION) {

	        Date.prototype.toJSON = function () {
	            var that = this;

	            return isFinite(that.valueOf()) ?
	                pad(that.getUTCFullYear(), 4) + "-" +
	                pad(that.getUTCMonth() + 1)   + "-" +
	                pad(that.getUTCDate())        + "T" +
	                pad(that.getUTCHours())       + ":" +
	                pad(that.getUTCMinutes())     + ":" +
	                pad(that.getUTCSeconds())     + "Z" : null;
	        };

	        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
	            return this.valueOf();
	        };
	    }

	    function quote(string) {
	        escapable.lastIndex = 0;
	        return escapable.test(string) ? "\"" + string.replace(escapable, function (a) {
	            var c = meta[a];
	            return typeof c === STRING ? c :
	                "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
	        }) + "\"" : "\"" + string + "\"";
	    }

	    function str(key, holder) {
	        var i,
	            k,
	            v,
	            length,
	            mind = gap,
	            partial,
	            value = holder[key],
	            type;

	        if (value && typeof value === OBJECT && typeof value.toJSON === FUNCTION) {
	            value = value.toJSON(key);
	        }

	        if (typeof rep === FUNCTION) {
	            value = rep.call(holder, key, value);
	        }

	        type = typeof value;
	        if (type === STRING) {
	            return quote(value);
	        } else if (type === NUMBER) {
	            return isFinite(value) ? String(value) : NULL;
	        } else if (type === BOOLEAN || type === NULL) {
	            return String(value);
	        } else if (type === OBJECT) {
	            if (!value) {
	                return NULL;
	            }
	            gap += indent;
	            partial = [];
	            if (toString.apply(value) === "[object Array]") {
	                length = value.length;
	                for (i = 0; i < length; i++) {
	                    partial[i] = str(i, value) || NULL;
	                }
	                v = partial.length === 0 ? "[]" : gap ?
	                    "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" :
	                    "[" + partial.join(",") + "]";
	                gap = mind;
	                return v;
	            }
	            if (rep && typeof rep === OBJECT) {
	                length = rep.length;
	                for (i = 0; i < length; i++) {
	                    if (typeof rep[i] === STRING) {
	                        k = rep[i];
	                        v = str(k, value);
	                        if (v) {
	                            partial.push(quote(k) + (gap ? ": " : ":") + v);
	                        }
	                    }
	                }
	            } else {
	                for (k in value) {
	                    if (Object.hasOwnProperty.call(value, k)) {
	                        v = str(k, value);
	                        if (v) {
	                            partial.push(quote(k) + (gap ? ": " : ":") + v);
	                        }
	                    }
	                }
	            }

	            v = partial.length === 0 ? "{}" : gap ?
	                "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" :
	                "{" + partial.join(",") + "}";
	            gap = mind;
	            return v;
	        }
	    }

	    if (typeof JSON.stringify !== FUNCTION) {
	        JSON.stringify = function (value, replacer, space) {
	            var i;
	            gap = "";
	            indent = "";

	            if (typeof space === NUMBER) {
	                for (i = 0; i < space; i += 1) {
	                    indent += " ";
	                }

	            } else if (typeof space === STRING) {
	                indent = space;
	            }

	            rep = replacer;
	            if (replacer && typeof replacer !== FUNCTION && (typeof replacer !== OBJECT || typeof replacer.length !== NUMBER)) {
	                throw new Error("JSON.stringify");
	            }

	            return str("", {"": value});
	        };
	    }
	})();

	// Date and Number formatting
	(function() {
	    var dateFormatRegExp = /dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|HH|H|hh|h|mm|m|fff|ff|f|tt|ss|s|zzz|zz|z|"[^"]*"|'[^']*'/g,
	        standardFormatRegExp =  /^(n|c|p|e)(\d*)$/i,
	        literalRegExp = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g,
	        commaRegExp = /\,/g,
	        EMPTY = "",
	        POINT = ".",
	        COMMA = ",",
	        SHARP = "#",
	        ZERO = "0",
	        PLACEHOLDER = "??",
	        EN = "en-US",
	        objectToString = {}.toString;

	    //cultures
	    kendo.cultures["en-US"] = {
	        name: EN,
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": ",",
	            ".": ".",
	            groupSize: [3],
	            percent: {
	                pattern: ["-n %", "n %"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "%"
	            },
	            currency: {
	                name: "US Dollar",
	                abbr: "USD",
	                pattern: ["($n)", "$n"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "$"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	                    namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	                    namesShort: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ]
	                },
	                months: {
	                    names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	                    namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	                },
	                AM: [ "AM", "am", "AM" ],
	                PM: [ "PM", "pm", "PM" ],
	                patterns: {
	                    d: "M/d/yyyy",
	                    D: "dddd, MMMM dd, yyyy",
	                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
	                    g: "M/d/yyyy h:mm tt",
	                    G: "M/d/yyyy h:mm:ss tt",
	                    m: "MMMM dd",
	                    M: "MMMM dd",
	                    s: "yyyy'-'MM'-'ddTHH':'mm':'ss",
	                    t: "h:mm tt",
	                    T: "h:mm:ss tt",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM, yyyy",
	                    Y: "MMMM, yyyy"
	                },
	                "/": "/",
	                ":": ":",
	                firstDay: 0,
	                twoDigitYearMax: 2029
	            }
	        }
	    };


	     function findCulture(culture) {
	        if (culture) {
	            if (culture.numberFormat) {
	                return culture;
	            }

	            if (typeof culture === STRING) {
	                var cultures = kendo.cultures;
	                return cultures[culture] || cultures[culture.split("-")[0]] || null;
	            }

	            return null;
	        }

	        return null;
	    }

	    function getCulture(culture) {
	        if (culture) {
	            culture = findCulture(culture);
	        }

	        return culture || kendo.cultures.current;
	    }

	    kendo.culture = function(cultureName) {
	        var cultures = kendo.cultures, culture;

	        if (cultureName !== undefined) {
	            culture = findCulture(cultureName) || cultures[EN];
	            culture.calendar = culture.calendars.standard;
	            cultures.current = culture;
	        } else {
	            return cultures.current;
	        }
	    };

	    kendo.findCulture = findCulture;
	    kendo.getCulture = getCulture;

	    //set current culture to en-US.
	    kendo.culture(EN);

	    function formatDate(date, format, culture) {
	        culture = getCulture(culture);

	        var calendar = culture.calendars.standard,
	            days = calendar.days,
	            months = calendar.months;

	        format = calendar.patterns[format] || format;

	        return format.replace(dateFormatRegExp, function (match) {
	            var minutes;
	            var result;
	            var sign;

	            if (match === "d") {
	                result = date.getDate();
	            } else if (match === "dd") {
	                result = pad(date.getDate());
	            } else if (match === "ddd") {
	                result = days.namesAbbr[date.getDay()];
	            } else if (match === "dddd") {
	                result = days.names[date.getDay()];
	            } else if (match === "M") {
	                result = date.getMonth() + 1;
	            } else if (match === "MM") {
	                result = pad(date.getMonth() + 1);
	            } else if (match === "MMM") {
	                result = months.namesAbbr[date.getMonth()];
	            } else if (match === "MMMM") {
	                result = months.names[date.getMonth()];
	            } else if (match === "yy") {
	                result = pad(date.getFullYear() % 100);
	            } else if (match === "yyyy") {
	                result = pad(date.getFullYear(), 4);
	            } else if (match === "h" ) {
	                result = date.getHours() % 12 || 12;
	            } else if (match === "hh") {
	                result = pad(date.getHours() % 12 || 12);
	            } else if (match === "H") {
	                result = date.getHours();
	            } else if (match === "HH") {
	                result = pad(date.getHours());
	            } else if (match === "m") {
	                result = date.getMinutes();
	            } else if (match === "mm") {
	                result = pad(date.getMinutes());
	            } else if (match === "s") {
	                result = date.getSeconds();
	            } else if (match === "ss") {
	                result = pad(date.getSeconds());
	            } else if (match === "f") {
	                result = math.floor(date.getMilliseconds() / 100);
	            } else if (match === "ff") {
	                result = date.getMilliseconds();
	                if (result > 99) {
	                    result = math.floor(result / 10);
	                }
	                result = pad(result);
	            } else if (match === "fff") {
	                result = pad(date.getMilliseconds(), 3);
	            } else if (match === "tt") {
	                result = date.getHours() < 12 ? calendar.AM[0] : calendar.PM[0];
	            } else if (match === "zzz") {
	                minutes = date.getTimezoneOffset();
	                sign = minutes < 0;

	                result = math.abs(minutes / 60).toString().split(".")[0];
	                minutes = math.abs(minutes) - (result * 60);

	                result = (sign ? "+" : "-") + pad(result);
	                result += ":" + pad(minutes);
	            } else if (match === "zz" || match === "z") {
	                result = date.getTimezoneOffset() / 60;
	                sign = result < 0;

	                result = math.abs(result).toString().split(".")[0];
	                result = (sign ? "+" : "-") + (match === "zz" ? pad(result) : result);
	            }

	            return result !== undefined ? result : match.slice(1, match.length - 1);
	        });
	    }

	    //number formatting
	    function formatNumber(number, format, culture) {
	        culture = getCulture(culture);

	        var numberFormat = culture.numberFormat,
	            decimal = numberFormat[POINT],
	            precision = numberFormat.decimals,
	            pattern = numberFormat.pattern[0],
	            literals = [],
	            symbol,
	            isCurrency, isPercent,
	            customPrecision,
	            formatAndPrecision,
	            negative = number < 0,
	            integer,
	            fraction,
	            integerLength,
	            fractionLength,
	            replacement = EMPTY,
	            value = EMPTY,
	            idx,
	            length,
	            ch,
	            hasGroup,
	            hasNegativeFormat,
	            decimalIndex,
	            sharpIndex,
	            zeroIndex,
	            hasZero, hasSharp,
	            percentIndex,
	            currencyIndex,
	            startZeroIndex,
	            start = -1,
	            end;

	        //return empty string if no number
	        if (number === undefined) {
	            return EMPTY;
	        }

	        if (!isFinite(number)) {
	            return number;
	        }

	        //if no format then return number.toString() or number.toLocaleString() if culture.name is not defined
	        if (!format) {
	            return culture.name.length ? number.toLocaleString() : number.toString();
	        }

	        formatAndPrecision = standardFormatRegExp.exec(format);

	        // standard formatting
	        if (formatAndPrecision) {
	            format = formatAndPrecision[1].toLowerCase();

	            isCurrency = format === "c";
	            isPercent = format === "p";

	            if (isCurrency || isPercent) {
	                //get specific number format information if format is currency or percent
	                numberFormat = isCurrency ? numberFormat.currency : numberFormat.percent;
	                decimal = numberFormat[POINT];
	                precision = numberFormat.decimals;
	                symbol = numberFormat.symbol;
	                pattern = numberFormat.pattern[negative ? 0 : 1];
	            }

	            customPrecision = formatAndPrecision[2];

	            if (customPrecision) {
	                precision = +customPrecision;
	            }

	            //return number in exponential format
	            if (format === "e") {
	                return customPrecision ? number.toExponential(precision) : number.toExponential(); // toExponential() and toExponential(undefined) differ in FF #653438.
	            }

	            // multiply if format is percent
	            if (isPercent) {
	                number *= 100;
	            }

	            number = round(number, precision);
	            negative = number < 0;
	            number = number.split(POINT);

	            integer = number[0];
	            fraction = number[1];

	            //exclude "-" if number is negative.
	            if (negative) {
	                integer = integer.substring(1);
	            }

	            value = groupInteger(integer, 0, integer.length, numberFormat);

	            if (fraction) {
	                value += decimal + fraction;
	            }

	            if (format === "n" && !negative) {
	                return value;
	            }

	            number = EMPTY;

	            for (idx = 0, length = pattern.length; idx < length; idx++) {
	                ch = pattern.charAt(idx);

	                if (ch === "n") {
	                    number += value;
	                } else if (ch === "$" || ch === "%") {
	                    number += symbol;
	                } else {
	                    number += ch;
	                }
	            }

	            return number;
	        }

	        //custom formatting
	        //
	        //separate format by sections.

	        //make number positive
	        if (negative) {
	            number = -number;
	        }

	        if (format.indexOf("'") > -1 || format.indexOf("\"") > -1 || format.indexOf("\\") > -1) {
	            format = format.replace(literalRegExp, function (match) {
	                var quoteChar = match.charAt(0).replace("\\", ""),
	                    literal = match.slice(1).replace(quoteChar, "");

	                literals.push(literal);

	                return PLACEHOLDER;
	            });
	        }

	        format = format.split(";");
	        if (negative && format[1]) {
	            //get negative format
	            format = format[1];
	            hasNegativeFormat = true;
	        } else if (number === 0) {
	            //format for zeros
	            format = format[2] || format[0];
	            if (format.indexOf(SHARP) == -1 && format.indexOf(ZERO) == -1) {
	                //return format if it is string constant.
	                return format;
	            }
	        } else {
	            format = format[0];
	        }

	        percentIndex = format.indexOf("%");
	        currencyIndex = format.indexOf("$");

	        isPercent = percentIndex != -1;
	        isCurrency = currencyIndex != -1;

	        //multiply number if the format has percent
	        if (isPercent) {
	            number *= 100;
	        }

	        if (isCurrency && format[currencyIndex - 1] === "\\") {
	            format = format.split("\\").join("");
	            isCurrency = false;
	        }

	        if (isCurrency || isPercent) {
	            //get specific number format information if format is currency or percent
	            numberFormat = isCurrency ? numberFormat.currency : numberFormat.percent;
	            decimal = numberFormat[POINT];
	            precision = numberFormat.decimals;
	            symbol = numberFormat.symbol;
	        }

	        hasGroup = format.indexOf(COMMA) > -1;
	        if (hasGroup) {
	            format = format.replace(commaRegExp, EMPTY);
	        }

	        decimalIndex = format.indexOf(POINT);
	        length = format.length;

	        if (decimalIndex != -1) {
	            fraction = number.toString().split("e");
	            if (fraction[1]) {
	                fraction = round(number, Math.abs(fraction[1]));
	            } else {
	                fraction = fraction[0];
	            }
	            fraction = fraction.split(POINT)[1] || EMPTY;
	            zeroIndex = format.lastIndexOf(ZERO) - decimalIndex;
	            sharpIndex = format.lastIndexOf(SHARP) - decimalIndex;
	            hasZero = zeroIndex > -1;
	            hasSharp = sharpIndex > -1;
	            idx = fraction.length;

	            if (!hasZero && !hasSharp) {
	                format = format.substring(0, decimalIndex) + format.substring(decimalIndex + 1);
	                length = format.length;
	                decimalIndex = -1;
	                idx = 0;
	            } if (hasZero && zeroIndex > sharpIndex) {
	                idx = zeroIndex;
	            } else if (sharpIndex > zeroIndex) {
	                if (hasSharp && idx > sharpIndex) {
	                    idx = sharpIndex;
	                } else if (hasZero && idx < zeroIndex) {
	                    idx = zeroIndex;
	                }
	            }

	            if (idx > -1) {
	                number = round(number, idx);
	            }
	        } else {
	            number = round(number);
	        }

	        sharpIndex = format.indexOf(SHARP);
	        startZeroIndex = zeroIndex = format.indexOf(ZERO);

	        //define the index of the first digit placeholder
	        if (sharpIndex == -1 && zeroIndex != -1) {
	            start = zeroIndex;
	        } else if (sharpIndex != -1 && zeroIndex == -1) {
	            start = sharpIndex;
	        } else {
	            start = sharpIndex > zeroIndex ? zeroIndex : sharpIndex;
	        }

	        sharpIndex = format.lastIndexOf(SHARP);
	        zeroIndex = format.lastIndexOf(ZERO);

	        //define the index of the last digit placeholder
	        if (sharpIndex == -1 && zeroIndex != -1) {
	            end = zeroIndex;
	        } else if (sharpIndex != -1 && zeroIndex == -1) {
	            end = sharpIndex;
	        } else {
	            end = sharpIndex > zeroIndex ? sharpIndex : zeroIndex;
	        }

	        if (start == length) {
	            end = start;
	        }

	        if (start != -1) {
	            value = number.toString().split(POINT);
	            integer = value[0];
	            fraction = value[1] || EMPTY;

	            integerLength = integer.length;
	            fractionLength = fraction.length;

	            if (negative && (number * -1) >= 0) {
	                negative = false;
	            }

	            number = format.substring(0, start);

	            if (negative && !hasNegativeFormat) {
	                number += "-";
	            }

	            for (idx = start; idx < length; idx++) {
	                ch = format.charAt(idx);

	                if (decimalIndex == -1) {
	                    if (end - idx < integerLength) {
	                        number += integer;
	                        break;
	                    }
	                } else {
	                    if (zeroIndex != -1 && zeroIndex < idx) {
	                        replacement = EMPTY;
	                    }

	                    if ((decimalIndex - idx) <= integerLength && decimalIndex - idx > -1) {
	                        number += integer;
	                        idx = decimalIndex;
	                    }

	                    if (decimalIndex === idx) {
	                        number += (fraction ? decimal : EMPTY) + fraction;
	                        idx += end - decimalIndex + 1;
	                        continue;
	                    }
	                }

	                if (ch === ZERO) {
	                    number += ch;
	                    replacement = ch;
	                } else if (ch === SHARP) {
	                    number += replacement;
	                }
	            }

	            if (hasGroup) {
	                number = groupInteger(number, start + (negative && !hasNegativeFormat ? 1 : 0), Math.max(end, (integerLength + start)), numberFormat);
	            }

	            if (end >= start) {
	                number += format.substring(end + 1);
	            }

	            //replace symbol placeholders
	            if (isCurrency || isPercent) {
	                value = EMPTY;
	                for (idx = 0, length = number.length; idx < length; idx++) {
	                    ch = number.charAt(idx);
	                    value += (ch === "$" || ch === "%") ? symbol : ch;
	                }
	                number = value;
	            }

	            length = literals.length;

	            if (length) {
	                for (idx = 0; idx < length; idx++) {
	                    number = number.replace(PLACEHOLDER, literals[idx]);
	                }
	            }
	        }

	        return number;
	    }

	    var groupInteger = function(number, start, end, numberFormat) {
	        var decimalIndex = number.indexOf(numberFormat[POINT]);
	        var groupSizes = numberFormat.groupSize.slice();
	        var groupSize = groupSizes.shift();
	        var integer, integerLength;
	        var idx, parts, value;
	        var newGroupSize;

	        end = decimalIndex !== -1 ? decimalIndex : end + 1;

	        integer = number.substring(start, end);
	        integerLength = integer.length;

	        if (integerLength >= groupSize) {
	            idx = integerLength;
	            parts = [];

	            while (idx > -1) {
	                value = integer.substring(idx - groupSize, idx);
	                if (value) {
	                    parts.push(value);
	                }
	                idx -= groupSize;
	                newGroupSize = groupSizes.shift();
	                groupSize = newGroupSize !== undefined ? newGroupSize : groupSize;

	                if (groupSize === 0) {
	                    parts.push(integer.substring(0, idx));
	                    break;
	                }
	            }

	            integer = parts.reverse().join(numberFormat[COMMA]);
	            number = number.substring(0, start) + integer + number.substring(end);
	        }

	        return number;
	    };

	    var round = function(value, precision) {
	        precision = precision || 0;

	        value = value.toString().split('e');
	        value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + precision) : precision)));

	        value = value.toString().split('e');
	        value = +(value[0] + 'e' + (value[1] ? (+value[1] - precision) : -precision));

	        return value.toFixed(Math.min(precision, 20));
	    };

	    var toString = function(value, fmt, culture) {
	        if (fmt) {
	            if (objectToString.call(value) === "[object Date]") {
	                return formatDate(value, fmt, culture);
	            } else if (typeof value === NUMBER) {
	                return formatNumber(value, fmt, culture);
	            }
	        }

	        return value !== undefined ? value : "";
	    };

	    kendo.format = function(fmt) {
	        var values = arguments;

	        return fmt.replace(formatRegExp, function(match, index, placeholderFormat) {
	            var value = values[parseInt(index, 10) + 1];

	            return toString(value, placeholderFormat ? placeholderFormat.substring(1) : "");
	        });
	    };

	    kendo._extractFormat = function (format) {
	        if (format.slice(0,3) === "{0:") {
	            format = format.slice(3, format.length - 1);
	        }

	        return format;
	    };

	    kendo._activeElement = function() {
	        try {
	            return document.activeElement;
	        } catch(e) {
	            return document.documentElement.activeElement;
	        }
	    };

	    kendo._round = round;
	    kendo._outerWidth = function (element, includeMargin) { return $(element).outerWidth(includeMargin || false) || 0; };
	    kendo._outerHeight = function (element, includeMargin) { return $(element).outerHeight(includeMargin || false) || 0; };
	    kendo.toString = toString;
	})();


	(function() {
	    var nonBreakingSpaceRegExp = /\u00A0/g,
	        exponentRegExp = /[eE][\-+]?[0-9]+/,
	        shortTimeZoneRegExp = /[+|\-]\d{1,2}/,
	        longTimeZoneRegExp = /[+|\-]\d{1,2}:?\d{2}/,
	        dateRegExp = /^\/Date\((.*?)\)\/$/,
	        offsetRegExp = /[+-]\d*/,
	        FORMATS_SEQUENCE = [ [], [ "G", "g", "F" ], [ "D", "d", "y", "m", "T", "t" ] ],
	        STANDARD_FORMATS = [
	            [
	            "yyyy-MM-ddTHH:mm:ss.fffffffzzz",
	            "yyyy-MM-ddTHH:mm:ss.fffffff",
	            "yyyy-MM-ddTHH:mm:ss.fffzzz",
	            "yyyy-MM-ddTHH:mm:ss.fff",
	            "ddd MMM dd yyyy HH:mm:ss",
	            "yyyy-MM-ddTHH:mm:sszzz",
	            "yyyy-MM-ddTHH:mmzzz",
	            "yyyy-MM-ddTHH:mmzz",
	            "yyyy-MM-ddTHH:mm:ss",
	            "yyyy-MM-dd HH:mm:ss",
	            "yyyy/MM/dd HH:mm:ss"
	            ], [
	            "yyyy-MM-ddTHH:mm",
	            "yyyy-MM-dd HH:mm",
	            "yyyy/MM/dd HH:mm"
	            ], [
	            "yyyy/MM/dd",
	            "yyyy-MM-dd",
	            "HH:mm:ss",
	            "HH:mm"
	            ]
	        ],
	        numberRegExp = {
	            2: /^\d{1,2}/,
	            3: /^\d{1,3}/,
	            4: /^\d{4}/
	        },
	        objectToString = {}.toString;

	    function outOfRange(value, start, end) {
	        return !(value >= start && value <= end);
	    }

	    function designatorPredicate(designator) {
	        return designator.charAt(0);
	    }

	    function mapDesignators(designators) {
	        return $.map(designators, designatorPredicate);
	    }

	    //if date's day is different than the typed one - adjust
	    function adjustDST(date, hours) {
	        if (!hours && date.getHours() === 23) {
	            date.setHours(date.getHours() + 2);
	        }
	    }

	    function lowerArray(data) {
	        var idx = 0,
	            length = data.length,
	            array = [];

	        for (; idx < length; idx++) {
	            array[idx] = (data[idx] + "").toLowerCase();
	        }

	        return array;
	    }

	    function lowerLocalInfo(localInfo) {
	        var newLocalInfo = {}, property;

	        for (property in localInfo) {
	            newLocalInfo[property] = lowerArray(localInfo[property]);
	        }

	        return newLocalInfo;
	    }

	    function parseExact(value, format, culture) {
	        if (!value) {
	            return null;
	        }

	        var lookAhead = function (match) {
	                var i = 0;
	                while (format[idx] === match) {
	                    i++;
	                    idx++;
	                }
	                if (i > 0) {
	                    idx -= 1;
	                }
	                return i;
	            },
	            getNumber = function(size) {
	                var rg = numberRegExp[size] || new RegExp('^\\d{1,' + size + '}'),
	                    match = value.substr(valueIdx, size).match(rg);

	                if (match) {
	                    match = match[0];
	                    valueIdx += match.length;
	                    return parseInt(match, 10);
	                }
	                return null;
	            },
	            getIndexByName = function (names, lower) {
	                var i = 0,
	                    length = names.length,
	                    name, nameLength,
	                    matchLength = 0,
	                    matchIdx = 0,
	                    subValue;

	                for (; i < length; i++) {
	                    name = names[i];
	                    nameLength = name.length;
	                    subValue = value.substr(valueIdx, nameLength);

	                    if (lower) {
	                        subValue = subValue.toLowerCase();
	                    }

	                    if (subValue == name && nameLength > matchLength) {
	                        matchLength = nameLength;
	                        matchIdx = i;
	                    }
	                }

	                if (matchLength) {
	                    valueIdx += matchLength;
	                    return matchIdx + 1;
	                }

	                return null;
	            },
	            checkLiteral = function() {
	                var result = false;
	                if (value.charAt(valueIdx) === format[idx]) {
	                    valueIdx++;
	                    result = true;
	                }
	                return result;
	            },
	            calendar = culture.calendars.standard,
	            year = null,
	            month = null,
	            day = null,
	            hours = null,
	            minutes = null,
	            seconds = null,
	            milliseconds = null,
	            idx = 0,
	            valueIdx = 0,
	            literal = false,
	            date = new Date(),
	            twoDigitYearMax = calendar.twoDigitYearMax || 2029,
	            defaultYear = date.getFullYear(),
	            ch, count, length, pattern,
	            pmHour, UTC, matches,
	            amDesignators, pmDesignators,
	            hoursOffset, minutesOffset,
	            hasTime, match;

	        if (!format) {
	            format = "d"; //shord date format
	        }

	        //if format is part of the patterns get real format
	        pattern = calendar.patterns[format];
	        if (pattern) {
	            format = pattern;
	        }

	        format = format.split("");
	        length = format.length;

	        for (; idx < length; idx++) {
	            ch = format[idx];

	            if (literal) {
	                if (ch === "'") {
	                    literal = false;
	                } else {
	                    checkLiteral();
	                }
	            } else {
	                if (ch === "d") {
	                    count = lookAhead("d");
	                    if (!calendar._lowerDays) {
	                        calendar._lowerDays = lowerLocalInfo(calendar.days);
	                    }

	                    if (day !== null && count > 2) {
	                        continue;
	                    }

	                    day = count < 3 ? getNumber(2) : getIndexByName(calendar._lowerDays[count == 3 ? "namesAbbr" : "names"], true);

	                    if (day === null || outOfRange(day, 1, 31)) {
	                        return null;
	                    }
	                } else if (ch === "M") {
	                    count = lookAhead("M");
	                    if (!calendar._lowerMonths) {
	                        calendar._lowerMonths = lowerLocalInfo(calendar.months);
	                    }
	                    month = count < 3 ? getNumber(2) : getIndexByName(calendar._lowerMonths[count == 3 ? 'namesAbbr' : 'names'], true);

	                    if (month === null || outOfRange(month, 1, 12)) {
	                        return null;
	                    }
	                    month -= 1; //because month is zero based
	                } else if (ch === "y") {
	                    count = lookAhead("y");
	                    year = getNumber(count);

	                    if (year === null) {
	                        return null;
	                    }

	                    if (count == 2) {
	                        if (typeof twoDigitYearMax === "string") {
	                            twoDigitYearMax = defaultYear + parseInt(twoDigitYearMax, 10);
	                        }

	                        year = (defaultYear - defaultYear % 100) + year;
	                        if (year > twoDigitYearMax) {
	                            year -= 100;
	                        }
	                    }
	                } else if (ch === "h" ) {
	                    lookAhead("h");
	                    hours = getNumber(2);
	                    if (hours == 12) {
	                        hours = 0;
	                    }
	                    if (hours === null || outOfRange(hours, 0, 11)) {
	                        return null;
	                    }
	                } else if (ch === "H") {
	                    lookAhead("H");
	                    hours = getNumber(2);
	                    if (hours === null || outOfRange(hours, 0, 23)) {
	                        return null;
	                    }
	                } else if (ch === "m") {
	                    lookAhead("m");
	                    minutes = getNumber(2);
	                    if (minutes === null || outOfRange(minutes, 0, 59)) {
	                        return null;
	                    }
	                } else if (ch === "s") {
	                    lookAhead("s");
	                    seconds = getNumber(2);
	                    if (seconds === null || outOfRange(seconds, 0, 59)) {
	                        return null;
	                    }
	                } else if (ch === "f") {
	                    count = lookAhead("f");

	                    match = value.substr(valueIdx, count).match(numberRegExp[3]);
	                    milliseconds = getNumber(count); //move value index position

	                    if (milliseconds !== null) {
	                        milliseconds = parseFloat("0." + match[0], 10);
	                        milliseconds = kendo._round(milliseconds, 3);
	                        milliseconds *= 1000;
	                    }

	                    if (milliseconds === null || outOfRange(milliseconds, 0, 999)) {
	                        return null;
	                    }

	                } else if (ch === "t") {
	                    count = lookAhead("t");
	                    amDesignators = calendar.AM;
	                    pmDesignators = calendar.PM;

	                    if (count === 1) {
	                        amDesignators = mapDesignators(amDesignators);
	                        pmDesignators = mapDesignators(pmDesignators);
	                    }

	                    pmHour = getIndexByName(pmDesignators);
	                    if (!pmHour && !getIndexByName(amDesignators)) {
	                        return null;
	                    }
	                }
	                else if (ch === "z") {
	                    UTC = true;
	                    count = lookAhead("z");

	                    if (value.substr(valueIdx, 1) === "Z") {
	                        checkLiteral();
	                        continue;
	                    }

	                    matches = value.substr(valueIdx, 6)
	                                   .match(count > 2 ? longTimeZoneRegExp : shortTimeZoneRegExp);

	                    if (!matches) {
	                        return null;
	                    }

	                    matches = matches[0].split(":");

	                    hoursOffset = matches[0];
	                    minutesOffset = matches[1];

	                    if (!minutesOffset && hoursOffset.length > 3) { //(+|-)[hh][mm] format is used
	                        valueIdx = hoursOffset.length - 2;
	                        minutesOffset = hoursOffset.substring(valueIdx);
	                        hoursOffset = hoursOffset.substring(0, valueIdx);
	                    }

	                    hoursOffset = parseInt(hoursOffset, 10);
	                    if (outOfRange(hoursOffset, -12, 13)) {
	                        return null;
	                    }

	                    if (count > 2) {
	                        minutesOffset = parseInt(minutesOffset, 10);
	                        if (isNaN(minutesOffset) || outOfRange(minutesOffset, 0, 59)) {
	                            return null;
	                        }
	                    }
	                } else if (ch === "'") {
	                    literal = true;
	                    checkLiteral();
	                } else if (!checkLiteral()) {
	                    return null;
	                }
	            }
	        }

	        hasTime = hours !== null || minutes !== null || seconds || null;

	        if (year === null && month === null && day === null && hasTime) {
	            year = defaultYear;
	            month = date.getMonth();
	            day = date.getDate();
	        } else {
	            if (year === null) {
	                year = defaultYear;
	            }

	            if (day === null) {
	                day = 1;
	            }
	        }

	        if (pmHour && hours < 12) {
	            hours += 12;
	        }

	        if (UTC) {
	            if (hoursOffset) {
	                hours += -hoursOffset;
	            }

	            if (minutesOffset) {
	                minutes += -minutesOffset;
	            }

	            value = new Date(Date.UTC(year, month, day, hours, minutes, seconds, milliseconds));
	        } else {
	            value = new Date(year, month, day, hours, minutes, seconds, milliseconds);
	            adjustDST(value, hours);
	        }

	        if (year < 100) {
	            value.setFullYear(year);
	        }

	        if (value.getDate() !== day && UTC === undefined) {
	            return null;
	        }

	        return value;
	    }

	    function parseMicrosoftFormatOffset(offset) {
	        var sign = offset.substr(0, 1) === "-" ? -1 : 1;

	        offset = offset.substring(1);
	        offset = (parseInt(offset.substr(0, 2), 10) * 60) + parseInt(offset.substring(2), 10);

	        return sign * offset;
	    }

	    function getDefaultFormats(culture) {
	        var length = math.max(FORMATS_SEQUENCE.length, STANDARD_FORMATS.length);
	        var patterns = culture.calendar.patterns;
	        var cultureFormats, formatIdx, idx;
	        var formats = [];

	        for (idx = 0; idx < length; idx++) {
	            cultureFormats = FORMATS_SEQUENCE[idx];
	            for (formatIdx = 0; formatIdx < cultureFormats.length; formatIdx++) {
	                formats.push(patterns[cultureFormats[formatIdx]]);
	            }
	            formats = formats.concat(STANDARD_FORMATS[idx]);
	        }

	        return formats;
	    }

	    kendo.parseDate = function(value, formats, culture) {
	        if (objectToString.call(value) === "[object Date]") {
	            return value;
	        }

	        var idx = 0;
	        var date = null;
	        var length;
	        var tzoffset;

	        if (value && value.indexOf("/D") === 0) {
	            date = dateRegExp.exec(value);
	            if (date) {
	                date = date[1];
	                tzoffset = offsetRegExp.exec(date.substring(1));

	                date = new Date(parseInt(date, 10));

	                if (tzoffset) {
	                    tzoffset = parseMicrosoftFormatOffset(tzoffset[0]);
	                    date = kendo.timezone.apply(date, 0);
	                    date = kendo.timezone.convert(date, 0, -1 * tzoffset);
	                }

	                return date;
	            }
	        }

	        culture = kendo.getCulture(culture);

	        if (!formats) {
	            formats = getDefaultFormats(culture);
	        }

	        formats = isArray(formats) ? formats: [formats];
	        length = formats.length;

	        for (; idx < length; idx++) {
	            date = parseExact(value, formats[idx], culture);
	            if (date) {
	                return date;
	            }
	        }

	        return date;
	    };

	    kendo.parseInt = function(value, culture) {
	        var result = kendo.parseFloat(value, culture);
	        if (result) {
	            result = result | 0;
	        }
	        return result;
	    };

	    kendo.parseFloat = function(value, culture, format) {
	        if (!value && value !== 0) {
	           return null;
	        }

	        if (typeof value === NUMBER) {
	           return value;
	        }

	        value = value.toString();
	        culture = kendo.getCulture(culture);

	        var number = culture.numberFormat,
	            percent = number.percent,
	            currency = number.currency,
	            symbol = currency.symbol,
	            percentSymbol = percent.symbol,
	            negative = value.indexOf("-"),
	            parts, isPercent;

	        //handle exponential number
	        if (exponentRegExp.test(value)) {
	            value = parseFloat(value.replace(number["."], "."));
	            if (isNaN(value)) {
	                value = null;
	            }
	            return value;
	        }

	        if (negative > 0) {
	            return null;
	        } else {
	            negative = negative > -1;
	        }

	        if (value.indexOf(symbol) > -1 || (format && format.toLowerCase().indexOf("c") > -1)) {
	            number = currency;
	            parts = number.pattern[0].replace("$", symbol).split("n");
	            if (value.indexOf(parts[0]) > -1 && value.indexOf(parts[1]) > -1) {
	                value = value.replace(parts[0], "").replace(parts[1], "");
	                negative = true;
	            }
	        } else if (value.indexOf(percentSymbol) > -1) {
	            isPercent = true;
	            number = percent;
	            symbol = percentSymbol;
	        }

	        value = value.replace("-", "")
	                     .replace(symbol, "")
	                     .replace(nonBreakingSpaceRegExp, " ")
	                     .split(number[","].replace(nonBreakingSpaceRegExp, " ")).join("")
	                     .replace(number["."], ".");

	        value = parseFloat(value);

	        if (isNaN(value)) {
	            value = null;
	        } else if (negative) {
	            value *= -1;
	        }

	        if (value && isPercent) {
	            value /= 100;
	        }

	        return value;
	    };
	})();

	    function getShadows(element) {
	        var shadow = element.css(kendo.support.transitions.css + "box-shadow") || element.css("box-shadow"),
	            radius = shadow ? shadow.match(boxShadowRegExp) || [ 0, 0, 0, 0, 0 ] : [ 0, 0, 0, 0, 0 ],
	            blur = math.max((+radius[3]), +(radius[4] || 0));

	        return {
	            left: (-radius[1]) + blur,
	            right: (+radius[1]) + blur,
	            bottom: (+radius[2]) + blur
	        };
	    }

	    function wrap(element, autosize) {
	        var browser = support.browser,
	            percentage,
	            outerWidth = kendo._outerWidth,
	            outerHeight = kendo._outerHeight;

	        if (!element.parent().hasClass("k-animation-container")) {
	            var width = element[0].style.width,
	                height = element[0].style.height,
	                percentWidth = percentRegExp.test(width),
	                percentHeight = percentRegExp.test(height);

	            percentage = percentWidth || percentHeight;

	            if (!percentWidth && (!autosize || (autosize && width))) { width = outerWidth(element); }
	            if (!percentHeight && (!autosize || (autosize && height))) { height = outerHeight(element); }

	            element.wrap(
	                         $("<div/>")
	                         .addClass("k-animation-container")
	                         .css({
	                             width: width,
	                             height: height
	                         }));

	            if (percentage) {
	                element.css({
	                    width: "100%",
	                    height: "100%",
	                    boxSizing: "border-box",
	                    mozBoxSizing: "border-box",
	                    webkitBoxSizing: "border-box"
	                });
	            }
	        } else {
	            var wrapper = element.parent(".k-animation-container"),
	                wrapperStyle = wrapper[0].style;

	            if (wrapper.is(":hidden")) {
	                wrapper.show();
	            }

	            percentage = percentRegExp.test(wrapperStyle.width) || percentRegExp.test(wrapperStyle.height);

	            if (!percentage) {
	                wrapper.css({
	                    width: outerWidth(element),
	                    height: outerHeight(element),
	                    boxSizing: "content-box",
	                    mozBoxSizing: "content-box",
	                    webkitBoxSizing: "content-box"
	                });
	            }
	        }

	        if (browser.msie && math.floor(browser.version) <= 7) {
	            element.css({ zoom: 1 });
	            element.children(".k-menu").width(element.width());
	        }

	        return element.parent();
	    }

	    function deepExtend(destination) {
	        var i = 1,
	            length = arguments.length;

	        for (i = 1; i < length; i++) {
	            deepExtendOne(destination, arguments[i]);
	        }

	        return destination;
	    }

	    function deepExtendOne(destination, source) {
	        var ObservableArray = kendo.data.ObservableArray,
	            LazyObservableArray = kendo.data.LazyObservableArray,
	            DataSource = kendo.data.DataSource,
	            HierarchicalDataSource = kendo.data.HierarchicalDataSource,
	            property,
	            propValue,
	            propType,
	            propInit,
	            destProp;

	        for (property in source) {
	            propValue = source[property];
	            propType = typeof propValue;

	            if (propType === OBJECT && propValue !== null) {
	                propInit = propValue.constructor;
	            } else {
	                propInit = null;
	            }

	            if (propInit &&
	                propInit !== Array && propInit !== ObservableArray && propInit !== LazyObservableArray &&
	                propInit !== DataSource && propInit !== HierarchicalDataSource && propInit !== RegExp) {

	                if (propValue instanceof Date) {
	                    destination[property] = new Date(propValue.getTime());
	                } else if (isFunction(propValue.clone)) {
	                    destination[property] = propValue.clone();
	                } else {
	                    destProp = destination[property];
	                    if (typeof (destProp) === OBJECT) {
	                        destination[property] = destProp || {};
	                    } else {
	                        destination[property] = {};
	                    }
	                    deepExtendOne(destination[property], propValue);
	                }
	            } else if (propType !== UNDEFINED) {
	                destination[property] = propValue;
	            }
	        }

	        return destination;
	    }

	    function testRx(agent, rxs, dflt) {
	        for (var rx in rxs) {
	            if (rxs.hasOwnProperty(rx) && rxs[rx].test(agent)) {
	                return rx;
	            }
	        }
	        return dflt !== undefined ? dflt : agent;
	    }

	    function toHyphens(str) {
	        return str.replace(/([a-z][A-Z])/g, function (g) {
	            return g.charAt(0) + '-' + g.charAt(1).toLowerCase();
	        });
	    }

	    function toCamelCase(str) {
	        return str.replace(/\-(\w)/g, function (strMatch, g1) {
	            return g1.toUpperCase();
	        });
	    }

	    function getComputedStyles(element, properties) {
	        var styles = {}, computedStyle;

	        if (document.defaultView && document.defaultView.getComputedStyle) {
	            computedStyle = document.defaultView.getComputedStyle(element, "");

	            if (properties) {
	                $.each(properties, function(idx, value) {
	                    styles[value] = computedStyle.getPropertyValue(value);
	                });
	            }
	        } else {
	            computedStyle = element.currentStyle;

	            if (properties) {
	                $.each(properties, function(idx, value) {
	                    styles[value] = computedStyle[toCamelCase(value)];
	                });
	            }
	        }

	        if (!kendo.size(styles)) {
	            styles = computedStyle;
	        }

	        return styles;
	    }

	    function isScrollable(element) {
	        if (element && element.className && typeof(element.className) === "string" && element.className.indexOf("k-auto-scrollable") > -1) {
	            return true;
	        }

	        var overflow = getComputedStyles(element, ["overflow"]).overflow;
	        return overflow == "auto" || overflow == "scroll";
	    }

	    function scrollLeft(element, value) {
	        var webkit = support.browser.webkit;
	        var mozila = support.browser.mozilla;
	        var el = element instanceof $ ? element[0] : element;
	        var isRtl;

	        if (!element) {
	            return;
	        }

	        isRtl = support.isRtl(element);

	        if (value !== undefined) {
	            if (isRtl && webkit) {
	                el.scrollLeft = el.scrollWidth - el.clientWidth - value;
	            } else if (isRtl && mozila) {
	                el.scrollLeft = -value;
	            } else {
	                el.scrollLeft = value;
	            }
	        } else {
	            if (isRtl && webkit) {
	                return el.scrollWidth - el.clientWidth - el.scrollLeft;
	            } else {
	                return Math.abs(el.scrollLeft);
	            }
	        }
	    }

	    (function () {
	        support._scrollbar = undefined;

	        support.scrollbar = function (refresh) {
	            if (!isNaN(support._scrollbar) && !refresh) {
	                return support._scrollbar;
	            } else {
	                var div = document.createElement("div"),
	                    result;

	                div.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block";
	                div.innerHTML = "&nbsp;";
	                document.body.appendChild(div);

	                support._scrollbar = result = div.offsetWidth - div.scrollWidth;

	                document.body.removeChild(div);

	                return result;
	            }
	        };

	        support.isRtl = function(element) {
	            return $(element).closest(".k-rtl").length > 0;
	        };

	        var table = document.createElement("table");

	        // Internet Explorer does not support setting the innerHTML of TBODY and TABLE elements
	        try {
	            table.innerHTML = "<tr><td></td></tr>";

	            support.tbodyInnerHtml = true;
	        } catch (e) {
	            support.tbodyInnerHtml = false;
	        }

	        support.touch = "ontouchstart" in window;

	        var docStyle = document.documentElement.style;
	        var transitions = support.transitions = false,
	            transforms = support.transforms = false,
	            elementProto = "HTMLElement" in window ? HTMLElement.prototype : [];

	        support.hasHW3D = ("WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix()) || "MozPerspective" in docStyle || "msPerspective" in docStyle;
	        support.cssFlexbox = ("flexWrap" in docStyle) || ("WebkitFlexWrap" in docStyle) || ("msFlexWrap" in docStyle);

	        each([ "Moz", "webkit", "O", "ms" ], function () {
	            var prefix = this.toString(),
	                hasTransitions = typeof table.style[prefix + "Transition"] === STRING;

	            if (hasTransitions || typeof table.style[prefix + "Transform"] === STRING) {
	                var lowPrefix = prefix.toLowerCase();

	                transforms = {
	                    css: (lowPrefix != "ms") ? "-" + lowPrefix + "-" : "",
	                    prefix: prefix,
	                    event: (lowPrefix === "o" || lowPrefix === "webkit") ? lowPrefix : ""
	                };

	                if (hasTransitions) {
	                    transitions = transforms;
	                    transitions.event = transitions.event ? transitions.event + "TransitionEnd" : "transitionend";
	                }

	                return false;
	            }
	        });

	        table = null;

	        support.transforms = transforms;
	        support.transitions = transitions;

	        support.devicePixelRatio = window.devicePixelRatio === undefined ? 1 : window.devicePixelRatio;

	        try {
	            support.screenWidth = window.outerWidth || window.screen ? window.screen.availWidth : window.innerWidth;
	            support.screenHeight = window.outerHeight || window.screen ? window.screen.availHeight : window.innerHeight;
	        } catch(e) {
	            //window.outerWidth throws error when in IE showModalDialog.
	            support.screenWidth = window.screen.availWidth;
	            support.screenHeight = window.screen.availHeight;
	        }

	        support.detectOS = function (ua) {
	            var os = false, minorVersion, match = [],
	                notAndroidPhone = !/mobile safari/i.test(ua),
	                agentRxs = {
	                    wp: /(Windows Phone(?: OS)?)\s(\d+)\.(\d+(\.\d+)?)/,
	                    fire: /(Silk)\/(\d+)\.(\d+(\.\d+)?)/,
	                    android: /(Android|Android.*(?:Opera|Firefox).*?\/)\s*(\d+)\.(\d+(\.\d+)?)/,
	                    iphone: /(iPhone|iPod).*OS\s+(\d+)[\._]([\d\._]+)/,
	                    ipad: /(iPad).*OS\s+(\d+)[\._]([\d_]+)/,
	                    meego: /(MeeGo).+NokiaBrowser\/(\d+)\.([\d\._]+)/,
	                    webos: /(webOS)\/(\d+)\.(\d+(\.\d+)?)/,
	                    blackberry: /(BlackBerry|BB10).*?Version\/(\d+)\.(\d+(\.\d+)?)/,
	                    playbook: /(PlayBook).*?Tablet\s*OS\s*(\d+)\.(\d+(\.\d+)?)/,
	                    windows: /(MSIE)\s+(\d+)\.(\d+(\.\d+)?)/,
	                    tizen: /(tizen).*?Version\/(\d+)\.(\d+(\.\d+)?)/i,
	                    sailfish: /(sailfish).*rv:(\d+)\.(\d+(\.\d+)?).*firefox/i,
	                    ffos: /(Mobile).*rv:(\d+)\.(\d+(\.\d+)?).*Firefox/
	                },
	                osRxs = {
	                    ios: /^i(phone|pad|pod)$/i,
	                    android: /^android|fire$/i,
	                    blackberry: /^blackberry|playbook/i,
	                    windows: /windows/,
	                    wp: /wp/,
	                    flat: /sailfish|ffos|tizen/i,
	                    meego: /meego/
	                },
	                formFactorRxs = {
	                    tablet: /playbook|ipad|fire/i
	                },
	                browserRxs = {
	                    omini: /Opera\sMini/i,
	                    omobile: /Opera\sMobi/i,
	                    firefox: /Firefox|Fennec/i,
	                    mobilesafari: /version\/.*safari/i,
	                    ie: /MSIE|Windows\sPhone/i,
	                    chrome: /chrome|crios/i,
	                    webkit: /webkit/i
	                };

	            for (var agent in agentRxs) {
	                if (agentRxs.hasOwnProperty(agent)) {
	                    match = ua.match(agentRxs[agent]);
	                    if (match) {
	                        if (agent == "windows" && "plugins" in navigator) { return false; } // Break if not Metro/Mobile Windows

	                        os = {};
	                        os.device = agent;
	                        os.tablet = testRx(agent, formFactorRxs, false);
	                        os.browser = testRx(ua, browserRxs, "default");
	                        os.name = testRx(agent, osRxs);
	                        os[os.name] = true;
	                        os.majorVersion = match[2];
	                        os.minorVersion = match[3].replace("_", ".");
	                        minorVersion = os.minorVersion.replace(".", "").substr(0, 2);
	                        os.flatVersion = os.majorVersion + minorVersion + (new Array(3 - (minorVersion.length < 3 ? minorVersion.length : 2)).join("0"));
	                        os.cordova = typeof window.PhoneGap !== UNDEFINED || typeof window.cordova !== UNDEFINED; // Use file protocol to detect appModes.
	                        os.appMode = window.navigator.standalone || (/file|local|wmapp/).test(window.location.protocol) || os.cordova; // Use file protocol to detect appModes.

	                        if (os.android && (support.devicePixelRatio < 1.5 && os.flatVersion < 400 || notAndroidPhone) && (support.screenWidth > 800 || support.screenHeight > 800)) {
	                            os.tablet = agent;
	                        }

	                        break;
	                    }
	                }
	            }
	            return os;
	        };

	        var mobileOS = support.mobileOS = support.detectOS(navigator.userAgent);

	        support.wpDevicePixelRatio = mobileOS.wp ? screen.width / 320 : 0;

	        support.hasNativeScrolling = false;

	        if (mobileOS.ios || (mobileOS.android && mobileOS.majorVersion > 2) || mobileOS.wp) {
	            support.hasNativeScrolling = mobileOS;
	        }

	        support.delayedClick = function() {

	            // only the mobile devices with touch events do this.
	            if (support.touch) {
	                // All iOS devices so far (by the time I am writing this, iOS 9.0.2 is the latest),
	                // delay their click events.
	                if (mobileOS.ios) {
	                    return true;
	                }

	                if (mobileOS.android) {

	                    if (!support.browser.chrome) { // older webkits and webviews delay the click
	                        return true;
	                    }

	                    // from here on, we deal with Chrome on Android.
	                    if (support.browser.version < 32) {
	                        return false;
	                    }

	                    // Chrome 32+ does conditional fast clicks if the view port is not user scalable.
	                    return !($("meta[name=viewport]").attr("content") || "").match(/user-scalable=no/i);
	                }
	            }

	            return false;
	        };

	        support.mouseAndTouchPresent = support.touch && !(support.mobileOS.ios || support.mobileOS.android);

	        support.detectBrowser = function(ua) {
	            var browser = false, match = [],
	                browserRxs = {
	                    edge: /(edge)[ \/]([\w.]+)/i,
	                    webkit: /(chrome)[ \/]([\w.]+)/i,
	                    safari: /(webkit)[ \/]([\w.]+)/i,
	                    opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
	                    msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
	                    mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/i
	                };

	            for (var agent in browserRxs) {
	                if (browserRxs.hasOwnProperty(agent)) {
	                    match = ua.match(browserRxs[agent]);
	                    if (match) {
	                        browser = {};
	                        browser[agent] = true;
	                        browser[match[1].toLowerCase().split(" ")[0].split("/")[0]] = true;
	                        browser.version = parseInt(document.documentMode || match[2], 10);

	                        break;
	                    }
	                }
	            }

	            return browser;
	        };

	        support.browser = support.detectBrowser(navigator.userAgent);

	        support.detectClipboardAccess = function() {
	            var commands = {
	                copy: document.queryCommandSupported ? document.queryCommandSupported("copy") : false,
	                cut: document.queryCommandSupported ? document.queryCommandSupported("cut") : false,
	                paste : document.queryCommandSupported ? document.queryCommandSupported("paste") : false
	            };

	            if (support.browser.chrome) {
	                //not using queryCommandSupported due to chromium issues 476508 and 542948
	                commands.paste = false;
	                if(support.browser.version >= 43) {
	                    commands.copy = true;
	                    commands.cut = true;
	                }
	            }

	            return commands;
	        };

	        support.clipboard = support.detectClipboardAccess();

	        support.zoomLevel = function() {
	            try {
	                var browser = support.browser;
	                var ie11WidthCorrection = 0;
	                var docEl = document.documentElement;

	                if (browser.msie && browser.version == 11 && docEl.scrollHeight > docEl.clientHeight && !support.touch) {
	                    ie11WidthCorrection = support.scrollbar();
	                }

	                return support.touch ? (docEl.clientWidth / window.innerWidth) :
	                       browser.msie && browser.version >= 10 ? (((top || window).document.documentElement.offsetWidth + ie11WidthCorrection) / (top || window).innerWidth) : 1;
	            } catch(e) {
	                return 1;
	            }
	        };

	        support.cssBorderSpacing = typeof docStyle.borderSpacing != "undefined" && !(support.browser.msie && support.browser.version < 8);

	        (function(browser) {
	            // add browser-specific CSS class
	            var cssClass = "",
	                docElement = $(document.documentElement),
	                majorVersion = parseInt(browser.version, 10);

	            if (browser.msie) {
	                cssClass = "ie";
	            } else if (browser.mozilla) {
	                cssClass = "ff";
	            } else if (browser.safari) {
	                cssClass = "safari";
	            } else if (browser.webkit) {
	                cssClass = "webkit";
	            } else if (browser.opera) {
	                cssClass = "opera";
	            } else if (browser.edge) {
	                cssClass = "edge";
	            }

	            if (cssClass) {
	                cssClass = "k-" + cssClass + " k-" + cssClass + majorVersion;
	            }
	            if (support.mobileOS) {
	                cssClass += " k-mobile";
	            }

	            if (!support.cssFlexbox) {
	                cssClass += " k-no-flexbox";
	            }

	            docElement.addClass(cssClass);
	        })(support.browser);

	        support.eventCapture = document.documentElement.addEventListener;

	        var input = document.createElement("input");

	        support.placeholder = "placeholder" in input;
	        support.propertyChangeEvent = "onpropertychange" in input;

	        support.input = (function() {
	            var types = ["number", "date", "time", "month", "week", "datetime", "datetime-local"];
	            var length = types.length;
	            var value = "test";
	            var result = {};
	            var idx = 0;
	            var type;

	            for (;idx < length; idx++) {
	                type = types[idx];
	                input.setAttribute("type", type);
	                input.value = value;

	                result[type.replace("-", "")] = input.type !== "text" && input.value !== value;
	            }

	            return result;
	        })();

	        input.style.cssText = "float:left;";

	        support.cssFloat = !!input.style.cssFloat;

	        input = null;

	        support.stableSort = (function() {
	            // Chrome sort is not stable for more than *10* items
	            // IE9+ sort is not stable for than *512* items
	            var threshold = 513;

	            var sorted = [{
	                index: 0,
	                field: "b"
	            }];

	            for (var i = 1; i < threshold; i++) {
	                sorted.push({
	                    index: i,
	                    field: "a"
	                });
	            }

	            sorted.sort(function(a, b) {
	                return a.field > b.field ? 1 : (a.field < b.field ? -1 : 0);
	            });

	            return sorted[0].index === 1;
	        })();

	        support.matchesSelector = elementProto.webkitMatchesSelector || elementProto.mozMatchesSelector ||
	                                  elementProto.msMatchesSelector || elementProto.oMatchesSelector ||
	                                  elementProto.matchesSelector || elementProto.matches ||
	          function( selector ) {
	              var nodeList = document.querySelectorAll ? ( this.parentNode || document ).querySelectorAll( selector ) || [] : $(selector),
	                  i = nodeList.length;

	              while (i--) {
	                  if (nodeList[i] == this) {
	                      return true;
	                  }
	              }

	              return false;
	          };

	        support.pushState = window.history && window.history.pushState;

	        var documentMode = document.documentMode;

	        support.hashChange = ("onhashchange" in window) && !(support.browser.msie && (!documentMode || documentMode <= 8)); // old IE detection

	        support.customElements = ("registerElement" in window.document);

	        var chrome = support.browser.chrome;
	        support.msPointers = !chrome && window.MSPointerEvent;
	        support.pointers = !chrome && window.PointerEvent;
	        support.kineticScrollNeeded = mobileOS && (support.touch || support.msPointers || support.pointers);
	    })();


	    function size(obj) {
	        var result = 0, key;
	        for (key in obj) {
	            if (obj.hasOwnProperty(key) && key != "toJSON") { // Ignore fake IE7 toJSON.
	                result++;
	            }
	        }

	        return result;
	    }

	    function getOffset(element, type, positioned) {
	        if (!type) {
	            type = "offset";
	        }

	        var offset = element[type]();
	        // clone ClientRect object to JS object (jQuery3)
	        var result = {
	            top: offset.top,
	            right: offset.right,
	            bottom: offset.bottom,
	            left: offset.left
	        };

	        // IE10 touch zoom is living in a separate viewport
	        if (support.browser.msie && (support.pointers || support.msPointers) && !positioned) {
	            var sign = support.isRtl(element) ? 1 : -1;
	            result.top -= (window.pageYOffset + (sign * document.documentElement.scrollTop));
	            result.left -= (window.pageXOffset + (sign * document.documentElement.scrollLeft));
	        }

	        return result;
	    }

	    var directions = {
	        left: { reverse: "right" },
	        right: { reverse: "left" },
	        down: { reverse: "up" },
	        up: { reverse: "down" },
	        top: { reverse: "bottom" },
	        bottom: { reverse: "top" },
	        "in": { reverse: "out" },
	        out: { reverse: "in" }
	    };

	    function parseEffects(input) {
	        var effects = {};

	        each((typeof input === "string" ? input.split(" ") : input), function(idx) {
	            effects[idx] = this;
	        });

	        return effects;
	    }

	    function fx(element) {
	        return new kendo.effects.Element(element);
	    }

	    var effects = {};

	    $.extend(effects, {
	        enabled: true,
	        Element: function(element) {
	            this.element = $(element);
	        },

	        promise: function(element, options) {
	            if (!element.is(":visible")) {
	                element.css({ display: element.data("olddisplay") || "block" }).css("display");
	            }

	            if (options.hide) {
	                element.data("olddisplay", element.css("display")).hide();
	            }

	            if (options.init) {
	                options.init();
	            }

	            if (options.completeCallback) {
	                options.completeCallback(element); // call the external complete callback with the element
	            }

	            element.dequeue();
	        },

	        disable: function() {
	            this.enabled = false;
	            this.promise = this.promiseShim;
	        },

	        enable: function() {
	            this.enabled = true;
	            this.promise = this.animatedPromise;
	        }
	    });

	    effects.promiseShim = effects.promise;

	    function prepareAnimationOptions(options, duration, reverse, complete) {
	        if (typeof options === STRING) {
	            // options is the list of effect names separated by space e.g. animate(element, "fadeIn slideDown")

	            // only callback is provided e.g. animate(element, options, function() {});
	            if (isFunction(duration)) {
	                complete = duration;
	                duration = 400;
	                reverse = false;
	            }

	            if (isFunction(reverse)) {
	                complete = reverse;
	                reverse = false;
	            }

	            if (typeof duration === BOOLEAN){
	                reverse = duration;
	                duration = 400;
	            }

	            options = {
	                effects: options,
	                duration: duration,
	                reverse: reverse,
	                complete: complete
	            };
	        }

	        return extend({
	            //default options
	            effects: {},
	            duration: 400, //jQuery default duration
	            reverse: false,
	            init: noop,
	            teardown: noop,
	            hide: false
	        }, options, { completeCallback: options.complete, complete: noop }); // Move external complete callback, so deferred.resolve can be always executed.

	    }

	    function animate(element, options, duration, reverse, complete) {
	        var idx = 0,
	            length = element.length,
	            instance;

	        for (; idx < length; idx ++) {
	            instance = $(element[idx]);
	            instance.queue(function() {
	                effects.promise(instance, prepareAnimationOptions(options, duration, reverse, complete));
	            });
	        }

	        return element;
	    }

	    function toggleClass(element, classes, options, add) {
	        if (classes) {
	            classes = classes.split(" ");

	            each(classes, function(idx, value) {
	                element.toggleClass(value, add);
	            });
	        }

	        return element;
	    }

	    if (!("kendoAnimate" in $.fn)) {
	        extend($.fn, {
	            kendoStop: function(clearQueue, gotoEnd) {
	                return this.stop(clearQueue, gotoEnd);
	            },

	            kendoAnimate: function(options, duration, reverse, complete) {
	                return animate(this, options, duration, reverse, complete);
	            },

	            kendoAddClass: function(classes, options){
	                return kendo.toggleClass(this, classes, options, true);
	            },

	            kendoRemoveClass: function(classes, options){
	                return kendo.toggleClass(this, classes, options, false);
	            },
	            kendoToggleClass: function(classes, options, toggle){
	                return kendo.toggleClass(this, classes, options, toggle);
	            }
	        });
	    }

	    var ampRegExp = /&/g,
	        ltRegExp = /</g,
	        quoteRegExp = /"/g,
	        aposRegExp = /'/g,
	        gtRegExp = />/g;
	    function htmlEncode(value) {
	        return ("" + value).replace(ampRegExp, "&amp;").replace(ltRegExp, "&lt;").replace(gtRegExp, "&gt;").replace(quoteRegExp, "&quot;").replace(aposRegExp, "&#39;");
	    }

	    var eventTarget = function (e) {
	        return e.target;
	    };

	    if (support.touch) {

	        eventTarget = function(e) {
	            var touches = "originalEvent" in e ? e.originalEvent.changedTouches : "changedTouches" in e ? e.changedTouches : null;

	            return touches ? document.elementFromPoint(touches[0].clientX, touches[0].clientY) : e.target;
	        };

	        each(["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap"], function(m, value) {
	            $.fn[value] = function(callback) {
	                return this.bind(value, callback);
	            };
	        });
	    }

	    if (support.touch) {
	        if (!support.mobileOS) {
	            support.mousedown = "mousedown touchstart";
	            support.mouseup = "mouseup touchend";
	            support.mousemove = "mousemove touchmove";
	            support.mousecancel = "mouseleave touchcancel";
	            support.click = "click";
	            support.resize = "resize";
	        } else {
	            support.mousedown = "touchstart";
	            support.mouseup = "touchend";
	            support.mousemove = "touchmove";
	            support.mousecancel = "touchcancel";
	            support.click = "touchend";
	            support.resize = "orientationchange";
	        }
	    } else if (support.pointers) {
	        support.mousemove = "pointermove";
	        support.mousedown = "pointerdown";
	        support.mouseup = "pointerup";
	        support.mousecancel = "pointercancel";
	        support.click = "pointerup";
	        support.resize = "orientationchange resize";
	    } else if (support.msPointers) {
	        support.mousemove = "MSPointerMove";
	        support.mousedown = "MSPointerDown";
	        support.mouseup = "MSPointerUp";
	        support.mousecancel = "MSPointerCancel";
	        support.click = "MSPointerUp";
	        support.resize = "orientationchange resize";
	    } else {
	        support.mousemove = "mousemove";
	        support.mousedown = "mousedown";
	        support.mouseup = "mouseup";
	        support.mousecancel = "mouseleave";
	        support.click = "click";
	        support.resize = "resize";
	    }

	    var wrapExpression = function(members, paramName) {
	        var result = paramName || "d",
	            index,
	            idx,
	            length,
	            member,
	            count = 1;

	        for (idx = 0, length = members.length; idx < length; idx++) {
	            member = members[idx];
	            if (member !== "") {
	                index = member.indexOf("[");

	                if (index !== 0) {
	                    if (index == -1) {
	                        member = "." + member;
	                    } else {
	                        count++;
	                        member = "." + member.substring(0, index) + " || {})" + member.substring(index);
	                    }
	                }

	                count++;
	                result += member + ((idx < length - 1) ? " || {})" : ")");
	            }
	        }
	        return new Array(count).join("(") + result;
	    },
	    localUrlRe = /^([a-z]+:)?\/\//i;

	    extend(kendo, {
	        widgets: [],
	        _widgetRegisteredCallbacks: [],
	        ui: kendo.ui || {},
	        fx: kendo.fx || fx,
	        effects: kendo.effects || effects,
	        mobile: kendo.mobile || { },
	        data: kendo.data || {},
	        dataviz: kendo.dataviz || {},
	        drawing: kendo.drawing || {},
	        spreadsheet: { messages: {} },
	        keys: {
	            INSERT: 45,
	            DELETE: 46,
	            BACKSPACE: 8,
	            TAB: 9,
	            ENTER: 13,
	            ESC: 27,
	            LEFT: 37,
	            UP: 38,
	            RIGHT: 39,
	            DOWN: 40,
	            END: 35,
	            HOME: 36,
	            SPACEBAR: 32,
	            PAGEUP: 33,
	            PAGEDOWN: 34,
	            F2: 113,
	            F10: 121,
	            F12: 123,
	            NUMPAD_PLUS: 107,
	            NUMPAD_MINUS: 109,
	            NUMPAD_DOT: 110
	        },
	        support: kendo.support || support,
	        animate: kendo.animate || animate,
	        ns: "",
	        attr: function(value) {
	            return "data-" + kendo.ns + value;
	        },
	        getShadows: getShadows,
	        wrap: wrap,
	        deepExtend: deepExtend,
	        getComputedStyles: getComputedStyles,
	        webComponents: kendo.webComponents || [],
	        isScrollable: isScrollable,
	        scrollLeft: scrollLeft,
	        size: size,
	        toCamelCase: toCamelCase,
	        toHyphens: toHyphens,
	        getOffset: kendo.getOffset || getOffset,
	        parseEffects: kendo.parseEffects || parseEffects,
	        toggleClass: kendo.toggleClass || toggleClass,
	        directions: kendo.directions || directions,
	        Observable: Observable,
	        Class: Class,
	        Template: Template,
	        template: proxy(Template.compile, Template),
	        render: proxy(Template.render, Template),
	        stringify: proxy(JSON.stringify, JSON),
	        eventTarget: eventTarget,
	        htmlEncode: htmlEncode,
	        isLocalUrl: function(url) {
	            return url && !localUrlRe.test(url);
	        },

	        expr: function(expression, safe, paramName) {
	            expression = expression || "";

	            if (typeof safe == STRING) {
	                paramName = safe;
	                safe = false;
	            }

	            paramName = paramName || "d";

	            if (expression && expression.charAt(0) !== "[") {
	                expression = "." + expression;
	            }

	            if (safe) {
	                expression = expression.replace(/"([^.]*)\.([^"]*)"/g,'"$1_$DOT$_$2"');
	                expression = expression.replace(/'([^.]*)\.([^']*)'/g,"'$1_$DOT$_$2'");
	                expression = wrapExpression(expression.split("."), paramName);
	                expression = expression.replace(/_\$DOT\$_/g, ".");
	            } else {
	                expression = paramName + expression;
	            }

	            return expression;
	        },

	        getter: function(expression, safe) {
	            var key = expression + safe;
	            return getterCache[key] = getterCache[key] || new Function("d", "return " + kendo.expr(expression, safe));
	        },

	        setter: function(expression) {
	            return setterCache[expression] = setterCache[expression] || new Function("d,value", kendo.expr(expression) + "=value");
	        },

	        accessor: function(expression) {
	            return {
	                get: kendo.getter(expression),
	                set: kendo.setter(expression)
	            };
	        },

	        guid: function() {
	            var id = "", i, random;

	            for (i = 0; i < 32; i++) {
	                random = math.random() * 16 | 0;

	                if (i == 8 || i == 12 || i == 16 || i == 20) {
	                    id += "-";
	                }
	                id += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
	            }

	            return id;
	        },

	        roleSelector: function(role) {
	            return role.replace(/(\S+)/g, "[" + kendo.attr("role") + "=$1],").slice(0, -1);
	        },

	        directiveSelector: function(directives) {
	            var selectors = directives.split(" ");

	            if (selectors) {
	                for (var i = 0; i < selectors.length; i++) {
	                    if (selectors[i] != "view") {
	                        selectors[i] = selectors[i].replace(/(\w*)(view|bar|strip|over)$/, "$1-$2");
	                    }
	                }
	            }

	            return selectors.join(" ").replace(/(\S+)/g, "kendo-mobile-$1,").slice(0, -1);
	        },

	        triggeredByInput: function(e) {
	            return (/^(label|input|textarea|select)$/i).test(e.target.tagName);
	        },

	        onWidgetRegistered: function(callback) {
	            for (var i = 0, len = kendo.widgets.length; i < len; i++) {
	                callback(kendo.widgets[i]);
	            }

	            kendo._widgetRegisteredCallbacks.push(callback);
	        },

	        logToConsole: function(message, type) {
	            var console = window.console;

	            if (!kendo.suppressLog && typeof(console) != "undefined" && console.log) {
	                console[type || "log"](message);
	            }
	        }
	    });

	    var Widget = Observable.extend( {
	        init: function(element, options) {
	            var that = this;

	            that.element = kendo.jQuery(element).handler(that);

	            that.angular("init", options);

	            Observable.fn.init.call(that);

	            var dataSource = options ? options.dataSource : null;

	            if (dataSource) {
	                // avoid deep cloning the data source
	                options = extend({}, options, { dataSource: {} });
	            }

	            options = that.options = extend(true, {}, that.options, options);

	            if (dataSource) {
	                options.dataSource = dataSource;
	            }

	            if (!that.element.attr(kendo.attr("role"))) {
	                that.element.attr(kendo.attr("role"), (options.name || "").toLowerCase());
	            }

	            that.element.data("kendo" + options.prefix + options.name, that);

	            that.bind(that.events, options);
	        },

	        events: [],

	        options: {
	            prefix: ""
	        },

	        _hasBindingTarget: function() {
	            return !!this.element[0].kendoBindingTarget;
	        },

	        _tabindex: function(target) {
	            target = target || this.wrapper;

	            var element = this.element,
	                TABINDEX = "tabindex",
	                tabindex = target.attr(TABINDEX) || element.attr(TABINDEX);

	            element.removeAttr(TABINDEX);

	            target.attr(TABINDEX, !isNaN(tabindex) ? tabindex : 0);
	        },

	        setOptions: function(options) {
	            this._setEvents(options);
	            $.extend(this.options, options);
	        },

	        _setEvents: function(options) {
	            var that = this,
	                idx = 0,
	                length = that.events.length,
	                e;

	            for (; idx < length; idx ++) {
	                e = that.events[idx];
	                if (that.options[e] && options[e]) {
	                    that.unbind(e, that.options[e]);
	                }
	            }

	            that.bind(that.events, options);
	        },

	        resize: function(force) {
	            var size = this.getSize(),
	                currentSize = this._size;

	            if (force || (size.width > 0 || size.height > 0) && (!currentSize || size.width !== currentSize.width || size.height !== currentSize.height)) {
	                this._size = size;
	                this._resize(size, force);
	                this.trigger("resize", size);
	            }
	        },

	        getSize: function() {
	            return kendo.dimensions(this.element);
	        },

	        size: function(size) {
	            if (!size) {
	                return this.getSize();
	            } else {
	                this.setSize(size);
	            }
	        },

	        setSize: $.noop,
	        _resize: $.noop,

	        destroy: function() {
	            var that = this;

	            that.element.removeData("kendo" + that.options.prefix + that.options.name);
	            that.element.removeData("handler");
	            that.unbind();
	        },
	        _destroy: function() {
	            this.destroy();
	        },
	        angular: function(){},

	        _muteAngularRebind: function(callback) {
	            this._muteRebind = true;

	            callback.call(this);

	            this._muteRebind = false;
	        }
	    });

	    var DataBoundWidget = Widget.extend({
	        // Angular consumes these.
	        dataItems: function() {
	            return this.dataSource.flatView();
	        },

	        _angularItems: function(cmd) {
	            var that = this;
	            that.angular(cmd, function(){
	                return {
	                    elements: that.items(),
	                    data: $.map(that.dataItems(), function(dataItem){
	                        return { dataItem: dataItem };
	                    })
	                };
	            });
	        }
	    });

	    kendo.dimensions = function(element, dimensions) {
	        var domElement = element[0];

	        if (dimensions) {
	            element.css(dimensions);
	        }

	        return { width: domElement.offsetWidth, height: domElement.offsetHeight };
	    };

	    kendo.notify = noop;

	    var templateRegExp = /template$/i,
	        jsonRegExp = /^\s*(?:\{(?:.|\r\n|\n)*\}|\[(?:.|\r\n|\n)*\])\s*$/,
	        jsonFormatRegExp = /^\{(\d+)(:[^\}]+)?\}|^\[[A-Za-z_]*\]$/,
	        dashRegExp = /([A-Z])/g;

	    function parseOption(element, option) {
	        var value;

	        if (option.indexOf("data") === 0) {
	            option = option.substring(4);
	            option = option.charAt(0).toLowerCase() + option.substring(1);
	        }

	        option = option.replace(dashRegExp, "-$1");
	        value = element.getAttribute("data-" + kendo.ns + option);

	        if (value === null) {
	            value = undefined;
	        } else if (value === "null") {
	            value = null;
	        } else if (value === "true") {
	            value = true;
	        } else if (value === "false") {
	            value = false;
	        } else if (numberRegExp.test(value)) {
	            value = parseFloat(value);
	        } else if (jsonRegExp.test(value) && !jsonFormatRegExp.test(value)) {
	            value = new Function("return (" + value + ")")();
	        }

	        return value;
	    }

	    function parseOptions(element, options) {
	        var result = {},
	            option,
	            value;

	        for (option in options) {
	            value = parseOption(element, option);

	            if (value !== undefined) {

	                if (templateRegExp.test(option)) {
	                    if(typeof value === "string") {
	                        value = kendo.template($("#" + value).html());
	                    } else {
	                        value = element.getAttribute(option);
	                    }
	                }

	                result[option] = value;
	            }
	        }

	        return result;
	    }

	    kendo.initWidget = function(element, options, roles) {
	        var result,
	            option,
	            widget,
	            idx,
	            length,
	            role,
	            value,
	            dataSource,
	            fullPath,
	            widgetKeyRegExp;

	        // Preserve backwards compatibility with (element, options, namespace) signature, where namespace was kendo.ui
	        if (!roles) {
	            roles = kendo.ui.roles;
	        } else if (roles.roles) {
	            roles = roles.roles;
	        }

	        element = element.nodeType ? element : element[0];

	        role = element.getAttribute("data-" + kendo.ns + "role");

	        if (!role) {
	            return;
	        }

	        fullPath = role.indexOf(".") === -1;

	        // look for any widget that may be already instantiated based on this role.
	        // The prefix used is unknown, hence the regexp
	        //

	        if (fullPath) {
	            widget = roles[role];
	        } else { // full namespace path - like kendo.ui.Widget
	            widget = kendo.getter(role)(window);
	        }

	        var data = $(element).data(),
	            widgetKey = widget ? "kendo" + widget.fn.options.prefix + widget.fn.options.name : "";

	        if (fullPath) {
	            widgetKeyRegExp = new RegExp("^kendo.*" + role + "$", "i");
	        } else { // full namespace path - like kendo.ui.Widget
	            widgetKeyRegExp = new RegExp("^" + widgetKey + "$", "i");
	        }

	        for(var key in data) {
	            if (key.match(widgetKeyRegExp)) {
	                // we have detected a widget of the same kind - save its reference, we will set its options
	                if (key === widgetKey) {
	                    result = data[key];
	                } else {
	                    return data[key];
	                }
	            }
	        }

	        if (!widget) {
	            return;
	        }

	        dataSource = parseOption(element, "dataSource");

	        options = $.extend({}, parseOptions(element, widget.fn.options), options);

	        if (dataSource) {
	            if (typeof dataSource === STRING) {
	                options.dataSource = kendo.getter(dataSource)(window);
	            } else {
	                options.dataSource = dataSource;
	            }
	        }

	        for (idx = 0, length = widget.fn.events.length; idx < length; idx++) {
	            option = widget.fn.events[idx];

	            value = parseOption(element, option);

	            if (value !== undefined) {
	                options[option] = kendo.getter(value)(window);
	            }
	        }

	        if (!result) {
	            result = new widget(element, options);
	        } else if (!$.isEmptyObject(options)) {
	            result.setOptions(options);
	        }

	        return result;
	    };

	    kendo.rolesFromNamespaces = function(namespaces) {
	        var roles = [],
	            idx,
	            length;

	        if (!namespaces[0]) {
	            namespaces = [kendo.ui, kendo.dataviz.ui];
	        }

	        for (idx = 0, length = namespaces.length; idx < length; idx ++) {
	            roles[idx] = namespaces[idx].roles;
	        }

	        return extend.apply(null, [{}].concat(roles.reverse()));
	    };

	    kendo.init = function(element) {
	        var roles = kendo.rolesFromNamespaces(slice.call(arguments, 1));

	        $(element).find("[data-" + kendo.ns + "role]").addBack().each(function(){
	            kendo.initWidget(this, {}, roles);
	        });
	    };

	    kendo.destroy = function(element) {
	        $(element).find("[data-" + kendo.ns + "role]").addBack().each(function(){
	            var data = $(this).data();

	            for (var key in data) {
	                if (key.indexOf("kendo") === 0 && typeof data[key].destroy === FUNCTION) {
	                    data[key].destroy();
	                }
	            }
	        });
	    };

	    function containmentComparer(a, b) {
	        return $.contains(a, b) ? -1 : 1;
	    }

	    function resizableWidget() {
	        var widget = $(this);
	        return ($.inArray(widget.attr("data-" + kendo.ns + "role"), ["slider", "rangeslider"]) > -1) || widget.is(":visible");
	    }

	    kendo.resize = function(element, force) {
	        var widgets = $(element).find("[data-" + kendo.ns + "role]").addBack().filter(resizableWidget);

	        if (!widgets.length) {
	            return;
	        }

	        // sort widgets based on their parent-child relation
	        var widgetsArray = $.makeArray(widgets);
	        widgetsArray.sort(containmentComparer);

	        // resize widgets
	        $.each(widgetsArray, function () {
	            var widget = kendo.widgetInstance($(this));
	            if (widget) {
	                widget.resize(force);
	            }
	        });
	    };

	    kendo.parseOptions = parseOptions;

	    extend(kendo.ui, {
	        Widget: Widget,
	        DataBoundWidget: DataBoundWidget,
	        roles: {},
	        progress: function(container, toggle) {
	            var mask = container.find(".k-loading-mask"),
	                support = kendo.support,
	                browser = support.browser,
	                isRtl, leftRight, webkitCorrection, containerScrollLeft;

	            if (toggle) {
	                if (!mask.length) {
	                    isRtl = support.isRtl(container);
	                    leftRight = isRtl ? "right" : "left";
	                    containerScrollLeft = container.scrollLeft();
	                    webkitCorrection = browser.webkit ? (!isRtl ? 0 : container[0].scrollWidth - container.width() - 2 * containerScrollLeft) : 0;

	                    mask = $("<div class='k-loading-mask'><span class='k-loading-text'>" + kendo.ui.progress.messages.loading + "</span><div class='k-loading-image'/><div class='k-loading-color'/></div>")
	                        .width("100%").height("100%")
	                        .css("top", container.scrollTop())
	                        .css(leftRight, Math.abs(containerScrollLeft) + webkitCorrection)
	                        .prependTo(container);
	                }
	            } else if (mask) {
	                mask.remove();
	            }
	        },
	        plugin: function(widget, register, prefix) {
	            var name = widget.fn.options.name,
	                getter;

	            register = register || kendo.ui;
	            prefix = prefix || "";

	            register[name] = widget;

	            register.roles[name.toLowerCase()] = widget;

	            getter = "getKendo" + prefix + name;
	            name = "kendo" + prefix + name;

	            var widgetEntry = { name: name, widget: widget, prefix: prefix || "" };
	            kendo.widgets.push(widgetEntry);

	            for (var i = 0, len = kendo._widgetRegisteredCallbacks.length; i < len; i++) {
	                kendo._widgetRegisteredCallbacks[i](widgetEntry);
	            }

	            $.fn[name] = function(options) {
	                var value = this,
	                    args;

	                if (typeof options === STRING) {
	                    args = slice.call(arguments, 1);

	                    this.each(function(){
	                        var widget = $.data(this, name),
	                            method,
	                            result;

	                        if (!widget) {
	                            throw new Error(kendo.format("Cannot call method '{0}' of {1} before it is initialized", options, name));
	                        }

	                        method = widget[options];

	                        if (typeof method !== FUNCTION) {
	                            throw new Error(kendo.format("Cannot find method '{0}' of {1}", options, name));
	                        }

	                        result = method.apply(widget, args);

	                        if (result !== undefined) {
	                            value = result;
	                            return false;
	                        }
	                    });
	                } else {
	                    this.each(function() {
	                        return new widget(this, options);
	                    });
	                }

	                return value;
	            };

	            $.fn[name].widget = widget;

	            $.fn[getter] = function() {
	                return this.data(name);
	            };
	        }
	    });

	    kendo.ui.progress.messages = {
	        loading: "Loading..."
	    };

	    var ContainerNullObject = { bind: function () { return this; }, nullObject: true, options: {} };

	    var MobileWidget = Widget.extend({
	        init: function(element, options) {
	            Widget.fn.init.call(this, element, options);
	            this.element.autoApplyNS();
	            this.wrapper = this.element;
	            this.element.addClass("km-widget");
	        },

	        destroy: function() {
	            Widget.fn.destroy.call(this);
	            this.element.kendoDestroy();
	        },

	        options: {
	            prefix: "Mobile"
	        },

	        events: [],

	        view: function() {
	            var viewElement = this.element.closest(kendo.roleSelector("view splitview modalview drawer"));
	            return kendo.widgetInstance(viewElement, kendo.mobile.ui) || ContainerNullObject;
	        },

	        viewHasNativeScrolling: function() {
	            var view = this.view();
	            return view && view.options.useNativeScrolling;
	        },

	        container: function() {
	            var element = this.element.closest(kendo.roleSelector("view layout modalview drawer splitview"));
	            return kendo.widgetInstance(element.eq(0), kendo.mobile.ui) || ContainerNullObject;
	        }
	    });

	    extend(kendo.mobile, {
	        init: function(element) {
	            kendo.init(element, kendo.mobile.ui, kendo.ui, kendo.dataviz.ui);
	        },

	        appLevelNativeScrolling: function() {
	            return kendo.mobile.application && kendo.mobile.application.options && kendo.mobile.application.options.useNativeScrolling;
	        },

	        roles: {},

	        ui: {
	            Widget: MobileWidget,
	            DataBoundWidget: DataBoundWidget.extend(MobileWidget.prototype),
	            roles: {},
	            plugin: function(widget) {
	                kendo.ui.plugin(widget, kendo.mobile.ui, "Mobile");
	            }
	        }
	    });

	    deepExtend(kendo.dataviz, {
	        init: function(element) {
	            kendo.init(element, kendo.dataviz.ui);
	        },
	        ui: {
	            roles: {},
	            themes: {},
	            views: [],
	            plugin: function(widget) {
	                kendo.ui.plugin(widget, kendo.dataviz.ui);
	            }
	        },
	        roles: {}
	    });

	    kendo.touchScroller = function(elements, options) {
	        // return the first touch scroller
	        if (!options){ options = {}; }

	        options.useNative = true;

	        return $(elements).map(function(idx, element) {
	            element = $(element);
	            if (support.kineticScrollNeeded && kendo.mobile.ui.Scroller && !element.data("kendoMobileScroller")) {
	                element.kendoMobileScroller(options);
	                return element.data("kendoMobileScroller");
	            } else {
	                return false;
	            }
	        })[0];
	    };

	    kendo.preventDefault = function(e) {
	        e.preventDefault();
	    };

	    kendo.widgetInstance = function(element, suites) {
	        var role = element.data(kendo.ns + "role"),
	            widgets = [], i, length;

	        if (role) {
	            // HACK!!! mobile view scroller widgets are instantiated on data-role="content" elements. We need to discover them when resizing.
	            if (role === "content") {
	                role = "scroller";
	            }

	            if (suites) {
	                if (suites[0]) {
	                    for (i = 0, length = suites.length; i < length; i ++) {
	                        widgets.push(suites[i].roles[role]);
	                    }
	                } else {
	                    widgets.push(suites.roles[role]);
	                }
	            }
	            else {
	                widgets = [ kendo.ui.roles[role], kendo.dataviz.ui.roles[role],  kendo.mobile.ui.roles[role] ];
	            }

	            if (role.indexOf(".") >= 0) {
	                widgets = [ kendo.getter(role)(window) ];
	            }

	            for (i = 0, length = widgets.length; i < length; i ++) {
	                var widget = widgets[i];
	                if (widget) {
	                    var instance = element.data("kendo" + widget.fn.options.prefix + widget.fn.options.name);
	                    if (instance) {
	                        return instance;
	                    }
	                }
	            }
	        }
	    };

	    kendo.onResize = function(callback) {
	        var handler = callback;
	        if (support.mobileOS.android) {
	            handler = function() { setTimeout(callback, 600); };
	        }

	        $(window).on(support.resize, handler);
	        return handler;
	    };

	    kendo.unbindResize = function(callback) {
	        $(window).off(support.resize, callback);
	    };

	    kendo.attrValue = function(element, key) {
	        return element.data(kendo.ns + key);
	    };

	    kendo.days = {
	        Sunday: 0,
	        Monday: 1,
	        Tuesday: 2,
	        Wednesday: 3,
	        Thursday: 4,
	        Friday: 5,
	        Saturday: 6
	    };

	    function focusable(element, isTabIndexNotNaN) {
	        var nodeName = element.nodeName.toLowerCase();

	        return (/input|select|textarea|button|object/.test(nodeName) ?
	                !element.disabled :
	                "a" === nodeName ?
	                element.href || isTabIndexNotNaN :
	                isTabIndexNotNaN
	               ) &&
	            visible(element);
	    }

	    function visible(element) {
	        return $.expr.filters.visible(element) &&
	            !$(element).parents().addBack().filter(function() {
	                return $.css(this,"visibility") === "hidden";
	            }).length;
	    }

	    $.extend($.expr[ ":" ], {
	        kendoFocusable: function(element) {
	            var idx = $.attr(element, "tabindex");
	            return focusable(element, !isNaN(idx) && idx > -1);
	        }
	    });

	    var MOUSE_EVENTS = ["mousedown", "mousemove", "mouseenter", "mouseleave", "mouseover", "mouseout", "mouseup", "click"];
	    var EXCLUDE_BUST_CLICK_SELECTOR = "label, input, [data-rel=external]";

	    var MouseEventNormalizer = {
	        setupMouseMute: function() {
	            var idx = 0,
	                length = MOUSE_EVENTS.length,
	                element = document.documentElement;

	            if (MouseEventNormalizer.mouseTrap || !support.eventCapture) {
	                return;
	            }

	            MouseEventNormalizer.mouseTrap = true;

	            MouseEventNormalizer.bustClick = false;
	            MouseEventNormalizer.captureMouse = false;

	            var handler = function(e) {
	                if (MouseEventNormalizer.captureMouse) {
	                    if (e.type === "click") {
	                        if (MouseEventNormalizer.bustClick && !$(e.target).is(EXCLUDE_BUST_CLICK_SELECTOR)) {
	                            e.preventDefault();
	                            e.stopPropagation();
	                        }
	                    } else {
	                        e.stopPropagation();
	                    }
	                }
	            };

	            for (; idx < length; idx++) {
	                element.addEventListener(MOUSE_EVENTS[idx], handler, true);
	            }
	        },

	        muteMouse: function(e) {
	            MouseEventNormalizer.captureMouse = true;
	            if (e.data.bustClick) {
	                MouseEventNormalizer.bustClick = true;
	            }
	            clearTimeout(MouseEventNormalizer.mouseTrapTimeoutID);
	        },

	        unMuteMouse: function() {
	            clearTimeout(MouseEventNormalizer.mouseTrapTimeoutID);
	            MouseEventNormalizer.mouseTrapTimeoutID = setTimeout(function() {
	                MouseEventNormalizer.captureMouse = false;
	                MouseEventNormalizer.bustClick = false;
	            }, 400);
	        }
	    };

	    var eventMap = {
	        down: "touchstart mousedown",
	        move: "mousemove touchmove",
	        up: "mouseup touchend touchcancel",
	        cancel: "mouseleave touchcancel"
	    };

	    if (support.touch && (support.mobileOS.ios || support.mobileOS.android)) {
	        eventMap = {
	            down: "touchstart",
	            move: "touchmove",
	            up: "touchend touchcancel",
	            cancel: "touchcancel"
	        };
	    } else if (support.pointers) {
	        eventMap = {
	            down: "pointerdown",
	            move: "pointermove",
	            up: "pointerup",
	            cancel: "pointercancel pointerleave"
	        };
	    } else if (support.msPointers) {
	        eventMap = {
	            down: "MSPointerDown",
	            move: "MSPointerMove",
	            up: "MSPointerUp",
	            cancel: "MSPointerCancel MSPointerLeave"
	        };
	    }

	    if (support.msPointers && !("onmspointerenter" in window)) { // IE10
	        // Create MSPointerEnter/MSPointerLeave events using mouseover/out and event-time checks
	        $.each({
	            MSPointerEnter: "MSPointerOver",
	            MSPointerLeave: "MSPointerOut"
	        }, function( orig, fix ) {
	            $.event.special[ orig ] = {
	                delegateType: fix,
	                bindType: fix,

	                handle: function( event ) {
	                    var ret,
	                        target = this,
	                        related = event.relatedTarget,
	                        handleObj = event.handleObj;

	                    // For mousenter/leave call the handler if related is outside the target.
	                    // NB: No relatedTarget if the mouse left/entered the browser window
	                    if ( !related || (related !== target && !$.contains( target, related )) ) {
	                        event.type = handleObj.origType;
	                        ret = handleObj.handler.apply( this, arguments );
	                        event.type = fix;
	                    }
	                    return ret;
	                }
	            };
	        });
	    }


	    var getEventMap = function(e) { return (eventMap[e] || e); },
	        eventRegEx = /([^ ]+)/g;

	    kendo.applyEventMap = function(events, ns) {
	        events = events.replace(eventRegEx, getEventMap);

	        if (ns) {
	            events = events.replace(eventRegEx, "$1." + ns);
	        }

	        return events;
	    };

	    var on = $.fn.on;

	    function kendoJQuery(selector, context) {
	        return new kendoJQuery.fn.init(selector, context);
	    }

	    extend(true, kendoJQuery, $);

	    kendoJQuery.fn = kendoJQuery.prototype = new $();

	    kendoJQuery.fn.constructor = kendoJQuery;

	    kendoJQuery.fn.init = function(selector, context) {
	        if (context && context instanceof $ && !(context instanceof kendoJQuery)) {
	            context = kendoJQuery(context);
	        }

	        return $.fn.init.call(this, selector, context, rootjQuery);
	    };

	    kendoJQuery.fn.init.prototype = kendoJQuery.fn;

	    var rootjQuery = kendoJQuery(document);

	    extend(kendoJQuery.fn, {
	        handler: function(handler) {
	            this.data("handler", handler);
	            return this;
	        },

	        autoApplyNS: function(ns) {
	            this.data("kendoNS", ns || kendo.guid());
	            return this;
	        },

	        on: function() {
	            var that = this,
	                ns = that.data("kendoNS");

	            // support for event map signature
	            if (arguments.length === 1) {
	                return on.call(that, arguments[0]);
	            }

	            var context = that,
	                args = slice.call(arguments);

	            if (typeof args[args.length -1] === UNDEFINED) {
	                args.pop();
	            }

	            var callback =  args[args.length - 1],
	                events = kendo.applyEventMap(args[0], ns);

	            // setup mouse trap
	            if (support.mouseAndTouchPresent && events.search(/mouse|click/) > -1 && this[0] !== document.documentElement) {
	                MouseEventNormalizer.setupMouseMute();

	                var selector = args.length === 2 ? null : args[1],
	                    bustClick = events.indexOf("click") > -1 && events.indexOf("touchend") > -1;

	                on.call(this,
	                    {
	                        touchstart: MouseEventNormalizer.muteMouse,
	                        touchend: MouseEventNormalizer.unMuteMouse
	                    },
	                    selector,
	                    {
	                        bustClick: bustClick
	                    });
	            }

	            if (typeof callback === STRING) {
	                context = that.data("handler");
	                callback = context[callback];

	                args[args.length - 1] = function(e) {
	                    callback.call(context, e);
	                };
	            }

	            args[0] = events;

	            on.apply(that, args);

	            return that;
	        },

	        kendoDestroy: function(ns) {
	            ns = ns || this.data("kendoNS");

	            if (ns) {
	                this.off("." + ns);
	            }

	            return this;
	        }
	    });

	    kendo.jQuery = kendoJQuery;
	    kendo.eventMap = eventMap;

	    kendo.timezone = (function(){
	        var months =  { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
	        var days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

	        function ruleToDate(year, rule) {
	            var date;
	            var targetDay;
	            var ourDay;
	            var month = rule[3];
	            var on = rule[4];
	            var time = rule[5];
	            var cache = rule[8];

	            if (!cache) {
	                rule[8] = cache = {};
	            }

	            if (cache[year]) {
	                return cache[year];
	            }

	            if (!isNaN(on)) {
	                date = new Date(Date.UTC(year, months[month], on, time[0], time[1], time[2], 0));
	            } else if (on.indexOf("last") === 0) {
	                date = new Date(Date.UTC(year, months[month] + 1, 1, time[0] - 24, time[1], time[2], 0));

	                targetDay = days[on.substr(4, 3)];
	                ourDay = date.getUTCDay();

	                date.setUTCDate(date.getUTCDate() + targetDay - ourDay - (targetDay > ourDay ? 7 : 0));
	            } else if (on.indexOf(">=") >= 0) {
	                date = new Date(Date.UTC(year, months[month], on.substr(5), time[0], time[1], time[2], 0));

	                targetDay = days[on.substr(0, 3)];
	                ourDay = date.getUTCDay();

	                date.setUTCDate(date.getUTCDate() + targetDay - ourDay + (targetDay < ourDay ? 7 : 0));
	            }

	            return cache[year] = date;
	        }

	        function findRule(utcTime, rules, zone) {
	            rules = rules[zone];

	            if (!rules) {
	                var time = zone.split(":");
	                var offset = 0;

	                if (time.length > 1) {
	                    offset = time[0] * 60 + Number(time[1]);
	                }

	                return [-1000000, 'max', '-', 'Jan', 1, [0, 0, 0], offset, '-'];
	            }

	            var year = new Date(utcTime).getUTCFullYear();

	            rules = jQuery.grep(rules, function(rule) {
	                var from = rule[0];
	                var to = rule[1];

	                return from <= year && (to >= year || (from == year && to == "only") || to == "max");
	            });

	            rules.push(utcTime);

	            rules.sort(function(a, b) {
	                if (typeof a != "number") {
	                    a = Number(ruleToDate(year, a));
	                }

	                if (typeof b != "number") {
	                    b = Number(ruleToDate(year, b));
	                }

	                return a - b;
	            });

	            var rule = rules[jQuery.inArray(utcTime, rules) - 1] || rules[rules.length - 1];

	            return isNaN(rule) ? rule : null;
	        }

	        function findZone(utcTime, zones, timezone) {
	            var zoneRules = zones[timezone];

	            if (typeof zoneRules === "string") {
	                zoneRules = zones[zoneRules];
	            }

	            if (!zoneRules) {
	                throw new Error('Timezone "' + timezone + '" is either incorrect, or kendo.timezones.min.js is not included.');
	            }

	            for (var idx = zoneRules.length - 1; idx >= 0; idx--) {
	                var until = zoneRules[idx][3];

	                if (until && utcTime > until) {
	                    break;
	                }
	            }

	            var zone = zoneRules[idx + 1];

	            if (!zone) {
	                throw new Error('Timezone "' + timezone + '" not found on ' + utcTime + ".");
	            }

	            return zone;
	        }

	        function zoneAndRule(utcTime, zones, rules, timezone) {
	            if (typeof utcTime != NUMBER) {
	                utcTime = Date.UTC(utcTime.getFullYear(), utcTime.getMonth(),
	                    utcTime.getDate(), utcTime.getHours(), utcTime.getMinutes(),
	                    utcTime.getSeconds(), utcTime.getMilliseconds());
	            }

	            var zone = findZone(utcTime, zones, timezone);

	            return {
	                zone: zone,
	                rule: findRule(utcTime, rules, zone[1])
	            };
	        }

	        function offset(utcTime, timezone) {
	            if (timezone == "Etc/UTC" || timezone == "Etc/GMT") {
	                return 0;
	            }

	            var info = zoneAndRule(utcTime, this.zones, this.rules, timezone);
	            var zone = info.zone;
	            var rule = info.rule;

	            return kendo.parseFloat(rule? zone[0] - rule[6] : zone[0]);
	        }

	        function abbr(utcTime, timezone) {
	            var info = zoneAndRule(utcTime, this.zones, this.rules, timezone);
	            var zone = info.zone;
	            var rule = info.rule;

	            var base = zone[2];

	            if (base.indexOf("/") >= 0) {
	                return base.split("/")[rule && +rule[6] ? 1 : 0];
	            } else if (base.indexOf("%s") >= 0) {
	                return base.replace("%s", (!rule || rule[7] == "-") ? '' : rule[7]);
	            }

	            return base;
	        }

	        function convert(date, fromOffset, toOffset) {
	            if (typeof fromOffset == STRING) {
	                fromOffset = this.offset(date, fromOffset);
	            }

	            if (typeof toOffset == STRING) {
	                toOffset = this.offset(date, toOffset);
	            }

	            var fromLocalOffset = date.getTimezoneOffset();

	            date = new Date(date.getTime() + (fromOffset - toOffset) * 60000);

	            var toLocalOffset = date.getTimezoneOffset();

	            return new Date(date.getTime() + (toLocalOffset - fromLocalOffset) * 60000);
	        }

	        function apply(date, timezone) {
	           return this.convert(date, date.getTimezoneOffset(), timezone);
	        }

	        function remove(date, timezone) {
	           return this.convert(date, timezone, date.getTimezoneOffset());
	        }

	        function toLocalDate(time) {
	            return this.apply(new Date(time), "Etc/UTC");
	        }

	        return {
	           zones: {},
	           rules: {},
	           offset: offset,
	           convert: convert,
	           apply: apply,
	           remove: remove,
	           abbr: abbr,
	           toLocalDate: toLocalDate
	        };
	    })();

	    kendo.date = (function(){
	        var MS_PER_MINUTE = 60000,
	            MS_PER_DAY = 86400000;

	        function adjustDST(date, hours) {
	            if (hours === 0 && date.getHours() === 23) {
	                date.setHours(date.getHours() + 2);
	                return true;
	            }

	            return false;
	        }

	        function setDayOfWeek(date, day, dir) {
	            var hours = date.getHours();

	            dir = dir || 1;
	            day = ((day - date.getDay()) + (7 * dir)) % 7;

	            date.setDate(date.getDate() + day);
	            adjustDST(date, hours);
	        }

	        function dayOfWeek(date, day, dir) {
	            date = new Date(date);
	            setDayOfWeek(date, day, dir);
	            return date;
	        }

	        function firstDayOfMonth(date) {
	            return new Date(
	                date.getFullYear(),
	                date.getMonth(),
	                1
	            );
	        }

	        function lastDayOfMonth(date) {
	            var last = new Date(date.getFullYear(), date.getMonth() + 1, 0),
	                first = firstDayOfMonth(date),
	                timeOffset = Math.abs(last.getTimezoneOffset() - first.getTimezoneOffset());

	            if (timeOffset) {
	                last.setHours(first.getHours() + (timeOffset / 60));
	            }

	            return last;
	        }

	        function moveDateToWeekStart(date, weekStartDay) {
	            if (weekStartDay !== 1) {
	                return addDays(dayOfWeek(date, weekStartDay, -1), 4);
	            }

	            return addDays(date, (4 - (date.getDay() || 7)));
	        }

	        function calcWeekInYear(date, weekStartDay) {
	            var firstWeekInYear = new Date(date.getFullYear(), 0, 1, -6);

	            var newDate = moveDateToWeekStart(date, weekStartDay);

	            var diffInMS = newDate.getTime() - firstWeekInYear.getTime();

	            var days = Math.floor(diffInMS / MS_PER_DAY);

	            return 1 + Math.floor(days / 7);
	        }

	        function weekInYear(date, weekStartDay){   
	            var prevWeekDate = addDays(date, -7);
	            var nextWeekDate = addDays(date, 7);

	            var weekNumber = calcWeekInYear(date, weekStartDay);

	            if (weekNumber === 0) {
	                return calcWeekInYear(prevWeekDate, weekStartDay) + 1;
	            }

	            if (weekNumber === 53 && calcWeekInYear(nextWeekDate, weekStartDay) > 1) {
	                return 1;
	            }

	            return weekNumber;
	        }

	        function getDate(date) {
	            date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
	            adjustDST(date, 0);
	            return date;
	        }

	        function toUtcTime(date) {
	            return Date.UTC(date.getFullYear(), date.getMonth(),
	                        date.getDate(), date.getHours(), date.getMinutes(),
	                        date.getSeconds(), date.getMilliseconds());
	        }

	        function getMilliseconds(date) {
	            return date.getTime() - getDate(date);
	        }

	        function isInTimeRange(value, min, max) {
	            var msMin = getMilliseconds(min),
	                msMax = getMilliseconds(max),
	                msValue;

	            if (!value || msMin == msMax) {
	                return true;
	            }

	            if (min >= max) {
	                max += MS_PER_DAY;
	            }

	            msValue = getMilliseconds(value);

	            if (msMin > msValue) {
	                msValue += MS_PER_DAY;
	            }

	            if (msMax < msMin) {
	                msMax += MS_PER_DAY;
	            }

	            return msValue >= msMin && msValue <= msMax;
	        }

	        function isInDateRange(value, min, max) {
	            var msMin = min.getTime(),
	                msMax = max.getTime(),
	                msValue;

	            if (msMin >= msMax) {
	                msMax += MS_PER_DAY;
	            }

	            msValue = value.getTime();

	            return msValue >= msMin && msValue <= msMax;
	        }

	        function addDays(date, offset) {
	            var hours = date.getHours();
	                date = new Date(date);

	            setTime(date, offset * MS_PER_DAY);
	            adjustDST(date, hours);
	            return date;
	        }

	        function setTime(date, milliseconds, ignoreDST) {
	            var offset = date.getTimezoneOffset();
	            var difference;

	            date.setTime(date.getTime() + milliseconds);

	            if (!ignoreDST) {
	                difference = date.getTimezoneOffset() - offset;
	                date.setTime(date.getTime() + difference * MS_PER_MINUTE);
	            }
	        }

	        function setHours(date, time) {
	            date = new Date(kendo.date.getDate(date).getTime() + kendo.date.getMilliseconds(time));
	            adjustDST(date, time.getHours());
	            return date;
	        }

	        function today() {
	            return getDate(new Date());
	        }

	        function isToday(date) {
	           return getDate(date).getTime() == today().getTime();
	        }

	        function toInvariantTime(date) {
	            var staticDate = new Date(1980, 1, 1, 0, 0, 0);

	            if (date) {
	                staticDate.setHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
	            }

	            return staticDate;
	        }

	        return {
	            adjustDST: adjustDST,
	            dayOfWeek: dayOfWeek,
	            setDayOfWeek: setDayOfWeek,
	            getDate: getDate,
	            isInDateRange: isInDateRange,
	            isInTimeRange: isInTimeRange,
	            isToday: isToday,
	            nextDay: function(date) {
	                return addDays(date, 1);
	            },
	            previousDay: function(date) {
	                return addDays(date, -1);
	            },
	            toUtcTime: toUtcTime,
	            MS_PER_DAY: MS_PER_DAY,
	            MS_PER_HOUR: 60 * MS_PER_MINUTE,
	            MS_PER_MINUTE: MS_PER_MINUTE,
	            setTime: setTime,
	            setHours: setHours,
	            addDays: addDays,
	            today: today,
	            toInvariantTime: toInvariantTime,
	            firstDayOfMonth: firstDayOfMonth,
	            lastDayOfMonth: lastDayOfMonth,
	            weekInYear: weekInYear,
	            getMilliseconds: getMilliseconds
	        };
	    })();


	    kendo.stripWhitespace = function(element) {
	        if (document.createNodeIterator) {
	            var iterator = document.createNodeIterator(element, NodeFilter.SHOW_TEXT, function(node) {
	                    return node.parentNode == element ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
	                }, false);

	            while (iterator.nextNode()) {
	                if (iterator.referenceNode && !iterator.referenceNode.textContent.trim()) {
	                    iterator.referenceNode.parentNode.removeChild(iterator.referenceNode);
	                }
	            }
	        } else { // IE7/8 support
	            for (var i = 0; i < element.childNodes.length; i++) {
	                var child = element.childNodes[i];

	                if (child.nodeType == 3 && !/\S/.test(child.nodeValue)) {
	                    element.removeChild(child);
	                    i--;
	                }

	                if (child.nodeType == 1) {
	                    kendo.stripWhitespace(child);
	                }
	            }
	        }
	    };

	    var animationFrame  = window.requestAnimationFrame       ||
	                          window.webkitRequestAnimationFrame ||
	                          window.mozRequestAnimationFrame    ||
	                          window.oRequestAnimationFrame      ||
	                          window.msRequestAnimationFrame     ||
	                          function(callback){ setTimeout(callback, 1000 / 60); };

	    kendo.animationFrame = function(callback) {
	        animationFrame.call(window, callback);
	    };

	    var animationQueue = [];

	    kendo.queueAnimation = function(callback) {
	        animationQueue[animationQueue.length] = callback;
	        if (animationQueue.length === 1) {
	            kendo.runNextAnimation();
	        }
	    };

	    kendo.runNextAnimation = function() {
	        kendo.animationFrame(function() {
	            if (animationQueue[0]) {
	                animationQueue.shift()();
	                if (animationQueue[0]) {
	                    kendo.runNextAnimation();
	                }
	            }
	        });
	    };

	    kendo.parseQueryStringParams = function(url) {
	        var queryString = url.split('?')[1] || "",
	            params = {},
	            paramParts = queryString.split(/&|=/),
	            length = paramParts.length,
	            idx = 0;

	        for (; idx < length; idx += 2) {
	            if(paramParts[idx] !== "") {
	                params[decodeURIComponent(paramParts[idx])] = decodeURIComponent(paramParts[idx + 1]);
	            }
	        }

	        return params;
	    };

	    kendo.elementUnderCursor = function(e) {
	        if (typeof e.x.client != "undefined") {
	            return document.elementFromPoint(e.x.client, e.y.client);
	        }
	    };

	    kendo.wheelDeltaY = function(jQueryEvent) {
	        var e = jQueryEvent.originalEvent,
	            deltaY = e.wheelDeltaY,
	            delta;

	            if (e.wheelDelta) { // Webkit and IE
	                if (deltaY === undefined || deltaY) { // IE does not have deltaY, thus always scroll (horizontal scrolling is treated as vertical)
	                    delta = e.wheelDelta;
	                }
	            } else if (e.detail && e.axis === e.VERTICAL_AXIS) { // Firefox and Opera
	                delta = (-e.detail) * 10;
	            }

	        return delta;
	    };

	    kendo.throttle = function(fn, delay) {
	        var timeout;
	        var lastExecTime = 0;

	        if (!delay || delay <= 0) {
	            return fn;
	        }

	        var throttled = function() {
	            var that = this;
	            var elapsed = +new Date() - lastExecTime;
	            var args = arguments;

	            function exec() {
	                fn.apply(that, args);
	                lastExecTime = +new Date();
	            }

	            // first execution
	            if (!lastExecTime) {
	                return exec();
	            }

	            if (timeout) {
	                clearTimeout(timeout);
	            }

	            if (elapsed > delay) {
	                exec();
	            } else {
	                timeout = setTimeout(exec, delay - elapsed);
	            }
	        };

	        throttled.cancel = function() {
	            clearTimeout(timeout);
	        };

	        return throttled;
	    };


	    kendo.caret = function (element, start, end) {
	        var rangeElement;
	        var isPosition = start !== undefined;

	        if (end === undefined) {
	            end = start;
	        }

	        if (element[0]) {
	            element = element[0];
	        }

	        if (isPosition && element.disabled) {
	            return;
	        }

	        try {
	            if (element.selectionStart !== undefined) {
	                if (isPosition) {
	                    element.focus();
	                    element.setSelectionRange(start, end);
	                } else {
	                    start = [element.selectionStart, element.selectionEnd];
	                }
	            } else if (document.selection) {
	                if ($(element).is(":visible")) {
	                    element.focus();
	                }

	                rangeElement = element.createTextRange();

	                if (isPosition) {
	                    rangeElement.collapse(true);
	                    rangeElement.moveStart("character", start);
	                    rangeElement.moveEnd("character", end - start);
	                    rangeElement.select();
	                } else {
	                    var rangeDuplicated = rangeElement.duplicate(),
	                        selectionStart, selectionEnd;

	                        rangeElement.moveToBookmark(document.selection.createRange().getBookmark());
	                        rangeDuplicated.setEndPoint('EndToStart', rangeElement);
	                        selectionStart = rangeDuplicated.text.length;
	                        selectionEnd = selectionStart + rangeElement.text.length;

	                    start = [selectionStart, selectionEnd];
	                }
	            }
	        } catch(e) {
	            /* element is not focused or it is not in the DOM */
	            start = [];
	        }

	        return start;
	    };

	    kendo.compileMobileDirective = function(element, scope) {
	        var angular = window.angular;

	        element.attr("data-" + kendo.ns + "role", element[0].tagName.toLowerCase().replace('kendo-mobile-', '').replace('-', ''));

	        angular.element(element).injector().invoke(["$compile", function($compile) {
	            $compile(element)(scope);

	            if (!/^\$(digest|apply)$/.test(scope.$$phase)) {
	                scope.$digest();
	            }
	        }]);

	        return kendo.widgetInstance(element, kendo.mobile.ui);
	    };

	    kendo.antiForgeryTokens = function() {
	        var tokens = { },
	            csrf_token = $("meta[name=csrf-token],meta[name=_csrf]").attr("content"),
	            csrf_param = $("meta[name=csrf-param],meta[name=_csrf_header]").attr("content");

	        $("input[name^='__RequestVerificationToken']").each(function() {
	            tokens[this.name] = this.value;
	        });

	        if (csrf_param !== undefined && csrf_token !== undefined) {
	          tokens[csrf_param] = csrf_token;
	        }

	        return tokens;
	    };

	    kendo.cycleForm = function(form) {
	        var firstElement = form.find("input, .k-widget").first();
	        var lastElement = form.find("button, .k-button").last();

	        function focus(el) {
	            var widget = kendo.widgetInstance(el);

	            if (widget && widget.focus) {
	              widget.focus();
	            } else {
	              el.focus();
	            }
	        }

	        lastElement.on("keydown", function(e) {
	          if (e.keyCode == kendo.keys.TAB && !e.shiftKey) {
	            e.preventDefault();
	            focus(firstElement);
	          }
	        });

	        firstElement.on("keydown", function(e) {
	          if (e.keyCode == kendo.keys.TAB && e.shiftKey) {
	            e.preventDefault();
	            focus(lastElement);
	          }
	        });
	    };

	    // kendo.saveAs -----------------------------------------------
	    (function() {
	        function postToProxy(dataURI, fileName, proxyURL, proxyTarget) {
	            var form = $("<form>").attr({
	                action: proxyURL,
	                method: "POST",
	                target: proxyTarget
	            });

	            var data = kendo.antiForgeryTokens();
	            data.fileName = fileName;

	            var parts = dataURI.split(";base64,");
	            data.contentType = parts[0].replace("data:", "");
	            data.base64 = parts[1];

	            for (var name in data) {
	                if (data.hasOwnProperty(name)) {
	                    $('<input>').attr({
	                        value: data[name],
	                        name: name,
	                        type: "hidden"
	                    }).appendTo(form);
	                }
	            }

	            form.appendTo("body").submit().remove();
	        }

	        var fileSaver = document.createElement("a");
	        var downloadAttribute = "download" in fileSaver && !kendo.support.browser.edge;

	        function saveAsBlob(dataURI, fileName) {
	            var blob = dataURI; // could be a Blob object

	            if (typeof dataURI == "string") {
	                var parts = dataURI.split(";base64,");
	                var contentType = parts[0];
	                var base64 = atob(parts[1]);
	                var array = new Uint8Array(base64.length);

	                for (var idx = 0; idx < base64.length; idx++) {
	                    array[idx] = base64.charCodeAt(idx);
	                }
	                blob = new Blob([array.buffer], { type: contentType });
	            }

	            navigator.msSaveBlob(blob, fileName);
	        }

	        function saveAsDataURI(dataURI, fileName) {
	            if (window.Blob && dataURI instanceof Blob) {
	                dataURI = URL.createObjectURL(dataURI);
	            }

	            fileSaver.download = fileName;
	            fileSaver.href = dataURI;

	            var e = document.createEvent("MouseEvents");
	            e.initMouseEvent("click", true, false, window,
	                0, 0, 0, 0, 0, false, false, false, false, 0, null);

	            fileSaver.dispatchEvent(e);
	            setTimeout(function(){
	                URL.revokeObjectURL(dataURI);
	            });
	        }

	        kendo.saveAs = function(options) {
	            var save = postToProxy;

	            if (!options.forceProxy) {
	                if (downloadAttribute) {
	                    save = saveAsDataURI;
	                } else if (navigator.msSaveBlob) {
	                    save = saveAsBlob;
	                }
	            }

	            save(options.dataURI, options.fileName, options.proxyURL, options.proxyTarget);
	        };
	    })();

	    // kendo proxySetters
	    kendo.proxyModelSetters = function proxyModelSetters(data) {
	        var observable = {};

	        Object.keys(data || {}).forEach(function(property) {
	          Object.defineProperty(observable, property, {
	            get: function() {
	              return data[property];
	            },
	            set: function(value) {
	              data[property] = value;
	              data.dirty = true;
	            }
	          });
	        });

	        return observable;
	    };

	})(jQuery, window);

	return window.kendo;

	}, __webpack_require__(422));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(420)))

/***/ }

/******/ });

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0)
var jQuery = __webpack_require__(0)

var eventCalendar = __webpack_require__(3)


$(document).ready(function () {

	var layout = __webpack_require__(10);
	// Rotator for the Oracle.html page
	__webpack_require__(11);

	// Header and footer layout
	layout();

	if (window.location.href.indexOf("calendar.html") !== -1) {
		eventCalendar(jQuery);

		// EventCalendar for the Calendar page
		$("#eventCalendarDefault").eventCalendar({
			eventsjson: 'app/js/myEvents.json',
			eventsLimit: 10,
			startWeekOnMonday: false,
			openLinkInNewWindow: false,
			dateFormat: 'MMM D, YYYY',
			jsonDateFormat: 'human'
		});
	}
});




/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* =
    jquery.eventCalendar.js
    version: 0.7
    date: 13-08-2015
    author:
        Jaime Fernandez (@vissit)
    company:
        Paradigma Tecnologico (@paradigmate)
    url:
   		http://www.vissit.com/projects/eventCalendar/
*/
var $ = __webpack_require__(0)
var moment = __webpack_require__(4)
__webpack_require__(7)

module.exports = function () {
	$.fn.eventCalendar = function (options) {
		var calendar = this;

		if (options.locales && typeof (options.locales) == "string") {
			$.getJSON(options.locales, function (data) {
				options.locales = $.extend({}, $.fn.eventCalendar.defaults.locales, data);
				moment.locale(data.locale, options.locales.moment);
				moment.locale(data.locale);

				initEventCalendar(calendar, options);
			}).fail(function () {
				showError("error getting locale json", $(this));
			});
		} else {
			if (options.locales && options.locales.locale) {
				options.locales = $.extend({}, $.fn.eventCalendar.defaults.locales, options.locales);
				moment.locale(options.locales.locale, options.locales.moment);
				moment.locale(options.locales.locale);
			}
			initEventCalendar(calendar, options);
		}


	};


	// define the parameters with the default values of the function
	$.fn.eventCalendar.defaults = {
		eventsjson: "js/events.json",
		eventsLimit: 4,
		locales: {
			locale: "en",
			txt_noEvents: "There are no events in this period",
			txt_SpecificEvents_prev: "",
			txt_SpecificEvents_after: "events:",
			txt_next: "next",
			txt_prev: "prev",
			txt_NextEvents: "Next events:",
			txt_GoToEventUrl: "See the event",
			txt_loading: "loading..."
		},
		showDayAsWeeks: true,
		startWeekOnMonday: true,
		showDayNameInCalendar: true,
		showDescription: false,
		onlyOneDescription: true,
		openEventInNewWindow: false,
		eventsScrollable: false,
		dateFormat: "D/MM/YYYY",
		jsonDateFormat: "timestamp", // you can use also "human" 'YYYY-MM-DD HH:MM:SS'
		moveSpeed: 500,	// speed of month move when you clic on a new date
		moveOpacity: 0.15, // month and events fadeOut to this opacity
		jsonData: "", 	// to load and inline json (not ajax calls)
		cacheJson: true	// if true plugin get a json only first time and after plugin filter events
		// if false plugin get a new json on each date change
	};

	function initEventCalendar(that, options) {
		var eventsOpts = $.extend({}, $.fn.eventCalendar.defaults, options);

		// define global vars for the function
		var flags = {
			wrap: "",
			directionLeftMove: "300",
			eventsJson: {}
		};

		// each eventCalendar will execute this function
		that.each(function () {

			flags.wrap = $(this);
			flags.wrap.addClass("eventCalendar-wrap").append("<div class='eventCalendar-list-wrap'><p class='eventCalendar-subtitle floatLeft'></p><p class='myEventCalendar-subtitle wyo-green tab floatLeft'>Click on an event for more info!</p><div class='clearFloat'></div><span class='eventCalendar-loading'>" + eventsOpts.locales.txt_loading + "</span><div class='eventCalendar-list-content'><ul class='eventCalendar-list'></ul></div></div>");

			if (eventsOpts.eventsScrollable) {
				flags.wrap.find(".eventCalendar-list-content").addClass("scrollable");
			}

			setCalendarWidth(flags);
			$(window).resize(function () {
				setCalendarWidth(flags);
			});
			//flags.directionLeftMove = flags.wrap.width();

			// show current month
			dateSlider("current", flags, eventsOpts);

			getEvents(flags, eventsOpts, eventsOpts.eventsLimit, false, false, false, false);

			changeMonth(flags, eventsOpts);

			flags.wrap.on("click", ".eventCalendar-day a", function (e) {
				//flags.wrap.find('.eventCalendar-day a').live('click',function(e){
				e.preventDefault();
				var year = flags.wrap.attr("data-current-year"),
					month = flags.wrap.attr("data-current-month"),
					day = $(this).parent().attr("rel");

				getEvents(flags, eventsOpts, false, year, month, day, "day");
			});
			flags.wrap.on("click", ".eventCalendar-monthTitle", function (e) {
				//flags.wrap.find('.eventCalendar-monthTitle').live('click',function(e){
				e.preventDefault();
				var year = flags.wrap.attr("data-current-year"),
					month = flags.wrap.attr("data-current-month");

				getEvents(flags, eventsOpts, eventsOpts.eventsLimit, year, month, false, "month");
			});
		});

		// show event description
		flags.wrap.find(".eventCalendar-list").on("click", ".eventCalendar-eventTitle", function (e) {
			//flags.wrap.find('.eventCalendar-list .eventCalendar-eventTitle').live('click',function(e){
			if (!eventsOpts.showDescription) {
				e.preventDefault();
				var desc = $(this).parent().find(".eventCalendar-eventDesc");

				if (!desc.find("a").length) {
					var eventUrl = $(this).attr("href");
					var eventTarget = $(this).attr("target");

					// create a button to go to event url
					// desc.append('<a href="' + eventUrl + '" target="' + eventTarget + '" class="bt">' + eventsOpts.locales.txt_GoToEventUrl + '</a>');
				}

				if (desc.is(":visible")) {
					desc.slideUp();
				} else {
					if (eventsOpts.onlyOneDescription) {
						flags.wrap.find(".eventCalendar-eventDesc").slideUp();
					}
					desc.slideDown();
				}
			}
		});
	}

	function sortJson(a, b) {
		if (typeof a.date === "string") {
			return a.date.toLowerCase() > b.date.toLowerCase() ? 1 : -1;
		}
		return a.date > b.date ? 1 : -1;
	}

	function dateSlider(show, flags, eventsOpts) {
		var $eventsCalendarSlider = $("<div class='eventCalendar-slider'></div>"),
			$eventsCalendarMonthWrap = $("<div class='eventCalendar-monthWrap'></div>"),
			$eventsCalendarTitle = $("<div class='eventCalendar-currentTitle'><a href='#' class='eventCalendar-monthTitle'></a></div>"),
			$eventsCalendarArrows = $("<a href='#' class='eventCalendar-arrow eventCalendar-prev'><span>" + eventsOpts.locales.txt_prev + "</span></a><a href='#' class='eventCalendar-arrow eventCalendar-next'><span>" + eventsOpts.locales.txt_next + "</span></a>");
		$eventsCalendarDaysList = $("<ul class='eventCalendar-daysList'></ul>"),
			date = new Date();

		if (!flags.wrap.find(".eventCalendar-slider").length) {
			flags.wrap.prepend($eventsCalendarSlider);
			$eventsCalendarSlider.append($eventsCalendarMonthWrap);
		} else {
			flags.wrap.find(".eventCalendar-slider").append($eventsCalendarMonthWrap);
		}

		flags.wrap.find(".eventCalendar-monthWrap.eventCalendar-currentMonth").removeClass("eventCalendar-currentMonth").addClass("eventCalendar-oldMonth");
		$eventsCalendarMonthWrap.addClass("eventCalendar-currentMonth").append($eventsCalendarTitle, $eventsCalendarDaysList);



		// if current show current month & day
		if (show === "current") {
			day = date.getDate();
			$eventsCalendarSlider.append($eventsCalendarArrows);

		} else {
			date = new Date(flags.wrap.attr("data-current-year"), flags.wrap.attr("data-current-month"), 1, 0, 0, 0); // current visible month
			day = 0; // not show current day in days list

			moveOfMonth = 1;
			if (show === "prev") {
				moveOfMonth = -1;
			}
			date.setMonth(date.getMonth() + moveOfMonth);

			var tmpDate = new Date();
			if (date.getMonth() === tmpDate.getMonth()) {
				day = tmpDate.getDate();
			}

		}

		// get date portions
		var year = date.getFullYear(), // year of the events
			currentYear = new Date().getFullYear(), // current year
			month = date.getMonth(), // 0-11
			monthToShow = month + 1;

		if (show != "current") {
			// month change
			getEvents(flags, eventsOpts, eventsOpts.eventsLimit, year, month, false, show);
		}

		flags.wrap.attr("data-current-month", month)
			.attr("data-current-year", year);

		// add current date info
		moment.locale(eventsOpts.locales.locale);

		var formatedDate = moment(year + " " + monthToShow, "YYYY MM").format("MMMM YYYY");
		$eventsCalendarTitle.find(".eventCalendar-monthTitle").html(formatedDate);

		// print all month days
		var daysOnTheMonth = 32 - new Date(year, month, 32).getDate();
		var daysList = [],
			i;
		if (eventsOpts.showDayAsWeeks) {
			$eventsCalendarDaysList.addClass("eventCalendar-showAsWeek");

			// show day name in top of calendar
			if (eventsOpts.showDayNameInCalendar) {
				$eventsCalendarDaysList.addClass("eventCalendar-showDayNames");

				i = 0;
				// if week start on monday
				if (eventsOpts.startWeekOnMonday) {
					i = 1;
				}

				for (; i < 7; i++) {
					daysList.push('<li class="eventCalendar-day-header">' + moment()._locale._weekdaysShort[i] + '</li>');

					if (i === 6 && eventsOpts.startWeekOnMonday) {
						// print sunday header
						daysList.push('<li class="eventCalendar-day-header">' + moment()._locale._weekdaysShort[0] + '</li>');
					}

				}
			}

			dt = new Date(year, month, "01");
			var weekDay = dt.getDay(); // day of the week where month starts

			if (eventsOpts.startWeekOnMonday) {
				weekDay = dt.getDay() - 1;
			}
			if (weekDay < 0) { weekDay = 6; } // if -1 is because day starts on sunday(0) and week starts on monday

			for (i = weekDay; i > 0; i--) {
				daysList.push('<li class="eventCalendar-day eventCalendar-empty"></li>');
			}
		}
		for (dayCount = 1; dayCount <= daysOnTheMonth; dayCount++) {
			var dayClass = "";

			if (day > 0 && dayCount === day && year === currentYear) {
				dayClass = "today";
			}
			daysList.push('<li id="dayList_' + dayCount + '" rel="' + dayCount + '" class="eventCalendar-day ' + dayClass + '"><a href="#">' + dayCount + '</a></li>');
		}
		$eventsCalendarDaysList.append(daysList.join(""));

		$eventsCalendarSlider.css("height", $eventsCalendarMonthWrap.height() + "px");
	}

	function getEvents(flags, eventsOpts, limit, year, month, day, direction) {
		limit = limit || 0;
		year = year || "";
		day = day || "";

		// to avoid problem with january (month = 0)

		if (typeof month != "undefined") {
			month = month;
		} else {
			month = "";
		}

		//var month = month || "";
		flags.wrap.find(".eventCalendar-loading").fadeIn();

		if (eventsOpts.jsonData) {
			// user send a json in the plugin params
			eventsOpts.cacheJson = true;

			flags.eventsJson = eventsOpts.jsonData;
			getEventsData(flags, eventsOpts, flags.eventsJson, limit, year, month, day, direction);

		} else if (!eventsOpts.cacheJson || !direction) {
			// first load: load json and save it to future filters
			$.getJSON(eventsOpts.eventsjson + "?limit=" + limit + "&year=" + year + "&month=" + month + "&day=" + day, function (data) {
				flags.eventsJson = data; // save data to future filters
				getEventsData(flags, eventsOpts, flags.eventsJson, limit, year, month, day, direction);
			}).fail(function () {
				showError("error getting json: ", flags.wrap);
			});
		} else {
			// filter previus saved json
			getEventsData(flags, eventsOpts, flags.eventsJson, limit, year, month, day, direction);
		}

		if (day > "") {
			flags.wrap.find(".eventCalendar-current").removeClass("eventCalendar-current");
			flags.wrap.find("#dayList_" + day).addClass("eventCalendar-current");
		}
	}

	function getEventsData(flags, eventsOpts, data, limit, year, month, day, direction) {
		directionLeftMove = "-=" + flags.directionLeftMove;
		eventContentHeight = "auto";

		subtitle = flags.wrap.find(".eventCalendar-list-wrap .eventCalendar-subtitle");

		if (!direction) {
			// first load
			subtitle.html(eventsOpts.locales.txt_NextEvents);
			eventContentHeight = "auto";
			directionLeftMove = "-=0";
		} else {
			var jsMonth = parseInt(month) + 1,
				formatedDate;
			moment.locale(eventsOpts.locales.locale);

			if (day !== "") {
				formatedDate = moment(year + " " + jsMonth + " " + day, "YYYY MM DD").format("LL");
				subtitle.html(eventsOpts.locales.txt_SpecificEvents_prev + formatedDate + " " + eventsOpts.locales.txt_SpecificEvents_after);
				//eventStringDate = moment(eventDate).format(eventsOpts.dateFormat);
			} else {
				formatedDate = moment(year + " " + jsMonth, "YYYY MM").format("MMMM");
				subtitle.html(eventsOpts.locales.txt_SpecificEvents_prev + formatedDate + " " + eventsOpts.locales.txt_SpecificEvents_after);
			}

			if (direction === "eventCalendar-prev") {
				directionLeftMove = "+=" + flags.directionLeftMove;
			} else if (direction === "day" || direction === "month") {
				directionLeftMove = "+=0";
				eventContentHeight = 0;
			}
		}

		flags.wrap.find(".eventCalendar-list").animate({
			opacity: eventsOpts.moveOpacity,
			left: directionLeftMove,
			height: eventContentHeight
		}, eventsOpts.moveSpeed, function () {
			flags.wrap.find(".eventCalendar-list").css({ "left": 0, "height": "auto" }).hide();
			//wrap.find('.eventCalendar-list li').fadeIn();

			var events = [];

			data = $(data).sort(sortJson); // sort event by dates
			// each event
			if (data.length) {

				// show or hide event description
				var eventDescClass = "";
				if (!eventsOpts.showDescription) {
					eventDescClass = "eventCalendar-hidden";
				}
				var eventLinkTarget = "_self";
				if (eventsOpts.openEventInNewWindow) {
					eventLinkTarget = "_blank";
				}

				var i = 0;
				$.each(data, function (key, event) {
					var eventDateTime, eventDate, eventTime, eventYear, eventMonth, eventDay,
						eventMonthToShow, eventHour, eventMinute, eventSeconds, eventAmPm, eventShowTime;
					if (eventsOpts.jsonDateFormat == "human") {
						eventDateTime = event.date.split(" ");
						eventDate = eventDateTime[0].split("-");
						eventTime = eventDateTime[1].split(":");
						eventYear = eventDate[0];
						eventMonth = parseInt(eventDate[1]) - 1;
						eventDay = parseInt(eventDate[2]);
						//eventMonthToShow = eventMonth;
						eventMonthToShow = parseInt(eventMonth) + 1;

						if (eventDateTime[1] != "00:00:00") {
							eventShowTime = true;
						}

						eventAmPm = eventTime[0] / 12 >= 1 ? "pm" : "am";
						eventHour = eventTime[0] % 12 || 12;
						eventMinute = eventTime[1];
						eventSeconds = eventTime[2];

						eventDate = new Date(eventYear, eventMonth, eventDay, eventHour, eventMinute, eventSeconds);
					} else {
						eventDate = new Date(parseInt(event.date));
						eventYear = eventDate.getFullYear();
						eventMonth = eventDate.getMonth();
						eventDay = eventDate.getDate();
						eventMonthToShow = eventMonth + 1;
						eventHour = eventDate.getHours();
						eventMinute = eventDate.getMinutes();
					}

					if (parseInt(eventMinute) <= 9) {
						eventMinute = "0" + parseInt(eventMinute);
					}

					if (limit === 0 || limit > i) {
						// if month or day exist then only show matched events

						if ((month === false || month == eventMonth) && (day === "" || day == eventDay) && (year === "" || year == eventYear)) {
							// if initial load then load only future events
							if (month === false && eventDate < new Date()) {
							} else {
								moment.locale(eventsOpts.locales.locale);
								//eventStringDate = eventDay + "/" + eventMonthToShow + "/" + eventYear;
								eventStringDate = moment(eventDate).format(eventsOpts.dateFormat);
								var eventTitle;

								if (event.url) {
									eventTitle = '<a href="' + event.url + '" target="' + eventLinkTarget + '" class="eventCalendar-eventTitle">' + event.title + '</a>';
								} else {
									eventTitle = '<span class="eventCalendar-eventTitle">' + event.title + '</span>';
								}

								var eventTimeDisplay = eventShowTime ? '<small>' + eventHour + ":" + eventMinute + ' ' + eventAmPm + '</small>' : '';
								events.push('<li id="' + key + '" class="' + event.type + '"><time datetime="' + eventDate + '"><em>' + eventStringDate + '</em>' + eventTimeDisplay + '</time>' + eventTitle + '<div class="eventCalendar-location">' + event.location + '</div><p class="eventCalendar-eventDesc ' + eventDescClass + '">' + event.description + '</p></li>');
								i++;
							}
						}
					}

					// add mark in the dayList to the days with events
					if (eventYear == flags.wrap.attr("data-current-year") && eventMonth == flags.wrap.attr("data-current-month")) {
						flags.wrap.find(".eventCalendar-currentMonth .eventCalendar-daysList #dayList_" + parseInt(eventDay)).addClass("eventCalendar-dayWithEvents");
					}

				});
			}

			// there is no events on this period
			if (!events.length) {
				events.push('<li class="eventCalendar-noEvents"><p>' + eventsOpts.locales.txt_noEvents + '</p></li>');
			}
			flags.wrap.find(".eventCalendar-loading").hide();

			flags.wrap.find(".eventCalendar-list")
				.html(events.join(""));

			flags.wrap.find(".eventCalendar-list").animate({
				opacity: 1,
				height: "toggle"
			}, eventsOpts.moveSpeed);


		});
		setCalendarWidth(flags);
	}

	function changeMonth(flags, eventsOpts) {
		flags.wrap.find(".eventCalendar-arrow").click(function (e) {
			e.preventDefault();
			var lastMonthMove;

			if ($(this).hasClass("eventCalendar-next")) {
				dateSlider("next", flags, eventsOpts);
				lastMonthMove = "-=" + flags.directionLeftMove;

			} else {
				dateSlider("prev", flags, eventsOpts);
				lastMonthMove = "+=" + flags.directionLeftMove;
			}

			flags.wrap.find(".eventCalendar-monthWrap.eventCalendar-oldMonth").animate({
				opacity: eventsOpts.moveOpacity,
				left: lastMonthMove
			}, eventsOpts.moveSpeed, function () {
				flags.wrap.find(".eventCalendar-monthWrap.eventCalendar-oldMonth").remove();
			});
		});
	}

	function showError(msg, wrap) {
		wrap.find(".eventCalendar-list-wrap").html("<span class='eventCalendar-loading eventCalendar-error'>" + msg + "</span>");
	}

	function setCalendarWidth(flags) {
		// resize calendar width on window resize
		flags.directionLeftMove = flags.wrap.width();
		flags.wrap.find(".eventCalendar-monthWrap").width(flags.wrap.width() + "px");

		flags.wrap.find(".eventCalendar-list-wrap").width(flags.wrap.width() + "px");
	}
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;//! moment.js
//! version : 2.8.3
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (undefined) {
    /************************************
        Constants
    ************************************/

    var moment,
        VERSION = '2.8.3',
        // the global-scope this is NOT the global object in Node.js
        globalScope = typeof global !== 'undefined' ? global : this,
        oldGlobalMoment,
        round = Math.round,
        hasOwnProperty = Object.prototype.hasOwnProperty,
        i,

        YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,

        // internal storage for locale config files
        locales = {},

        // extra moment internal properties (plugins register props here)
        momentProperties = [],

        // check for nodeJS
        hasModule = (typeof module !== 'undefined' && module.exports),

        // ASP.NET json date format regex
        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
        aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,

        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,

        // format tokens
        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,

        // parsing token regexes
        parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
        parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
        parseTokenOneToFourDigits = /\d{1,4}/, // 0 - 9999
        parseTokenOneToSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
        parseTokenDigits = /\d+/, // nonzero number of digits
        parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        parseTokenT = /T/i, // T (ISO separator)
        parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
        parseTokenOrdinal = /\d{1,2}/,

        //strict parsing regexes
        parseTokenOneDigit = /\d/, // 0 - 9
        parseTokenTwoDigits = /\d\d/, // 00 - 99
        parseTokenThreeDigits = /\d{3}/, // 000 - 999
        parseTokenFourDigits = /\d{4}/, // 0000 - 9999
        parseTokenSixDigits = /[+-]?\d{6}/, // -999,999 - 999,999
        parseTokenSignedNumber = /[+-]?\d+/, // -inf - inf

        // iso 8601 regex
        // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
        isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,

        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
            ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
            ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d{2}/],
            ['YYYY-DDD', /\d{4}-\d{3}/]
        ],

        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
            ['HH:mm', /(T| )\d\d:\d\d/],
            ['HH', /(T| )\d\d/]
        ],

        // timezone chunker '+10:00' > ['10', '00'] or '-1530' > ['-15', '30']
        parseTimezoneChunker = /([\+\-]|\d\d)/gi,

        // getter and setter names
        proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
        unitMillisecondFactors = {
            'Milliseconds' : 1,
            'Seconds' : 1e3,
            'Minutes' : 6e4,
            'Hours' : 36e5,
            'Days' : 864e5,
            'Months' : 2592e6,
            'Years' : 31536e6
        },

        unitAliases = {
            ms : 'millisecond',
            s : 'second',
            m : 'minute',
            h : 'hour',
            d : 'day',
            D : 'date',
            w : 'week',
            W : 'isoWeek',
            M : 'month',
            Q : 'quarter',
            y : 'year',
            DDD : 'dayOfYear',
            e : 'weekday',
            E : 'isoWeekday',
            gg: 'weekYear',
            GG: 'isoWeekYear'
        },

        camelFunctions = {
            dayofyear : 'dayOfYear',
            isoweekday : 'isoWeekday',
            isoweek : 'isoWeek',
            weekyear : 'weekYear',
            isoweekyear : 'isoWeekYear'
        },

        // format function strings
        formatFunctions = {},

        // default relative time thresholds
        relativeTimeThresholds = {
            s: 45,  // seconds to minute
            m: 45,  // minutes to hour
            h: 22,  // hours to day
            d: 26,  // days to month
            M: 11   // months to year
        },

        // tokens to ordinalize and pad
        ordinalizeTokens = 'DDD w W M D d'.split(' '),
        paddedTokens = 'M D H h m s w W'.split(' '),

        formatTokenFunctions = {
            M    : function () {
                return this.month() + 1;
            },
            MMM  : function (format) {
                return this.localeData().monthsShort(this, format);
            },
            MMMM : function (format) {
                return this.localeData().months(this, format);
            },
            D    : function () {
                return this.date();
            },
            DDD  : function () {
                return this.dayOfYear();
            },
            d    : function () {
                return this.day();
            },
            dd   : function (format) {
                return this.localeData().weekdaysMin(this, format);
            },
            ddd  : function (format) {
                return this.localeData().weekdaysShort(this, format);
            },
            dddd : function (format) {
                return this.localeData().weekdays(this, format);
            },
            w    : function () {
                return this.week();
            },
            W    : function () {
                return this.isoWeek();
            },
            YY   : function () {
                return leftZeroFill(this.year() % 100, 2);
            },
            YYYY : function () {
                return leftZeroFill(this.year(), 4);
            },
            YYYYY : function () {
                return leftZeroFill(this.year(), 5);
            },
            YYYYYY : function () {
                var y = this.year(), sign = y >= 0 ? '+' : '-';
                return sign + leftZeroFill(Math.abs(y), 6);
            },
            gg   : function () {
                return leftZeroFill(this.weekYear() % 100, 2);
            },
            gggg : function () {
                return leftZeroFill(this.weekYear(), 4);
            },
            ggggg : function () {
                return leftZeroFill(this.weekYear(), 5);
            },
            GG   : function () {
                return leftZeroFill(this.isoWeekYear() % 100, 2);
            },
            GGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 4);
            },
            GGGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 5);
            },
            e : function () {
                return this.weekday();
            },
            E : function () {
                return this.isoWeekday();
            },
            a    : function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), true);
            },
            A    : function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), false);
            },
            H    : function () {
                return this.hours();
            },
            h    : function () {
                return this.hours() % 12 || 12;
            },
            m    : function () {
                return this.minutes();
            },
            s    : function () {
                return this.seconds();
            },
            S    : function () {
                return toInt(this.milliseconds() / 100);
            },
            SS   : function () {
                return leftZeroFill(toInt(this.milliseconds() / 10), 2);
            },
            SSS  : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            SSSS : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            Z    : function () {
                var a = -this.zone(),
                    b = '+';
                if (a < 0) {
                    a = -a;
                    b = '-';
                }
                return b + leftZeroFill(toInt(a / 60), 2) + ':' + leftZeroFill(toInt(a) % 60, 2);
            },
            ZZ   : function () {
                var a = -this.zone(),
                    b = '+';
                if (a < 0) {
                    a = -a;
                    b = '-';
                }
                return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
            },
            z : function () {
                return this.zoneAbbr();
            },
            zz : function () {
                return this.zoneName();
            },
            X    : function () {
                return this.unix();
            },
            Q : function () {
                return this.quarter();
            }
        },

        deprecations = {},

        lists = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'];

    // Pick the first defined of two or three arguments. dfl comes from
    // default.
    function dfl(a, b, c) {
        switch (arguments.length) {
            case 2: return a != null ? a : b;
            case 3: return a != null ? a : b != null ? b : c;
            default: throw new Error('Implement me');
        }
    }

    function hasOwnProp(a, b) {
        return hasOwnProperty.call(a, b);
    }

    function defaultParsingFlags() {
        // We need to deep clone this object, and es5 standard is not very
        // helpful.
        return {
            empty : false,
            unusedTokens : [],
            unusedInput : [],
            overflow : -2,
            charsLeftOver : 0,
            nullInput : false,
            invalidMonth : null,
            invalidFormat : false,
            userInvalidated : false,
            iso: false
        };
    }

    function printMsg(msg) {
        if (moment.suppressDeprecationWarnings === false &&
                typeof console !== 'undefined' && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function () {
            if (firstTime) {
                printMsg(msg);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    function deprecateSimple(name, msg) {
        if (!deprecations[name]) {
            printMsg(msg);
            deprecations[name] = true;
        }
    }

    function padToken(func, count) {
        return function (a) {
            return leftZeroFill(func.call(this, a), count);
        };
    }
    function ordinalizeToken(func, period) {
        return function (a) {
            return this.localeData().ordinal(func.call(this, a), period);
        };
    }

    while (ordinalizeTokens.length) {
        i = ordinalizeTokens.pop();
        formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
    }
    while (paddedTokens.length) {
        i = paddedTokens.pop();
        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
    }
    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


    /************************************
        Constructors
    ************************************/

    function Locale() {
    }

    // Moment prototype object
    function Moment(config, skipOverflow) {
        if (skipOverflow !== false) {
            checkOverflow(config);
        }
        copyConfig(this, config);
        this._d = new Date(+config._d);
    }

    // Duration Constructor
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = moment.localeData();

        this._bubble();
    }

    /************************************
        Helpers
    ************************************/


    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function copyConfig(to, from) {
        var i, prop, val;

        if (typeof from._isAMomentObject !== 'undefined') {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (typeof from._i !== 'undefined') {
            to._i = from._i;
        }
        if (typeof from._f !== 'undefined') {
            to._f = from._f;
        }
        if (typeof from._l !== 'undefined') {
            to._l = from._l;
        }
        if (typeof from._strict !== 'undefined') {
            to._strict = from._strict;
        }
        if (typeof from._tzm !== 'undefined') {
            to._tzm = from._tzm;
        }
        if (typeof from._isUTC !== 'undefined') {
            to._isUTC = from._isUTC;
        }
        if (typeof from._offset !== 'undefined') {
            to._offset = from._offset;
        }
        if (typeof from._pf !== 'undefined') {
            to._pf = from._pf;
        }
        if (typeof from._locale !== 'undefined') {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i in momentProperties) {
                prop = momentProperties[i];
                val = from[prop];
                if (typeof val !== 'undefined') {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    // left zero fill a number
    // see http://jsperf.com/left-zero-filling for performance comparison
    function leftZeroFill(number, targetLength, forceSign) {
        var output = '' + Math.abs(number),
            sign = number >= 0;

        while (output.length < targetLength) {
            output = '0' + output;
        }
        return (sign ? (forceSign ? '+' : '') : '-') + output;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        other = makeAs(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = moment.duration(val, period);
            addOrSubtractDurationFromMoment(this, dur, direction);
            return this;
        };
    }

    function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;
        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            rawSetter(mom, 'Date', rawGetter(mom, 'Date') + days * isAdding);
        }
        if (months) {
            rawMonthSetter(mom, rawGetter(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            moment.updateOffset(mom, days || months);
        }
    }

    // check if is an array
    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return Object.prototype.toString.call(input) === '[object Date]' ||
            input instanceof Date;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function normalizeUnits(units) {
        if (units) {
            var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
            units = unitAliases[units] || camelFunctions[lowered] || lowered;
        }
        return units;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function makeList(field) {
        var count, setter;

        if (field.indexOf('week') === 0) {
            count = 7;
            setter = 'day';
        }
        else if (field.indexOf('month') === 0) {
            count = 12;
            setter = 'month';
        }
        else {
            return;
        }

        moment[field] = function (format, index) {
            var i, getter,
                method = moment._locale[field],
                results = [];

            if (typeof format === 'number') {
                index = format;
                format = undefined;
            }

            getter = function (i) {
                var m = moment().utc().set(setter, i);
                return method.call(moment._locale, m, format || '');
            };

            if (index != null) {
                return getter(index);
            }
            else {
                for (i = 0; i < count; i++) {
                    results.push(getter(i));
                }
                return results;
            }
        };
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            if (coercedNumber >= 0) {
                value = Math.floor(coercedNumber);
            } else {
                value = Math.ceil(coercedNumber);
            }
        }

        return value;
    }

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    function weeksInYear(year, dow, doy) {
        return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week;
    }

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function checkOverflow(m) {
        var overflow;
        if (m._a && m._pf.overflow === -2) {
            overflow =
                m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH :
                m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE :
                m._a[HOUR] < 0 || m._a[HOUR] > 23 ? HOUR :
                m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE :
                m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND :
                m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }

            m._pf.overflow = overflow;
        }
    }

    function isValid(m) {
        if (m._isValid == null) {
            m._isValid = !isNaN(m._d.getTime()) &&
                m._pf.overflow < 0 &&
                !m._pf.empty &&
                !m._pf.invalidMonth &&
                !m._pf.nullInput &&
                !m._pf.invalidFormat &&
                !m._pf.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    m._pf.charsLeftOver === 0 &&
                    m._pf.unusedTokens.length === 0;
            }
        }
        return m._isValid;
    }

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return null;
    }

    function loadLocale(name) {
        var oldLocale = null;
        if (!locales[name] && hasModule) {
            try {
                oldLocale = moment.locale();
                !(function webpackMissingModule() { var e = new Error("Cannot find module \"./locale\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
                // because defineLocale currently also sets the global locale, we want to undo that for lazy loaded locales
                moment.locale(oldLocale);
            } catch (e) { }
        }
        return locales[name];
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function makeAs(input, model) {
        return model._isUTC ? moment(input).zone(model._offset || 0) :
            moment(input).local();
    }

    /************************************
        Locale
    ************************************/


    extend(Locale.prototype, {

        set : function (config) {
            var prop, i;
            for (i in config) {
                prop = config[i];
                if (typeof prop === 'function') {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
        },

        _months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        months : function (m) {
            return this._months[m.month()];
        },

        _monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        monthsShort : function (m) {
            return this._monthsShort[m.month()];
        },

        monthsParse : function (monthName) {
            var i, mom, regex;

            if (!this._monthsParse) {
                this._monthsParse = [];
            }

            for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                if (!this._monthsParse[i]) {
                    mom = moment.utc([2000, i]);
                    regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                    this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._monthsParse[i].test(monthName)) {
                    return i;
                }
            }
        },

        _weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdays : function (m) {
            return this._weekdays[m.day()];
        },

        _weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysShort : function (m) {
            return this._weekdaysShort[m.day()];
        },

        _weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        weekdaysMin : function (m) {
            return this._weekdaysMin[m.day()];
        },

        weekdaysParse : function (weekdayName) {
            var i, mom, regex;

            if (!this._weekdaysParse) {
                this._weekdaysParse = [];
            }

            for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already
                if (!this._weekdaysParse[i]) {
                    mom = moment([2000, 1]).day(i);
                    regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                    this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._weekdaysParse[i].test(weekdayName)) {
                    return i;
                }
            }
        },

        _longDateFormat : {
            LT : 'h:mm A',
            L : 'MM/DD/YYYY',
            LL : 'MMMM D, YYYY',
            LLL : 'MMMM D, YYYY LT',
            LLLL : 'dddd, MMMM D, YYYY LT'
        },
        longDateFormat : function (key) {
            var output = this._longDateFormat[key];
            if (!output && this._longDateFormat[key.toUpperCase()]) {
                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1);
                });
                this._longDateFormat[key] = output;
            }
            return output;
        },

        isPM : function (input) {
            // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
            // Using charAt should be more compatible.
            return ((input + '').toLowerCase().charAt(0) === 'p');
        },

        _meridiemParse : /[ap]\.?m?\.?/i,
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'pm' : 'PM';
            } else {
                return isLower ? 'am' : 'AM';
            }
        },

        _calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        calendar : function (key, mom) {
            var output = this._calendar[key];
            return typeof output === 'function' ? output.apply(mom) : output;
        },

        _relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },

        relativeTime : function (number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return (typeof output === 'function') ?
                output(number, withoutSuffix, string, isFuture) :
                output.replace(/%d/i, number);
        },

        pastFuture : function (diff, output) {
            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
            return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
        },

        ordinal : function (number) {
            return this._ordinal.replace('%d', number);
        },
        _ordinal : '%d',

        preparse : function (string) {
            return string;
        },

        postformat : function (string) {
            return string;
        },

        week : function (mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week;
        },

        _week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        },

        _invalidDate: 'Invalid date',
        invalidDate: function () {
            return this._invalidDate;
        }
    });

    /************************************
        Formatting
    ************************************/


    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '';
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());

        if (!formatFunctions[format]) {
            formatFunctions[format] = makeFormatFunction(format);
        }

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }


    /************************************
        Parsing
    ************************************/


    // get the regex to find the next token
    function getParseRegexForToken(token, config) {
        var a, strict = config._strict;
        switch (token) {
        case 'Q':
            return parseTokenOneDigit;
        case 'DDDD':
            return parseTokenThreeDigits;
        case 'YYYY':
        case 'GGGG':
        case 'gggg':
            return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
        case 'Y':
        case 'G':
        case 'g':
            return parseTokenSignedNumber;
        case 'YYYYYY':
        case 'YYYYY':
        case 'GGGGG':
        case 'ggggg':
            return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
        case 'S':
            if (strict) {
                return parseTokenOneDigit;
            }
            /* falls through */
        case 'SS':
            if (strict) {
                return parseTokenTwoDigits;
            }
            /* falls through */
        case 'SSS':
            if (strict) {
                return parseTokenThreeDigits;
            }
            /* falls through */
        case 'DDD':
            return parseTokenOneToThreeDigits;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
            return parseTokenWord;
        case 'a':
        case 'A':
            return config._locale._meridiemParse;
        case 'X':
            return parseTokenTimestampMs;
        case 'Z':
        case 'ZZ':
            return parseTokenTimezone;
        case 'T':
            return parseTokenT;
        case 'SSSS':
            return parseTokenDigits;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'GG':
        case 'gg':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'ww':
        case 'WW':
            return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
        case 'w':
        case 'W':
        case 'e':
        case 'E':
            return parseTokenOneOrTwoDigits;
        case 'Do':
            return parseTokenOrdinal;
        default :
            a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), 'i'));
            return a;
        }
    }

    function timezoneMinutesFromString(string) {
        string = string || '';
        var possibleTzMatches = (string.match(parseTokenTimezone) || []),
            tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
            parts = (tzChunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
            minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? -minutes : minutes;
    }

    // function to convert string input to date
    function addTimeToArrayFromToken(token, input, config) {
        var a, datePartArray = config._a;

        switch (token) {
        // QUARTER
        case 'Q':
            if (input != null) {
                datePartArray[MONTH] = (toInt(input) - 1) * 3;
            }
            break;
        // MONTH
        case 'M' : // fall through to MM
        case 'MM' :
            if (input != null) {
                datePartArray[MONTH] = toInt(input) - 1;
            }
            break;
        case 'MMM' : // fall through to MMMM
        case 'MMMM' :
            a = config._locale.monthsParse(input);
            // if we didn't find a month name, mark the date as invalid.
            if (a != null) {
                datePartArray[MONTH] = a;
            } else {
                config._pf.invalidMonth = input;
            }
            break;
        // DAY OF MONTH
        case 'D' : // fall through to DD
        case 'DD' :
            if (input != null) {
                datePartArray[DATE] = toInt(input);
            }
            break;
        case 'Do' :
            if (input != null) {
                datePartArray[DATE] = toInt(parseInt(input, 10));
            }
            break;
        // DAY OF YEAR
        case 'DDD' : // fall through to DDDD
        case 'DDDD' :
            if (input != null) {
                config._dayOfYear = toInt(input);
            }

            break;
        // YEAR
        case 'YY' :
            datePartArray[YEAR] = moment.parseTwoDigitYear(input);
            break;
        case 'YYYY' :
        case 'YYYYY' :
        case 'YYYYYY' :
            datePartArray[YEAR] = toInt(input);
            break;
        // AM / PM
        case 'a' : // fall through to A
        case 'A' :
            config._isPm = config._locale.isPM(input);
            break;
        // 24 HOUR
        case 'H' : // fall through to hh
        case 'HH' : // fall through to hh
        case 'h' : // fall through to hh
        case 'hh' :
            datePartArray[HOUR] = toInt(input);
            break;
        // MINUTE
        case 'm' : // fall through to mm
        case 'mm' :
            datePartArray[MINUTE] = toInt(input);
            break;
        // SECOND
        case 's' : // fall through to ss
        case 'ss' :
            datePartArray[SECOND] = toInt(input);
            break;
        // MILLISECOND
        case 'S' :
        case 'SS' :
        case 'SSS' :
        case 'SSSS' :
            datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
            break;
        // UNIX TIMESTAMP WITH MS
        case 'X':
            config._d = new Date(parseFloat(input) * 1000);
            break;
        // TIMEZONE
        case 'Z' : // fall through to ZZ
        case 'ZZ' :
            config._useUTC = true;
            config._tzm = timezoneMinutesFromString(input);
            break;
        // WEEKDAY - human
        case 'dd':
        case 'ddd':
        case 'dddd':
            a = config._locale.weekdaysParse(input);
            // if we didn't get a weekday name, mark the date as invalid
            if (a != null) {
                config._w = config._w || {};
                config._w['d'] = a;
            } else {
                config._pf.invalidWeekday = input;
            }
            break;
        // WEEK, WEEK DAY - numeric
        case 'w':
        case 'ww':
        case 'W':
        case 'WW':
        case 'd':
        case 'e':
        case 'E':
            token = token.substr(0, 1);
            /* falls through */
        case 'gggg':
        case 'GGGG':
        case 'GGGGG':
            token = token.substr(0, 2);
            if (input) {
                config._w = config._w || {};
                config._w[token] = toInt(input);
            }
            break;
        case 'gg':
        case 'GG':
            config._w = config._w || {};
            config._w[token] = moment.parseTwoDigitYear(input);
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
            week = dfl(w.W, 1);
            weekday = dfl(w.E, 1);
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
            week = dfl(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < dow) {
                    ++week;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function dateFromConfig(config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                config._pf._overflowDayOfYear = true;
            }

            date = makeUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
        // Apply timezone offset from input. The actual zone can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() + config._tzm);
        }
    }

    function dateFromObject(config) {
        var normalizedInput;

        if (config._d) {
            return;
        }

        normalizedInput = normalizeObjectUnits(config._i);
        config._a = [
            normalizedInput.year,
            normalizedInput.month,
            normalizedInput.day,
            normalizedInput.hour,
            normalizedInput.minute,
            normalizedInput.second,
            normalizedInput.millisecond
        ];

        dateFromConfig(config);
    }

    function currentDateArray(config) {
        var now = new Date();
        if (config._useUTC) {
            return [
                now.getUTCFullYear(),
                now.getUTCMonth(),
                now.getUTCDate()
            ];
        } else {
            return [now.getFullYear(), now.getMonth(), now.getDate()];
        }
    }

    // date from string and format string
    function makeDateFromStringAndFormat(config) {
        if (config._f === moment.ISO_8601) {
            parseISO(config);
            return;
        }

        config._a = [];
        config._pf.empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    config._pf.unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    config._pf.empty = false;
                }
                else {
                    config._pf.unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                config._pf.unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        config._pf.charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            config._pf.unusedInput.push(string);
        }

        // handle am pm
        if (config._isPm && config._a[HOUR] < 12) {
            config._a[HOUR] += 12;
        }
        // if is 12 am, change hours to 0
        if (config._isPm === false && config._a[HOUR] === 12) {
            config._a[HOUR] = 0;
        }

        dateFromConfig(config);
        checkOverflow(config);
    }

    function unescapeFormat(s) {
        return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        });
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function regexpEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    // date from string and array of format strings
    function makeDateFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            config._pf.invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._pf = defaultParsingFlags();
            tempConfig._f = config._f[i];
            makeDateFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += tempConfig._pf.charsLeftOver;

            //or tokens
            currentScore += tempConfig._pf.unusedTokens.length * 10;

            tempConfig._pf.score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    // date from iso format
    function parseISO(config) {
        var i, l,
            string = config._i,
            match = isoRegex.exec(string);

        if (match) {
            config._pf.iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(string)) {
                    // match[5] should be 'T' or undefined
                    config._f = isoDates[i][0] + (match[6] || ' ');
                    break;
                }
            }
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(string)) {
                    config._f += isoTimes[i][0];
                    break;
                }
            }
            if (string.match(parseTokenTimezone)) {
                config._f += 'Z';
            }
            makeDateFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function makeDateFromString(config) {
        parseISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            moment.createFromInputFallback(config);
        }
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function makeDateFromInput(config) {
        var input = config._i, matched;
        if (input === undefined) {
            config._d = new Date();
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if ((matched = aspNetJsonRegex.exec(input)) !== null) {
            config._d = new Date(+matched[1]);
        } else if (typeof input === 'string') {
            makeDateFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            dateFromConfig(config);
        } else if (typeof(input) === 'object') {
            dateFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            moment.createFromInputFallback(config);
        }
    }

    function makeDate(y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor doesn't accept years < 1970
        if (y < 1970) {
            date.setFullYear(y);
        }
        return date;
    }

    function makeUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 1970) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    function parseWeekday(input, locale) {
        if (typeof input === 'string') {
            if (!isNaN(input)) {
                input = parseInt(input, 10);
            }
            else {
                input = locale.weekdaysParse(input);
                if (typeof input !== 'number') {
                    return null;
                }
            }
        }
        return input;
    }

    /************************************
        Relative Time
    ************************************/


    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime(posNegDuration, withoutSuffix, locale) {
        var duration = moment.duration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            years = round(duration.as('y')),

            args = seconds < relativeTimeThresholds.s && ['s', seconds] ||
                minutes === 1 && ['m'] ||
                minutes < relativeTimeThresholds.m && ['mm', minutes] ||
                hours === 1 && ['h'] ||
                hours < relativeTimeThresholds.h && ['hh', hours] ||
                days === 1 && ['d'] ||
                days < relativeTimeThresholds.d && ['dd', days] ||
                months === 1 && ['M'] ||
                months < relativeTimeThresholds.M && ['MM', months] ||
                years === 1 && ['y'] || ['yy', years];

        args[2] = withoutSuffix;
        args[3] = +posNegDuration > 0;
        args[4] = locale;
        return substituteTimeAgo.apply({}, args);
    }


    /************************************
        Week of Year
    ************************************/


    // firstDayOfWeek       0 = sun, 6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun, 6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;


        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }

        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }

        adjustedMoment = moment(mom).add(daysToDayOfWeek, 'd');
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var d = makeUTCDate(year, 0, 1).getUTCDay(), daysToAdd, dayOfYear;

        d = d === 0 ? 7 : d;
        weekday = weekday != null ? weekday : firstDayOfWeek;
        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;

        return {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ?  dayOfYear : daysInYear(year - 1) + dayOfYear
        };
    }

    /************************************
        Top Level Functions
    ************************************/

    function makeMoment(config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || moment.localeData(config._l);

        if (input === null || (format === undefined && input === '')) {
            return moment.invalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (moment.isMoment(input)) {
            return new Moment(input, true);
        } else if (format) {
            if (isArray(format)) {
                makeDateFromStringAndArray(config);
            } else {
                makeDateFromStringAndFormat(config);
            }
        } else {
            makeDateFromInput(config);
        }

        return new Moment(config);
    }

    moment = function (input, format, locale, strict) {
        var c;

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._i = input;
        c._f = format;
        c._l = locale;
        c._strict = strict;
        c._isUTC = false;
        c._pf = defaultParsingFlags();

        return makeMoment(c);
    };

    moment.suppressDeprecationWarnings = false;

    moment.createFromInputFallback = deprecate(
        'moment construction falls back to js Date. This is ' +
        'discouraged and will be removed in upcoming major ' +
        'release. Please refer to ' +
        'https://github.com/moment/moment/issues/1407 for more info.',
        function (config) {
            config._d = new Date(config._i);
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return moment();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    moment.min = function () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    };

    moment.max = function () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    };

    // creating with utc
    moment.utc = function (input, format, locale, strict) {
        var c;

        if (typeof(locale) === 'boolean') {
            strict = locale;
            locale = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._useUTC = true;
        c._isUTC = true;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        c._pf = defaultParsingFlags();

        return makeMoment(c).utc();
    };

    // creating with unix timestamp (in seconds)
    moment.unix = function (input) {
        return moment(input * 1000);
    };

    // duration
    moment.duration = function (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            parseIso,
            diffRes;

        if (moment.isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = isoDurationRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            parseIso = function (inp) {
                // We'd normally use ~~inp for this, but unfortunately it also
                // converts floats to ints.
                // inp may be undefined, so careful calling replace on it.
                var res = inp && parseFloat(inp.replace(',', '.'));
                // apply sign while we're at it
                return (isNaN(res) ? 0 : res) * sign;
            };
            duration = {
                y: parseIso(match[2]),
                M: parseIso(match[3]),
                d: parseIso(match[4]),
                h: parseIso(match[5]),
                m: parseIso(match[6]),
                s: parseIso(match[7]),
                w: parseIso(match[8])
            };
        } else if (typeof duration === 'object' &&
                ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(moment(duration.from), moment(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (moment.isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    };

    // version number
    moment.version = VERSION;

    // default format
    moment.defaultFormat = isoFormat;

    // constant that refers to the ISO standard
    moment.ISO_8601 = function () {};

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    moment.momentProperties = momentProperties;

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    moment.updateOffset = function () {};

    // This function allows you to set a threshold for relative time strings
    moment.relativeTimeThreshold = function (threshold, limit) {
        if (relativeTimeThresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return relativeTimeThresholds[threshold];
        }
        relativeTimeThresholds[threshold] = limit;
        return true;
    };

    moment.lang = deprecate(
        'moment.lang is deprecated. Use moment.locale instead.',
        function (key, value) {
            return moment.locale(key, value);
        }
    );

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    moment.locale = function (key, values) {
        var data;
        if (key) {
            if (typeof(values) !== 'undefined') {
                data = moment.defineLocale(key, values);
            }
            else {
                data = moment.localeData(key);
            }

            if (data) {
                moment.duration._locale = moment._locale = data;
            }
        }

        return moment._locale._abbr;
    };

    moment.defineLocale = function (name, values) {
        if (values !== null) {
            values.abbr = name;
            if (!locales[name]) {
                locales[name] = new Locale();
            }
            locales[name].set(values);

            // backwards compat for now: also set the locale
            moment.locale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    };

    moment.langData = deprecate(
        'moment.langData is deprecated. Use moment.localeData instead.',
        function (key) {
            return moment.localeData(key);
        }
    );

    // returns locale data
    moment.localeData = function (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return moment._locale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    };

    // compare moment object
    moment.isMoment = function (obj) {
        return obj instanceof Moment ||
            (obj != null && hasOwnProp(obj, '_isAMomentObject'));
    };

    // for typechecking Duration objects
    moment.isDuration = function (obj) {
        return obj instanceof Duration;
    };

    for (i = lists.length - 1; i >= 0; --i) {
        makeList(lists[i]);
    }

    moment.normalizeUnits = function (units) {
        return normalizeUnits(units);
    };

    moment.invalid = function (flags) {
        var m = moment.utc(NaN);
        if (flags != null) {
            extend(m._pf, flags);
        }
        else {
            m._pf.userInvalidated = true;
        }

        return m;
    };

    moment.parseZone = function () {
        return moment.apply(null, arguments).parseZone();
    };

    moment.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    /************************************
        Moment Prototype
    ************************************/


    extend(moment.fn = Moment.prototype, {

        clone : function () {
            return moment(this);
        },

        valueOf : function () {
            return +this._d + ((this._offset || 0) * 60000);
        },

        unix : function () {
            return Math.floor(+this / 1000);
        },

        toString : function () {
            return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
        },

        toDate : function () {
            return this._offset ? new Date(+this) : this._d;
        },

        toISOString : function () {
            var m = moment(this).utc();
            if (0 < m.year() && m.year() <= 9999) {
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            } else {
                return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        },

        toArray : function () {
            var m = this;
            return [
                m.year(),
                m.month(),
                m.date(),
                m.hours(),
                m.minutes(),
                m.seconds(),
                m.milliseconds()
            ];
        },

        isValid : function () {
            return isValid(this);
        },

        isDSTShifted : function () {
            if (this._a) {
                return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
            }

            return false;
        },

        parsingFlags : function () {
            return extend({}, this._pf);
        },

        invalidAt: function () {
            return this._pf.overflow;
        },

        utc : function (keepLocalTime) {
            return this.zone(0, keepLocalTime);
        },

        local : function (keepLocalTime) {
            if (this._isUTC) {
                this.zone(0, keepLocalTime);
                this._isUTC = false;

                if (keepLocalTime) {
                    this.add(this._dateTzOffset(), 'm');
                }
            }
            return this;
        },

        format : function (inputString) {
            var output = formatMoment(this, inputString || moment.defaultFormat);
            return this.localeData().postformat(output);
        },

        add : createAdder(1, 'add'),

        subtract : createAdder(-1, 'subtract'),

        diff : function (input, units, asFloat) {
            var that = makeAs(input, this),
                zoneDiff = (this.zone() - that.zone()) * 6e4,
                diff, output, daysAdjust;

            units = normalizeUnits(units);

            if (units === 'year' || units === 'month') {
                // average number of days in the months in the given dates
                diff = (this.daysInMonth() + that.daysInMonth()) * 432e5; // 24 * 60 * 60 * 1000 / 2
                // difference in months
                output = ((this.year() - that.year()) * 12) + (this.month() - that.month());
                // adjust by taking difference in days, average number of days
                // and dst in the given months.
                daysAdjust = (this - moment(this).startOf('month')) -
                    (that - moment(that).startOf('month'));
                // same as above but with zones, to negate all dst
                daysAdjust -= ((this.zone() - moment(this).startOf('month').zone()) -
                        (that.zone() - moment(that).startOf('month').zone())) * 6e4;
                output += daysAdjust / diff;
                if (units === 'year') {
                    output = output / 12;
                }
            } else {
                diff = (this - that);
                output = units === 'second' ? diff / 1e3 : // 1000
                    units === 'minute' ? diff / 6e4 : // 1000 * 60
                    units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
                    units === 'day' ? (diff - zoneDiff) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                    units === 'week' ? (diff - zoneDiff) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                    diff;
            }
            return asFloat ? output : absRound(output);
        },

        from : function (time, withoutSuffix) {
            return moment.duration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        },

        fromNow : function (withoutSuffix) {
            return this.from(moment(), withoutSuffix);
        },

        calendar : function (time) {
            // We want to compare the start of today, vs this.
            // Getting start-of-today depends on whether we're zone'd or not.
            var now = time || moment(),
                sod = makeAs(now, this).startOf('day'),
                diff = this.diff(sod, 'days', true),
                format = diff < -6 ? 'sameElse' :
                    diff < -1 ? 'lastWeek' :
                    diff < 0 ? 'lastDay' :
                    diff < 1 ? 'sameDay' :
                    diff < 2 ? 'nextDay' :
                    diff < 7 ? 'nextWeek' : 'sameElse';
            return this.format(this.localeData().calendar(format, this));
        },

        isLeapYear : function () {
            return isLeapYear(this.year());
        },

        isDST : function () {
            return (this.zone() < this.clone().month(0).zone() ||
                this.zone() < this.clone().month(5).zone());
        },

        day : function (input) {
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (input != null) {
                input = parseWeekday(input, this.localeData());
                return this.add(input - day, 'd');
            } else {
                return day;
            }
        },

        month : makeAccessor('Month', true),

        startOf : function (units) {
            units = normalizeUnits(units);
            // the following switch intentionally omits break keywords
            // to utilize falling through the cases.
            switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
                /* falls through */
            }

            // weeks are a special case
            if (units === 'week') {
                this.weekday(0);
            } else if (units === 'isoWeek') {
                this.isoWeekday(1);
            }

            // quarters are also special
            if (units === 'quarter') {
                this.month(Math.floor(this.month() / 3) * 3);
            }

            return this;
        },

        endOf: function (units) {
            units = normalizeUnits(units);
            return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
        },

        isAfter: function (input, units) {
            units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this > +input;
            } else {
                return +this.clone().startOf(units) > +moment(input).startOf(units);
            }
        },

        isBefore: function (input, units) {
            units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this < +input;
            } else {
                return +this.clone().startOf(units) < +moment(input).startOf(units);
            }
        },

        isSame: function (input, units) {
            units = normalizeUnits(units || 'millisecond');
            if (units === 'millisecond') {
                input = moment.isMoment(input) ? input : moment(input);
                return +this === +input;
            } else {
                return +this.clone().startOf(units) === +makeAs(input, this).startOf(units);
            }
        },

        min: deprecate(
                 'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
                 function (other) {
                     other = moment.apply(null, arguments);
                     return other < this ? this : other;
                 }
         ),

        max: deprecate(
                'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
                function (other) {
                    other = moment.apply(null, arguments);
                    return other > this ? this : other;
                }
        ),

        // keepLocalTime = true means only change the timezone, without
        // affecting the local hour. So 5:31:26 +0300 --[zone(2, true)]-->
        // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist int zone
        // +0200, so we adjust the time as needed, to be valid.
        //
        // Keeping the time actually adds/subtracts (one hour)
        // from the actual represented time. That is why we call updateOffset
        // a second time. In case it wants us to change the offset again
        // _changeInProgress == true case, then we have to adjust, because
        // there is no such time in the given timezone.
        zone : function (input, keepLocalTime) {
            var offset = this._offset || 0,
                localAdjust;
            if (input != null) {
                if (typeof input === 'string') {
                    input = timezoneMinutesFromString(input);
                }
                if (Math.abs(input) < 16) {
                    input = input * 60;
                }
                if (!this._isUTC && keepLocalTime) {
                    localAdjust = this._dateTzOffset();
                }
                this._offset = input;
                this._isUTC = true;
                if (localAdjust != null) {
                    this.subtract(localAdjust, 'm');
                }
                if (offset !== input) {
                    if (!keepLocalTime || this._changeInProgress) {
                        addOrSubtractDurationFromMoment(this,
                                moment.duration(offset - input, 'm'), 1, false);
                    } else if (!this._changeInProgress) {
                        this._changeInProgress = true;
                        moment.updateOffset(this, true);
                        this._changeInProgress = null;
                    }
                }
            } else {
                return this._isUTC ? offset : this._dateTzOffset();
            }
            return this;
        },

        zoneAbbr : function () {
            return this._isUTC ? 'UTC' : '';
        },

        zoneName : function () {
            return this._isUTC ? 'Coordinated Universal Time' : '';
        },

        parseZone : function () {
            if (this._tzm) {
                this.zone(this._tzm);
            } else if (typeof this._i === 'string') {
                this.zone(this._i);
            }
            return this;
        },

        hasAlignedHourOffset : function (input) {
            if (!input) {
                input = 0;
            }
            else {
                input = moment(input).zone();
            }

            return (this.zone() - input) % 60 === 0;
        },

        daysInMonth : function () {
            return daysInMonth(this.year(), this.month());
        },

        dayOfYear : function (input) {
            var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
            return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
        },

        quarter : function (input) {
            return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        },

        weekYear : function (input) {
            var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return input == null ? year : this.add((input - year), 'y');
        },

        isoWeekYear : function (input) {
            var year = weekOfYear(this, 1, 4).year;
            return input == null ? year : this.add((input - year), 'y');
        },

        week : function (input) {
            var week = this.localeData().week(this);
            return input == null ? week : this.add((input - week) * 7, 'd');
        },

        isoWeek : function (input) {
            var week = weekOfYear(this, 1, 4).week;
            return input == null ? week : this.add((input - week) * 7, 'd');
        },

        weekday : function (input) {
            var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return input == null ? weekday : this.add(input - weekday, 'd');
        },

        isoWeekday : function (input) {
            // behaves the same as moment#day except
            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
            // as a setter, sunday should belong to the previous week.
            return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
        },

        isoWeeksInYear : function () {
            return weeksInYear(this.year(), 1, 4);
        },

        weeksInYear : function () {
            var weekInfo = this.localeData()._week;
            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units]();
        },

        set : function (units, value) {
            units = normalizeUnits(units);
            if (typeof this[units] === 'function') {
                this[units](value);
            }
            return this;
        },

        // If passed a locale key, it will set the locale for this
        // instance.  Otherwise, it will return the locale configuration
        // variables for this instance.
        locale : function (key) {
            var newLocaleData;

            if (key === undefined) {
                return this._locale._abbr;
            } else {
                newLocaleData = moment.localeData(key);
                if (newLocaleData != null) {
                    this._locale = newLocaleData;
                }
                return this;
            }
        },

        lang : deprecate(
            'moment().lang() is deprecated. Use moment().localeData() instead.',
            function (key) {
                if (key === undefined) {
                    return this.localeData();
                } else {
                    return this.locale(key);
                }
            }
        ),

        localeData : function () {
            return this._locale;
        },

        _dateTzOffset : function () {
            // On Firefox.24 Date#getTimezoneOffset returns a floating point.
            // https://github.com/moment/moment/pull/1871
            return Math.round(this._d.getTimezoneOffset() / 15) * 15;
        }
    });

    function rawMonthSetter(mom, value) {
        var dayOfMonth;

        // TODO: Move this out of here!
        if (typeof value === 'string') {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (typeof value !== 'number') {
                return mom;
            }
        }

        dayOfMonth = Math.min(mom.date(),
                daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function rawGetter(mom, unit) {
        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
    }

    function rawSetter(mom, unit, value) {
        if (unit === 'Month') {
            return rawMonthSetter(mom, value);
        } else {
            return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }

    function makeAccessor(unit, keepTime) {
        return function (value) {
            if (value != null) {
                rawSetter(this, unit, value);
                moment.updateOffset(this, keepTime);
                return this;
            } else {
                return rawGetter(this, unit);
            }
        };
    }

    moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds', false);
    moment.fn.second = moment.fn.seconds = makeAccessor('Seconds', false);
    moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes', false);
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    moment.fn.hour = moment.fn.hours = makeAccessor('Hours', true);
    // moment.fn.month is defined separately
    moment.fn.date = makeAccessor('Date', true);
    moment.fn.dates = deprecate('dates accessor is deprecated. Use date instead.', makeAccessor('Date', true));
    moment.fn.year = makeAccessor('FullYear', true);
    moment.fn.years = deprecate('years accessor is deprecated. Use year instead.', makeAccessor('FullYear', true));

    // add plural methods
    moment.fn.days = moment.fn.day;
    moment.fn.months = moment.fn.month;
    moment.fn.weeks = moment.fn.week;
    moment.fn.isoWeeks = moment.fn.isoWeek;
    moment.fn.quarters = moment.fn.quarter;

    // add aliased format methods
    moment.fn.toJSON = moment.fn.toISOString;

    /************************************
        Duration Prototype
    ************************************/


    function daysToYears (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        return days * 400 / 146097;
    }

    function yearsToDays (years) {
        // years * 365 + absRound(years / 4) -
        //     absRound(years / 100) + absRound(years / 400);
        return years * 146097 / 400;
    }

    extend(moment.duration.fn = Duration.prototype, {

        _bubble : function () {
            var milliseconds = this._milliseconds,
                days = this._days,
                months = this._months,
                data = this._data,
                seconds, minutes, hours, years = 0;

            // The following code bubbles up values, see the tests for
            // examples of what that means.
            data.milliseconds = milliseconds % 1000;

            seconds = absRound(milliseconds / 1000);
            data.seconds = seconds % 60;

            minutes = absRound(seconds / 60);
            data.minutes = minutes % 60;

            hours = absRound(minutes / 60);
            data.hours = hours % 24;

            days += absRound(hours / 24);

            // Accurately convert days to years, assume start from year 0.
            years = absRound(daysToYears(days));
            days -= absRound(yearsToDays(years));

            // 30 days to a month
            // TODO (iskren): Use anchor date (like 1st Jan) to compute this.
            months += absRound(days / 30);
            days %= 30;

            // 12 months -> 1 year
            years += absRound(months / 12);
            months %= 12;

            data.days = days;
            data.months = months;
            data.years = years;
        },

        abs : function () {
            this._milliseconds = Math.abs(this._milliseconds);
            this._days = Math.abs(this._days);
            this._months = Math.abs(this._months);

            this._data.milliseconds = Math.abs(this._data.milliseconds);
            this._data.seconds = Math.abs(this._data.seconds);
            this._data.minutes = Math.abs(this._data.minutes);
            this._data.hours = Math.abs(this._data.hours);
            this._data.months = Math.abs(this._data.months);
            this._data.years = Math.abs(this._data.years);

            return this;
        },

        weeks : function () {
            return absRound(this.days() / 7);
        },

        valueOf : function () {
            return this._milliseconds +
              this._days * 864e5 +
              (this._months % 12) * 2592e6 +
              toInt(this._months / 12) * 31536e6;
        },

        humanize : function (withSuffix) {
            var output = relativeTime(this, !withSuffix, this.localeData());

            if (withSuffix) {
                output = this.localeData().pastFuture(+this, output);
            }

            return this.localeData().postformat(output);
        },

        add : function (input, val) {
            // supports only 2.0-style add(1, 's') or add(moment)
            var dur = moment.duration(input, val);

            this._milliseconds += dur._milliseconds;
            this._days += dur._days;
            this._months += dur._months;

            this._bubble();

            return this;
        },

        subtract : function (input, val) {
            var dur = moment.duration(input, val);

            this._milliseconds -= dur._milliseconds;
            this._days -= dur._days;
            this._months -= dur._months;

            this._bubble();

            return this;
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units.toLowerCase() + 's']();
        },

        as : function (units) {
            var days, months;
            units = normalizeUnits(units);

            if (units === 'month' || units === 'year') {
                days = this._days + this._milliseconds / 864e5;
                months = this._months + daysToYears(days) * 12;
                return units === 'month' ? months : months / 12;
            } else {
                // handle milliseconds separately because of floating point math errors (issue #1867)
                days = this._days + yearsToDays(this._months / 12);
                switch (units) {
                    case 'week': return days / 7 + this._milliseconds / 6048e5;
                    case 'day': return days + this._milliseconds / 864e5;
                    case 'hour': return days * 24 + this._milliseconds / 36e5;
                    case 'minute': return days * 24 * 60 + this._milliseconds / 6e4;
                    case 'second': return days * 24 * 60 * 60 + this._milliseconds / 1000;
                    // Math.floor prevents floating point math errors here
                    case 'millisecond': return Math.floor(days * 24 * 60 * 60 * 1000) + this._milliseconds;
                    default: throw new Error('Unknown unit ' + units);
                }
            }
        },

        lang : moment.fn.lang,
        locale : moment.fn.locale,

        toIsoString : deprecate(
            'toIsoString() is deprecated. Please use toISOString() instead ' +
            '(notice the capitals)',
            function () {
                return this.toISOString();
            }
        ),

        toISOString : function () {
            // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
            var years = Math.abs(this.years()),
                months = Math.abs(this.months()),
                days = Math.abs(this.days()),
                hours = Math.abs(this.hours()),
                minutes = Math.abs(this.minutes()),
                seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);

            if (!this.asSeconds()) {
                // this is the same as C#'s (Noda) and python (isodate)...
                // but not other JS (goog.date)
                return 'P0D';
            }

            return (this.asSeconds() < 0 ? '-' : '') +
                'P' +
                (years ? years + 'Y' : '') +
                (months ? months + 'M' : '') +
                (days ? days + 'D' : '') +
                ((hours || minutes || seconds) ? 'T' : '') +
                (hours ? hours + 'H' : '') +
                (minutes ? minutes + 'M' : '') +
                (seconds ? seconds + 'S' : '');
        },

        localeData : function () {
            return this._locale;
        }
    });

    moment.duration.fn.toString = moment.duration.fn.toISOString;

    function makeDurationGetter(name) {
        moment.duration.fn[name] = function () {
            return this._data[name];
        };
    }

    for (i in unitMillisecondFactors) {
        if (hasOwnProp(unitMillisecondFactors, i)) {
            makeDurationGetter(i.toLowerCase());
        }
    }

    moment.duration.fn.asMilliseconds = function () {
        return this.as('ms');
    };
    moment.duration.fn.asSeconds = function () {
        return this.as('s');
    };
    moment.duration.fn.asMinutes = function () {
        return this.as('m');
    };
    moment.duration.fn.asHours = function () {
        return this.as('h');
    };
    moment.duration.fn.asDays = function () {
        return this.as('d');
    };
    moment.duration.fn.asWeeks = function () {
        return this.as('weeks');
    };
    moment.duration.fn.asMonths = function () {
        return this.as('M');
    };
    moment.duration.fn.asYears = function () {
        return this.as('y');
    };

    /************************************
        Default Locale
    ************************************/


    // Set default locale, other locale will inherit from English.
    moment.locale('en', {
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    /* EMBED_LOCALES */

    /************************************
        Exposing Moment
    ************************************/

    function makeGlobal(shouldDeprecate) {
        /*global ender:false */
        if (typeof ender !== 'undefined') {
            return;
        }
        oldGlobalMoment = globalScope.moment;
        if (shouldDeprecate) {
            globalScope.moment = deprecate(
                    'Accessing Moment through the global scope is ' +
                    'deprecated, and will be removed in an upcoming ' +
                    'release.',
                    moment);
        } else {
            globalScope.moment = moment;
        }
    }

    // CommonJS module is defined
    if (hasModule) {
        module.exports = moment;
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
            if (module.config && module.config() && module.config().noGlobal === true) {
                // release the global variable
                globalScope.moment = oldGlobalMoment;
            }

            return moment;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        makeGlobal(true);
    } else {
        makeGlobal();
    }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(6)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

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

	module.exports = __webpack_require__(556);


/***/ },

/***/ 422:
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },

/***/ 485:
/***/ function(module, exports) {

	module.exports = __webpack_require__(8);

/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(485) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	    var __meta__ = { // jshint ignore:line
	        id: "window",
	        name: "Window",
	        category: "web",
	        description: "The Window widget displays content in a modal or non-modal HTML window.",
	        depends: [ "draganddrop" ],
	        features: [ {
	            id: "window-fx",
	            name: "Animation",
	            description: "Support for animation",
	            depends: [ "fx" ]
	        } ]
	    };

	    (function($, undefined) {
	        var kendo = window.kendo,
	            Widget = kendo.ui.Widget,
	            Draggable = kendo.ui.Draggable,
	            isPlainObject = $.isPlainObject,
	            activeElement = kendo._activeElement,
	            outerWidth = kendo._outerWidth,
	            outerHeight = kendo._outerHeight,
	            proxy = $.proxy,
	            extend = $.extend,
	            each = $.each,
	            template = kendo.template,
	            BODY = "body",
	            templates,
	            NS = ".kendoWindow",
	            // classNames
	            KWINDOW = ".k-window",
	            KWINDOWTITLE = ".k-window-title",
	            KWINDOWTITLEBAR = KWINDOWTITLE + "bar",
	            KWINDOWCONTENT = ".k-window-content",
	            KWINDOWRESIZEHANDLES = ".k-resize-handle",
	            KOVERLAY = ".k-overlay",
	            KCONTENTFRAME = "k-content-frame",
	            LOADING = "k-i-loading",
	            KHOVERSTATE = "k-state-hover",
	            KFOCUSEDSTATE = "k-state-focused",
	            MAXIMIZEDSTATE = "k-window-maximized",
	            // constants
	            VISIBLE = ":visible",
	            HIDDEN = "hidden",
	            CURSOR = "cursor",
	            // events
	            OPEN = "open",
	            ACTIVATE = "activate",
	            DEACTIVATE = "deactivate",
	            CLOSE = "close",
	            REFRESH = "refresh",
	            MINIMIZE = "minimize",
	            MAXIMIZE = "maximize",
	            RESIZESTART = "resizeStart",
	            RESIZE = "resize",
	            RESIZEEND = "resizeEnd",
	            DRAGSTART = "dragstart",
	            DRAGEND = "dragend",
	            ERROR = "error",
	            OVERFLOW = "overflow",
	            ZINDEX = "zIndex",
	            MINIMIZE_MAXIMIZE = ".k-window-actions .k-i-window-minimize,.k-window-actions .k-i-window-maximize",
	            KPIN = ".k-i-pin",
	            KUNPIN = ".k-i-unpin",
	            PIN_UNPIN = KPIN + "," + KUNPIN,
	            TITLEBAR_BUTTONS = ".k-window-titlebar .k-window-action",
	            REFRESHICON = ".k-window-titlebar .k-i-refresh",
	            isLocalUrl = kendo.isLocalUrl;

	        function defined(x) {
	            return (typeof x != "undefined");
	        }

	        function constrain(value, low, high) {
	            return Math.max(Math.min(parseInt(value, 10), high === Infinity ? high : parseInt(high, 10)), parseInt(low, 10));
	        }

	        function executableScript() {
	            return !this.type || this.type.toLowerCase().indexOf("script") >= 0;
	        }

	        var Window = Widget.extend({
	            init: function(element, options) {
	                var that = this,
	                    wrapper,
	                    offset = {},
	                    visibility, display, position,
	                    isVisible = false,
	                    content,
	                    windowContent,
	                    suppressActions = options && options.actions && !options.actions.length,
	                    id;

	                Widget.fn.init.call(that, element, options);
	                options = that.options;
	                position = options.position;
	                element = that.element;
	                content = options.content;

	                if (suppressActions) {
	                    options.actions = [];
	                }

	                that.appendTo = $(options.appendTo);

	                if (content && !isPlainObject(content)) {
	                    content = options.content = { url: content };
	                }

	                // remove script blocks to prevent double-execution
	                element.find("script").filter(executableScript).remove();

	                if (!element.parent().is(that.appendTo) && (position.top === undefined || position.left === undefined)) {
	                    if (element.is(VISIBLE)) {
	                        offset = element.offset();
	                        isVisible = true;
	                    } else {
	                        visibility = element.css("visibility");
	                        display = element.css("display");

	                        element.css({ visibility: HIDDEN, display: "" });
	                        offset = element.offset();
	                        element.css({ visibility: visibility, display: display });
	                    }

	                    if (position.top === undefined) {
	                        position.top = offset.top;
	                    }
	                    if (position.left === undefined) {
	                        position.left = offset.left;
	                    }
	                }

	                if (!defined(options.visible) || options.visible === null) {
	                    options.visible = element.is(VISIBLE);
	                }

	                wrapper = that.wrapper = element.closest(KWINDOW);

	                if (!element.is(".k-content") || !wrapper[0]) {
	                    element.addClass("k-window-content k-content");
	                    that._createWindow(element, options);
	                    wrapper = that.wrapper = element.closest(KWINDOW);

	                    that._dimensions();
	                }

	                that._position();

	                if (options.pinned) {
	                    that.pin(true);
	                }

	                if (content) {
	                    that.refresh(content);
	                }

	                if (options.visible) {
	                    that.toFront();
	                }

	                windowContent = wrapper.children(KWINDOWCONTENT);
	                that._tabindex(windowContent);

	                if (options.visible && options.modal) {
	                    that._overlay(wrapper.is(VISIBLE)).css({ opacity: 0.5 });
	                }

	                wrapper
	                    .on("mouseenter" + NS, TITLEBAR_BUTTONS, proxy(that._buttonEnter, that))
	                    .on("mouseleave" + NS, TITLEBAR_BUTTONS, proxy(that._buttonLeave, that))
	                    .on("click" + NS, "> " + TITLEBAR_BUTTONS, proxy(that._windowActionHandler, that));

	                windowContent
	                    .on("keydown" + NS, proxy(that._keydown, that))
	                    .on("focus" + NS, proxy(that._focus, that))
	                    .on("blur" + NS, proxy(that._blur, that));

	                this._resizable();

	                this._draggable();

	                id = element.attr("id");
	                if (id) {
	                    id = id + "_wnd_title";
	                    wrapper.children(KWINDOWTITLEBAR)
	                        .children(KWINDOWTITLE)
	                        .attr("id", id);

	                    windowContent
	                        .attr({
	                            "role": "dialog",
	                            "aria-labelledby": id
	                        });
	                }

	                wrapper.add(wrapper.children(".k-resize-handle," + KWINDOWTITLEBAR))
	                    .on("mousedown" + NS, proxy(that.toFront, that));

	                that.touchScroller = kendo.touchScroller(element);

	                that._resizeHandler = proxy(that._onDocumentResize, that);

	                that._marker = kendo.guid().substring(0, 8);

	                $(window).on("resize" + NS + that._marker, that._resizeHandler);

	                if (options.visible) {
	                    that.trigger(OPEN);
	                    that.trigger(ACTIVATE);
	                }

	                kendo.notify(that);
	            },

	            _buttonEnter: function(e) {
	                $(e.currentTarget).addClass(KHOVERSTATE);
	            },

	            _buttonLeave: function(e) {
	                $(e.currentTarget).removeClass(KHOVERSTATE);
	            },

	            _focus: function() {
	                this.wrapper.addClass(KFOCUSEDSTATE);
	            },

	            _blur: function() {
	                this.wrapper.removeClass(KFOCUSEDSTATE);
	            },

	            _dimensions: function() {
	                var wrapper = this.wrapper;
	                var options = this.options;
	                var width = options.width;
	                var height = options.height;
	                var maxHeight = options.maxHeight;
	                var dimensions = ["minWidth","minHeight","maxWidth","maxHeight"];

	                this.title(options.title);

	                for (var i = 0; i < dimensions.length; i++) {
	                    var value = options[dimensions[i]] || "";
	                    if (value != Infinity) {
	                        wrapper.css(dimensions[i], value);
	                    }
	                }

	                if (maxHeight != Infinity) {
	                    this.element.css("maxHeight", maxHeight);
	                }

	                if (width) {
	                    if (width.toString().indexOf("%") > 0) {
	                        wrapper.width(width);
	                    } else {
	                        wrapper.width(constrain(width, options.minWidth, options.maxWidth));
	                    }
	                }
	                else {
	                    wrapper.width("");
	                }

	                if (height) {
	                    if (height.toString().indexOf("%") > 0) {
	                        wrapper.height(height);
	                    } else {
	                        wrapper.height(constrain(height, options.minHeight, options.maxHeight));
	                    }
	                }
	                else {
	                    wrapper.height("");
	                }

	                if (!options.visible) {
	                    wrapper.hide();
	                }
	            },

	            _position: function() {
	                var wrapper = this.wrapper,
	                    position = this.options.position;

	                if (position.top === 0) {
	                    position.top = position.top.toString();
	                }

	                if (position.left === 0) {
	                    position.left = position.left.toString();
	                }

	                wrapper.css({
	                    top: position.top || "",
	                    left: position.left || ""
	                });
	            },

	            _animationOptions: function(id) {
	                var animation = this.options.animation;
	                var basicAnimation = {
	                    open: { effects: {} },
	                    close: { hide: true, effects: {} }
	                };

	                return animation && animation[id] || basicAnimation[id];
	            },

	            _resize: function() {
	                kendo.resize(this.element.children());
	            },

	            _resizable: function() {
	                var resizable = this.options.resizable;
	                var wrapper = this.wrapper;

	                if (this.resizing) {
	                    wrapper
	                        .off("dblclick" + NS)
	                        .children(KWINDOWRESIZEHANDLES).remove();

	                    this.resizing.destroy();
	                    this.resizing = null;
	                }

	                if (resizable) {
	                    wrapper.on("dblclick" + NS, KWINDOWTITLEBAR, proxy(function(e) {
	                        if (!$(e.target).closest(".k-window-action").length) {
	                            this.toggleMaximization();
	                        }
	                    }, this));

	                    each("n e s w se sw ne nw".split(" "), function(index, handler) {
	                        wrapper.append(templates.resizeHandle(handler));
	                    });

	                    this.resizing = new WindowResizing(this);
	                }

	                wrapper = null;
	            },

	            _draggable: function() {
	                var draggable = this.options.draggable;

	                if (this.dragging) {
	                    this.dragging.destroy();
	                    this.dragging = null;
	                }
	                if (draggable) {
	                    this.dragging = new WindowDragging(this, draggable.dragHandle || KWINDOWTITLEBAR);
	                }
	            },

	            _actions: function() {
	                var actions = this.options.actions;
	                var titlebar = this.wrapper.children(KWINDOWTITLEBAR);
	                var container = titlebar.find(".k-window-actions");
	                var windowSpecificCommands = [ "maximize", "minimize" ];

	                actions = $.map(actions, function(action) {
	                    return { name: (windowSpecificCommands.indexOf(action.toLowerCase()) > - 1) ? "window-" + action : action };
	                });

	                container.html(kendo.render(templates.action, actions));
	            },

	            setOptions: function(options) {
	                Widget.fn.setOptions.call(this, options);
	                var scrollable = this.options.scrollable !== false;

	                this.restore();
	                this._dimensions();
	                this._position();
	                this._resizable();
	                this._draggable();
	                this._actions();
	                if (typeof options.modal !== "undefined") {
	                    var visible = this.options.visible !== false;

	                    this._overlay(options.modal && visible);
	                }

	                this.element.css(OVERFLOW, scrollable ? "" : "hidden");
	            },

	            events:[
	                OPEN,
	                ACTIVATE,
	                DEACTIVATE,
	                CLOSE,
	                MINIMIZE,
	                MAXIMIZE,
	                REFRESH,
	                RESIZESTART,
	                RESIZE,
	                RESIZEEND,
	                DRAGSTART,
	                DRAGEND,
	                ERROR
	            ],

	            options: {
	                name: "Window",
	                animation: {
	                    open: {
	                        effects: { zoom: { direction: "in" }, fade: { direction: "in" } },
	                        duration: 350
	                    },
	                    close: {
	                        effects: { zoom: { direction: "out", properties: { scale: 0.7 } }, fade: { direction: "out" } },
	                        duration: 350,
	                        hide: true
	                    }
	                },
	                title: "",
	                actions: ["Close"],
	                autoFocus: true,
	                modal: false,
	                resizable: true,
	                draggable: true,
	                minWidth: 90,
	                minHeight: 50,
	                maxWidth: Infinity,
	                maxHeight: Infinity,
	                pinned: false,
	                scrollable: true,
	                position: {},
	                content: null,
	                visible: null,
	                height: null,
	                width: null,
	                appendTo: "body",
	                isMaximized: false,
	                isMinimized: false
	            },

	            _closable: function() {
	                return $.inArray("close", $.map(this.options.actions, function(x) { return x.toLowerCase(); })) > -1;
	            },

	            _keydown: function(e) {
	                var that = this,
	                    options = that.options,
	                    keys = kendo.keys,
	                    keyCode = e.keyCode,
	                    wrapper = that.wrapper,
	                    offset, handled,
	                    distance = 10,
	                    isMaximized = that.options.isMaximized,
	                    newWidth, newHeight, w, h;

	                if (e.target != e.currentTarget || that._closing) {
	                    return;
	                }

	                if (keyCode == keys.ESC && that._closable()) {
	                    that._close(false);
	                }

	                if (options.draggable && !e.ctrlKey && !isMaximized) {
	                    offset = kendo.getOffset(wrapper);

	                    if (keyCode == keys.UP) {
	                        handled = wrapper.css("top", offset.top - distance);
	                    } else if (keyCode == keys.DOWN) {
	                        handled = wrapper.css("top", offset.top + distance);
	                    } else if (keyCode == keys.LEFT) {
	                        handled = wrapper.css("left", offset.left - distance);
	                    } else if (keyCode == keys.RIGHT) {
	                        handled = wrapper.css("left", offset.left + distance);
	                    }
	                }

	                if (options.resizable && e.ctrlKey && !isMaximized) {
	                    if (keyCode == keys.UP) {
	                        handled = true;
	                        newHeight = wrapper.height() - distance;
	                    } else if (keyCode == keys.DOWN) {
	                        handled = true;
	                        newHeight = wrapper.height() + distance;
	                    } if (keyCode == keys.LEFT) {
	                        handled = true;
	                        newWidth = wrapper.width() - distance;
	                    } else if (keyCode == keys.RIGHT) {
	                        handled = true;
	                        newWidth = wrapper.width() + distance;
	                    }

	                    if (handled) {
	                        w = constrain(newWidth, options.minWidth, options.maxWidth);
	                        h = constrain(newHeight, options.minHeight, options.maxHeight);

	                        if (!isNaN(w)) {
	                            wrapper.width(w);
	                            that.options.width = w + "px";
	                        }
	                        if (!isNaN(h)) {
	                            wrapper.height(h);
	                            that.options.height = h + "px";
	                        }

	                        that.resize();
	                    }
	                }

	                if (handled) {
	                    e.preventDefault();
	                }
	            },

	            _overlay: function (visible) {
	                var overlay = this.appendTo.children(KOVERLAY),
	                    wrapper = this.wrapper;

	                if (!overlay.length) {
	                    overlay = $("<div class='k-overlay' />");
	                }

	                overlay
	                    .insertBefore(wrapper[0])
	                    .toggle(visible)
	                    .css(ZINDEX, parseInt(wrapper.css(ZINDEX), 10) - 1);

	                return overlay;
	            },

	            _actionForIcon: function(icon) {
	                var iconClass = /\bk-i(-\w+)+\b/.exec(icon[0].className)[0];
	                return {
	                    "k-i-close": "_close",
	                    "k-i-window-maximize": "maximize",
	                    "k-i-window-minimize": "minimize",
	                    "k-i-window-restore": "restore",
	                    "k-i-refresh": "refresh",
	                    "k-i-pin": "pin",
	                    "k-i-unpin": "unpin"
	                }[iconClass];
	            },

	            _windowActionHandler: function (e) {
	                if (this._closing) {
	                    return;
	                }
	                var icon = $(e.target).closest(".k-window-action").find(".k-icon");
	                var action = this._actionForIcon(icon);

	                if (action) {
	                    e.preventDefault();
	                    this[action]();
	                    return false;
	                }
	            },

	            _modals: function() {
	                var that = this;

	                var zStack = $(KWINDOW).filter(function() {
	                    var dom = $(this);
	                    var object = that._object(dom);
	                    var options = object && object.options;

	                    return options && options.modal && options.visible && options.appendTo === that.options.appendTo && dom.is(VISIBLE);
	                }).sort(function(a, b){
	                    return +$(a).css("zIndex") - +$(b).css("zIndex");
	                });

	                that = null;

	                return zStack;
	            },

	            _object: function(element) {
	                var content = element.children(KWINDOWCONTENT);
	                var widget = kendo.widgetInstance(content);

	                if (widget) {
	                    return widget;
	                }

	                return undefined;
	            },

	            center: function () {
	                var that = this,
	                    position = that.options.position,
	                    wrapper = that.wrapper,
	                    documentWindow = $(window),
	                    scrollTop = 0,
	                    scrollLeft = 0,
	                    newTop, newLeft;

	                if (that.options.isMaximized) {
	                    return that;
	                }

	                if (!that.options.pinned) {
	                    scrollTop = documentWindow.scrollTop();
	                    scrollLeft = documentWindow.scrollLeft();
	                }

	                newLeft = scrollLeft + Math.max(0, (documentWindow.width() - wrapper.width()) / 2);
	                newTop = scrollTop + Math.max(0, (documentWindow.height() - wrapper.height() - parseInt(wrapper.css("paddingTop"), 10)) / 2);

	                wrapper.css({
	                    left: newLeft,
	                    top: newTop
	                });

	                position.top = newTop;
	                position.left = newLeft;

	                return that;
	            },

	            title: function (text) {
	                var that = this,
	                    wrapper = that.wrapper,
	                    options = that.options,
	                    titleBar = wrapper.children(KWINDOWTITLEBAR),
	                    title = titleBar.children(KWINDOWTITLE),
	                    titleBarHeight;

	                if (!arguments.length) {
	                    return title.html();
	                }

	                if (text === false) {
	                    wrapper.addClass("k-window-titleless");
	                    titleBar.remove();
	                } else {
	                    if (!titleBar.length) {
	                        wrapper.prepend(templates.titlebar(options));
	                        that._actions();
	                        titleBar = wrapper.children(KWINDOWTITLEBAR);
	                    } else {
	                        title.html(kendo.htmlEncode(text));
	                    }

	                    titleBarHeight = parseInt(outerHeight(titleBar), 10);

	                    wrapper.css("padding-top", titleBarHeight);
	                    titleBar.css("margin-top", -titleBarHeight);
	                }

	                that.options.title = text;

	                return that;
	            },

	            content: function (html, data) {
	                var content = this.wrapper.children(KWINDOWCONTENT),
	                    scrollContainer = content.children(".km-scroll-container");

	                content = scrollContainer[0] ? scrollContainer : content;

	                if (!defined(html)) {
	                    return content.html();
	                }

	                this.angular("cleanup", function(){
	                    return { elements: content.children() };
	                });

	                kendo.destroy(this.element.children());

	                content.empty().html(html);

	                this.angular("compile", function(){
	                    var a = [];
	                    for (var i = content.length; --i >= 0;) {
	                        a.push({ dataItem: data });
	                    }
	                    return {
	                        elements: content.children(),
	                        data: a
	                    };
	                });

	                return this;
	            },

	            open: function () {
	                var that = this,
	                    wrapper = that.wrapper,
	                    options = that.options,
	                    showOptions = this._animationOptions("open"),
	                    contentElement = wrapper.children(KWINDOWCONTENT),
	                    overlay, otherModalsVisible,
	                    doc = $(document);

	                if (!that.trigger(OPEN)) {
	                    if (that._closing) {
	                        wrapper.kendoStop(true, true);
	                    }

	                    that._closing = false;

	                    that.toFront();

	                    if (options.autoFocus) {
	                        that.element.focus();
	                    }

	                    options.visible = true;

	                    if (options.modal) {
	                        otherModalsVisible = !!that._modals().length;
	                        overlay = that._overlay(otherModalsVisible);

	                        overlay.kendoStop(true, true);

	                        if (showOptions.duration && kendo.effects.Fade && !otherModalsVisible) {
	                            var overlayFx = kendo.fx(overlay).fadeIn();
	                            overlayFx.duration(showOptions.duration || 0);
	                            overlayFx.endValue(0.5);
	                            overlayFx.play();
	                        } else {
	                            overlay.css("opacity", 0.5);
	                        }

	                        overlay.show();
	                    }

	                    if (!wrapper.is(VISIBLE)) {
	                        contentElement.css(OVERFLOW, HIDDEN);
	                        wrapper.show().kendoStop().kendoAnimate({
	                            effects: showOptions.effects,
	                            duration: showOptions.duration,
	                            complete: proxy(this._activate, this)
	                        });
	                    }
	                }

	                if (options.isMaximized) {
	                    that._documentScrollTop = doc.scrollTop();
	                    that._documentScrollLeft = doc.scrollLeft();
	                    $("html, body").css(OVERFLOW, HIDDEN);
	                }

	                return that;
	            },

	            _activate: function() {
	                var scrollable = this.options.scrollable !== false;

	                if (this.options.autoFocus) {
	                    this.element.focus();
	                }

	                this.element.css(OVERFLOW, scrollable ? "" : "hidden");
	                kendo.resize(this.element.children());
	                this.trigger(ACTIVATE);
	            },

	            _removeOverlay: function(suppressAnimation) {
	                var modals = this._modals();
	                var options = this.options;
	                var hideOverlay = options.modal && !modals.length;
	                var overlay = options.modal ? this._overlay(true) : $(undefined);
	                var hideOptions  = this._animationOptions("close");

	                if (hideOverlay) {
	                    if (!suppressAnimation && hideOptions.duration && kendo.effects.Fade) {
	                        var overlayFx = kendo.fx(overlay).fadeOut();
	                        overlayFx.duration(hideOptions.duration || 0);
	                        overlayFx.startValue(0.5);
	                        overlayFx.play();
	                    } else {
	                        this._overlay(false).remove();
	                    }
	                } else if (modals.length) {
	                    this._object(modals.last())._overlay(true);
	                }
	            },

	            _close: function(systemTriggered) {
	                var that = this,
	                    wrapper = that.wrapper,
	                    options = that.options,
	                    showOptions = this._animationOptions("open"),
	                    hideOptions  = this._animationOptions("close"),
	                    doc = $(document);

	                if (wrapper.is(VISIBLE) && !that.trigger(CLOSE, { userTriggered: !systemTriggered })) {
	                    if (that._closing) {
	                        return;
	                    }

	                    that._closing = true;
	                    options.visible = false;

	                    $(KWINDOW).each(function(i, element) {
	                        var contentElement = $(element).children(KWINDOWCONTENT);

	                        // Remove overlay set by toFront
	                        if (element != wrapper && contentElement.find("> ." + KCONTENTFRAME).length > 0) {
	                            contentElement.children(KOVERLAY).remove();
	                        }
	                    });

	                    this._removeOverlay();

	                    wrapper.kendoStop().kendoAnimate({
	                        effects: hideOptions.effects || showOptions.effects,
	                        reverse: hideOptions.reverse === true,
	                        duration: hideOptions.duration,
	                        complete: proxy(this._deactivate, this)
	                    });
	                }

	                if (that.options.isMaximized) {
	                    $("html, body").css(OVERFLOW, "");
	                    if (that._documentScrollTop && that._documentScrollTop > 0) {
	                        doc.scrollTop(that._documentScrollTop);
	                    }
	                    if (that._documentScrollLeft && that._documentScrollLeft > 0) {
	                        doc.scrollLeft(that._documentScrollLeft);
	                    }
	                }
	            },

	            _deactivate: function () {
	                var that = this;
	                that.wrapper.hide().css("opacity", "");
	                that.trigger(DEACTIVATE);
	                if (that.options.modal) {
	                    var lastModal = that._object(that._modals().last());
	                    if (lastModal) {
	                        lastModal.toFront();
	                    }
	                }
	            },

	            close: function () {
	                this._close(true);
	                return this;
	            },

	            _actionable: function(element) {
	                return $(element).is(TITLEBAR_BUTTONS + "," + TITLEBAR_BUTTONS + " .k-icon,:input,a");
	            },

	            _shouldFocus: function(target) {
	                var active = activeElement(),
	                    element = this.element;

	                return this.options.autoFocus &&
	                    !$(active).is(element) &&
	                    !this._actionable(target) &&
	                    (!element.find(active).length || !element.find(target).length);
	            },

	            toFront: function (e) {
	                var that = this,
	                    wrapper = that.wrapper,
	                    currentWindow = wrapper[0],
	                    zIndex = +wrapper.css(ZINDEX),
	                    originalZIndex = zIndex,
	                    target = (e && e.target) || null;

	                $(KWINDOW).each(function(i, element) {
	                    var windowObject = $(element),
	                        zIndexNew = windowObject.css(ZINDEX),
	                        contentElement = windowObject.children(KWINDOWCONTENT);

	                    if (!isNaN(zIndexNew)) {
	                        zIndex = Math.max(+zIndexNew, zIndex);
	                    }

	                    // Add overlay to windows with iframes and lower z-index to prevent
	                    // trapping of events when resizing / dragging
	                    if (element != currentWindow && contentElement.find("> ." + KCONTENTFRAME).length > 0) {
	                        contentElement.append(templates.overlay);
	                    }
	                });

	                if (!wrapper[0].style.zIndex || originalZIndex < zIndex) {
	                    wrapper.css(ZINDEX, zIndex + 2);
	                }
	                that.element.find("> .k-overlay").remove();

	                if (that._shouldFocus(target)) {
	                    that.element.focus();

	                    var scrollTop = $(window).scrollTop(),
	                        windowTop = parseInt(wrapper.position().top, 10);

	                    if (!that.options.pinned && windowTop > 0 && windowTop < scrollTop) {
	                        if (scrollTop > 0) {
	                            $(window).scrollTop(windowTop);
	                        } else {
	                            wrapper.css("top", scrollTop);
	                        }
	                    }
	                }

	                wrapper = null;

	                return that;
	            },

	            toggleMaximization: function () {
	                if (this._closing) {
	                    return this;
	                }

	                return this[this.options.isMaximized ? "restore" : "maximize"]();
	            },

	            restore: function () {
	                var that = this;
	                var options = that.options;
	                var minHeight = options.minHeight;
	                var restoreOptions = that.restoreOptions;
	                var doc = $(document);

	                if (!options.isMaximized && !options.isMinimized) {
	                    return that;
	                }

	                if (minHeight && minHeight != Infinity) {
	                    that.wrapper.css("min-height", minHeight);
	                }

	                that.wrapper
	                    .css({
	                        position: options.pinned ? "fixed" : "absolute",
	                        left: restoreOptions.left,
	                        top: restoreOptions.top,
	                        width: restoreOptions.width,
	                        height: restoreOptions.height
	                    })
	                    .removeClass(MAXIMIZEDSTATE)
	                    .find(".k-window-content,.k-resize-handle").show().end()
	                    .find(".k-window-titlebar .k-i-window-restore").parent().remove().end().end()
	                    .find(MINIMIZE_MAXIMIZE).parent().show().end().end()
	                    .find(PIN_UNPIN).parent().show();

	                that.options.width = restoreOptions.width;
	                that.options.height = restoreOptions.height;

	                $("html, body").css(OVERFLOW, "");
	                if (this._documentScrollTop && this._documentScrollTop > 0) {
	                    doc.scrollTop(this._documentScrollTop);
	                }
	                if (this._documentScrollLeft && this._documentScrollLeft > 0) {
	                    doc.scrollLeft(this._documentScrollLeft);
	                }

	                options.isMaximized = options.isMinimized = false;

	                that.resize();

	                return that;
	            },

	            _sizingAction: function(actionId, callback) {
	                var that = this,
	                    wrapper = that.wrapper,
	                    style = wrapper[0].style,
	                    options = that.options;

	                if (options.isMaximized || options.isMinimized) {
	                    return that;
	                }

	                that.restoreOptions = {
	                    width: style.width,
	                    height: style.height
	                };

	                wrapper
	                    .children(KWINDOWRESIZEHANDLES).hide().end()
	                    .children(KWINDOWTITLEBAR).find(MINIMIZE_MAXIMIZE).parent().hide()
	                    .eq(0).before(templates.action({ name: "window-restore" }));

	                callback.call(that);

	                that.wrapper.children(KWINDOWTITLEBAR).find(PIN_UNPIN).parent().toggle(actionId !== "maximize");

	                that.trigger(actionId);

	                return that;
	            },

	            maximize: function() {
	                this._sizingAction("maximize", function() {
	                    var that = this,
	                        wrapper = that.wrapper,
	                        position = wrapper.position(),
	                        doc = $(document);

	                    extend(that.restoreOptions, {
	                        left: position.left,
	                        top: position.top
	                    });

	                    wrapper.css({
	                        left: 0,
	                        top: 0,
	                        position: "fixed"
	                    })
	                        .addClass(MAXIMIZEDSTATE);

	                    this._documentScrollTop = doc.scrollTop();
	                    this._documentScrollLeft = doc.scrollLeft();
	                    $("html, body").css(OVERFLOW, HIDDEN);

	                    that.options.isMaximized = true;

	                    that._onDocumentResize();
	                });

	                return this;
	            },

	            isMaximized: function() {
	                return this.options.isMaximized;
	            },

	            minimize: function() {
	                this._sizingAction("minimize", function() {
	                    var that = this;

	                    that.wrapper.css({
	                        height: "",
	                        minHeight: ""
	                    });

	                    that.element.hide();

	                    that.options.isMinimized = true;
	                });

	                return this;
	            },

	            isMinimized: function() {
	                return this.options.isMinimized;
	            },

	            pin: function(force) {
	                var that = this,
	                    win = $(window),
	                    wrapper = that.wrapper,
	                    top = parseInt(wrapper.css("top"), 10),
	                    left = parseInt(wrapper.css("left"), 10);

	                if (force || !that.options.pinned && !that.options.isMaximized) {
	                    wrapper.css({position: "fixed", top: top - win.scrollTop(), left: left - win.scrollLeft()});
	                    wrapper.children(KWINDOWTITLEBAR).find(KPIN).addClass("k-i-unpin").removeClass("k-i-pin");

	                    that.options.pinned = true;
	                }
	            },

	            unpin: function() {
	                var that = this,
	                    win = $(window),
	                    wrapper = that.wrapper,
	                    top = parseInt(wrapper.css("top"), 10),
	                    left = parseInt(wrapper.css("left"), 10);

	                if (that.options.pinned && !that.options.isMaximized) {
	                    wrapper.css({position: "", top: top + win.scrollTop(), left: left + win.scrollLeft()});
	                    wrapper.children(KWINDOWTITLEBAR).find(KUNPIN).addClass("k-i-pin").removeClass("k-i-unpin");

	                    that.options.pinned = false;
	                }
	            },

	            _onDocumentResize: function () {
	                var that = this,
	                    wrapper = that.wrapper,
	                    wnd = $(window),
	                    zoomLevel = kendo.support.zoomLevel(),
	                    w, h;

	                if (!that.options.isMaximized) {
	                    return;
	                }

	                w = wnd.width() / zoomLevel;
	                h = wnd.height() / zoomLevel - parseInt(wrapper.css("padding-top"), 10);

	                wrapper.css({
	                    width: w,
	                    height: h
	                });
	                that.options.width = w;
	                that.options.height = h;

	                that.resize();
	            },

	            refresh: function (options) {
	                var that = this,
	                    initOptions = that.options,
	                    element = $(that.element),
	                    iframe,
	                    showIframe,
	                    url;

	                if (!isPlainObject(options)) {
	                    options = { url: options };
	                }

	                options = extend({}, initOptions.content, options);

	                showIframe = defined(initOptions.iframe) ? initOptions.iframe : options.iframe;

	                url = options.url;

	                if (url) {
	                    if (!defined(showIframe)) {
	                        showIframe = !isLocalUrl(url);
	                    }

	                    if (!showIframe) {
	                        // perform AJAX request
	                        that._ajaxRequest(options);
	                    } else {
	                        iframe = element.find("." + KCONTENTFRAME)[0];

	                        if (iframe) {
	                            // refresh existing iframe
	                            iframe.src = url || iframe.src;
	                        } else {
	                            // render new iframe
	                            element.html(templates.contentFrame(extend({}, initOptions, { content: options })));
	                        }

	                        element.find("." + KCONTENTFRAME)
	                            .unbind("load" + NS)
	                            .on("load" + NS, proxy(this._triggerRefresh, this));
	                    }
	                } else {
	                    if (options.template) {
	                        // refresh template
	                        that.content(template(options.template)({}));
	                    }

	                    that.trigger(REFRESH);
	                }

	                element.toggleClass("k-window-iframecontent", !!showIframe);

	                return that;
	            },

	            _triggerRefresh: function() {
	                this.trigger(REFRESH);
	            },

	            _ajaxComplete: function() {
	                clearTimeout(this._loadingIconTimeout);
	                this.wrapper.find(REFRESHICON).removeClass(LOADING);
	            },

	            _ajaxError: function (xhr, status) {
	                this.trigger(ERROR, { status: status, xhr: xhr });
	            },

	            _ajaxSuccess: function (contentTemplate) {
	                return function (data) {
	                    var html = data;
	                    if (contentTemplate) {
	                        html = template(contentTemplate)(data || {});
	                    }

	                    this.content(html, data);
	                    this.element.prop("scrollTop", 0);

	                    this.trigger(REFRESH);
	                };
	            },

	            _showLoading: function() {
	                this.wrapper.find(REFRESHICON).addClass(LOADING);
	            },

	            _ajaxRequest: function (options) {
	                this._loadingIconTimeout = setTimeout(proxy(this._showLoading, this), 100);

	                $.ajax(extend({
	                    type: "GET",
	                    dataType: "html",
	                    cache: false,
	                    error: proxy(this._ajaxError, this),
	                    complete: proxy(this._ajaxComplete, this),
	                    success: proxy(this._ajaxSuccess(options.template), this)
	                }, options));
	            },

	            _destroy: function() {
	                if (this.resizing) {
	                    this.resizing.destroy();
	                }

	                if (this.dragging) {
	                    this.dragging.destroy();
	                }

	                this.wrapper.off(NS)
	                    .children(KWINDOWCONTENT).off(NS).end()
	                    .find(".k-resize-handle,.k-window-titlebar").off(NS);

	                $(window).off("resize" + NS + this._marker);

	                clearTimeout(this._loadingIconTimeout);

	                Widget.fn.destroy.call(this);

	                this.unbind(undefined);

	                kendo.destroy(this.wrapper);

	                this._removeOverlay(true);
	            },

	            destroy: function() {
	                this._destroy();

	                this.wrapper.empty().remove();

	                this.wrapper = this.appendTo = this.element = $();
	            },

	            _createWindow: function() {
	                var contentHtml = this.element,
	                    options = this.options,
	                    iframeSrcAttributes,
	                    wrapper,
	                    isRtl = kendo.support.isRtl(contentHtml);

	                if (options.scrollable === false) {
	                    contentHtml.css("overflow", "hidden");
	                }

	                wrapper = $(templates.wrapper(options));

	                // Collect the src attributes of all iframes and then set them to empty string.
	                // This seems to fix this IE9 "feature": http://msdn.microsoft.com/en-us/library/gg622929%28v=VS.85%29.aspx?ppud=4
	                iframeSrcAttributes = contentHtml.find("iframe:not(.k-content)").map(function() {
	                    var src = this.getAttribute("src");
	                    this.src = "";
	                    return src;
	                });

	                // Make sure the wrapper is appended to the body only once. IE9+ will throw exceptions if you move iframes in DOM
	                wrapper
	                    .toggleClass("k-rtl", isRtl)
	                    .appendTo(this.appendTo)
	                    .append(contentHtml)
	                    .find("iframe:not(.k-content)").each(function(index) {
	                    // Restore the src attribute of the iframes when they are part of the live DOM tree
	                    this.src = iframeSrcAttributes[index];
	                });

	                wrapper.find(".k-window-title")
	                    .css(isRtl ? "left" : "right", outerWidth(wrapper.find(".k-window-actions")) + 10);

	                contentHtml.css("visibility", "").show();

	                contentHtml.find("[data-role=editor]").each(function() {
	                    var editor = $(this).data("kendoEditor");

	                    if (editor) {
	                        editor.refresh();
	                    }
	                });

	                wrapper = contentHtml = null;
	            }
	        });

	        templates = {
	            wrapper: template("<div class='k-widget k-window' />"),
	            action: template(
	                "<a role='button' href='\\#' class='k-window-action k-link' aria-label='#= name #'>" +
	                "<span class='k-icon k-i-#= name.toLowerCase() #'></span>" +
	                "</a>"
	            ),
	            titlebar: template(
	                "<div class='k-window-titlebar k-header'>&nbsp;" +
	                "<span class='k-window-title'>#: title #</span>" +
	                "<div class='k-window-actions' />" +
	                "</div>"
	            ),
	            overlay: "<div class='k-overlay' />",
	            contentFrame: template(
	                "<iframe frameborder='0' title='#= title #' class='" + KCONTENTFRAME + "' " +
	                "src='#= content.url #'>" +
	                "This page requires frames in order to show content" +
	                "</iframe>"
	            ),
	            resizeHandle: template("<div class='k-resize-handle k-resize-#= data #'></div>")
	        };


	        function WindowResizing(wnd) {
	            var that = this;
	            that.owner = wnd;
	            that._preventDragging = false;
	            that._draggable = new Draggable(wnd.wrapper, {
	                filter: ">" + KWINDOWRESIZEHANDLES,
	                group: wnd.wrapper.id + "-resizing",
	                dragstart: proxy(that.dragstart, that),
	                drag: proxy(that.drag, that),
	                dragend: proxy(that.dragend, that)
	            });

	            that._draggable.userEvents.bind("press", proxy(that.addOverlay, that));
	            that._draggable.userEvents.bind("release", proxy(that.removeOverlay, that));
	        }

	        WindowResizing.prototype = {
	            addOverlay: function () {
	                this.owner.wrapper.append(templates.overlay);
	            },
	            removeOverlay: function () {
	                this.owner.wrapper.find(KOVERLAY).remove();
	            },
	            dragstart: function (e) {
	                var that = this;
	                var wnd = that.owner;
	                var wrapper = wnd.wrapper;

	                that._preventDragging = wnd.trigger(RESIZESTART);
	                if (that._preventDragging) {
	                    return;
	                }

	                that.elementPadding = parseInt(wrapper.css("padding-top"), 10);
	                that.initialPosition = kendo.getOffset(wrapper, "position");

	                that.resizeDirection = e.currentTarget.prop("className").replace("k-resize-handle k-resize-", "");

	                that.initialSize = {
	                    width: wrapper.width(),
	                    height: wrapper.height()
	                };

	                that.containerOffset = kendo.getOffset(wnd.appendTo, "position");

	                wrapper
	                    .children(KWINDOWRESIZEHANDLES).not(e.currentTarget).hide();

	                $(BODY).css(CURSOR, e.currentTarget.css(CURSOR));
	            },
	            drag: function (e) {
	                if (this._preventDragging) {
	                    return;
	                }
	                var that = this,
	                    wnd = that.owner,
	                    wrapper = wnd.wrapper,
	                    options = wnd.options,
	                    direction = that.resizeDirection,
	                    containerOffset = that.containerOffset,
	                    initialPosition = that.initialPosition,
	                    initialSize = that.initialSize,
	                    newWidth, newHeight,
	                    windowBottom, windowRight,
	                    x = Math.max(e.x.location, 0),
	                    y = Math.max(e.y.location, 0);

	                if (direction.indexOf("e") >= 0) {
	                    newWidth = x - initialPosition.left - containerOffset.left;

	                    wrapper.width(constrain(newWidth, options.minWidth, options.maxWidth));
	                } else if (direction.indexOf("w") >= 0) {
	                    windowRight = initialPosition.left + initialSize.width + containerOffset.left;
	                    newWidth = constrain(windowRight - x, options.minWidth, options.maxWidth);

	                    wrapper.css({
	                        left: windowRight - newWidth - containerOffset.left,
	                        width: newWidth
	                    });
	                }

	                var newWindowTop = y;
	                if (wnd.options.pinned) {
	                    newWindowTop -= $(window).scrollTop();
	                }
	                if (direction.indexOf("s") >= 0) {
	                    newHeight = newWindowTop - initialPosition.top - that.elementPadding - containerOffset.top;

	                    wrapper.height(constrain(newHeight, options.minHeight, options.maxHeight));
	                } else if (direction.indexOf("n") >= 0) {
	                    windowBottom = initialPosition.top + initialSize.height + containerOffset.top;
	                    newHeight = constrain(windowBottom - newWindowTop, options.minHeight, options.maxHeight);

	                    wrapper.css({
	                        top: windowBottom - newHeight - containerOffset.top,
	                        height: newHeight
	                    });
	                }

	                if (newWidth) {
	                    wnd.options.width = newWidth + "px";
	                }
	                if (newHeight) {
	                    wnd.options.height = newHeight + "px";
	                }

	                wnd.resize();
	            },
	            dragend: function (e) {
	                if (this._preventDragging) {
	                    return;
	                }
	                var that = this,
	                    wnd = that.owner,
	                    wrapper = wnd.wrapper;

	                wrapper
	                    .children(KWINDOWRESIZEHANDLES).not(e.currentTarget).show();

	                $(BODY).css(CURSOR, "");

	                if (wnd.touchScroller) {
	                    wnd.touchScroller.reset();
	                }

	                if (e.keyCode == 27) {
	                    wrapper.css(that.initialPosition)
	                        .css(that.initialSize);
	                }

	                wnd.trigger(RESIZEEND);

	                return false;
	            },
	            destroy: function() {
	                if (this._draggable) {
	                    this._draggable.destroy();
	                }

	                this._draggable = this.owner = null;
	            }
	        };

	        function WindowDragging(wnd, dragHandle) {
	            var that = this;
	            that.owner = wnd;
	            that._preventDragging = false;
	            that._draggable = new Draggable(wnd.wrapper, {
	                filter: dragHandle,
	                group: wnd.wrapper.id + "-moving",
	                dragstart: proxy(that.dragstart, that),
	                drag: proxy(that.drag, that),
	                dragend: proxy(that.dragend, that),
	                dragcancel: proxy(that.dragcancel, that)
	            });

	            that._draggable.userEvents.stopPropagation = false;
	        }

	        WindowDragging.prototype = {
	            dragstart: function (e) {
	                var wnd = this.owner,
	                    element = wnd.element,
	                    actions = element.find(".k-window-actions"),
	                    containerOffset = kendo.getOffset(wnd.appendTo);

	                this._preventDragging = wnd.trigger(DRAGSTART);
	                if (this._preventDragging) {
	                    return;
	                }

	                wnd.initialWindowPosition = kendo.getOffset(wnd.wrapper, "position");

	                wnd.initialPointerPosition = {
	                    left: e.x.client,
	                    top: e.y.client
	                };

	                wnd.startPosition = {
	                    left: e.x.client - wnd.initialWindowPosition.left,
	                    top: e.y.client - wnd.initialWindowPosition.top
	                };

	                if (actions.length > 0) {
	                    wnd.minLeftPosition = outerWidth(actions) + parseInt(actions.css("right"), 10) - outerWidth(element);
	                } else {
	                    wnd.minLeftPosition =  20 - outerWidth(element); // at least 20px remain visible
	                }

	                wnd.minLeftPosition -= containerOffset.left;
	                wnd.minTopPosition = -containerOffset.top;

	                wnd.wrapper
	                    .append(templates.overlay)
	                    .children(KWINDOWRESIZEHANDLES).hide();

	                $(BODY).css(CURSOR, e.currentTarget.css(CURSOR));
	            },

	            drag: function (e) {
	                if (this._preventDragging) {
	                    return;
	                }
	                var wnd = this.owner;
	                var position = wnd.options.position;

	                position.top = Math.max(e.y.client - wnd.startPosition.top, wnd.minTopPosition);
	                position.left = Math.max(e.x.client - wnd.startPosition.left, wnd.minLeftPosition);

	                if (kendo.support.transforms) {
	                    $(wnd.wrapper).css(
	                        "transform", "translate(" +
	                        (e.x.client - wnd.initialPointerPosition.left) + "px, " +
	                        (e.y.client - wnd.initialPointerPosition.top) + "px)"
	                    );
	                } else {
	                    $(wnd.wrapper).css(position);
	                }

	            },

	            _finishDrag: function() {
	                var wnd = this.owner;

	                wnd.wrapper
	                    .children(KWINDOWRESIZEHANDLES).toggle(!wnd.options.isMinimized).end()
	                    .find(KOVERLAY).remove();

	                $(BODY).css(CURSOR, "");
	            },

	            dragcancel: function (e) {
	                if (this._preventDragging) {
	                    return;
	                }
	                this._finishDrag();

	                e.currentTarget.closest(KWINDOW).css(this.owner.initialWindowPosition);
	            },

	            dragend: function () {
	                if (this._preventDragging) {
	                    return;
	                }
	                $(this.owner.wrapper)
	                    .css(this.owner.options.position)
	                    .css("transform", "");

	                this._finishDrag();

	                this.owner.trigger(DRAGEND);

	                return false;
	            },
	            destroy: function() {
	                if (this._draggable) {
	                    this._draggable.destroy();
	                }

	                this._draggable = this.owner = null;
	            }
	        };

	        kendo.ui.plugin(Window);

	    })(window.kendo.jQuery);

	    return window.kendo;

	}, __webpack_require__(422));

/***/ }

/******/ });

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

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

	module.exports = __webpack_require__(451);


/***/ },

/***/ 421:
/***/ function(module, exports) {

	module.exports = __webpack_require__(1);

/***/ },

/***/ 422:
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },

/***/ 435:
/***/ function(module, exports) {

	module.exports = __webpack_require__(9);

/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(421), __webpack_require__(435) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "draganddrop",
	    name: "Drag & drop",
	    category: "framework",
	    description: "Drag & drop functionality for any DOM element.",
	    depends: [ "core", "userevents" ]
	};

	(function ($, undefined) {
	    var kendo = window.kendo,
	        support = kendo.support,
	        document = window.document,
	        $window = $(window),
	        Class = kendo.Class,
	        Widget = kendo.ui.Widget,
	        Observable = kendo.Observable,
	        UserEvents = kendo.UserEvents,
	        proxy = $.proxy,
	        extend = $.extend,
	        getOffset = kendo.getOffset,
	        draggables = {},
	        dropTargets = {},
	        dropAreas = {},
	        lastDropTarget,
	        elementUnderCursor = kendo.elementUnderCursor,
	        KEYUP = "keyup",
	        CHANGE = "change",

	        // Draggable events
	        DRAGSTART = "dragstart",
	        HOLD = "hold",
	        DRAG = "drag",
	        DRAGEND = "dragend",
	        DRAGCANCEL = "dragcancel",
	        HINTDESTROYED = "hintDestroyed",

	        // DropTarget events
	        DRAGENTER = "dragenter",
	        DRAGLEAVE = "dragleave",
	        DROP = "drop";

	    function contains(parent, child) {
	        try {
	            return $.contains(parent, child) || parent == child;
	        } catch (e) {
	            return false;
	        }
	    }

	    function numericCssPropery(element, property) {
	        return parseInt(element.css(property), 10) || 0;
	    }

	    function within(value, range) {
	        return Math.min(Math.max(value, range.min), range.max);
	    }

	    function containerBoundaries(container, element) {
	        var offset = getOffset(container),
	            outerWidth = kendo._outerWidth,
	            outerHeight = kendo._outerHeight,
	            minX = offset.left + numericCssPropery(container, "borderLeftWidth") + numericCssPropery(container, "paddingLeft"),
	            minY = offset.top + numericCssPropery(container, "borderTopWidth") + numericCssPropery(container, "paddingTop"),
	            maxX = minX + container.width() - outerWidth(element, true),
	            maxY = minY + container.height() - outerHeight(element, true);

	        return {
	            x: { min: minX, max: maxX },
	            y: { min: minY, max: maxY }
	        };
	    }

	    function checkTarget(target, targets, areas) {
	        var theTarget, theFilter, i = 0,
	            targetLen = targets && targets.length,
	            areaLen = areas && areas.length;

	        while (target && target.parentNode) {
	            for (i = 0; i < targetLen; i ++) {
	                theTarget = targets[i];
	                if (theTarget.element[0] === target) {
	                    return { target: theTarget, targetElement: target };
	                }
	            }

	            for (i = 0; i < areaLen; i ++) {
	                theFilter = areas[i];
	                if ($.contains(theFilter.element[0], target) && support.matchesSelector.call(target, theFilter.options.filter)) {
	                    return { target: theFilter, targetElement: target };
	                }
	            }

	            target = target.parentNode;
	        }

	        return undefined;
	    }

	    var TapCapture = Observable.extend({
	        init: function(element, options) {
	            var that = this,
	                domElement = element[0];

	            that.capture = false;

	            if (domElement.addEventListener) {
	                $.each(kendo.eventMap.down.split(" "), function() {
	                    domElement.addEventListener(this, proxy(that._press, that), true);
	                });
	                $.each(kendo.eventMap.up.split(" "), function() {
	                    domElement.addEventListener(this, proxy(that._release, that), true);
	                });
	            } else {
	                $.each(kendo.eventMap.down.split(" "), function() {
	                    domElement.attachEvent(this, proxy(that._press, that));
	                });
	                $.each(kendo.eventMap.up.split(" "), function() {
	                    domElement.attachEvent(this, proxy(that._release, that));
	                });
	            }

	            Observable.fn.init.call(that);

	            that.bind(["press", "release"], options || {});
	        },

	        captureNext: function() {
	            this.capture = true;
	        },

	        cancelCapture: function() {
	            this.capture = false;
	        },

	        _press: function(e) {
	            var that = this;
	            that.trigger("press");
	            if (that.capture) {
	                e.preventDefault();
	            }
	        },

	        _release: function(e) {
	            var that = this;
	            that.trigger("release");

	            if (that.capture) {
	                e.preventDefault();
	                that.cancelCapture();
	            }
	        }
	    });

	    var PaneDimension = Observable.extend({
	        init: function(options) {
	            var that = this;
	            Observable.fn.init.call(that);

	            that.forcedEnabled = false;

	            $.extend(that, options);

	            that.scale = 1;

	            if (that.horizontal) {
	                that.measure = "offsetWidth";
	                that.scrollSize = "scrollWidth";
	                that.axis = "x";
	            } else {
	                that.measure = "offsetHeight";
	                that.scrollSize = "scrollHeight";
	                that.axis = "y";
	            }
	        },

	        makeVirtual: function() {
	            $.extend(this, {
	                virtual: true,
	                forcedEnabled: true,
	                _virtualMin: 0,
	                _virtualMax: 0
	            });
	        },

	        virtualSize: function(min, max) {
	            if (this._virtualMin !== min || this._virtualMax !== max) {
	                this._virtualMin = min;
	                this._virtualMax = max;
	                this.update();
	            }
	        },

	        outOfBounds: function(offset) {
	            return offset > this.max || offset < this.min;
	        },

	        forceEnabled: function() {
	            this.forcedEnabled = true;
	        },

	        getSize: function() {
	            return this.container[0][this.measure];
	        },

	        getTotal: function() {
	            return this.element[0][this.scrollSize];
	        },

	        rescale: function(scale) {
	            this.scale = scale;
	        },

	        update: function(silent) {
	            var that = this,
	                total = that.virtual ? that._virtualMax : that.getTotal(),
	                scaledTotal = total * that.scale,
	                size = that.getSize();

	            if (total === 0 && !that.forcedEnabled) {
	                return; // we are not visible.
	            }

	            that.max = that.virtual ? -that._virtualMin : 0;
	            that.size = size;
	            that.total = scaledTotal;
	            that.min = Math.min(that.max, size - scaledTotal);
	            that.minScale = size / total;
	            that.centerOffset = (scaledTotal - size) / 2;

	            that.enabled = that.forcedEnabled || (scaledTotal > size);

	            if (!silent) {
	                that.trigger(CHANGE, that);
	            }
	        }
	    });

	    var PaneDimensions = Observable.extend({
	        init: function(options) {
	            var that = this;

	            Observable.fn.init.call(that);

	            that.x = new PaneDimension(extend({horizontal: true}, options));
	            that.y = new PaneDimension(extend({horizontal: false}, options));
	            that.container = options.container;
	            that.forcedMinScale = options.minScale;
	            that.maxScale = options.maxScale || 100;

	            that.bind(CHANGE, options);
	        },

	        rescale: function(newScale) {
	            this.x.rescale(newScale);
	            this.y.rescale(newScale);
	            this.refresh();
	        },

	        centerCoordinates: function() {
	            return { x: Math.min(0, -this.x.centerOffset), y: Math.min(0, -this.y.centerOffset) };
	        },

	        refresh: function() {
	            var that = this;
	            that.x.update();
	            that.y.update();
	            that.enabled = that.x.enabled || that.y.enabled;
	            that.minScale = that.forcedMinScale || Math.min(that.x.minScale, that.y.minScale);
	            that.fitScale = Math.max(that.x.minScale, that.y.minScale);
	            that.trigger(CHANGE);
	        }
	    });

	    var PaneAxis = Observable.extend({
	        init: function(options) {
	            var that = this;
	            extend(that, options);
	            Observable.fn.init.call(that);
	        },

	        outOfBounds: function() {
	            return this.dimension.outOfBounds(this.movable[this.axis]);
	        },

	        dragMove: function(delta) {
	            var that = this,
	                dimension = that.dimension,
	                axis = that.axis,
	                movable = that.movable,
	                position = movable[axis] + delta;

	            if (!dimension.enabled) {
	                return;
	            }

	            if ((position < dimension.min && delta < 0) || (position > dimension.max && delta > 0)) {
	                delta *= that.resistance;
	            }

	            movable.translateAxis(axis, delta);
	            that.trigger(CHANGE, that);
	        }
	    });

	    var Pane = Class.extend({

	        init: function(options) {
	            var that = this,
	                x,
	                y,
	                resistance,
	                movable;

	            extend(that, {elastic: true}, options);

	            resistance = that.elastic ? 0.5 : 0;
	            movable = that.movable;

	            that.x = x = new PaneAxis({
	                axis: "x",
	                dimension: that.dimensions.x,
	                resistance: resistance,
	                movable: movable
	            });

	            that.y = y = new PaneAxis({
	                axis: "y",
	                dimension: that.dimensions.y,
	                resistance: resistance,
	                movable: movable
	            });

	            that.userEvents.bind(["press", "move", "end", "gesturestart", "gesturechange"], {
	                gesturestart: function(e) {
	                    that.gesture = e;
	                    that.offset = that.dimensions.container.offset();
	                },

	                press: function(e) {
	                    if ($(e.event.target).closest("a").is("[data-navigate-on-press=true]")) {
	                        e.sender.cancel();
	                    }
	                },

	                gesturechange: function(e) {
	                    var previousGesture = that.gesture,
	                        previousCenter = previousGesture.center,

	                        center = e.center,

	                        scaleDelta = e.distance / previousGesture.distance,

	                        minScale = that.dimensions.minScale,
	                        maxScale = that.dimensions.maxScale,
	                        coordinates;

	                    if (movable.scale <= minScale && scaleDelta < 1) {
	                        // Resist shrinking. Instead of shrinking from 1 to 0.5, it will shrink to 0.5 + (1 /* minScale */ - 0.5) * 0.8 = 0.9;
	                        scaleDelta += (1 - scaleDelta) * 0.8;
	                    }

	                    if (movable.scale * scaleDelta >= maxScale) {
	                        scaleDelta = maxScale / movable.scale;
	                    }

	                    var offsetX = movable.x + that.offset.left,
	                        offsetY = movable.y + that.offset.top;

	                    coordinates = {
	                        x: (offsetX - previousCenter.x) * scaleDelta + center.x - offsetX,
	                        y: (offsetY - previousCenter.y) * scaleDelta + center.y - offsetY
	                    };

	                    movable.scaleWith(scaleDelta);

	                    x.dragMove(coordinates.x);
	                    y.dragMove(coordinates.y);

	                    that.dimensions.rescale(movable.scale);
	                    that.gesture = e;
	                    e.preventDefault();
	                },

	                move: function(e) {
	                    if (e.event.target.tagName.match(/textarea|input/i)) {
	                        return;
	                    }

	                    if (x.dimension.enabled || y.dimension.enabled) {
	                        x.dragMove(e.x.delta);
	                        y.dragMove(e.y.delta);
	                        e.preventDefault();
	                    } else {
	                        e.touch.skip();
	                    }
	                },

	                end: function(e) {
	                    e.preventDefault();
	                }
	            });
	        }
	    });

	    var TRANSFORM_STYLE = support.transitions.prefix + "Transform",
	        translate;


	    if (support.hasHW3D) {
	        translate = function(x, y, scale) {
	            return "translate3d(" + x + "px," + y +"px,0) scale(" + scale + ")";
	        };
	    } else {
	        translate = function(x, y, scale) {
	            return "translate(" + x + "px," + y +"px) scale(" + scale + ")";
	        };
	    }

	    var Movable = Observable.extend({
	        init: function(element) {
	            var that = this;

	            Observable.fn.init.call(that);

	            that.element = $(element);
	            that.element[0].style.webkitTransformOrigin = "left top";
	            that.x = 0;
	            that.y = 0;
	            that.scale = 1;
	            that._saveCoordinates(translate(that.x, that.y, that.scale));
	        },

	        translateAxis: function(axis, by) {
	            this[axis] += by;
	            this.refresh();
	        },

	        scaleTo: function(scale) {
	            this.scale = scale;
	            this.refresh();
	        },

	        scaleWith: function(scaleDelta) {
	            this.scale *= scaleDelta;
	            this.refresh();
	        },

	        translate: function(coordinates) {
	            this.x += coordinates.x;
	            this.y += coordinates.y;
	            this.refresh();
	        },

	        moveAxis: function(axis, value) {
	            this[axis] = value;
	            this.refresh();
	        },

	        moveTo: function(coordinates) {
	            extend(this, coordinates);
	            this.refresh();
	        },

	        refresh: function() {
	            var that = this,
	                x = that.x,
	                y = that.y,
	                newCoordinates;

	            if (that.round) {
	                x = Math.round(x);
	                y = Math.round(y);
	            }

	            newCoordinates = translate(x, y, that.scale);

	            if (newCoordinates != that.coordinates) {
	                if (kendo.support.browser.msie && kendo.support.browser.version < 10) {
	                    that.element[0].style.position = "absolute";
	                    that.element[0].style.left = that.x + "px";
	                    that.element[0].style.top = that.y + "px";

	                } else {
	                    that.element[0].style[TRANSFORM_STYLE] = newCoordinates;
	                }
	                that._saveCoordinates(newCoordinates);
	                that.trigger(CHANGE);
	            }
	        },

	        _saveCoordinates: function(coordinates) {
	            this.coordinates = coordinates;
	        }
	    });

	    function destroyDroppable(collection, widget) {
	        var groupName = widget.options.group,
	        droppables = collection[groupName],
	        i;

	        Widget.fn.destroy.call(widget);

	        if (droppables.length > 1) {
	            for (i = 0; i < droppables.length; i++) {
	                if (droppables[i] == widget) {
	                    droppables.splice(i, 1);
	                    break;
	                }
	            }
	        } else {
	            droppables.length = 0; // WTF, porting this from the previous destroyGroup
	            delete collection[groupName];
	        }
	    }

	    var DropTarget = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, options);

	            var group = that.options.group;

	            if (!(group in dropTargets)) {
	                dropTargets[group] = [ that ];
	            } else {
	                dropTargets[group].push( that );
	            }
	        },

	        events: [
	            DRAGENTER,
	            DRAGLEAVE,
	            DROP
	        ],

	        options: {
	            name: "DropTarget",
	            group: "default"
	        },

	        destroy: function() {
	            destroyDroppable(dropTargets, this);
	        },

	        _trigger: function(eventName, e) {
	            var that = this,
	                draggable = draggables[that.options.group];

	            if (draggable) {
	                return that.trigger(eventName, extend({}, e.event, {
	                           draggable: draggable,
	                           dropTarget: e.dropTarget
	                       }));
	            }
	        },

	        _over: function(e) {
	            this._trigger(DRAGENTER, e);
	        },

	        _out: function(e) {
	            this._trigger(DRAGLEAVE, e);
	        },

	        _drop: function(e) {
	            var that = this,
	                draggable = draggables[that.options.group];

	            if (draggable) {
	                draggable.dropped = !that._trigger(DROP, e);
	            }
	        }
	    });

	    DropTarget.destroyGroup = function(groupName) {
	        var group = dropTargets[groupName] || dropAreas[groupName],
	            i;

	        if (group) {
	            for (i = 0; i < group.length; i++) {
	                Widget.fn.destroy.call(group[i]);
	            }

	            group.length = 0;
	            delete dropTargets[groupName];
	            delete dropAreas[groupName];
	        }
	    };

	    DropTarget._cache = dropTargets;

	    var DropTargetArea = DropTarget.extend({
	        init: function(element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, options);

	            var group = that.options.group;

	            if (!(group in dropAreas)) {
	                dropAreas[group] = [ that ];
	            } else {
	                dropAreas[group].push( that );
	            }
	        },

	        destroy: function() {
	            destroyDroppable(dropAreas, this);
	        },

	        options: {
	            name: "DropTargetArea",
	            group: "default",
	            filter: null
	        }
	    });

	    var Draggable = Widget.extend({
	        init: function (element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, options);

	            that._activated = false;

	            that.userEvents = new UserEvents(that.element, {
	                global: true,
	                allowSelection: true,
	                filter: that.options.filter,
	                threshold: that.options.distance,
	                start: proxy(that._start, that),
	                hold: proxy(that._hold, that),
	                move: proxy(that._drag, that),
	                end: proxy(that._end, that),
	                cancel: proxy(that._cancel, that),
	                select: proxy(that._select, that)
	            });

	            that._afterEndHandler = proxy(that._afterEnd, that);
	            that._captureEscape = proxy(that._captureEscape, that);
	        },

	        events: [
	            HOLD,
	            DRAGSTART,
	            DRAG,
	            DRAGEND,
	            DRAGCANCEL,
	            HINTDESTROYED
	        ],

	        options: {
	            name: "Draggable",
	            distance: ( kendo.support.touch ? 0 : 5),
	            group: "default",
	            cursorOffset: null,
	            axis: null,
	            container: null,
	            filter: null,
	            ignore: null,
	            holdToDrag: false,
	            autoScroll: false,
	            dropped: false
	        },

	        cancelHold: function() {
	            this._activated = false;
	        },

	        _captureEscape: function(e) {
	            var that = this;

	            if (e.keyCode === kendo.keys.ESC) {
	                that._trigger(DRAGCANCEL, { event: e });
	                that.userEvents.cancel();
	            }
	        },

	        _updateHint: function(e) {
	            var that = this,
	                coordinates,
	                options = that.options,
	                boundaries = that.boundaries,
	                axis = options.axis,
	                cursorOffset = that.options.cursorOffset;

	            if (cursorOffset) {
	               coordinates = { left: e.x.location + cursorOffset.left, top: e.y.location + cursorOffset.top };
	            } else {
	                that.hintOffset.left += e.x.delta;
	                that.hintOffset.top += e.y.delta;
	                coordinates = $.extend({}, that.hintOffset);
	            }

	            if (boundaries) {
	                coordinates.top = within(coordinates.top, boundaries.y);
	                coordinates.left = within(coordinates.left, boundaries.x);
	            }

	            if (axis === "x") {
	                delete coordinates.top;
	            } else if (axis === "y") {
	                delete coordinates.left;
	            }

	            that.hint.css(coordinates);
	        },

	        _shouldIgnoreTarget: function(target) {
	            var ignoreSelector = this.options.ignore;
	            return ignoreSelector && $(target).is(ignoreSelector);
	        },

	        _select: function(e) {
	            if (!this._shouldIgnoreTarget(e.event.target)) {
	                e.preventDefault();
	            }
	        },

	        _start: function(e) {
	            var that = this,
	                options = that.options,
	                container = options.container,
	                hint = options.hint;

	            if (this._shouldIgnoreTarget(e.touch.initialTouch) || (options.holdToDrag && !that._activated)) {
	                that.userEvents.cancel();
	                return;
	            }

	            that.currentTarget = e.target;
	            that.currentTargetOffset = getOffset(that.currentTarget);

	            if (hint) {
	                if (that.hint) {
	                    that.hint.stop(true, true).remove();
	                }

	                that.hint = kendo.isFunction(hint) ? $(hint.call(that, that.currentTarget)) : hint;

	                var offset = getOffset(that.currentTarget);
	                that.hintOffset = offset;

	                that.hint.css( {
	                    position: "absolute",
	                    zIndex: 20000, // the Window's z-index is 10000 and can be raised because of z-stacking
	                    left: offset.left,
	                    top: offset.top
	                })
	                .appendTo(document.body);

	                that.angular("compile", function(){
	                    that.hint.removeAttr("ng-repeat");
	                    var scopeTarget = $(e.target);

	                    while (!scopeTarget.data("$$kendoScope") && scopeTarget.length) {
	                        scopeTarget = scopeTarget.parent();
	                    }

	                    return {
	                        elements: that.hint.get(),
	                        scopeFrom: scopeTarget.data("$$kendoScope")
	                    };
	                });
	            }

	            draggables[options.group] = that;

	            that.dropped = false;

	            if (container) {
	                that.boundaries = containerBoundaries(container, that.hint);
	            }

	            $(document).on(KEYUP, that._captureEscape);

	            if (that._trigger(DRAGSTART, e)) {
	                that.userEvents.cancel();
	                that._afterEnd();
	            }

	            that.userEvents.capture();
	        },

	        _hold: function(e) {
	            this.currentTarget = e.target;

	            if (this._trigger(HOLD, e)) {
	                this.userEvents.cancel();
	            } else {
	                this._activated = true;
	            }
	        },

	        _drag: function(e) {
	            e.preventDefault();

	            var cursorElement = this._elementUnderCursor(e);

	            if (this.options.autoScroll && this._cursorElement !== cursorElement) {
	                this._scrollableParent = findScrollableParent(cursorElement);
	                this._cursorElement = cursorElement;
	            }

	            this._lastEvent = e;
	            this._processMovement(e, cursorElement);

	            if (this.options.autoScroll) {
	                // chrome seems to trigger mousemove when mouse is moved outside of the window (over the Chrome), too.
	                if (this._scrollableParent[0]) {
	                    var velocity = autoScrollVelocity(e.x.location, e.y.location, scrollableViewPort(this._scrollableParent));


	                    this._scrollCompenstation = $.extend({}, this.hintOffset);
	                    this._scrollVelocity = velocity;

	                    if (velocity.y === 0 && velocity.x === 0) {
	                        clearInterval(this._scrollInterval);
	                        this._scrollInterval = null;
	                    } else if(!this._scrollInterval) {
	                        this._scrollInterval = setInterval($.proxy(this, "_autoScroll"), 50);
	                    }
	                }
	            }

	            if (this.hint) {
	                this._updateHint(e);
	            }
	        },

	        _processMovement: function(e, cursorElement) {
	            this._withDropTarget(cursorElement, function(target, targetElement) {
	                if (!target) {
	                    if (lastDropTarget) {
	                        lastDropTarget._trigger(DRAGLEAVE, extend(e, { dropTarget: $(lastDropTarget.targetElement) }));
	                        lastDropTarget = null;
	                    }
	                    return;
	                }

	                if (lastDropTarget) {
	                    if (targetElement === lastDropTarget.targetElement) {
	                        return;
	                    }

	                    lastDropTarget._trigger(DRAGLEAVE, extend(e, { dropTarget: $(lastDropTarget.targetElement) }));
	                }

	                target._trigger(DRAGENTER, extend(e, { dropTarget: $(targetElement) }));
	                lastDropTarget = extend(target, { targetElement: targetElement });
	            });

	            this._trigger(DRAG, extend(e, { dropTarget: lastDropTarget, elementUnderCursor: cursorElement }));
	        },

	        _autoScroll: function() {
	            var parent = this._scrollableParent[0],
	                velocity = this._scrollVelocity,
	                compensation = this._scrollCompenstation;

	            if (!parent) {
	                return;
	            }

	            var cursorElement = this._elementUnderCursor(this._lastEvent);
	            this._processMovement(this._lastEvent, cursorElement);

	            var yIsScrollable, xIsScrollable;

	            var isRootNode = parent === scrollableRoot()[0];

	            if (isRootNode) {
	                yIsScrollable = document.body.scrollHeight > $window.height();
	                xIsScrollable = document.body.scrollWidth > $window.width();
	            } else {
	                yIsScrollable = parent.offsetHeight <= parent.scrollHeight;
	                xIsScrollable = parent.offsetWidth <= parent.scrollWidth;
	            }

	            var yDelta = parent.scrollTop + velocity.y;
	            var yInBounds = yIsScrollable && yDelta > 0 && yDelta < parent.scrollHeight;

	            var xDelta = parent.scrollLeft + velocity.x;
	            var xInBounds = xIsScrollable && xDelta > 0 && xDelta < parent.scrollWidth;

	            if (yInBounds) {
	                parent.scrollTop += velocity.y;
	            }

	            if (xInBounds) {
	                parent.scrollLeft += velocity.x;
	            }

	            if (isRootNode && (xInBounds || yInBounds)) {
	                if (yInBounds) {
	                    compensation.top += velocity.y;
	                }

	                if (xInBounds) {
	                    compensation.left += velocity.x;
	                }

	                this.hint.css(compensation);
	            }
	        },

	        _end: function(e) {
	            this._withDropTarget(this._elementUnderCursor(e), function(target, targetElement) {
	                if (target) {
	                    target._drop(extend({}, e, { dropTarget: $(targetElement) }));
	                    lastDropTarget = null;
	                }
	            });

	            this._cancel(this._trigger(DRAGEND, e));
	        },

	        _cancel: function(isDefaultPrevented) {
	            var that = this;

	            that._scrollableParent = null;
	            this._cursorElement = null;
	            clearInterval(this._scrollInterval);
	            that._activated = false;

	            if (that.hint && !that.dropped) {
	                setTimeout(function() {
	                    that.hint.stop(true, true);

	                    if (isDefaultPrevented) {
	                        that._afterEndHandler();
	                    } else {
	                        that.hint.animate(that.currentTargetOffset, "fast", that._afterEndHandler);
	                    }
	                }, 0);

	            } else {
	                that._afterEnd();
	            }
	        },

	        _trigger: function(eventName, e) {
	            var that = this;

	            return that.trigger(
	                eventName, extend(
	                {},
	                e.event,
	                {
	                    x: e.x,
	                    y: e.y,
	                    currentTarget: that.currentTarget,
	                    initialTarget: e.touch ? e.touch.initialTouch : null,
	                    dropTarget: e.dropTarget,
	                    elementUnderCursor: e.elementUnderCursor
	                }
	            ));
	        },

	        _elementUnderCursor: function(e) {
	            var target = elementUnderCursor(e),
	                hint = this.hint;

	            if (hint && contains(hint[0], target)) {
	                hint.hide();
	                target = elementUnderCursor(e);
	                // IE8 does not return the element in iframe from first attempt
	                if (!target) {
	                    target = elementUnderCursor(e);
	                }
	                hint.show();
	            }

	            return target;
	        },

	        _withDropTarget: function(element, callback) {
	            var result,
	                group = this.options.group,
	                targets = dropTargets[group],
	                areas = dropAreas[group];

	            if (targets && targets.length || areas && areas.length) {
	                result = checkTarget(element, targets, areas);

	                if (result) {
	                    callback(result.target, result.targetElement);
	                } else {
	                    callback();
	                }
	            }
	        },

	        destroy: function() {
	            var that = this;

	            Widget.fn.destroy.call(that);

	            that._afterEnd();

	            that.userEvents.destroy();

	            this._scrollableParent = null;
	            this._cursorElement = null;
	            clearInterval(this._scrollInterval);

	            that.currentTarget = null;
	        },

	        _afterEnd: function() {
	            var that = this;

	            if (that.hint) {
	                that.hint.remove();
	            }

	            delete draggables[that.options.group];

	            that.trigger("destroy");
	            that.trigger(HINTDESTROYED);
	            $(document).off(KEYUP, that._captureEscape);
	        }
	    });

	    kendo.ui.plugin(DropTarget);
	    kendo.ui.plugin(DropTargetArea);
	    kendo.ui.plugin(Draggable);
	    kendo.TapCapture = TapCapture;
	    kendo.containerBoundaries = containerBoundaries;

	    extend(kendo.ui, {
	        Pane: Pane,
	        PaneDimensions: PaneDimensions,
	        Movable: Movable
	    });

	    function scrollableViewPort(element) {
	        var root = scrollableRoot()[0],
	            offset,
	            top,
	            left;

	        if (element[0] === root) {
	            top = root.scrollTop;
	            left = root.scrollLeft;

	            return {
	                top: top,
	                left: left,
	                bottom: top + $window.height(),
	                right: left + $window.width()
	            };
	        } else {
	            offset = element.offset();
	            offset.bottom = offset.top + element.height();
	            offset.right =  offset.left + element.width();
	            return offset;
	        }
	    }

	    function scrollableRoot() {
	        return $(kendo.support.browser.chrome ? document.body : document.documentElement);
	    }

	    function findScrollableParent(element) {
	        var root = scrollableRoot();

	        if (!element || element === document.body || element === document.documentElement) {
	            return root;
	        }

	        var parent = $(element)[0];

	        while (parent && !kendo.isScrollable(parent) && parent !== document.body) {
	            parent = parent.parentNode;
	        }

	        if (parent === document.body) {
	            return root;
	        }

	        return $(parent);
	    }

	    function autoScrollVelocity(mouseX, mouseY, rect) {
	        var velocity = { x: 0, y: 0 };

	        var AUTO_SCROLL_AREA = 50;

	        if (mouseX - rect.left < AUTO_SCROLL_AREA) {
	            velocity.x = -(AUTO_SCROLL_AREA - (mouseX - rect.left));
	        } else if (rect.right - mouseX < AUTO_SCROLL_AREA) {
	            velocity.x = AUTO_SCROLL_AREA - (rect.right - mouseX);
	        }

	        if (mouseY - rect.top < AUTO_SCROLL_AREA) {
	            velocity.y = -(AUTO_SCROLL_AREA - (mouseY - rect.top));
	        } else if (rect.bottom - mouseY < AUTO_SCROLL_AREA) {
	            velocity.y = AUTO_SCROLL_AREA - (rect.bottom - mouseY);
	        }

	        return velocity;
	    }

	    // export for testing
	    kendo.ui.Draggable.utils = {
	        autoScrollVelocity: autoScrollVelocity,
	        scrollableViewPort: scrollableViewPort,
	        findScrollableParent: findScrollableParent
	    };

	 })(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(422));


/***/ }

/******/ });

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

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

	module.exports = __webpack_require__(551);


/***/ },

/***/ 421:
/***/ function(module, exports) {

	module.exports = __webpack_require__(1);

/***/ },

/***/ 422:
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(421) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "userevents",
	    name: "User Events",
	    category: "framework",
	    depends: [ "core" ],
	    hidden: true
	};

	(function ($, undefined) {
	    var kendo = window.kendo,
	        support = kendo.support,
	        Class = kendo.Class,
	        Observable = kendo.Observable,
	        now = $.now,
	        extend = $.extend,
	        OS = support.mobileOS,
	        invalidZeroEvents = OS && OS.android,
	        DEFAULT_MIN_HOLD = 800,
	        DEFAULT_THRESHOLD = support.browser.msie ? 5 : 0, // WP8 and W8 are very sensitive and always report move.

	        // UserEvents events
	        PRESS = "press",
	        HOLD = "hold",
	        SELECT = "select",
	        START = "start",
	        MOVE = "move",
	        END = "end",
	        CANCEL = "cancel",
	        TAP = "tap",
	        RELEASE = "release",
	        GESTURESTART = "gesturestart",
	        GESTURECHANGE = "gesturechange",
	        GESTUREEND = "gestureend",
	        GESTURETAP = "gesturetap";

	    var THRESHOLD = {
	        "api": 0,
	        "touch": 0,
	        "mouse": 9,
	        "pointer": 9
	    };

	    var ENABLE_GLOBAL_SURFACE = (!support.touch || support.mouseAndTouchPresent);

	    function touchDelta(touch1, touch2) {
	        var x1 = touch1.x.location,
	            y1 = touch1.y.location,
	            x2 = touch2.x.location,
	            y2 = touch2.y.location,
	            dx = x1 - x2,
	            dy = y1 - y2;

	        return {
	            center: {
	               x: (x1 + x2) / 2,
	               y: (y1 + y2) / 2
	            },

	            distance: Math.sqrt(dx*dx + dy*dy)
	        };
	    }

	    function getTouches(e) {
	        var touches = [],
	            originalEvent = e.originalEvent,
	            currentTarget = e.currentTarget,
	            idx = 0, length,
	            changedTouches,
	            touch;

	        if (e.api) {
	            touches.push({
	                id: 2,  // hardcoded ID for API call;
	                event: e,
	                target: e.target,
	                currentTarget: e.target,
	                location: e,
	                type: "api"
	            });
	        }
	        else if (e.type.match(/touch/)) {
	            changedTouches = originalEvent ? originalEvent.changedTouches : [];
	            for (length = changedTouches.length; idx < length; idx ++) {
	                touch = changedTouches[idx];
	                touches.push({
	                    location: touch,
	                    event: e,
	                    target: touch.target,
	                    currentTarget: currentTarget,
	                    id: touch.identifier,
	                    type: "touch"
	                });
	            }
	        }
	        else if (support.pointers || support.msPointers) {
	            touches.push({
	                location: originalEvent,
	                event: e,
	                target: e.target,
	                currentTarget: currentTarget,
	                id: originalEvent.pointerId,
	                type: "pointer"
	            });
	        } else {
	            touches.push({
	                id: 1, // hardcoded ID for mouse event;
	                event: e,
	                target: e.target,
	                currentTarget: currentTarget,
	                location: e,
	                type: "mouse"
	            });
	        }

	        return touches;
	    }

	    var TouchAxis = Class.extend({
	        init: function(axis, location) {
	            var that = this;

	            that.axis = axis;

	            that._updateLocationData(location);

	            that.startLocation = that.location;
	            that.velocity = that.delta = 0;
	            that.timeStamp = now();
	        },

	        move: function(location) {
	            var that = this,
	                offset = location["page" + that.axis],
	                timeStamp = now(),
	                timeDelta = (timeStamp - that.timeStamp) || 1; // Firing manually events in tests can make this 0;

	            if (!offset && invalidZeroEvents) {
	                return;
	            }

	            that.delta = offset - that.location;

	            that._updateLocationData(location);

	            that.initialDelta = offset - that.startLocation;
	            that.velocity = that.delta / timeDelta;
	            that.timeStamp = timeStamp;
	        },

	        _updateLocationData: function(location) {
	            var that = this, axis = that.axis;

	            that.location = location["page" + axis];
	            that.client = location["client" + axis];
	            that.screen = location["screen" + axis];
	        }
	    });

	    var Touch = Class.extend({
	        init: function(userEvents, target, touchInfo) {
	            extend(this, {
	                x: new TouchAxis("X", touchInfo.location),
	                y: new TouchAxis("Y", touchInfo.location),
	                type: touchInfo.type,
	                useClickAsTap: userEvents.useClickAsTap,
	                threshold: userEvents.threshold || THRESHOLD[touchInfo.type],
	                userEvents: userEvents,
	                target: target,
	                currentTarget: touchInfo.currentTarget,
	                initialTouch: touchInfo.target,
	                id: touchInfo.id,
	                pressEvent: touchInfo,
	                _moved: false,
	                _finished: false
	            });
	        },

	        press: function() {
	            this._holdTimeout = setTimeout($.proxy(this, "_hold"), this.userEvents.minHold);
	            this._trigger(PRESS, this.pressEvent);
	        },

	        _hold: function() {
	            this._trigger(HOLD, this.pressEvent);
	        },

	        move: function(touchInfo) {
	            var that = this;

	            if (that._finished) { return; }

	            that.x.move(touchInfo.location);
	            that.y.move(touchInfo.location);

	            if (!that._moved) {
	                if (that._withinIgnoreThreshold()) {
	                    return;
	                }

	                if (!UserEvents.current || UserEvents.current === that.userEvents) {
	                    that._start(touchInfo);
	                } else {
	                    return that.dispose();
	                }
	            }

	            // Event handlers may cancel the drag in the START event handler, hence the double check for pressed.
	            if (!that._finished) {
	                that._trigger(MOVE, touchInfo);
	            }
	        },

	        end: function(touchInfo) {
	            this.endTime = now();

	            if (this._finished) { return; }

	            // Mark the object as finished if there are blocking operations in the event handlers (alert/confirm)
	            this._finished = true;

	            this._trigger(RELEASE, touchInfo); // Release should be fired before TAP (as click is after mouseup/touchend)

	            if (this._moved) {
	                this._trigger(END, touchInfo);
	            } else {
	                if (!this.useClickAsTap) {
	                    this._trigger(TAP, touchInfo);
	                }
	            }

	            clearTimeout(this._holdTimeout);

	            this.dispose();
	        },

	        dispose: function() {
	            var userEvents = this.userEvents,
	                activeTouches = userEvents.touches;

	            this._finished = true;
	            this.pressEvent = null;
	            clearTimeout(this._holdTimeout);

	            activeTouches.splice($.inArray(this, activeTouches), 1);
	        },

	        skip: function() {
	            this.dispose();
	        },

	        cancel: function() {
	            this.dispose();
	        },

	        isMoved: function() {
	            return this._moved;
	        },

	        _start: function(touchInfo) {
	            clearTimeout(this._holdTimeout);

	            this.startTime = now();
	            this._moved = true;
	            this._trigger(START, touchInfo);
	        },

	        _trigger: function(name, touchInfo) {
	            var that = this,
	                jQueryEvent = touchInfo.event,
	                data = {
	                    touch: that,
	                    x: that.x,
	                    y: that.y,
	                    target: that.target,
	                    event: jQueryEvent
	                };

	            if(that.userEvents.notify(name, data)) {
	                jQueryEvent.preventDefault();
	            }
	        },

	        _withinIgnoreThreshold: function() {
	            var xDelta = this.x.initialDelta,
	                yDelta = this.y.initialDelta;

	            return Math.sqrt(xDelta * xDelta + yDelta * yDelta) <= this.threshold;
	        }
	    });

	    function withEachUpEvent(callback) {
	        var downEvents = kendo.eventMap.up.split(" "),
	            idx = 0,
	            length = downEvents.length;

	        for(; idx < length; idx ++) {
	            callback(downEvents[idx]);
	        }
	    }

	    var UserEvents = Observable.extend({
	        init: function(element, options) {
	            var that = this,
	                filter,
	                ns = kendo.guid();

	            options = options || {};
	            filter = that.filter = options.filter;
	            that.threshold = options.threshold || DEFAULT_THRESHOLD;
	            that.minHold = options.minHold || DEFAULT_MIN_HOLD;
	            that.touches = [];
	            that._maxTouches = options.multiTouch ? 2 : 1;
	            that.allowSelection = options.allowSelection;
	            that.captureUpIfMoved = options.captureUpIfMoved;
	            that.useClickAsTap = !options.fastTap && !support.delayedClick();
	            that.eventNS = ns;

	            element = $(element).handler(that);
	            Observable.fn.init.call(that);

	            extend(that, {
	                element: element,
	                // the touch events lock to the element anyway, so no need for the global setting
	                surface: options.global && ENABLE_GLOBAL_SURFACE ? $(element[0].ownerDocument.documentElement) : $(options.surface || element),
	                stopPropagation: options.stopPropagation,
	                pressed: false
	            });

	            that.surface.handler(that)
	                .on(kendo.applyEventMap("move", ns), "_move")
	                .on(kendo.applyEventMap("up cancel", ns), "_end");

	            element.on(kendo.applyEventMap("down", ns), filter, "_start");

	            if (that.useClickAsTap) {
	                element.on(kendo.applyEventMap("click", ns), filter, "_click");
	            }

	            if (support.pointers || support.msPointers) {
	                if (support.browser.version < 11) {
	                    element.css("-ms-touch-action", "pinch-zoom double-tap-zoom");
	                } else {
	                    element.css("touch-action", options.touchAction || "none");
	                }
	            }

	            if (options.preventDragEvent) {
	                element.on(kendo.applyEventMap("dragstart", ns), kendo.preventDefault);
	            }

	            element.on(kendo.applyEventMap("mousedown", ns), filter, { root: element }, "_select");

	            if (that.captureUpIfMoved && support.eventCapture) {
	                var surfaceElement = that.surface[0],
	                    preventIfMovingProxy = $.proxy(that.preventIfMoving, that);

	                withEachUpEvent(function(eventName) {
	                    surfaceElement.addEventListener(eventName, preventIfMovingProxy, true);
	                });
	            }

	            that.bind([
	            PRESS,
	            HOLD,
	            TAP,
	            START,
	            MOVE,
	            END,
	            RELEASE,
	            CANCEL,
	            GESTURESTART,
	            GESTURECHANGE,
	            GESTUREEND,
	            GESTURETAP,
	            SELECT
	            ], options);
	        },

	        preventIfMoving: function(e) {
	            if (this._isMoved()) {
	                e.preventDefault();
	            }
	        },

	        destroy: function() {
	            var that = this;

	            if (that._destroyed) {
	                return;
	            }

	            that._destroyed = true;

	            if (that.captureUpIfMoved && support.eventCapture) {
	                var surfaceElement = that.surface[0];
	                withEachUpEvent(function(eventName) {
	                    surfaceElement.removeEventListener(eventName, that.preventIfMoving);
	                });
	            }

	            that.element.kendoDestroy(that.eventNS);
	            that.surface.kendoDestroy(that.eventNS);
	            that.element.removeData("handler");
	            that.surface.removeData("handler");
	            that._disposeAll();

	            that.unbind();
	            delete that.surface;
	            delete that.element;
	            delete that.currentTarget;
	        },

	        capture: function() {
	            UserEvents.current = this;
	        },

	        cancel: function() {
	            this._disposeAll();
	            this.trigger(CANCEL);
	        },

	        notify: function(eventName, data) {
	            var that = this,
	                touches = that.touches;

	            if (this._isMultiTouch()) {
	                switch(eventName) {
	                    case MOVE:
	                        eventName = GESTURECHANGE;
	                        break;
	                    case END:
	                        eventName = GESTUREEND;
	                        break;
	                    case TAP:
	                        eventName = GESTURETAP;
	                        break;
	                }

	                extend(data, {touches: touches}, touchDelta(touches[0], touches[1]));
	            }

	            return this.trigger(eventName, extend(data, {type: eventName}));
	        },

	        // API
	        press: function(x, y, target) {
	            this._apiCall("_start", x, y, target);
	        },

	        move: function(x, y) {
	            this._apiCall("_move", x, y);
	        },

	        end: function(x, y) {
	            this._apiCall("_end", x, y);
	        },

	        _isMultiTouch: function() {
	            return this.touches.length > 1;
	        },

	        _maxTouchesReached: function() {
	            return this.touches.length >= this._maxTouches;
	        },

	        _disposeAll: function() {
	            var touches = this.touches;
	            while (touches.length > 0) {
	                touches.pop().dispose();
	            }
	        },

	        _isMoved: function() {
	            return $.grep(this.touches, function(touch) {
	                return touch.isMoved();
	            }).length;
	        },

	        _select: function(e) {
	           if (!this.allowSelection || this.trigger(SELECT, { event: e })) {
	               e.preventDefault();
	           }
	        },

	        _start: function(e) {
	            var that = this,
	                idx = 0,
	                filter = that.filter,
	                target,
	                touches = getTouches(e),
	                length = touches.length,
	                touch,
	                which = e.which;

	            if ((which && which > 1) || (that._maxTouchesReached())){
	                return;
	            }

	            UserEvents.current = null;

	            that.currentTarget = e.currentTarget;

	            if (that.stopPropagation) {
	                e.stopPropagation();
	            }

	            for (; idx < length; idx ++) {
	                if (that._maxTouchesReached()) {
	                    break;
	                }

	                touch = touches[idx];

	                if (filter) {
	                    target = $(touch.currentTarget); // target.is(filter) ? target : target.closest(filter, that.element);
	                } else {
	                    target = that.element;
	                }

	                if (!target.length) {
	                    continue;
	                }

	                touch = new Touch(that, target, touch);
	                that.touches.push(touch);
	                touch.press();

	                if (that._isMultiTouch()) {
	                    that.notify("gesturestart", {});
	                }
	            }
	        },

	        _move: function(e) {
	            this._eachTouch("move", e);
	        },

	        _end: function(e) {
	            this._eachTouch("end", e);
	        },

	        _click: function(e) {
	            var data = {
	                touch: {
	                    initialTouch: e.target,
	                    target: $(e.currentTarget),
	                    endTime: now(),
	                    x: {
	                        location: e.pageX,
	                        client: e.clientX
	                    },
	                    y: {
	                        location: e.pageY,
	                        client: e.clientY
	                    }
	                },
	                x: e.pageX,
	                y: e.pageY,
	                target: $(e.currentTarget),
	                event: e,
	                type: "tap"
	            };

	            if (this.trigger("tap", data)) {
	                e.preventDefault();
	            }
	        },

	        _eachTouch: function(methodName, e) {
	            var that = this,
	                dict = {},
	                touches = getTouches(e),
	                activeTouches = that.touches,
	                idx,
	                touch,
	                touchInfo,
	                matchingTouch;

	            for (idx = 0; idx < activeTouches.length; idx ++) {
	                touch = activeTouches[idx];
	                dict[touch.id] = touch;
	            }

	            for (idx = 0; idx < touches.length; idx ++) {
	                touchInfo = touches[idx];
	                matchingTouch = dict[touchInfo.id];

	                if (matchingTouch) {
	                    matchingTouch[methodName](touchInfo);
	                }
	            }
	        },

	        _apiCall: function(type, x, y, target) {
	            this[type]({
	                api: true,
	                pageX: x,
	                pageY: y,
	                clientX: x,
	                clientY: y,
	                target: $(target || this.element)[0],
	                stopPropagation: $.noop,
	                preventDefault: $.noop
	            });
	        }
	    });

	    UserEvents.defaultThreshold = function(value) {
	        DEFAULT_THRESHOLD = value;
	    };

	    UserEvents.minHold = function(value) {
	        DEFAULT_MIN_HOLD = value;
	    };

	    kendo.getTouches = getTouches;
	    kendo.touchDelta = touchDelta;
	    kendo.UserEvents = UserEvents;
	 })(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(422));


/***/ }

/******/ });

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($) {
	return function () {
		// Load the navbar and footer
		$('.navigation').load('layout/nav.html', function () {
			// Select the nav items that match the localpath in the url.
			var pathName = $(location).attr('pathname');
			var title = pathName.substring(pathName.lastIndexOf("/") + 1);

			$("div#nav a[href='" + title + "']").parent().addClass("selected");
		});
		$('#footer').load('layout/footer.html', function () {
			// Select the nav items that match the localpath in the url.
			var pathName = $(location).attr('pathname');
			var title = pathName.substring(pathName.lastIndexOf("/") + 1);

			$("div#footer a[href='" + title + "']").removeAttr('href');
		});
	};
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($) {
	// Quote rotator jquery library
	$(".nextPane").click(advance);
	$(".previousPane").click(retreat);

	//Quotes rotator
	var divs = $('.cbp-qtcontent');

	var dots = $('.dots');

	function advance() {
		var current = $('.current');
		var currentIndex = divs.index(current),
			nextIndex = currentIndex + 1;

		if (nextIndex >= divs.length) {
			nextIndex = 0;
		}

		var next = divs.eq(nextIndex);

		fade(current, next);
	}

	function retreat() {
		var current = $('.current');
		var currentIndex = divs.index(current),
			nextIndex = currentIndex - 1;

		if (nextIndex < 0) {
			nextIndex = divs.length - 1;
		}

		var next = divs.eq(nextIndex);

		fade(current, next)
	}

	function fade(current, next) {
		next.stop().fadeIn(800, function () {
			$(this).addClass('current');
		});

		current.stop().fadeOut(800, function () {
			$(this).removeClass('current');
		});
	}
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })
/******/ ]);