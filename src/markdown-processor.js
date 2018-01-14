import remark from 'remark'
import reactRenderer from 'remark-react'
import RemarkLowlight from 'remark-react-lowlight'

const lang2module = {
  '1c': require('highlight.js/lib/languages/1c'),
  'accesslog': require('highlight.js/lib/languages/accesslog'),
  'actionscript': require('highlight.js/lib/languages/actionscript'),
  'ada': require('highlight.js/lib/languages/ada'),
  'apache': require('highlight.js/lib/languages/apache'),
  'applescript': require('highlight.js/lib/languages/applescript'),
  'c++': require('highlight.js/lib/languages/cpp'),
  'cpp': require('highlight.js/lib/languages/cpp'),
  'arduino': require('highlight.js/lib/languages/arduino'),
  'armasm': require('highlight.js/lib/languages/armasm'),
  'xml': require('highlight.js/lib/languages/xml'),
  'html': require('highlight.js/lib/languages/xml'),
  'asciidoc': require('highlight.js/lib/languages/asciidoc'),
  'aspectj': require('highlight.js/lib/languages/aspectj'),
  'autohotkey': require('highlight.js/lib/languages/autohotkey'),
  'autoit': require('highlight.js/lib/languages/autoit'),
  'avrasm': require('highlight.js/lib/languages/avrasm'),
  'axapta': require('highlight.js/lib/languages/axapta'),
  'sh': require('highlight.js/lib/languages/bash'),
  'shell': require('highlight.js/lib/languages/bash'),
  'bash': require('highlight.js/lib/languages/bash'),
  'basic': require('highlight.js/lib/languages/basic'),
  'bnf': require('highlight.js/lib/languages/bnf'),
  'brainfuck': require('highlight.js/lib/languages/brainfuck'),
  'cal': require('highlight.js/lib/languages/cal'),
  'capnproto': require('highlight.js/lib/languages/capnproto'),
  'ceylon': require('highlight.js/lib/languages/ceylon'),
  'clojure': require('highlight.js/lib/languages/clojure'),
  'clojure-repl': require('highlight.js/lib/languages/clojure-repl'),
  'cmake': require('highlight.js/lib/languages/cmake'),
  'coffee': require('highlight.js/lib/languages/coffeescript'),
  'coffeescript': require('highlight.js/lib/languages/coffeescript'),
  'coq': require('highlight.js/lib/languages/coq'),
  'cos': require('highlight.js/lib/languages/cos'),
  'crmsh': require('highlight.js/lib/languages/crmsh'),
  'crystal': require('highlight.js/lib/languages/crystal'),
  'cs': require('highlight.js/lib/languages/cs'),
  'csp': require('highlight.js/lib/languages/csp'),
  'css': require('highlight.js/lib/languages/css'),
  'd': require('highlight.js/lib/languages/d'),
  'markdown': require('highlight.js/lib/languages/markdown'),
  'dart': require('highlight.js/lib/languages/dart'),
  'delphi': require('highlight.js/lib/languages/delphi'),
  'diff': require('highlight.js/lib/languages/diff'),
  'django': require('highlight.js/lib/languages/django'),
  'dns': require('highlight.js/lib/languages/dns'),
  'dockerfile': require('highlight.js/lib/languages/dockerfile'),
  'dos': require('highlight.js/lib/languages/dos'),
  'dsconfig': require('highlight.js/lib/languages/dsconfig'),
  'dts': require('highlight.js/lib/languages/dts'),
  'dust': require('highlight.js/lib/languages/dust'),
  'elixir': require('highlight.js/lib/languages/elixir'),
  'elm': require('highlight.js/lib/languages/elm'),
  'ruby': require('highlight.js/lib/languages/ruby'),
  'erb': require('highlight.js/lib/languages/erb'),
  'erlang-repl': require('highlight.js/lib/languages/erlang-repl'),
  'erlang': require('highlight.js/lib/languages/erlang'),
  'excel': require('highlight.js/lib/languages/excel'),
  'fix': require('highlight.js/lib/languages/fix'),
  'fortran': require('highlight.js/lib/languages/fortran'),
  'fsharp': require('highlight.js/lib/languages/fsharp'),
  'gams': require('highlight.js/lib/languages/gams'),
  'gauss': require('highlight.js/lib/languages/gauss'),
  'gcode': require('highlight.js/lib/languages/gcode'),
  'gherkin': require('highlight.js/lib/languages/gherkin'),
  'glsl': require('highlight.js/lib/languages/glsl'),
  'go': require('highlight.js/lib/languages/go'),
  'golo': require('highlight.js/lib/languages/golo'),
  'gradle': require('highlight.js/lib/languages/gradle'),
  'groovy': require('highlight.js/lib/languages/groovy'),
  'haml': require('highlight.js/lib/languages/haml'),
  'handlebars': require('highlight.js/lib/languages/handlebars'),
  'haskell': require('highlight.js/lib/languages/haskell'),
  'haxe': require('highlight.js/lib/languages/haxe'),
  'hsp': require('highlight.js/lib/languages/hsp'),
  'htmlbars': require('highlight.js/lib/languages/htmlbars'),
  'http': require('highlight.js/lib/languages/http'),
  'inform7': require('highlight.js/lib/languages/inform7'),
  'ini': require('highlight.js/lib/languages/ini'),
  'irpf90': require('highlight.js/lib/languages/irpf90'),
  'java': require('highlight.js/lib/languages/java'),
  'js': require('highlight.js/lib/languages/javascript'),
  'javascript': require('highlight.js/lib/languages/javascript'),
  'json': require('highlight.js/lib/languages/json'),
  'julia': require('highlight.js/lib/languages/julia'),
  'kotlin': require('highlight.js/lib/languages/kotlin'),
  'lasso': require('highlight.js/lib/languages/lasso'),
  'ldif': require('highlight.js/lib/languages/ldif'),
  'less': require('highlight.js/lib/languages/less'),
  'lisp': require('highlight.js/lib/languages/lisp'),
  'livecodeserver': require('highlight.js/lib/languages/livecodeserver'),
  'livescript': require('highlight.js/lib/languages/livescript'),
  'lsl': require('highlight.js/lib/languages/lsl'),
  'lua': require('highlight.js/lib/languages/lua'),
  'makefile': require('highlight.js/lib/languages/makefile'),
  'mathematica': require('highlight.js/lib/languages/mathematica'),
  'matlab': require('highlight.js/lib/languages/matlab'),
  'maxima': require('highlight.js/lib/languages/maxima'),
  'mel': require('highlight.js/lib/languages/mel'),
  'mercury': require('highlight.js/lib/languages/mercury'),
  'mipsasm': require('highlight.js/lib/languages/mipsasm'),
  'mizar': require('highlight.js/lib/languages/mizar'),
  'perl': require('highlight.js/lib/languages/perl'),
  'mojolicious': require('highlight.js/lib/languages/mojolicious'),
  'monkey': require('highlight.js/lib/languages/monkey'),
  'moonscript': require('highlight.js/lib/languages/moonscript'),
  'nginx': require('highlight.js/lib/languages/nginx'),
  'nimrod': require('highlight.js/lib/languages/nimrod'),
  'nix': require('highlight.js/lib/languages/nix'),
  'nsis': require('highlight.js/lib/languages/nsis'),
  'objectivec': require('highlight.js/lib/languages/objectivec'),
  'ocaml': require('highlight.js/lib/languages/ocaml'),
  'openscad': require('highlight.js/lib/languages/openscad'),
  'oxygene': require('highlight.js/lib/languages/oxygene'),
  'parser3': require('highlight.js/lib/languages/parser3'),
  'pf': require('highlight.js/lib/languages/pf'),
  'php': require('highlight.js/lib/languages/php'),
  'pony': require('highlight.js/lib/languages/pony'),
  'powershell': require('highlight.js/lib/languages/powershell'),
  'processing': require('highlight.js/lib/languages/processing'),
  'profile': require('highlight.js/lib/languages/profile'),
  'prolog': require('highlight.js/lib/languages/prolog'),
  'protobuf': require('highlight.js/lib/languages/protobuf'),
  'puppet': require('highlight.js/lib/languages/puppet'),
  'purebasic': require('highlight.js/lib/languages/purebasic'),
  'python': require('highlight.js/lib/languages/python'),
  'q': require('highlight.js/lib/languages/q'),
  'qml': require('highlight.js/lib/languages/qml'),
  'r': require('highlight.js/lib/languages/r'),
  'rib': require('highlight.js/lib/languages/rib'),
  'roboconf': require('highlight.js/lib/languages/roboconf'),
  'rsl': require('highlight.js/lib/languages/rsl'),
  'ruleslanguage': require('highlight.js/lib/languages/ruleslanguage'),
  'rust': require('highlight.js/lib/languages/rust'),
  'scala': require('highlight.js/lib/languages/scala'),
  'scheme': require('highlight.js/lib/languages/scheme'),
  'scilab': require('highlight.js/lib/languages/scilab'),
  'scss': require('highlight.js/lib/languages/scss'),
  'smali': require('highlight.js/lib/languages/smali'),
  'smalltalk': require('highlight.js/lib/languages/smalltalk'),
  'sml': require('highlight.js/lib/languages/sml'),
  'sqf': require('highlight.js/lib/languages/sqf'),
  'sql': require('highlight.js/lib/languages/sql'),
  'stan': require('highlight.js/lib/languages/stan'),
  'stata': require('highlight.js/lib/languages/stata'),
  'step21': require('highlight.js/lib/languages/step21'),
  'stylus': require('highlight.js/lib/languages/stylus'),
  'swift': require('highlight.js/lib/languages/swift'),
  'taggerscript': require('highlight.js/lib/languages/taggerscript'),
  'yaml': require('highlight.js/lib/languages/yaml'),
  'tap': require('highlight.js/lib/languages/tap'),
  'tcl': require('highlight.js/lib/languages/tcl'),
  'tex': require('highlight.js/lib/languages/tex'),
  'thrift': require('highlight.js/lib/languages/thrift'),
  'tp': require('highlight.js/lib/languages/tp'),
  'twig': require('highlight.js/lib/languages/twig'),
  'typescript': require('highlight.js/lib/languages/typescript'),
  'vala': require('highlight.js/lib/languages/vala'),
  'vbnet': require('highlight.js/lib/languages/vbnet'),
  'vbscript': require('highlight.js/lib/languages/vbscript'),
  'vbscript-html': require('highlight.js/lib/languages/vbscript-html'),
  'verilog': require('highlight.js/lib/languages/verilog'),
  'vhdl': require('highlight.js/lib/languages/vhdl'),
  'vim': require('highlight.js/lib/languages/vim'),
  'x86asm': require('highlight.js/lib/languages/x86asm'),
  'xl': require('highlight.js/lib/languages/xl'),
  'xquery': require('highlight.js/lib/languages/xquery'),
  'zephir': require('highlight.js/lib/languages/zephir'),
}

const processor = remark().use(reactRenderer, {
  sanitize: false,
  remarkReactComponents: {
    code: RemarkLowlight(lang2module)
  }
})

export default processor
