import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a as validate_slots, T as goto, e as element, t as text, b as space, c as claim_element, f as children, g as detach_dev, j as claim_text, h as claim_space, k as attr_dev, l as add_location, m as insert_dev, n as append_dev, o as listen_dev, p as set_data_dev, q as noop, L as createEventDispatcher, U as set_input_value, V as prevent_default, K as run_all, v as validate_each_argument, D as validate_each_keys, C as empty, E as create_component, F as claim_component, G as mount_component, B as transition_in, z as transition_out, H as destroy_component, y as group_outros, A as check_outros, I as update_keyed_each, J as outro_and_destroy_block, u as stores$1, w as validate_store, x as component_subscribe, O as onMount, P as query_selector_all, r as destroy_each } from './client.93e48d96.js';
import { c as createCommonjsModule, a as api, d as del, p as post, g as get } from './api.d2dd6678.js';
import { L as ListErrors } from './ListErrors.9ff24227.js';

var defaults = createCommonjsModule(function (module) {
function getDefaults() {
  return {
    baseUrl: null,
    breaks: false,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    xhtml: false
  };
}

function changeDefaults(newDefaults) {
  module.exports.defaults = newDefaults;
}

module.exports = {
  defaults: getDefaults(),
  getDefaults,
  changeDefaults
};
});
var defaults_1 = defaults.defaults;
var defaults_2 = defaults.getDefaults;
var defaults_3 = defaults.changeDefaults;

/**
 * Helpers
 */
const escapeTest = /[&<>"']/;
const escapeReplace = /[&<>"']/g;
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
const escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }

  return html;
}

const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

const caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  regex = regex.source || regex;
  opt = opt || '';
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, '$1');
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}

const nonWordAndColonTest = /[^\w:]/g;
const originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape(href))
        .replace(nonWordAndColonTest, '')
        .toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }
  return href;
}

const baseUrls = {};
const justDomain = /^[^:]+:\/*[^/]*$/;
const protocol = /^([^:]+:)[\s\S]*$/;
const domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (justDomain.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = rtrim(base, '/', true);
    }
  }
  base = baseUrls[' ' + base];
  const relativeBase = base.indexOf(':') === -1;

  if (href.substring(0, 2) === '//') {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, '$1') + href;
  } else if (href.charAt(0) === '/') {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, '$1') + href;
  } else {
    return base + href;
  }
}

const noopTest = { exec: function noopTest() {} };

function merge(obj) {
  let i = 1,
    target,
    key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
      let escaped = false,
        curr = offset;
      while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;
      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
    cells = row.split(/ \|/);
  let i = 0;

  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) cells.push('');
  }

  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }
  return cells;
}

// Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
// /c*$/ is vulnerable to REDOS.
// invert: Remove suffix of non-c chars instead. Default falsey.
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return '';
  }

  // Length of suffix matching the invert condition.
  let suffLen = 0;

  // Step left until we fail to match the invert condition.
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }

  return str.substr(0, l - suffLen);
}

function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l = str.length;
  let level = 0,
    i = 0;
  for (; i < l; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}

function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
  }
}

var helpers = {
  escape,
  unescape,
  edit,
  cleanUrl,
  resolveUrl,
  noopTest,
  merge,
  splitCells,
  rtrim,
  findClosingBracket,
  checkSanitizeDeprecation
};

const {
  noopTest: noopTest$1,
  edit: edit$1,
  merge: merge$1
} = helpers;

/**
 * Block-Level Grammar
 */
const block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?\\?>\\n*' // (3)
    + '|<![A-Z][\\s\\S]*?>\\n*' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
    + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
    + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
    + ')',
  def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
  nptable: noopTest$1,
  table: noopTest$1,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
  text: /^[^\n]+/
};

block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit$1(block.def)
  .replace('label', block._label)
  .replace('title', block._title)
  .getRegex();

block.bullet = /(?:[*+-]|\d{1,9}\.)/;
block.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
block.item = edit$1(block.item, 'gm')
  .replace(/bull/g, block.bullet)
  .getRegex();

block.list = edit$1(block.list)
  .replace(/bull/g, block.bullet)
  .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
  .replace('def', '\\n+(?=' + block.def.source + ')')
  .getRegex();

block._tag = 'address|article|aside|base|basefont|blockquote|body|caption'
  + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption'
  + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe'
  + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option'
  + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr'
  + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?-->/;
block.html = edit$1(block.html, 'i')
  .replace('comment', block._comment)
  .replace('tag', block._tag)
  .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
  .getRegex();

block.paragraph = edit$1(block._paragraph)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();

block.blockquote = edit$1(block.blockquote)
  .replace('paragraph', block.paragraph)
  .getRegex();

/**
 * Normal Block Grammar
 */

block.normal = merge$1({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge$1({}, block.normal, {
  nptable: '^ *([^|\\n ].*\\|.*)\\n' // Header
    + ' *([-:]+ *\\|[-| :]*)' // Align
    + '(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)', // Cells
  table: '^ *\\|(.+)\\n' // Header
    + ' *\\|?( *[-:]+[-| :]*)' // Align
    + '(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells
});

block.gfm.nptable = edit$1(block.gfm.nptable)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('blockquote', ' {0,3}>')
  .replace('code', ' {4}[^\\n]')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
  .replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();

block.gfm.table = edit$1(block.gfm.table)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('blockquote', ' {0,3}>')
  .replace('code', ' {4}[^\\n]')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
  .replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();

/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */

block.pedantic = merge$1({}, block.normal, {
  html: edit$1(
    '^ *(?:comment *(?:\\n|\\s*$)'
    + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))')
    .replace('comment', block._comment)
    .replace(/tag/g, '(?!(?:'
      + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub'
      + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)'
      + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b')
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
  fences: noopTest$1, // fences not supported
  paragraph: edit$1(block.normal._paragraph)
    .replace('hr', block.hr)
    .replace('heading', ' *#{1,6} *[^\n]')
    .replace('lheading', block.lheading)
    .replace('blockquote', ' {0,3}>')
    .replace('|fences', '')
    .replace('|list', '')
    .replace('|html', '')
    .getRegex()
});

/**
 * Inline-Level Grammar
 */
const inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest$1,
  tag: '^comment'
    + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>', // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
  nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
  strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
  em: /^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest$1,
  text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
};

// list of punctuation marks from common mark spec
// without ` and ] to workaround Rule 17 (inline code blocks/links)
inline._punctuation = '!"#$%&\'()*+,\\-./:;<=>?@\\[^_{|}~';
inline.em = edit$1(inline.em).replace(/punctuation/g, inline._punctuation).getRegex();

inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;

inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit$1(inline.autolink)
  .replace('scheme', inline._scheme)
  .replace('email', inline._email)
  .getRegex();

inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;

inline.tag = edit$1(inline.tag)
  .replace('comment', block._comment)
  .replace('attribute', inline._attribute)
  .getRegex();

inline._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;

inline.link = edit$1(inline.link)
  .replace('label', inline._label)
  .replace('href', inline._href)
  .replace('title', inline._title)
  .getRegex();

inline.reflink = edit$1(inline.reflink)
  .replace('label', inline._label)
  .getRegex();

/**
 * Normal Inline Grammar
 */

inline.normal = merge$1({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge$1({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
  link: edit$1(/^!?\[(label)\]\((.*?)\)/)
    .replace('label', inline._label)
    .getRegex(),
  reflink: edit$1(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace('label', inline._label)
    .getRegex()
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge$1({}, inline.normal, {
  escape: edit$1(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^~+(?=\S)([\s\S]*?\S)~+/,
  text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
});

inline.gfm.url = edit$1(inline.gfm.url, 'i')
  .replace('email', inline.gfm._extended_email)
  .getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge$1({}, inline.gfm, {
  br: edit$1(inline.br).replace('{2,}', '*').getRegex(),
  text: edit$1(inline.gfm.text)
    .replace('\\b_', '\\b_| {2,}\\n')
    .replace(/\{2,\}/g, '*')
    .getRegex()
});

var rules = {
  block,
  inline
};

const { defaults: defaults$1 } = defaults;
const { block: block$1 } = rules;
const {
  rtrim: rtrim$1,
  splitCells: splitCells$1,
  escape: escape$1
} = helpers;

/**
 * Block Lexer
 */
var Lexer_1 = class Lexer {
  constructor(options) {
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || defaults$1;
    this.rules = block$1.normal;

    if (this.options.pedantic) {
      this.rules = block$1.pedantic;
    } else if (this.options.gfm) {
      this.rules = block$1.gfm;
    }
  }

  /**
   * Expose Block Rules
   */
  static get rules() {
    return block$1;
  }

  /**
   * Static Lex Method
   */
  static lex(src, options) {
    const lexer = new Lexer(options);
    return lexer.lex(src);
  };

  /**
   * Preprocessing
   */
  lex(src) {
    src = src
      .replace(/\r\n|\r/g, '\n')
      .replace(/\t/g, '    ');

    return this.token(src, true);
  };

  /**
   * Lexing
   */
  token(src, top) {
    src = src.replace(/^ +$/gm, '');
    let next,
      loose,
      cap,
      bull,
      b,
      item,
      listStart,
      listItems,
      t,
      space,
      i,
      tag,
      l,
      isordered,
      istask,
      ischecked;

    while (src) {
      // newline
      if (cap = this.rules.newline.exec(src)) {
        src = src.substring(cap[0].length);
        if (cap[0].length > 1) {
          this.tokens.push({
            type: 'space'
          });
        }
      }

      // code
      if (cap = this.rules.code.exec(src)) {
        const lastToken = this.tokens[this.tokens.length - 1];
        src = src.substring(cap[0].length);
        // An indented code block cannot interrupt a paragraph.
        if (lastToken && lastToken.type === 'paragraph') {
          lastToken.text += '\n' + cap[0].trimRight();
        } else {
          cap = cap[0].replace(/^ {4}/gm, '');
          this.tokens.push({
            type: 'code',
            codeBlockStyle: 'indented',
            text: !this.options.pedantic
              ? rtrim$1(cap, '\n')
              : cap
          });
        }
        continue;
      }

      // fences
      if (cap = this.rules.fences.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'code',
          lang: cap[2] ? cap[2].trim() : cap[2],
          text: cap[3] || ''
        });
        continue;
      }

      // heading
      if (cap = this.rules.heading.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'heading',
          depth: cap[1].length,
          text: cap[2]
        });
        continue;
      }

      // table no leading pipe (gfm)
      if (cap = this.rules.nptable.exec(src)) {
        item = {
          type: 'table',
          header: splitCells$1(cap[1].replace(/^ *| *\| *$/g, '')),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
        };

        if (item.header.length === item.align.length) {
          src = src.substring(cap[0].length);

          for (i = 0; i < item.align.length; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          for (i = 0; i < item.cells.length; i++) {
            item.cells[i] = splitCells$1(item.cells[i], item.header.length);
          }

          this.tokens.push(item);

          continue;
        }
      }

      // hr
      if (cap = this.rules.hr.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'hr'
        });
        continue;
      }

      // blockquote
      if (cap = this.rules.blockquote.exec(src)) {
        src = src.substring(cap[0].length);

        this.tokens.push({
          type: 'blockquote_start'
        });

        cap = cap[0].replace(/^ *> ?/gm, '');

        // Pass `top` to keep the current
        // "toplevel" state. This is exactly
        // how markdown.pl works.
        this.token(cap, top);

        this.tokens.push({
          type: 'blockquote_end'
        });

        continue;
      }

      // list
      if (cap = this.rules.list.exec(src)) {
        src = src.substring(cap[0].length);
        bull = cap[2];
        isordered = bull.length > 1;

        listStart = {
          type: 'list_start',
          ordered: isordered,
          start: isordered ? +bull : '',
          loose: false
        };

        this.tokens.push(listStart);

        // Get each top-level item.
        cap = cap[0].match(this.rules.item);

        listItems = [];
        next = false;
        l = cap.length;
        i = 0;

        for (; i < l; i++) {
          item = cap[i];

          // Remove the list item's bullet
          // so it is seen as the next token.
          space = item.length;
          item = item.replace(/^ *([*+-]|\d+\.) */, '');

          // Outdent whatever the
          // list item contains. Hacky.
          if (~item.indexOf('\n ')) {
            space -= item.length;
            item = !this.options.pedantic
              ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
              : item.replace(/^ {1,4}/gm, '');
          }

          // Determine whether the next list item belongs here.
          // Backpedal if it does not belong in this list.
          if (i !== l - 1) {
            b = block$1.bullet.exec(cap[i + 1])[0];
            if (bull.length > 1 ? b.length === 1
              : (b.length > 1 || (this.options.smartLists && b !== bull))) {
              src = cap.slice(i + 1).join('\n') + src;
              i = l - 1;
            }
          }

          // Determine whether item is loose or not.
          // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
          // for discount behavior.
          loose = next || /\n\n(?!\s*$)/.test(item);
          if (i !== l - 1) {
            next = item.charAt(item.length - 1) === '\n';
            if (!loose) loose = next;
          }

          if (loose) {
            listStart.loose = true;
          }

          // Check for task list items
          istask = /^\[[ xX]\] /.test(item);
          ischecked = undefined;
          if (istask) {
            ischecked = item[1] !== ' ';
            item = item.replace(/^\[[ xX]\] +/, '');
          }

          t = {
            type: 'list_item_start',
            task: istask,
            checked: ischecked,
            loose: loose
          };

          listItems.push(t);
          this.tokens.push(t);

          // Recurse.
          this.token(item, false);

          this.tokens.push({
            type: 'list_item_end'
          });
        }

        if (listStart.loose) {
          l = listItems.length;
          i = 0;
          for (; i < l; i++) {
            listItems[i].loose = true;
          }
        }

        this.tokens.push({
          type: 'list_end'
        });

        continue;
      }

      // html
      if (cap = this.rules.html.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: this.options.sanitize
            ? 'paragraph'
            : 'html',
          pre: !this.options.sanitizer
            && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
          text: this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$1(cap[0])) : cap[0]
        });
        continue;
      }

      // def
      if (top && (cap = this.rules.def.exec(src))) {
        src = src.substring(cap[0].length);
        if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
        tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
        if (!this.tokens.links[tag]) {
          this.tokens.links[tag] = {
            href: cap[2],
            title: cap[3]
          };
        }
        continue;
      }

      // table (gfm)
      if (cap = this.rules.table.exec(src)) {
        item = {
          type: 'table',
          header: splitCells$1(cap[1].replace(/^ *| *\| *$/g, '')),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
        };

        if (item.header.length === item.align.length) {
          src = src.substring(cap[0].length);

          for (i = 0; i < item.align.length; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          for (i = 0; i < item.cells.length; i++) {
            item.cells[i] = splitCells$1(
              item.cells[i].replace(/^ *\| *| *\| *$/g, ''),
              item.header.length);
          }

          this.tokens.push(item);

          continue;
        }
      }

      // lheading
      if (cap = this.rules.lheading.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'heading',
          depth: cap[2].charAt(0) === '=' ? 1 : 2,
          text: cap[1]
        });
        continue;
      }

      // top-level paragraph
      if (top && (cap = this.rules.paragraph.exec(src))) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'paragraph',
          text: cap[1].charAt(cap[1].length - 1) === '\n'
            ? cap[1].slice(0, -1)
            : cap[1]
        });
        continue;
      }

      // text
      if (cap = this.rules.text.exec(src)) {
        // Top-level should never reach here.
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'text',
          text: cap[0]
        });
        continue;
      }

      if (src) {
        throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
      }
    }

    return this.tokens;
  };
};

const { defaults: defaults$2 } = defaults;
const {
  cleanUrl: cleanUrl$1,
  escape: escape$2
} = helpers;

/**
 * Renderer
 */
var Renderer_1 = class Renderer {
  constructor(options) {
    this.options = options || defaults$2;
  }

  code(code, infostring, escaped) {
    const lang = (infostring || '').match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }

    if (!lang) {
      return '<pre><code>'
        + (escaped ? code : escape$2(code, true))
        + '</code></pre>';
    }

    return '<pre><code class="'
      + this.options.langPrefix
      + escape$2(lang, true)
      + '">'
      + (escaped ? code : escape$2(code, true))
      + '</code></pre>\n';
  };

  blockquote(quote) {
    return '<blockquote>\n' + quote + '</blockquote>\n';
  };

  html(html) {
    return html;
  };

  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      return '<h'
        + level
        + ' id="'
        + this.options.headerPrefix
        + slugger.slug(raw)
        + '">'
        + text
        + '</h'
        + level
        + '>\n';
    }
    // ignore IDs
    return '<h' + level + '>' + text + '</h' + level + '>\n';
  };

  hr() {
    return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
  };

  list(body, ordered, start) {
    const type = ordered ? 'ol' : 'ul',
      startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
    return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
  };

  listitem(text) {
    return '<li>' + text + '</li>\n';
  };

  checkbox(checked) {
    return '<input '
      + (checked ? 'checked="" ' : '')
      + 'disabled="" type="checkbox"'
      + (this.options.xhtml ? ' /' : '')
      + '> ';
  };

  paragraph(text) {
    return '<p>' + text + '</p>\n';
  };

  table(header, body) {
    if (body) body = '<tbody>' + body + '</tbody>';

    return '<table>\n'
      + '<thead>\n'
      + header
      + '</thead>\n'
      + body
      + '</table>\n';
  };

  tablerow(content) {
    return '<tr>\n' + content + '</tr>\n';
  };

  tablecell(content, flags) {
    const type = flags.header ? 'th' : 'td';
    const tag = flags.align
      ? '<' + type + ' align="' + flags.align + '">'
      : '<' + type + '>';
    return tag + content + '</' + type + '>\n';
  };

  // span level renderer
  strong(text) {
    return '<strong>' + text + '</strong>';
  };

  em(text) {
    return '<em>' + text + '</em>';
  };

  codespan(text) {
    return '<code>' + text + '</code>';
  };

  br() {
    return this.options.xhtml ? '<br/>' : '<br>';
  };

  del(text) {
    return '<del>' + text + '</del>';
  };

  link(href, title, text) {
    href = cleanUrl$1(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a href="' + escape$2(href) + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += '>' + text + '</a>';
    return out;
  };

  image(href, title, text) {
    href = cleanUrl$1(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }

    let out = '<img src="' + href + '" alt="' + text + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += this.options.xhtml ? '/>' : '>';
    return out;
  };

  text(text) {
    return text;
  };
};

/**
 * Slugger generates header id
 */
var Slugger_1 = class Slugger {
  constructor() {
    this.seen = {};
  }

  /**
   * Convert string to unique id
   */
  slug(value) {
    let slug = value
      .toLowerCase()
      .trim()
      // remove html tags
      .replace(/<[!\/a-z].*?>/ig, '')
      // remove unwanted chars
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
      .replace(/\s/g, '-');

    if (this.seen.hasOwnProperty(slug)) {
      const originalSlug = slug;
      do {
        this.seen[originalSlug]++;
        slug = originalSlug + '-' + this.seen[originalSlug];
      } while (this.seen.hasOwnProperty(slug));
    }
    this.seen[slug] = 0;

    return slug;
  };
};

const { defaults: defaults$3 } = defaults;
const { inline: inline$1 } = rules;
const {
  findClosingBracket: findClosingBracket$1,
  escape: escape$3
} = helpers;

/**
 * Inline Lexer & Compiler
 */
var InlineLexer_1 = class InlineLexer {
  constructor(links, options) {
    this.options = options || defaults$3;
    this.links = links;
    this.rules = inline$1.normal;
    this.options.renderer = this.options.renderer || new Renderer_1();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;

    if (!this.links) {
      throw new Error('Tokens array requires a `links` property.');
    }

    if (this.options.pedantic) {
      this.rules = inline$1.pedantic;
    } else if (this.options.gfm) {
      if (this.options.breaks) {
        this.rules = inline$1.breaks;
      } else {
        this.rules = inline$1.gfm;
      }
    }
  }

  /**
   * Expose Inline Rules
   */
  static get rules() {
    return inline$1;
  }

  /**
   * Static Lexing/Compiling Method
   */
  static output(src, links, options) {
    const inline = new InlineLexer(links, options);
    return inline.output(src);
  }

  /**
   * Lexing/Compiling
   */
  output(src) {
    let out = '',
      link,
      text,
      href,
      title,
      cap,
      prevCapZero;

    while (src) {
      // escape
      if (cap = this.rules.escape.exec(src)) {
        src = src.substring(cap[0].length);
        out += escape$3(cap[1]);
        continue;
      }

      // tag
      if (cap = this.rules.tag.exec(src)) {
        if (!this.inLink && /^<a /i.test(cap[0])) {
          this.inLink = true;
        } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
          this.inLink = false;
        }
        if (!this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.inRawBlock = true;
        } else if (this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.inRawBlock = false;
        }

        src = src.substring(cap[0].length);
        out += this.renderer.html(this.options.sanitize
          ? (this.options.sanitizer
            ? this.options.sanitizer(cap[0])
            : escape$3(cap[0]))
          : cap[0]);
        continue;
      }

      // link
      if (cap = this.rules.link.exec(src)) {
        const lastParenIndex = findClosingBracket$1(cap[2], '()');
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf('!') === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = '';
        }
        src = src.substring(cap[0].length);
        this.inLink = true;
        href = cap[2];
        if (this.options.pedantic) {
          link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

          if (link) {
            href = link[1];
            title = link[3];
          } else {
            title = '';
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : '';
        }
        href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
        out += this.outputLink(cap, {
          href: InlineLexer.escapes(href),
          title: InlineLexer.escapes(title)
        });
        this.inLink = false;
        continue;
      }

      // reflink, nolink
      if ((cap = this.rules.reflink.exec(src))
          || (cap = this.rules.nolink.exec(src))) {
        src = src.substring(cap[0].length);
        link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
        link = this.links[link.toLowerCase()];
        if (!link || !link.href) {
          out += cap[0].charAt(0);
          src = cap[0].substring(1) + src;
          continue;
        }
        this.inLink = true;
        out += this.outputLink(cap, link);
        this.inLink = false;
        continue;
      }

      // strong
      if (cap = this.rules.strong.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.strong(this.output(cap[4] || cap[3] || cap[2] || cap[1]));
        continue;
      }

      // em
      if (cap = this.rules.em.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.em(this.output(cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1]));
        continue;
      }

      // code
      if (cap = this.rules.code.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.codespan(escape$3(cap[2].trim(), true));
        continue;
      }

      // br
      if (cap = this.rules.br.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.br();
        continue;
      }

      // del (gfm)
      if (cap = this.rules.del.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.del(this.output(cap[1]));
        continue;
      }

      // autolink
      if (cap = this.rules.autolink.exec(src)) {
        src = src.substring(cap[0].length);
        if (cap[2] === '@') {
          text = escape$3(this.mangle(cap[1]));
          href = 'mailto:' + text;
        } else {
          text = escape$3(cap[1]);
          href = text;
        }
        out += this.renderer.link(href, null, text);
        continue;
      }

      // url (gfm)
      if (!this.inLink && (cap = this.rules.url.exec(src))) {
        if (cap[2] === '@') {
          text = escape$3(cap[0]);
          href = 'mailto:' + text;
        } else {
          // do extended autolink path validation
          do {
            prevCapZero = cap[0];
            cap[0] = this.rules._backpedal.exec(cap[0])[0];
          } while (prevCapZero !== cap[0]);
          text = escape$3(cap[0]);
          if (cap[1] === 'www.') {
            href = 'http://' + text;
          } else {
            href = text;
          }
        }
        src = src.substring(cap[0].length);
        out += this.renderer.link(href, null, text);
        continue;
      }

      // text
      if (cap = this.rules.text.exec(src)) {
        src = src.substring(cap[0].length);
        if (this.inRawBlock) {
          out += this.renderer.text(this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$3(cap[0])) : cap[0]);
        } else {
          out += this.renderer.text(escape$3(this.smartypants(cap[0])));
        }
        continue;
      }

      if (src) {
        throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
      }
    }

    return out;
  }

  static escapes(text) {
    return text ? text.replace(InlineLexer.rules._escapes, '$1') : text;
  }

  /**
   * Compile Link
   */
  outputLink(cap, link) {
    const href = link.href,
      title = link.title ? escape$3(link.title) : null;

    return cap[0].charAt(0) !== '!'
      ? this.renderer.link(href, title, this.output(cap[1]))
      : this.renderer.image(href, title, escape$3(cap[1]));
  }

  /**
   * Smartypants Transformations
   */
  smartypants(text) {
    if (!this.options.smartypants) return text;
    return text
      // em-dashes
      .replace(/---/g, '\u2014')
      // en-dashes
      .replace(/--/g, '\u2013')
      // opening singles
      .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
      // closing singles & apostrophes
      .replace(/'/g, '\u2019')
      // opening doubles
      .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
      // closing doubles
      .replace(/"/g, '\u201d')
      // ellipses
      .replace(/\.{3}/g, '\u2026');
  }

  /**
   * Mangle Links
   */
  mangle(text) {
    if (!this.options.mangle) return text;
    const l = text.length;
    let out = '',
      i = 0,
      ch;

    for (; i < l; i++) {
      ch = text.charCodeAt(i);
      if (Math.random() > 0.5) {
        ch = 'x' + ch.toString(16);
      }
      out += '&#' + ch + ';';
    }

    return out;
  }
};

/**
 * TextRenderer
 * returns only the textual part of the token
 */
var TextRenderer_1 = class TextRenderer {
  // no need for block level renderers
  strong(text) {
    return text;
  }

  em(text) {
    return text;
  }

  codespan(text) {
    return text;
  }

  del(text) {
    return text;
  }

  html(text) {
    return text;
  }

  text(text) {
    return text;
  }

  link(href, title, text) {
    return '' + text;
  }

  image(href, title, text) {
    return '' + text;
  }

  br() {
    return '';
  }
};

const { defaults: defaults$4 } = defaults;
const {
  merge: merge$2,
  unescape: unescape$1
} = helpers;

/**
 * Parsing & Compiling
 */
var Parser_1 = class Parser {
  constructor(options) {
    this.tokens = [];
    this.token = null;
    this.options = options || defaults$4;
    this.options.renderer = this.options.renderer || new Renderer_1();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.slugger = new Slugger_1();
  }

  /**
   * Static Parse Method
   */
  static parse(tokens, options) {
    const parser = new Parser(options);
    return parser.parse(tokens);
  };

  /**
   * Parse Loop
   */
  parse(tokens) {
    this.inline = new InlineLexer_1(tokens.links, this.options);
    // use an InlineLexer with a TextRenderer to extract pure text
    this.inlineText = new InlineLexer_1(
      tokens.links,
      merge$2({}, this.options, { renderer: new TextRenderer_1() })
    );
    this.tokens = tokens.reverse();

    let out = '';
    while (this.next()) {
      out += this.tok();
    }

    return out;
  };

  /**
   * Next Token
   */
  next() {
    this.token = this.tokens.pop();
    return this.token;
  };

  /**
   * Preview Next Token
   */
  peek() {
    return this.tokens[this.tokens.length - 1] || 0;
  };

  /**
   * Parse Text Tokens
   */
  parseText() {
    let body = this.token.text;

    while (this.peek().type === 'text') {
      body += '\n' + this.next().text;
    }

    return this.inline.output(body);
  };

  /**
   * Parse Current Token
   */
  tok() {
    let body = '';
    switch (this.token.type) {
      case 'space': {
        return '';
      }
      case 'hr': {
        return this.renderer.hr();
      }
      case 'heading': {
        return this.renderer.heading(
          this.inline.output(this.token.text),
          this.token.depth,
          unescape$1(this.inlineText.output(this.token.text)),
          this.slugger);
      }
      case 'code': {
        return this.renderer.code(this.token.text,
          this.token.lang,
          this.token.escaped);
      }
      case 'table': {
        let header = '',
          i,
          row,
          cell,
          j;

        // header
        cell = '';
        for (i = 0; i < this.token.header.length; i++) {
          cell += this.renderer.tablecell(
            this.inline.output(this.token.header[i]),
            { header: true, align: this.token.align[i] }
          );
        }
        header += this.renderer.tablerow(cell);

        for (i = 0; i < this.token.cells.length; i++) {
          row = this.token.cells[i];

          cell = '';
          for (j = 0; j < row.length; j++) {
            cell += this.renderer.tablecell(
              this.inline.output(row[j]),
              { header: false, align: this.token.align[j] }
            );
          }

          body += this.renderer.tablerow(cell);
        }
        return this.renderer.table(header, body);
      }
      case 'blockquote_start': {
        body = '';

        while (this.next().type !== 'blockquote_end') {
          body += this.tok();
        }

        return this.renderer.blockquote(body);
      }
      case 'list_start': {
        body = '';
        const ordered = this.token.ordered,
          start = this.token.start;

        while (this.next().type !== 'list_end') {
          body += this.tok();
        }

        return this.renderer.list(body, ordered, start);
      }
      case 'list_item_start': {
        body = '';
        const loose = this.token.loose;
        const checked = this.token.checked;
        const task = this.token.task;

        if (this.token.task) {
          if (loose) {
            if (this.peek().type === 'text') {
              const nextToken = this.peek();
              nextToken.text = this.renderer.checkbox(checked) + ' ' + nextToken.text;
            } else {
              this.tokens.push({
                type: 'text',
                text: this.renderer.checkbox(checked)
              });
            }
          } else {
            body += this.renderer.checkbox(checked);
          }
        }

        while (this.next().type !== 'list_item_end') {
          body += !loose && this.token.type === 'text'
            ? this.parseText()
            : this.tok();
        }
        return this.renderer.listitem(body, task, checked);
      }
      case 'html': {
        // TODO parse inline content if parameter markdown=1
        return this.renderer.html(this.token.text);
      }
      case 'paragraph': {
        return this.renderer.paragraph(this.inline.output(this.token.text));
      }
      case 'text': {
        return this.renderer.paragraph(this.parseText());
      }
      default: {
        const errMsg = 'Token with "' + this.token.type + '" type was not found.';
        if (this.options.silent) {
          console.log(errMsg);
        } else {
          throw new Error(errMsg);
        }
      }
    }
  };
};

const {
  merge: merge$3,
  checkSanitizeDeprecation: checkSanitizeDeprecation$1,
  escape: escape$4
} = helpers;
const {
  getDefaults,
  changeDefaults,
  defaults: defaults$5
} = defaults;

/**
 * Marked
 */
function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge$3({}, marked.defaults, opt || {});
    checkSanitizeDeprecation$1(opt);
    const highlight = opt.highlight;
    let tokens,
      pending,
      i = 0;

    try {
      tokens = Lexer_1.lex(src, opt);
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    const done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      let out;

      try {
        out = Parser_1.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    opt = merge$3({}, marked.defaults, opt || {});
    checkSanitizeDeprecation$1(opt);
    return Parser_1.parse(Lexer_1.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occurred:</p><pre>'
        + escape$4(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge$3(marked.defaults, opt);
  changeDefaults(marked.defaults);
  return marked;
};

marked.getDefaults = getDefaults;

marked.defaults = defaults$5;

/**
 * Expose
 */

marked.Parser = Parser_1;
marked.parser = Parser_1.parse;

marked.Renderer = Renderer_1;
marked.TextRenderer = TextRenderer_1;

marked.Lexer = Lexer_1;
marked.lexer = Lexer_1.lex;

marked.InlineLexer = InlineLexer_1;
marked.inlineLexer = InlineLexer_1.output;

marked.Slugger = Slugger_1;

marked.parse = marked;

var marked_1 = marked;

/* src\routes\article\_ArticleMeta.svelte generated by Svelte v3.36.0 */
const file = "src\\routes\\article\\_ArticleMeta.svelte";

// (27:1) {#if canModify}
function create_if_block(ctx) {
	let div0;
	let a;
	let i0;
	let t0;
	let a_href_value;
	let t1;
	let div1;
	let button;
	let i1;
	let t2;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div0 = element("div");
			a = element("a");
			i0 = element("i");
			t0 = text(" Edit Article");
			t1 = space();
			div1 = element("div");
			button = element("button");
			i1 = element("i");
			t2 = text(" Delete Article");
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			a = claim_element(div0_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			i0 = claim_element(a_nodes, "I", { class: true });
			children(i0).forEach(detach_dev);
			t0 = claim_text(a_nodes, " Edit Article");
			a_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			button = claim_element(div1_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			i1 = claim_element(button_nodes, "I", { class: true });
			children(i1).forEach(detach_dev);
			t2 = claim_text(button_nodes, " Delete Article");
			button_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(i0, "class", "ui icon edit");
			add_location(i0, file, 29, 4, 866);
			attr_dev(a, "href", a_href_value = "/editor/" + /*article*/ ctx[0].slug);
			attr_dev(a, "class", "ui secondary button");
			add_location(a, file, 28, 3, 799);
			attr_dev(div0, "class", "item");
			add_location(div0, file, 27, 2, 776);
			attr_dev(i1, "class", "ui icon trash");
			add_location(i1, file, 34, 4, 1010);
			attr_dev(button, "class", "ui button warning");
			add_location(button, file, 33, 3, 950);
			attr_dev(div1, "class", "item");
			add_location(div1, file, 32, 2, 927);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			append_dev(div0, a);
			append_dev(a, i0);
			append_dev(a, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, button);
			append_dev(button, i1);
			append_dev(button, t2);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*remove*/ ctx[2], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*article*/ 1 && a_href_value !== (a_href_value = "/editor/" + /*article*/ ctx[0].slug)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div1);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(27:1) {#if canModify}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div2;
	let div0;
	let a0;
	let img;
	let img_src_value;
	let img_alt_value;
	let a0_href_value;
	let t0;
	let div1;
	let a1;
	let t1_value = /*article*/ ctx[0].author.username + "";
	let t1;
	let a1_href_value;
	let t2;
	let t3_value = new Date(/*article*/ ctx[0].createdAt).toDateString() + "";
	let t3;
	let t4;
	let if_block = /*canModify*/ ctx[1] && create_if_block(ctx);

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			a0 = element("a");
			img = element("img");
			t0 = space();
			div1 = element("div");
			a1 = element("a");
			t1 = text(t1_value);
			t2 = space();
			t3 = text(t3_value);
			t4 = space();
			if (if_block) if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			a0 = claim_element(div0_nodes, "A", { href: true });
			var a0_nodes = children(a0);
			img = claim_element(a0_nodes, "IMG", { class: true, src: true, alt: true });
			a0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			a1 = claim_element(div1_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t1 = claim_text(a1_nodes, t1_value);
			a1_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			t3 = claim_text(div1_nodes, t3_value);
			div1_nodes.forEach(detach_dev);
			t4 = claim_space(div2_nodes);
			if (if_block) if_block.l(div2_nodes);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "class", "ui top aligned mini circular image");
			if (img.src !== (img_src_value = /*article*/ ctx[0].author.image)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*article*/ ctx[0].author.username);
			add_location(img, file, 18, 2, 440);
			attr_dev(a0, "href", a0_href_value = "/profile/@" + /*article*/ ctx[0].author.username);
			add_location(a0, file, 17, 1, 390);
			attr_dev(div0, "class", "item top aligned");
			add_location(div0, file, 16, 1, 357);
			attr_dev(a1, "href", a1_href_value = "/profile/@" + /*article*/ ctx[0].author.username);
			attr_dev(a1, "class", "ui sub header");
			add_location(a1, file, 22, 1, 597);
			attr_dev(div1, "class", "item top aligned");
			add_location(div1, file, 21, 1, 564);
			attr_dev(div2, "class", "ui horizontal list");
			add_location(div2, file, 15, 0, 322);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div0, a0);
			append_dev(a0, img);
			append_dev(div2, t0);
			append_dev(div2, div1);
			append_dev(div1, a1);
			append_dev(a1, t1);
			append_dev(div1, t2);
			append_dev(div1, t3);
			append_dev(div2, t4);
			if (if_block) if_block.m(div2, null);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*article*/ 1 && img.src !== (img_src_value = /*article*/ ctx[0].author.image)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*article*/ 1 && img_alt_value !== (img_alt_value = /*article*/ ctx[0].author.username)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if (dirty & /*article*/ 1 && a0_href_value !== (a0_href_value = "/profile/@" + /*article*/ ctx[0].author.username)) {
				attr_dev(a0, "href", a0_href_value);
			}

			if (dirty & /*article*/ 1 && t1_value !== (t1_value = /*article*/ ctx[0].author.username + "")) set_data_dev(t1, t1_value);

			if (dirty & /*article*/ 1 && a1_href_value !== (a1_href_value = "/profile/@" + /*article*/ ctx[0].author.username)) {
				attr_dev(a1, "href", a1_href_value);
			}

			if (dirty & /*article*/ 1 && t3_value !== (t3_value = new Date(/*article*/ ctx[0].createdAt).toDateString() + "")) set_data_dev(t3, t3_value);

			if (/*canModify*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div2, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			if (if_block) if_block.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let canModify;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("ArticleMeta", slots, []);
	let { article } = $$props;
	let { user } = $$props;

	async function remove() {
		await del(`/articles/${article.slug}`, user && user.token);
		goto("/");
	}

	const writable_props = ["article", "user"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ArticleMeta> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("article" in $$props) $$invalidate(0, article = $$props.article);
		if ("user" in $$props) $$invalidate(3, user = $$props.user);
	};

	$$self.$capture_state = () => ({
		goto,
		api,
		article,
		user,
		remove,
		canModify
	});

	$$self.$inject_state = $$props => {
		if ("article" in $$props) $$invalidate(0, article = $$props.article);
		if ("user" in $$props) $$invalidate(3, user = $$props.user);
		if ("canModify" in $$props) $$invalidate(1, canModify = $$props.canModify);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*user, article*/ 9) {
			 $$invalidate(1, canModify = user && article.author.username === user.username);
		}
	};

	return [article, canModify, remove, user];
}

class ArticleMeta extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { article: 0, user: 3 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ArticleMeta",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*article*/ ctx[0] === undefined && !("article" in props)) {
			console.warn("<ArticleMeta> was created without expected prop 'article'");
		}

		if (/*user*/ ctx[3] === undefined && !("user" in props)) {
			console.warn("<ArticleMeta> was created without expected prop 'user'");
		}
	}

	get article() {
		throw new Error("<ArticleMeta>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set article(value) {
		throw new Error("<ArticleMeta>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get user() {
		throw new Error("<ArticleMeta>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set user(value) {
		throw new Error("<ArticleMeta>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src\routes\article\_CommentInput.svelte generated by Svelte v3.36.0 */
const file$1 = "src\\routes\\article\\_CommentInput.svelte";

function create_fragment$1(ctx) {
	let form;
	let div;
	let textarea;
	let t0;
	let button;
	let i;
	let t1;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			form = element("form");
			div = element("div");
			textarea = element("textarea");
			t0 = space();
			button = element("button");
			i = element("i");
			t1 = text(" Post Comment");
			this.h();
		},
		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { class: true });
			var form_nodes = children(form);
			div = claim_element(form_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			textarea = claim_element(div_nodes, "TEXTAREA", { placeholder: true, rows: true });
			children(textarea).forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			t0 = claim_space(form_nodes);
			button = claim_element(form_nodes, "BUTTON", { type: true, class: true });
			var button_nodes = children(button);
			i = claim_element(button_nodes, "I", { class: true });
			children(i).forEach(detach_dev);
			t1 = claim_text(button_nodes, " Post Comment");
			button_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(textarea, "placeholder", "Write a comment...");
			attr_dev(textarea, "rows", "2");
			add_location(textarea, file$1, 23, 2, 528);
			attr_dev(div, "class", "field");
			add_location(div, file$1, 22, 1, 505);
			attr_dev(i, "class", "icon edit");
			add_location(i, file$1, 26, 2, 707);
			attr_dev(button, "type", "submit");
			attr_dev(button, "class", "ui green middle aligned labeled submit icon button");
			add_location(button, file$1, 25, 1, 622);
			attr_dev(form, "class", "ui form");
			add_location(form, file$1, 21, 0, 444);
		},
		m: function mount(target, anchor) {
			insert_dev(target, form, anchor);
			append_dev(form, div);
			append_dev(div, textarea);
			set_input_value(textarea, /*body*/ ctx[0]);
			append_dev(form, t0);
			append_dev(form, button);
			append_dev(button, i);
			append_dev(button, t1);

			if (!mounted) {
				dispose = [
					listen_dev(textarea, "input", /*textarea_input_handler*/ ctx[4]),
					listen_dev(form, "submit", prevent_default(/*submit*/ ctx[1]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*body*/ 1) {
				set_input_value(textarea, /*body*/ ctx[0]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(form);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("CommentInput", slots, []);
	let { slug } = $$props;
	let { user } = $$props;
	const dispatch = createEventDispatcher();
	let body = "";

	async function submit(event) {
		const response = await post(`articles/${slug}/comments`, { comment: { body } }, user && user.token);

		if (response.comment) {
			dispatch("commented", response);
			$$invalidate(0, body = "");
		}
	}

	const writable_props = ["slug", "user"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<CommentInput> was created with unknown prop '${key}'`);
	});

	function textarea_input_handler() {
		body = this.value;
		$$invalidate(0, body);
	}

	$$self.$$set = $$props => {
		if ("slug" in $$props) $$invalidate(2, slug = $$props.slug);
		if ("user" in $$props) $$invalidate(3, user = $$props.user);
	};

	$$self.$capture_state = () => ({
		createEventDispatcher,
		api,
		slug,
		user,
		dispatch,
		body,
		submit
	});

	$$self.$inject_state = $$props => {
		if ("slug" in $$props) $$invalidate(2, slug = $$props.slug);
		if ("user" in $$props) $$invalidate(3, user = $$props.user);
		if ("body" in $$props) $$invalidate(0, body = $$props.body);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [body, submit, slug, user, textarea_input_handler];
}

class CommentInput extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { slug: 2, user: 3 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "CommentInput",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*slug*/ ctx[2] === undefined && !("slug" in props)) {
			console.warn("<CommentInput> was created without expected prop 'slug'");
		}

		if (/*user*/ ctx[3] === undefined && !("user" in props)) {
			console.warn("<CommentInput> was created without expected prop 'user'");
		}
	}

	get slug() {
		throw new Error("<CommentInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set slug(value) {
		throw new Error("<CommentInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get user() {
		throw new Error("<CommentInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set user(value) {
		throw new Error("<CommentInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src\routes\article\_Comment.svelte generated by Svelte v3.36.0 */
const file$2 = "src\\routes\\article\\_Comment.svelte";

// (30:2) {#if user && comment.author.username === user.username}
function create_if_block$1(ctx) {
	let i0;
	let t;
	let i1;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			i0 = element("i");
			t = space();
			i1 = element("i");
			this.h();
		},
		l: function claim(nodes) {
			i0 = claim_element(nodes, "I", { class: true });
			children(i0).forEach(detach_dev);
			t = claim_space(nodes);
			i1 = claim_element(nodes, "I", { class: true });
			children(i1).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(i0, "class", "icon trash");
			add_location(i0, file$2, 30, 4, 843);
			attr_dev(i1, "class", "icon reply");
			add_location(i1, file$2, 31, 4, 895);
		},
		m: function mount(target, anchor) {
			insert_dev(target, i0, anchor);
			insert_dev(target, t, anchor);
			insert_dev(target, i1, anchor);

			if (!mounted) {
				dispose = [
					listen_dev(i0, "click", /*remove*/ ctx[2], false, false, false),
					listen_dev(i1, "click", /*remove*/ ctx[2], false, false, false)
				];

				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(i0);
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(i1);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$1.name,
		type: "if",
		source: "(30:2) {#if user && comment.author.username === user.username}",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let div3;
	let a0;
	let img;
	let img_src_value;
	let img_alt_value;
	let a0_href_value;
	let t0;
	let div2;
	let a1;
	let t1_value = /*comment*/ ctx[0].author.username + "";
	let t1;
	let a1_href_value;
	let t2;
	let div0;
	let span;
	let t3_value = new Date(/*comment*/ ctx[0].createdAt).toDateString() + "";
	let t3;
	let t4;
	let div1;
	let t5_value = /*comment*/ ctx[0].body + "";
	let t5;
	let t6;
	let if_block = /*user*/ ctx[1] && /*comment*/ ctx[0].author.username === /*user*/ ctx[1].username && create_if_block$1(ctx);

	const block = {
		c: function create() {
			div3 = element("div");
			a0 = element("a");
			img = element("img");
			t0 = space();
			div2 = element("div");
			a1 = element("a");
			t1 = text(t1_value);
			t2 = space();
			div0 = element("div");
			span = element("span");
			t3 = text(t3_value);
			t4 = space();
			div1 = element("div");
			t5 = text(t5_value);
			t6 = space();
			if (if_block) if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			a0 = claim_element(div3_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			img = claim_element(a0_nodes, "IMG", { src: true, alt: true });
			a0_nodes.forEach(detach_dev);
			t0 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			a1 = claim_element(div2_nodes, "A", { class: true, href: true });
			var a1_nodes = children(a1);
			t1 = claim_text(a1_nodes, t1_value);
			a1_nodes.forEach(detach_dev);
			t2 = claim_space(div2_nodes);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			span = claim_element(div0_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t3 = claim_text(span_nodes, t3_value);
			span_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t4 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			t5 = claim_text(div1_nodes, t5_value);
			div1_nodes.forEach(detach_dev);
			t6 = claim_space(div2_nodes);
			if (if_block) if_block.l(div2_nodes);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*comment*/ ctx[0].author.image)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*comment*/ ctx[0].author.username);
			add_location(img, file$2, 18, 1, 432);
			attr_dev(a0, "href", a0_href_value = "@" + /*comment*/ ctx[0].author.username);
			attr_dev(a0, "class", "avatar");
			add_location(a0, file$2, 17, 1, 377);
			attr_dev(a1, "class", "author");
			attr_dev(a1, "href", a1_href_value = "/@" + /*comment*/ ctx[0].author.username);
			add_location(a1, file$2, 22, 2, 534);
			attr_dev(span, "class", "date");
			add_location(span, file$2, 26, 3, 656);
			attr_dev(div0, "class", "metadata");
			add_location(div0, file$2, 25, 2, 629);
			attr_dev(div1, "class", "text");
			add_location(div1, file$2, 28, 2, 740);
			attr_dev(div2, "class", "content");
			add_location(div2, file$2, 21, 1, 509);
			attr_dev(div3, "class", "comment");
			add_location(div3, file$2, 16, 0, 353);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, a0);
			append_dev(a0, img);
			append_dev(div3, t0);
			append_dev(div3, div2);
			append_dev(div2, a1);
			append_dev(a1, t1);
			append_dev(div2, t2);
			append_dev(div2, div0);
			append_dev(div0, span);
			append_dev(span, t3);
			append_dev(div2, t4);
			append_dev(div2, div1);
			append_dev(div1, t5);
			append_dev(div2, t6);
			if (if_block) if_block.m(div2, null);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*comment*/ 1 && img.src !== (img_src_value = /*comment*/ ctx[0].author.image)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*comment*/ 1 && img_alt_value !== (img_alt_value = /*comment*/ ctx[0].author.username)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if (dirty & /*comment*/ 1 && a0_href_value !== (a0_href_value = "@" + /*comment*/ ctx[0].author.username)) {
				attr_dev(a0, "href", a0_href_value);
			}

			if (dirty & /*comment*/ 1 && t1_value !== (t1_value = /*comment*/ ctx[0].author.username + "")) set_data_dev(t1, t1_value);

			if (dirty & /*comment*/ 1 && a1_href_value !== (a1_href_value = "/@" + /*comment*/ ctx[0].author.username)) {
				attr_dev(a1, "href", a1_href_value);
			}

			if (dirty & /*comment*/ 1 && t3_value !== (t3_value = new Date(/*comment*/ ctx[0].createdAt).toDateString() + "")) set_data_dev(t3, t3_value);
			if (dirty & /*comment*/ 1 && t5_value !== (t5_value = /*comment*/ ctx[0].body + "")) set_data_dev(t5, t5_value);

			if (/*user*/ ctx[1] && /*comment*/ ctx[0].author.username === /*user*/ ctx[1].username) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block$1(ctx);
					if_block.c();
					if_block.m(div2, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			if (if_block) if_block.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Comment", slots, []);
	let { comment } = $$props;
	let { slug } = $$props;
	let { user } = $$props;
	const dispatch = createEventDispatcher();

	async function remove() {
		await del(`articles/${slug}/comments/${comment.id}`, user && user.token);
		dispatch("deleted");
	}

	const writable_props = ["comment", "slug", "user"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Comment> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("comment" in $$props) $$invalidate(0, comment = $$props.comment);
		if ("slug" in $$props) $$invalidate(3, slug = $$props.slug);
		if ("user" in $$props) $$invalidate(1, user = $$props.user);
	};

	$$self.$capture_state = () => ({
		createEventDispatcher,
		api,
		comment,
		slug,
		user,
		dispatch,
		remove
	});

	$$self.$inject_state = $$props => {
		if ("comment" in $$props) $$invalidate(0, comment = $$props.comment);
		if ("slug" in $$props) $$invalidate(3, slug = $$props.slug);
		if ("user" in $$props) $$invalidate(1, user = $$props.user);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [comment, user, remove, slug];
}

class Comment extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, { comment: 0, slug: 3, user: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Comment",
			options,
			id: create_fragment$2.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*comment*/ ctx[0] === undefined && !("comment" in props)) {
			console.warn("<Comment> was created without expected prop 'comment'");
		}

		if (/*slug*/ ctx[3] === undefined && !("slug" in props)) {
			console.warn("<Comment> was created without expected prop 'slug'");
		}

		if (/*user*/ ctx[1] === undefined && !("user" in props)) {
			console.warn("<Comment> was created without expected prop 'user'");
		}
	}

	get comment() {
		throw new Error("<Comment>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set comment(value) {
		throw new Error("<Comment>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get slug() {
		throw new Error("<Comment>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set slug(value) {
		throw new Error("<Comment>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get user() {
		throw new Error("<Comment>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set user(value) {
		throw new Error("<Comment>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src\routes\article\_CommentContainer.svelte generated by Svelte v3.36.0 */
const file$3 = "src\\routes\\article\\_CommentContainer.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i];
	child_ctx[8] = i;
	return child_ctx;
}

// (18:1) {:else}
function create_else_block(ctx) {
	let p;
	let a0;
	let t0;
	let t1;
	let a1;
	let t2;
	let t3;

	const block = {
		c: function create() {
			p = element("p");
			a0 = element("a");
			t0 = text("Sign in");
			t1 = text(" or ");
			a1 = element("a");
			t2 = text("sign up");
			t3 = text(" to add comments on this article.");
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			a0 = claim_element(p_nodes, "A", { href: true });
			var a0_nodes = children(a0);
			t0 = claim_text(a0_nodes, "Sign in");
			a0_nodes.forEach(detach_dev);
			t1 = claim_text(p_nodes, " or ");
			a1 = claim_element(p_nodes, "A", { href: true });
			var a1_nodes = children(a1);
			t2 = claim_text(a1_nodes, "sign up");
			a1_nodes.forEach(detach_dev);
			t3 = claim_text(p_nodes, " to add comments on this article.");
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a0, "href", "/login");
			add_location(a0, file$3, 19, 3, 481);
			attr_dev(a1, "href", "/register");
			add_location(a1, file$3, 19, 35, 513);
			add_location(p, file$3, 18, 2, 473);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, a0);
			append_dev(a0, t0);
			append_dev(p, t1);
			append_dev(p, a1);
			append_dev(a1, t2);
			append_dev(p, t3);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(18:1) {:else}",
		ctx
	});

	return block;
}

// (13:1) {#if user}
function create_if_block$2(ctx) {
	let div;
	let listerrors;
	let t;
	let commentinput;
	let current;

	listerrors = new ListErrors({
			props: { errors: /*errors*/ ctx[1] },
			$$inline: true
		});

	commentinput = new CommentInput({
			props: {
				slug: /*slug*/ ctx[2],
				user: /*user*/ ctx[3]
			},
			$$inline: true
		});

	commentinput.$on("commented", /*commented_handler*/ ctx[4]);

	const block = {
		c: function create() {
			div = element("div");
			create_component(listerrors.$$.fragment);
			t = space();
			create_component(commentinput.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			claim_component(listerrors.$$.fragment, div_nodes);
			t = claim_space(div_nodes);
			claim_component(commentinput.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(div, file$3, 13, 2, 308);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(listerrors, div, null);
			append_dev(div, t);
			mount_component(commentinput, div, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const listerrors_changes = {};
			if (dirty & /*errors*/ 2) listerrors_changes.errors = /*errors*/ ctx[1];
			listerrors.$set(listerrors_changes);
			const commentinput_changes = {};
			if (dirty & /*slug*/ 4) commentinput_changes.slug = /*slug*/ ctx[2];
			if (dirty & /*user*/ 8) commentinput_changes.user = /*user*/ ctx[3];
			commentinput.$set(commentinput_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(listerrors.$$.fragment, local);
			transition_in(commentinput.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(listerrors.$$.fragment, local);
			transition_out(commentinput.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(listerrors);
			destroy_component(commentinput);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$2.name,
		type: "if",
		source: "(13:1) {#if user}",
		ctx
	});

	return block;
}

// (24:1) {#each comments as comment, i (comment.id)}
function create_each_block(key_1, ctx) {
	let first;
	let comment;
	let current;

	function deleted_handler() {
		return /*deleted_handler*/ ctx[5](/*i*/ ctx[8]);
	}

	comment = new Comment({
			props: {
				comment: /*comment*/ ctx[6],
				slug: /*slug*/ ctx[2],
				user: /*user*/ ctx[3]
			},
			$$inline: true
		});

	comment.$on("deleted", deleted_handler);

	const block = {
		key: key_1,
		first: null,
		c: function create() {
			first = empty();
			create_component(comment.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			first = empty();
			claim_component(comment.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			this.first = first;
		},
		m: function mount(target, anchor) {
			insert_dev(target, first, anchor);
			mount_component(comment, target, anchor);
			current = true;
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			const comment_changes = {};
			if (dirty & /*comments*/ 1) comment_changes.comment = /*comment*/ ctx[6];
			if (dirty & /*slug*/ 4) comment_changes.slug = /*slug*/ ctx[2];
			if (dirty & /*user*/ 8) comment_changes.user = /*user*/ ctx[3];
			comment.$set(comment_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(comment.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(comment.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(first);
			destroy_component(comment, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(24:1) {#each comments as comment, i (comment.id)}",
		ctx
	});

	return block;
}

function create_fragment$3(ctx) {
	let div;
	let current_block_type_index;
	let if_block;
	let t;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let current;
	const if_block_creators = [create_if_block$2, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*user*/ ctx[3]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	let each_value = /*comments*/ ctx[0];
	validate_each_argument(each_value);
	const get_key = ctx => /*comment*/ ctx[6].id;
	validate_each_keys(ctx, each_value, get_each_context, get_key);

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	const block = {
		c: function create() {
			div = element("div");
			if_block.c();
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if_block.l(div_nodes);
			t = claim_space(div_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "ui comments");
			add_location(div, file$3, 11, 0, 266);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			if_blocks[current_block_type_index].m(div, null);
			append_dev(div, t);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(div, t);
			}

			if (dirty & /*comments, slug, user*/ 13) {
				each_value = /*comments*/ ctx[0];
				validate_each_argument(each_value);
				group_outros();
				validate_each_keys(ctx, each_value, get_each_context, get_key);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div, outro_and_destroy_block, create_each_block, null, get_each_context);
				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if_blocks[current_block_type_index].d();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$3.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$3($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("CommentContainer", slots, []);
	let { comments } = $$props;
	let { errors } = $$props;
	let { slug } = $$props;
	let { user } = $$props;
	const writable_props = ["comments", "errors", "slug", "user"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<CommentContainer> was created with unknown prop '${key}'`);
	});

	const commented_handler = ({ detail }) => $$invalidate(0, comments = [detail.comment, ...comments]);
	const deleted_handler = i => $$invalidate(0, comments = comments.filter((_, index) => i !== index));

	$$self.$$set = $$props => {
		if ("comments" in $$props) $$invalidate(0, comments = $$props.comments);
		if ("errors" in $$props) $$invalidate(1, errors = $$props.errors);
		if ("slug" in $$props) $$invalidate(2, slug = $$props.slug);
		if ("user" in $$props) $$invalidate(3, user = $$props.user);
	};

	$$self.$capture_state = () => ({
		ListErrors,
		CommentInput,
		Comment,
		comments,
		errors,
		slug,
		user
	});

	$$self.$inject_state = $$props => {
		if ("comments" in $$props) $$invalidate(0, comments = $$props.comments);
		if ("errors" in $$props) $$invalidate(1, errors = $$props.errors);
		if ("slug" in $$props) $$invalidate(2, slug = $$props.slug);
		if ("user" in $$props) $$invalidate(3, user = $$props.user);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [comments, errors, slug, user, commented_handler, deleted_handler];
}

class CommentContainer extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, { comments: 0, errors: 1, slug: 2, user: 3 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "CommentContainer",
			options,
			id: create_fragment$3.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*comments*/ ctx[0] === undefined && !("comments" in props)) {
			console.warn("<CommentContainer> was created without expected prop 'comments'");
		}

		if (/*errors*/ ctx[1] === undefined && !("errors" in props)) {
			console.warn("<CommentContainer> was created without expected prop 'errors'");
		}

		if (/*slug*/ ctx[2] === undefined && !("slug" in props)) {
			console.warn("<CommentContainer> was created without expected prop 'slug'");
		}

		if (/*user*/ ctx[3] === undefined && !("user" in props)) {
			console.warn("<CommentContainer> was created without expected prop 'user'");
		}
	}

	get comments() {
		throw new Error("<CommentContainer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set comments(value) {
		throw new Error("<CommentContainer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get errors() {
		throw new Error("<CommentContainer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set errors(value) {
		throw new Error("<CommentContainer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get slug() {
		throw new Error("<CommentContainer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set slug(value) {
		throw new Error("<CommentContainer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get user() {
		throw new Error("<CommentContainer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set user(value) {
		throw new Error("<CommentContainer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src\routes\article\[slug].svelte generated by Svelte v3.36.0 */
const file$4 = "src\\routes\\article\\[slug].svelte";

function get_each_context$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

// (50:3) {#each article.tagList as tag}
function create_each_block$1(ctx) {
	let div1;
	let div0;
	let t0_value = /*tag*/ ctx[7] + "";
	let t0;
	let t1;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			t0 = text(t0_value);
			t1 = space();
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, t0_value);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div1_nodes);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "ui tag label");
			add_location(div0, file$4, 51, 5, 1310);
			attr_dev(div1, "class", "item");
			add_location(div1, file$4, 50, 4, 1285);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, t0);
			append_dev(div1, t1);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*article*/ 1 && t0_value !== (t0_value = /*tag*/ ctx[7] + "")) set_data_dev(t0, t0_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$1.name,
		type: "each",
		source: "(50:3) {#each article.tagList as tag}",
		ctx
	});

	return block;
}

function create_fragment$4(ctx) {
	let title_value;
	let t0;
	let div8;
	let div1;
	let div0;
	let t1_value = /*article*/ ctx[0].title + "";
	let t1;
	let t2;
	let articlemeta;
	let t3;
	let div7;
	let div2;
	let t4;
	let div4;
	let div3;
	let t5;
	let hr;
	let t6;
	let div5;
	let t7;
	let div6;
	let commentcontainer;
	let current;
	document.title = title_value = /*article*/ ctx[0].title;

	articlemeta = new ArticleMeta({
			props: {
				article: /*article*/ ctx[0],
				user: /*$session*/ ctx[4].user
			},
			$$inline: true
		});

	let each_value = /*article*/ ctx[0].tagList;
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
	}

	commentcontainer = new CommentContainer({
			props: {
				slug: /*slug*/ ctx[1],
				comments: /*comments*/ ctx[2],
				user: /*$session*/ ctx[4].user,
				errors: /*commentErrors*/ ctx[6]
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = space();
			div8 = element("div");
			div1 = element("div");
			div0 = element("div");
			t1 = text(t1_value);
			t2 = space();
			create_component(articlemeta.$$.fragment);
			t3 = space();
			div7 = element("div");
			div2 = element("div");
			t4 = space();
			div4 = element("div");
			div3 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t5 = space();
			hr = element("hr");
			t6 = space();
			div5 = element("div");
			t7 = space();
			div6 = element("div");
			create_component(commentcontainer.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-3256wk\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div8 = claim_element(nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div1 = claim_element(div8_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t1 = claim_text(div0_nodes, t1_value);
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			claim_component(articlemeta.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			t3 = claim_space(div8_nodes);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div2 = claim_element(div7_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div2_nodes.forEach(detach_dev);
			t4 = claim_space(div7_nodes);
			div4 = claim_element(div7_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div3_nodes);
			}

			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t5 = claim_space(div7_nodes);
			hr = claim_element(div7_nodes, "HR", {});
			t6 = claim_space(div7_nodes);
			div5 = claim_element(div7_nodes, "DIV", { class: true });
			children(div5).forEach(detach_dev);
			t7 = claim_space(div7_nodes);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			claim_component(commentcontainer.$$.fragment, div6_nodes);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "ui header huge");
			add_location(div0, file$4, 40, 3, 943);
			attr_dev(div1, "class", "ui column");
			add_location(div1, file$4, 39, 1, 915);
			attr_dev(div2, "class", "row");
			add_location(div2, file$4, 45, 4, 1088);
			attr_dev(div3, "class", "ui horizontal list");
			add_location(div3, file$4, 48, 2, 1212);
			attr_dev(div4, "class", "row");
			add_location(div4, file$4, 47, 2, 1191);
			add_location(hr, file$4, 59, 2, 1412);
			attr_dev(div5, "class", "article-actions");
			add_location(div5, file$4, 61, 2, 1424);
			attr_dev(div6, "class", "row");
			add_location(div6, file$4, 63, 2, 1465);
			attr_dev(div7, "class", "ui container");
			add_location(div7, file$4, 44, 1, 1056);
			attr_dev(div8, "class", "ui one column grid container");
			add_location(div8, file$4, 38, 0, 870);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div8, anchor);
			append_dev(div8, div1);
			append_dev(div1, div0);
			append_dev(div0, t1);
			append_dev(div1, t2);
			mount_component(articlemeta, div1, null);
			append_dev(div8, t3);
			append_dev(div8, div7);
			append_dev(div7, div2);
			div2.innerHTML = /*markup*/ ctx[3];
			append_dev(div7, t4);
			append_dev(div7, div4);
			append_dev(div4, div3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div3, null);
			}

			append_dev(div7, t5);
			append_dev(div7, hr);
			append_dev(div7, t6);
			append_dev(div7, div5);
			append_dev(div7, t7);
			append_dev(div7, div6);
			mount_component(commentcontainer, div6, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if ((!current || dirty & /*article*/ 1) && title_value !== (title_value = /*article*/ ctx[0].title)) {
				document.title = title_value;
			}

			if ((!current || dirty & /*article*/ 1) && t1_value !== (t1_value = /*article*/ ctx[0].title + "")) set_data_dev(t1, t1_value);
			const articlemeta_changes = {};
			if (dirty & /*article*/ 1) articlemeta_changes.article = /*article*/ ctx[0];
			if (dirty & /*$session*/ 16) articlemeta_changes.user = /*$session*/ ctx[4].user;
			articlemeta.$set(articlemeta_changes);
			if (!current || dirty & /*markup*/ 8) div2.innerHTML = /*markup*/ ctx[3];
			if (dirty & /*article*/ 1) {
				each_value = /*article*/ ctx[0].tagList;
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$1(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block$1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div3, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			const commentcontainer_changes = {};
			if (dirty & /*slug*/ 2) commentcontainer_changes.slug = /*slug*/ ctx[1];
			if (dirty & /*comments*/ 4) commentcontainer_changes.comments = /*comments*/ ctx[2];
			if (dirty & /*$session*/ 16) commentcontainer_changes.user = /*$session*/ ctx[4].user;
			commentcontainer.$set(commentcontainer_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(articlemeta.$$.fragment, local);
			transition_in(commentcontainer.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(articlemeta.$$.fragment, local);
			transition_out(commentcontainer.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div8);
			destroy_component(articlemeta);
			destroy_each(each_blocks, detaching);
			destroy_component(commentcontainer);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$4.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload({ params }) {
	const { slug } = params;
	const { article } = await get(`articles/${params.slug}`, null);
	return { article, slug };
}

function instance$4($$self, $$props, $$invalidate) {
	let markup;
	let $session;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("U5Bslugu5D", slots, []);
	let { article } = $$props;
	let { slug } = $$props;
	const { session } = stores$1();
	validate_store(session, "session");
	component_subscribe($$self, session, value => $$invalidate(4, $session = value));
	let commentErrors, comments = []; // we'll lazy-load these in onMount

	onMount(() => {
		get(`articles/${slug}/comments`).then(res => {
			$$invalidate(2, comments = res.comments);
		});
	});

	const writable_props = ["article", "slug"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("article" in $$props) $$invalidate(0, article = $$props.article);
		if ("slug" in $$props) $$invalidate(1, slug = $$props.slug);
	};

	$$self.$capture_state = () => ({
		api,
		preload,
		onMount,
		stores: stores$1,
		marked: marked_1,
		ArticleMeta,
		CommentContainer,
		article,
		slug,
		session,
		commentErrors,
		comments,
		markup,
		$session
	});

	$$self.$inject_state = $$props => {
		if ("article" in $$props) $$invalidate(0, article = $$props.article);
		if ("slug" in $$props) $$invalidate(1, slug = $$props.slug);
		if ("commentErrors" in $$props) $$invalidate(6, commentErrors = $$props.commentErrors);
		if ("comments" in $$props) $$invalidate(2, comments = $$props.comments);
		if ("markup" in $$props) $$invalidate(3, markup = $$props.markup);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*article*/ 1) {
			 $$invalidate(3, markup = marked_1(article.body));
		}
	};

	return [article, slug, comments, markup, $session, session, commentErrors];
}

class U5Bslugu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$4, create_fragment$4, safe_not_equal, { article: 0, slug: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bslugu5D",
			options,
			id: create_fragment$4.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*article*/ ctx[0] === undefined && !("article" in props)) {
			console.warn("<U5Bslugu5D> was created without expected prop 'article'");
		}

		if (/*slug*/ ctx[1] === undefined && !("slug" in props)) {
			console.warn("<U5Bslugu5D> was created without expected prop 'slug'");
		}
	}

	get article() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set article(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get slug() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set slug(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bslugu5D;
export { preload };
