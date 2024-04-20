/*! For license information please see 3004.9238b459.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["3004"],{17169:function(s,n,a){"use strict";a.r(n);var l=a("80681");let t=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,l.wg)(),(0,l.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>useRelation</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u5EFA\u7ACB\u7236\u5B50\u7EC4\u4EF6\u4E4B\u95F4\u7684\u5173\u8054\u5173\u7CFB\uFF0C\u8FDB\u884C\u6570\u636E\u901A\u4FE1\u548C\u65B9\u6CD5\u8C03\u7528\uFF0C\u57FA\u4E8E <code>provide</code> \u548C <code>inject</code> \u5B9E\u73B0\u3002</p>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">\u57FA\u672C\u7528\u6CD5</h3>\n<p>\u5728\u7236\u7EC4\u4EF6\u4E2D\u4F7F\u7528 <code>useChildren</code> \u5173\u8054\u5B50\u7EC4\u4EF6:</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { useChildren } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">const</span> <span class="hljs-variable constant_">RELATION_KEY</span> = <span class="hljs-title class_">Symbol</span>(<span class="hljs-string">&#x27;my-relation&#x27;</span>);\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> { linkChildren } = <span class="hljs-title function_">useChildren</span>(<span class="hljs-variable constant_">RELATION_KEY</span>);\n\n    <span class="hljs-keyword">const</span> count = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">add</span> = (<span class="hljs-params"></span>) =&gt; {\n      count.<span class="hljs-property">value</span>++;\n    };\n\n    <span class="hljs-comment">// \u5411\u5B50\u7EC4\u4EF6\u63D0\u4F9B\u6570\u636E\u548C\u65B9\u6CD5</span>\n    <span class="hljs-title function_">linkChildren</span>({ add, count });\n  },\n};\n</code></pre>\n<p>\u5728\u5B50\u7EC4\u4EF6\u4E2D\u4F7F\u7528 <code>useParent</code> \u83B7\u53D6\u7236\u7EC4\u4EF6\u63D0\u4F9B\u7684\u6570\u636E\u548C\u65B9\u6CD5:</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { useParent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> { parent } = <span class="hljs-title function_">useParent</span>(<span class="hljs-variable constant_">RELATION_KEY</span>);\n\n    <span class="hljs-comment">// \u8C03\u7528\u7236\u7EC4\u4EF6\u63D0\u4F9B\u7684\u6570\u636E\u548C\u65B9\u6CD5</span>\n    <span class="hljs-keyword">if</span> (parent) {\n      parent.<span class="hljs-title function_">add</span>();\n      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(parent.<span class="hljs-property">count</span>.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; 1</span>\n    }\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<pre><code class="language-ts"><span class="hljs-keyword">function</span> useParent&lt;T&gt;(<span class="hljs-attr">key</span>: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">symbol</span>): {\n  parent?: T;\n  index?: <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-built_in">number</span>&gt;;\n};\n\n<span class="hljs-keyword">function</span> <span class="hljs-title function_">useChildren</span>(<span class="hljs-params">key: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">symbol</span></span>): {\n  <span class="hljs-attr">children</span>: <span class="hljs-title class_">ComponentPublicInstance</span>[];\n  <span class="hljs-attr">linkChildren</span>: <span class="hljs-function">(<span class="hljs-params">value: <span class="hljs-built_in">any</span></span>) =&gt;</span> <span class="hljs-built_in">void</span>;\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="useparent-fan-hui-zhi" tabindex="-1">useParent \u8FD4\u56DE\u503C</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>parent</td>\n<td>\u7236\u7EC4\u4EF6\u63D0\u4F9B\u7684\u503C</td>\n<td><em>any</em></td>\n</tr>\n<tr>\n<td>index</td>\n<td>\u5F53\u524D\u7EC4\u4EF6\u5728\u7236\u7EC4\u4EF6\u7684\u6240\u6709\u5B50\u7EC4\u4EF6\u4E2D\u5BF9\u5E94\u7684\u7D22\u5F15\u4F4D\u7F6E</td>\n<td><em>Ref&lt;number&gt;</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="usechildren-fan-hui-zhi" tabindex="-1">useChildren \u8FD4\u56DE\u503C</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>children</td>\n<td>\u5B50\u7EC4\u4EF6\u5217\u8868</td>\n<td><em>ComponentPublicInstance[]</em></td>\n</tr>\n<tr>\n<td>linkChildren</td>\n<td>\u5411\u5B50\u7EC4\u4EF6\u63D0\u4F9B\u503C\u7684\u65B9\u6CD5</td>\n<td><em>(value: any) =&gt; void</em></td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,t))}}}]);