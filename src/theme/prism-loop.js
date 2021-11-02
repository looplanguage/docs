(function (Prism) {
  function keywordsToPattern(words) {
		return '\\b(?:' + words.trim().replace(/ /g, '|') + ')\\b';
	}

  function nested(pattern, depthLog2) {
		for (var i = 0; i < depthLog2; i++) {
			pattern = pattern.replace(/<<self>>/g, function () { return '(?:' + pattern + ')'; });
		}
		return pattern.replace(/<<self>>/g, '[^\\s\\S]');
	}

  function re(pattern, replacements, flags) {
		return RegExp(replace(pattern, replacements), flags || '');
	}

  function replace(pattern, replacements) {
		return pattern.replace(/<<(\d+)>>/g, function (m, index) {
			return '(?:' + replacements[+index] + ')';
		});
	}

  var keywordKinds = {
		typeDeclaration: 'struct enum',
	};

	var typeDeclarationKeywords = keywordsToPattern(keywordKinds.typeDeclaration);

	var keywords = RegExp(keywordsToPattern(keywordKinds.typeDeclaration));

  // types
  var generic = nested(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2); // the idea behind the other forbidden characters is to prevent false positives. Same for tupleElement.
	var nestedRound = nested(/\((?:[^()]|<<self>>)*\)/.source, 2);
	var name = /@?\b[A-Za-z_]\w*\b/.source;
	var genericName = replace(/<<0>>(?:\s*<<1>>)?/.source, [name, generic]);

  Prism.languages.loop = {
    "comment": [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true,
        greedy: true,
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true,
      },
    ],
    "string": {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true,
    },
    "attributes": [
      {
        pattern: /@\w*/,
        inside: {
          "class-name": {
            pattern: /^@\w*/
          }
        }
      }
    ],
    "keyword": /\b(?:var|return|if|else|import|as|export|enum|struct|fn|for|from|to|in)\b/,
    "builtin": /\b(print|println)\b/,
    "boolean": /\b(?:false|true)\b/,
    "function": /\b\w+(?=\()/,
    "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
    "class-name": {
      pattern: re(/(\b<<0>>\s+)<<1>>/.source, [typeDeclarationKeywords, genericName]),
			lookbehind: true,
    },
    "constant": [
      {
        pattern: /\b(?:String|Integer|Float|Boolean)\b/,
      },
    ],
    "index": [
      {
        pattern: /\b\w*\.\w*\b/,
        inside: {
          'class-name': {
            pattern: /^[A-Z]\w*/
          }
        }
      }
    ],
    "punctuation": /[{}[\];(),.:]/,
  };

  Prism.languages.insertBefore("loop", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: true,
      alias: "property",
    },
  });
})(Prism);
