---
tags:
  - Tier-0
  - Easy
  - Defensive
  - HackTheBox
  - JavaScript-Deobfuscation
---
[[Bug Bounty Hunting Path]]

---
# Introduction
- Locating JavaScript code in HTML
- Intro to Code Obfuscation
- How to Deobfuscate JavaScript code
- How to decode encoded messages
- Basic Code Analysis
- Sending basic HTTP requests
# Source Code
HTML determines the website's fields and parameters. CSS determines the pages design. JavaScript is used to perform any functions necessary to run the website.
## Pwnbox Code
```html
<!DOCTYPE html>

<head>
    <title>Secret Serial Generator</title>
    <style>
        *,
        html {
            margin: 0;
            padding: 0;
            border: 0;
        }

        html {
            width: 100%;
            height: 100%;
        }

        body {
            width: 100%;
            height: 100%;
            position: relative;
            background-color: #6fb3eb;
        }

        .center {
            width: 100%;
            height: 50%;
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-family: "Helvetica", Helvetica, sans-serif;
            text-align: center;
        }

        h1 {
            font-size: 144px;
        }

        p {
            font-size: 64px;
        }
    </style>
    <script src="secret.js"></script>
    <!-- HTB{4lw4y5_r34d_7h3_50urc3} -->
</head>

<body>
    <div class="center">
        <h1>Secret Serial Generator</h1>
        <p>This page generates secret serials!</p>
    </div>
</body>

</html>
```
# HTML
>[!quote]
>The HTML source code can hold various information, such as comments, to further facilitate a better understanding of the code. Developers may leave sensitive information, which can be further taken advantage of. It is worth reading through the HTML comments.

```html
<!DOCTYPE html>

<head>
    <title>Secret Serial Generator</title>
    <!-- HTB{4lw4y5_r34d_7h3_50urc3} -->
</head>

<body>
    <div class="center">
        <h1>Secret Serial Generator</h1>
        <p>This page generates secret serials!</p>
    </div>
</body>

</html>
```
# CSS
>[!quote]
>`CSS` code is either defined `internally` within the same `HTML` file between `<style>` elements, or defined `externally` in a separate `.css` file and referenced within the `HTML` code.

```css
<style>
	*,
	html {
		margin: 0;
		padding: 0;
		border: 0;
	}

	html {
		width: 100%;
		height: 100%;
	}

	body {
		width: 100%;
		height: 100%;
		position: relative;
		background-color: #6fb3eb;
	}

	.center {
		width: 100%;
		height: 50%;
		margin: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
		font-family: "Helvetica", Helvetica, sans-serif;
		text-align: center;
	}

	h1 {
		font-size: 144px;
	}

	p {
		font-size: 64px;
	}
</style>
```
# JavaScript
>[!quote]
>The same concept applies to `JavaScript`. It can be internally written between `<script>` elements or written into a separate `.js` file and referenced within the `HTML` code.

```html
<script src="secret.js"></script>
```
<sub>Secret.js reference in HTML</sub>

Clicking on the reference in the source code opens the relevant JavaScript file. In the lab sake `secret.js`:

```javascript
eval(function (p, a, c, k, e, d) { e = function (c) { return c.toString(36) }; if (!''.replace(/^/, String)) { while (c--) { d[c.toString(a)] = k[c] || c.toString(a) } k = [function (e) { return d[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) { if (k[c]) { p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]) } } return p }('g 4(){0 5="6{7!}";0 1=8 a();0 2="/9.c";1.d("e",2,f);1.b(3)}', 17, 17, 'var|xhr|url|null|generateSerial|flag|HTB|1_4m_7h3_53r14l_g3n3r470r|new|serial|XMLHttpRequest|send|php|open|POST|true|function'.split('|'), 0, {}))
```
<sub>secret.js obfuscated code</sub>
# Code Obfuscation
Before being able to deobfuscate code, obfuscation must be learned, especially if a custom obfuscator was utilised.
## What is Obfuscation
Typically performed with an obfuscation tool, used to make scripts more difficult to humans but allows functions to still run exactly the same technically. 

The obfuscation tool takes the code as an input and attempts to rewrite the code in a way that is difficult to read depending on design.

[Basic JavaScript Obfuscator](http://beautifytools.com/javascript-obfuscator.php)

```javascript
function generateSerial(){var flag="HTB{1_4m_7h3_53r14l_g3n3r470r!}";var xhr=new XMLHttpRequest();var url="/serial.php";xhr.open("POST",url,true);xhr.send(null)}
```
<sub>Deobfuscated JavaScript code</sub>

Python and PHP usually reside on the server-side while JavaScript is used within browsers at the client-side, and the code is sent to the user and executed in cleartext.
# Use Cases
Many common reasons:
- Hide original code to avoid being refused or copied without permission
- Obfuscating the code makes it harder to reverse engineer the original functionality
- Provides another layer of security when handling authentication or encryption to prevent attacks on vulnerabilities.
- Common for attackers to obfuscate their malicious scripts to prevent ID/P (intrusion detect and prevention) systems from detecting the scripts.

>[!important]
>`It must be noted that doing authentication or encryption on the client-side is not recommended, as code is more prone to attacks this way.`
# Basic JavaScript Obfuscation
There are numerous tools in various languages designed to do automated code obfuscation and many online tools exist to do so though both malicious actors and professional developers develop their own obfuscation tools to make it more difficult to deobfuscate.

[JSConsole](https://jsconsole.com)
## Minifying JavaScript Code
A common way to reduce readability is to minify the JavaScript which is into a typically very long single line.

>[!note]
>Code Minification is more useful on longer code as code only consisting of a single line would not look much different.

[JavaScript-Minifier](https://www.toptal.com/developers/javascript-minifier) usually minified JavaScript code is saved in the extension `.min.js`. Which can be run in JSConsole to verify it runs as expected.

>[!quote]
>Note: Code minification is not exclusive to JavaScript, and can be applied to many other languages, as can be seen on [javascript-minifier](https://javascript-minifier.com/).
## Packing JavaScript Code
```javascript
eval(function(p,a,c,k,e,d){e=function(c){return c};if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('5.4(\'3 2 1 0\');',6,6,'Module|Deobfuscation|JavaScript|HTB|log|console'.split('|'),0,{}))
```
<sub>JavaScript Obfuscation Packing</sub>

A `packer` obfuscation tool attempts to convert all words and symbols of the code into a list or dictionary and then refers to them using the (p,a,c,k,e,d) function to re-build the original code during execution. `(p,a,c,k,e,d)` can be different from packer to packer however, it usually contains a certain order in which the words and symbols of the original code were packed to know how to order them during execution.

>[!quote]
>While a packer does a great job reducing the code's readability, we can still see its main strings written in cleartext, which may reveal some of its functionality. This is why we may want to look for better ways to obfuscate our code.
# Advanced Obfuscation
Previous obfuscation methods still contains strings in cleartext, which may reveal its original functionality.

[obfuscator io](https://obfuscator.io).

```javascript
var _0xab0cdc=_0x39a2;(function(_0x51ad93,_0x7810b1){var _0x140842=_0x39a2,_0x40f91c=_0x51ad93();while(!![]){try{var _0x23ea9b=-parseInt(_0x140842(0x1a8))/0x1*(parseInt(_0x140842(0x1a4))/0x2)+-parseInt(_0x140842(0x1a5))/0x3*(-parseInt(_0x140842(0x1a3))/0x4)+-parseInt(_0x140842(0x19d))/0x5+parseInt(_0x140842(0x19f))/0x6*(-parseInt(_0x140842(0x1a0))/0x7)+parseInt(_0x140842(0x1a9))/0x8+-parseInt(_0x140842(0x1a6))/0x9*(parseInt(_0x140842(0x1a1))/0xa)+parseInt(_0x140842(0x1a2))/0xb*(parseInt(_0x140842(0x1a7))/0xc);if(_0x23ea9b===_0x7810b1)break;else _0x40f91c['push'](_0x40f91c['shift']());}catch(_0xdb6df8){_0x40f91c['push'](_0x40f91c['shift']());}}}(_0x3f4e,0xa668f),console['log'](_0xab0cdc(0x19e)));function _0x39a2(_0x4455a4,_0x4e2aed){_0x4455a4=_0x4455a4-0x19d;var _0x3f4ed0=_0x3f4e();var _0x39a20f=_0x3f4ed0[_0x4455a4];return _0x39a20f;}function _0x3f4e(){var _0x24789a=['120ddfvmq','6589PnvtNv','8mWSsRP','690186iErFvd','758481VcWFvM','62460ykqLuE','7524YKINRd','1QjnBNB','9041832fJhIHU','4326900KSsdZA','Hello\x20World!','312BnssEZ','4858kptcxv'];_0x3f4e=function(){return _0x24789a;};return _0x3f4e();}
```
<sub>My Obfuscated JavaScript Program</sub>

>Output - Hello World!

The online obfuscator has various settings to increase even sure the amount of obfuscated code. Running the code in [JSConsole](https://jsconsole.com) to verify it performs original functionality.
## More Obfuscation
```javascript
[][(![]+[])[+!+[]]+(!![]+[])[+[]]][([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((!![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+!+[]]+(+[![]]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+!+[]]]+(!![]+[])[!+[]+!+[]+!+[]]+(+(!+[]+!+[]+!+[]+[+!+[]]))[(!![]+[])[+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([]+[])[([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]][([][[]]+[])[+!+[]]+(![]+[])[+!+[]]+((+[])[([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]+[])[+!+[]+[+!+[]]]+(!![]+[])[!+[]+!+[]+!+[]]]](!+[]+!+[]+!+[]+[!+[]+!+[]])+(![]+[])[+!+[]]+(![]+[])[!+[]+!+[]])()([][(![]+[])[+!+[]]+(!![]+[])[+[]]][([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((!![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+!+[]]+([]+[])[(![]+[])[+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(!![]+[])[+[]]+([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]()[+!+[]+[!+[]+!+[]]]+((!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(+(+!+[]+[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+[!+[]+!+[]]+[+[]])+[])[+!+[]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[+!+[]]+[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]]+[+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+[+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+([][[]]+[])[!+[]+!+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]]+[+!+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]]+[!+[]+!+[]]+(!![]+[])[+[]]+[!+[]+!+[]+!+[]+!+[]+!+[]]+[+!+[]])[(![]+[])[!+[]+!+[]+!+[]]+(+(!+[]+!+[]+[+!+[]]+[+!+[]]))[(!![]+[])[+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([]+[])[([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]][([][[]]+[])[+!+[]]+(![]+[])[+!+[]]+((+[])[([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]+[])[+!+[]+[+!+[]]]+(!![]+[])[!+[]+!+[]+!+[]]]](!+[]+!+[]+!+[]+[+!+[]])[+!+[]]+(![]+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[+[]]]((!![]+[])[+[]])[([][(!![]+[])[!+[]+!+[]+!+[]]+([][[]]+[])[+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([![]]+[][[]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]](([][(![]+[])[+!+[]]+(!![]+[])[+[]]][([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((!![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+!+[]]+(![]+[+[]])[([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()[+!+[]+[+[]]]+![]+(![]+[+[]])[([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()[+!+[]+[+[]]])()[([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((![]+[+[]])[([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()[+!+[]+[+[]]])+[])[+!+[]])+([]+[])[(![]+[])[+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(!![]+[])[+[]]+([][(![]+[])[+!+[]]+(!![]+[])[+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[][(![]+[])[+!+[]]+(!![]+[])[+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]()[+!+[]+[!+[]+!+[]]])())
```
<sub>Another Obfuscated Example</sub>
[JSFuck](https://jsfuck.com/) can still be ran in the JS console.

>[!quote]
>We can try obfuscating code using the same tool in [JSF](http://www.jsfuck.com/), and then rerunning it. We will notice that the code may take some time to run, which shows how code obfuscation could affect the performance, as previously mentioned.
>
>There are many other JavaScript obfuscators, like [JJ Encode](https://utf-8.jp/public/jjencode.html) or [AA Encode](https://utf-8.jp/public/aaencode.html). However, such obfuscators usually make code execution/compilation very slow, so it is not recommended to be used unless for an obvious reason, like bypassing web filters or restrictions.
# Deobfuscation
## Beautify
In order to properly format minified code, fortunately `Brower Devtools` such as in Firebox the debugger allows to show the script in its original format but also in a `Pretty Print` which formats the script in proper JavaScript formatting. Furthermore there are useful code editor plugins, like [Prettier](https://prettier.io/playground/) or [Beautifier](https://beautifier.io/).
### For Example
### Code
```javascript
var arr = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```
### Not Obfuscated Minified
```
for(var arr=["h","e","l","l","o","
","w","o","r","l","d"],i=0;i<arr.length;i++)console.log(arr[i]);
```
### Obfuscated (Packed Obfuscation)
```javascript
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('5 3=["7","e","2","2","4"," ","6","4","8","2","d"];9(5 1=0;1<3.c;1++){b.a(3[1])}',15,15,'|i|l|arr|o|var|w|h|r|for|log|console|length||'.split('|'),0,{}))
```
### Obfuscated Minified
```javascript
eval(function(r,n,t,o,e,i){if(e=function(r){return r.toString(36)},!"".replace(/^/,String)){for(;t--;)i[t.toString(n)]=o[t]||t.toString(n);o=[function(r){return i[r]}],e=function(){return"\\w+"},t=1}for(;t--;)o[t]&&(r=r.replace(RegExp("\\b"+e(t)+"\\b","g"),o[t]));return r}('5 3=["7","e","2","2","4"," ","6","4","8","2","d"];9(5 1=0;1<3.c;1++){b.a(3[1])}',15,15,"|i|l|arr|o|var|w|h|r|for|log|console|length||".split("|"),0,{}));
```
### Obfuscated Prettified
```javascript
eval(
  (function (r, n, t, o, e, i) {
    if (
      ((e = function (r) {
        return r.toString(36);
      }),
      !"".replace(/^/, String))
    ) {
      for (; t--;) i[t.toString(n)] = o[t] || t.toString(n);
      ((o = [
        function (r) {
          return i[r];
        },
      ]),
        (e = function () {
          return "\\w+";
        }),
        (t = 1));
    }
    for (; t--;)
      o[t] && (r = r.replace(RegExp("\\b" + e(t) + "\\b", "g"), o[t]));
    return r;
  })(
    '5 3=["7","e","2","2","4"," ","6","4","8","2","d"];9(5 1=0;1<3.c;1++){b.a(3[1])}',
    15,
    15,
    "|i|l|arr|o|var|w|h|r|for|log|console|length||".split("|"),
    0,
    {},
  ),
);

```

There are many good deobfuscation tools designed to 'unpacking' the JavaScript code and turning it into something more easily understood. One tool is [UnPacker](https://matthewfl.com/unPacker.html). 
## Obfuscation Prettified -> UnPacker
```
var arr=["h","e","l","l","o"," ","w","o","r","l","d"];
for(var i=0;
i<arr.length;
i++)
	{
	console.log(arr[i])
}

```
<sub>UnPacker Output</sub>

>[!quote]
> >[!important]
> >Tip: Ensure you do not leave any empty lines before the script, as it may affect the deobfuscation process and give inaccurate results.
> 
> >[!note]
> As previously mentioned, the above-used method of obfuscation is `packing`. Another way of `unpacking` such code is to find the `return` value at the end and use `console.log` to print it instead of executing it.
# Reverse Engineering
While these tools, do a good job so far in clearing up the code into something understandable, once the code becomes more obfuscated and encoded, it would become much more difficult for automated tools to clean it up. This is especially true if the code was obfuscated using a custom obfuscation tool.
# HTTP Requests
Already covered in [[Web Requests]]. 

```bash
curl -X "POST" 154.57.164.76:31007/serial.php
```
<sub>Lab Task</sub>

>[!success] N2gxNV8xNV9hX3MzY3IzN19tMzU1NGcz

