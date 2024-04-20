/*! For license information please see 3101.7fca4006.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["3101"],{37317:function(s,n,a){"use strict";a.r(n);var t=a("80681");let e=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.wg)(),(0,t.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Overlay</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Create a mask layer to emphasize specific page elements and prevent users from performing other operations.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Overlay</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Overlay</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Show Overlay&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-overlay</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = false&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">return</span> { show };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="embedded-content" tabindex="-1">Embedded Content</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-overlay</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = false&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrapper&quot;</span> @<span class="hljs-attr">click.stop</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-overlay</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.wrapper</span> {\n    <span class="hljs-attribute">display</span>: flex;\n    <span class="hljs-attribute">align-items</span>: center;\n    <span class="hljs-attribute">justify-content</span>: center;\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;\n  }\n\n  <span class="hljs-selector-class">.block</span> {\n    <span class="hljs-attribute">width</span>: <span class="hljs-number">120px</span>;\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">120px</span>;\n    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#fff</span>;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="setting-z-index" tabindex="-1">Setting z-index</h3>\n<p>The default z-index level of the Overlay component is <code>1</code>. You can set its z-index level using the <code>z-index</code> prop.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-overlay</span> <span class="hljs-attr">z-index</span>=<span class="hljs-string">&quot;100&quot;</span> /&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>show</td>\n<td>Whether to show overlay</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>z-index</td>\n<td>z-index</td>\n<td><em>number | string</em></td>\n<td><code>1</code></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>Animation duration</td>\n<td><em>number | string</em></td>\n<td><code>0.3</code></td>\n</tr>\n<tr>\n<td>class-name</td>\n<td>ClassName</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>custom-class</td>\n<td>Custom style</td>\n<td><em>object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>lock-scroll</td>\n<td>Whether to lock background scroll</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>lazy-render</td>\n<td>Whether to lazy render util appeared</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>Emitted when component is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>Default slot</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">OverlayProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-overlay-z-index</td>\n<td><em>1</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-overlay-background</td>\n<td><em>rgba(0, 0, 0, 0.7)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);