/*! For license information please see 3139.614ab879.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["3139"],{68171:function(t,n,s){"use strict";s.r(n);var a=s("80681");let e=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,a.wg)(),(0,a.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Image</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Enhanced img tag with multiple image fill modes, support for image lazy loading, loading hint, loading failure hint.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Image</span> <span class="hljs-keyword">as</span> <span class="hljs-title class_">VanImage</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">VanImage</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>\n  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100&quot;</span>\n  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;100&quot;</span>\n  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="fit-mode" tabindex="-1">Fit Mode</h3>\n<p>Same as <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit" target="_blank">object-fit</a>.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>\n  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;10rem&quot;</span>\n  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;10rem&quot;</span>\n  <span class="hljs-attr">fit</span>=<span class="hljs-string">&quot;contain&quot;</span>\n  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="position" tabindex="-1">Position</h3>\n<p>Same as <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-position" target="_blank">object-position</a>.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>\n  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;10rem&quot;</span>\n  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;10rem&quot;</span>\n  <span class="hljs-attr">fit</span>=<span class="hljs-string">&quot;cover&quot;</span>\n  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>\n  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="round" tabindex="-1">Round</h3>\n<p>Show round image, it may not works at <code>fit=contain</code> and <code>fit=scale-down</code>.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>\n  <span class="hljs-attr">round</span>\n  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;10rem&quot;</span>\n  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;10rem&quot;</span>\n  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="lazy-load" tabindex="-1">Lazy Load</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image</span>\n  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100&quot;</span>\n  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;100&quot;</span>\n  <span class="hljs-attr">lazy-load</span>\n  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Lazyload</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Lazyload</span>);\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>src</td>\n<td>Src</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>fit</td>\n<td>Fit mode, same as <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit" target="_blank">object-fit</a></td>\n<td><em>string</em></td>\n<td><code>fill</code></td>\n</tr>\n<tr>\n<td>position</td>\n<td>Position, same as <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-position" target="_blank">object-position</a>, can be set to <code>top</code> <code>right</code> <code>bottom</code> <code>left</code> or <code>string</code></td>\n<td><em>string</em></td>\n<td><code>center</code></td>\n</tr>\n<tr>\n<td>alt</td>\n<td>Alt</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>width</td>\n<td>Width</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>height</td>\n<td>Height</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>radius</td>\n<td>Border Radius</td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>round</td>\n<td>Whether to be round</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>block <code>3.6.3</code></td>\n<td>Whether the root node is a block element</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>lazy-load</td>\n<td>Whether to enable lazy load, should register <a href="#/en-US/lazyload" target="_blank">Lazyload</a> component</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>show-error</td>\n<td>Whether to show error placeholder</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>show-loading</td>\n<td>Whether to show loading placeholder</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>error-icon</td>\n<td>Error icon</td>\n<td><em>string</em></td>\n<td><code>photo-fail</code></td>\n</tr>\n<tr>\n<td>loading-icon</td>\n<td>Loading icon</td>\n<td><em>string</em></td>\n<td><code>photo</code></td>\n</tr>\n<tr>\n<td>icon-size</td>\n<td>Icon size</td>\n<td><em>number | string</em></td>\n<td><code>32px</code></td>\n</tr>\n<tr>\n<td>icon-prefix</td>\n<td>Icon className prefix</td>\n<td><em>string</em></td>\n<td><code>van-icon</code></td>\n</tr>\n<tr>\n<td>crossorigin</td>\n<td>same as <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/crossOrigin" target="_blank">crossorigin</a></td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>referrerpolicy</td>\n<td>same as <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy" target="_blank">referrerpolicy</a></td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="fit-optional-value" tabindex="-1">fit optional value</h3>\n<table>\n<thead>\n<tr>\n<th>name</th>\n<th>description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>contain</td>\n<td>Keep aspect ratio, fully display the long side of the image</td>\n</tr>\n<tr>\n<td>cover</td>\n<td>Keep aspect ratio, fully display the short side of the image, cutting the long side</td>\n</tr>\n<tr>\n<td>fill</td>\n<td>Stretch and resize image to fill the content box</td>\n</tr>\n<tr>\n<td>none</td>\n<td>Not resize image</td>\n</tr>\n<tr>\n<td>scale-down</td>\n<td>Take the smaller of <code>none</code> or <code>contain</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>Emitted when image is clicked</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>load</td>\n<td>Emitted when image loaded</td>\n<td><em>event: Event</em></td>\n</tr>\n<tr>\n<td>error</td>\n<td>Emitted when image load failed</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>Custom the content below the image</td>\n</tr>\n<tr>\n<td>loading</td>\n<td>Custom loading placeholder</td>\n</tr>\n<tr>\n<td>error</td>\n<td>Custom error placeholder</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ImageFit</span>, <span class="hljs-title class_">ImagePosition</span>, <span class="hljs-title class_">ImageProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-image-placeholder-text-color</td>\n<td><em>var(--van-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-image-placeholder-font-size</td>\n<td><em>var(--van-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-image-placeholder-background</td>\n<td><em>var(--van-background)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-image-loading-icon-size</td>\n<td><em>32px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-image-loading-icon-color</td>\n<td><em>var(--van-gray-4)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-image-error-icon-size</td>\n<td><em>32px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-image-error-icon-color</td>\n<td><em>var(--van-gray-4)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);