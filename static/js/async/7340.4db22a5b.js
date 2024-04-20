/*! For license information please see 7340.4db22a5b.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["7340"],{22839:function(n,s,t){"use strict";t.r(s);var a=t("80681");let e=["innerHTML"];s.default={setup:()=>({html:""}),render:()=>((0,a.wg)(),(0,a.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>ContactList</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Used to display the contact list.</p>\n</div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3>\n<p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ContactList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ContactList</span>);\n</code></pre>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-contact-list</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;chosenContactId&quot;</span>\n  <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;list&quot;</span>\n  <span class="hljs-attr">default-tag-text</span>=<span class="hljs-string">&quot;default&quot;</span>\n  @<span class="hljs-attr">add</span>=<span class="hljs-string">&quot;onAdd&quot;</span>\n  @<span class="hljs-attr">edit</span>=<span class="hljs-string">&quot;onEdit&quot;</span>\n  @<span class="hljs-attr">select</span>=<span class="hljs-string">&quot;onSelect&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> chosenContactId = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#x27;1&#x27;</span>);\n    <span class="hljs-keyword">const</span> list = <span class="hljs-title function_">ref</span>([\n      {\n        <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;1&#x27;</span>,\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;John Snow&#x27;</span>,\n        <span class="hljs-attr">tel</span>: <span class="hljs-string">&#x27;13000000000&#x27;</span>,\n        <span class="hljs-attr">isDefault</span>: <span class="hljs-literal">true</span>,\n      },\n      {\n        <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;2&#x27;</span>,\n        <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Ned Stark&#x27;</span>,\n        <span class="hljs-attr">tel</span>: <span class="hljs-string">&#x27;1310000000&#x27;</span>,\n      },\n    ]);\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onAdd</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;Add&#x27;</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onEdit</span> = (<span class="hljs-params">contact</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;Edit&#x27;</span> + contact.<span class="hljs-property">id</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSelect</span> = (<span class="hljs-params">contact</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#x27;Select&#x27;</span> + contact.<span class="hljs-property">id</span>);\n\n    <span class="hljs-keyword">return</span> {\n      list,\n      onAdd,\n      onEdit,\n      onSelect,\n      chosenContactId,\n    };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>Id of chosen contact</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>list</td>\n<td>Contact list</td>\n<td><em>ContactListItem[]</em></td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>add-text</td>\n<td>Add button text</td>\n<td><em>string</em></td>\n<td><code>Add new contact</code></td>\n</tr>\n<tr>\n<td>default-tag-text</td>\n<td>Default tag text</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>Event</th>\n<th>Description</th>\n<th>Arguments</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>add</td>\n<td>Emitted when the add button is clicked</td>\n<td>-</td>\n</tr>\n<tr>\n<td>edit</td>\n<td>Emitted when the edit button is clicked</td>\n<td><em>contact: ContactListItem, index: number</em></td>\n</tr>\n<tr>\n<td>select</td>\n<td>Emitted when a contact is selected</td>\n<td><em>contact: ContactListItem, index: number</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="data-structure-of-contactlistitem" tabindex="-1">Data Structure of ContactListItem</h3>\n<table>\n<thead>\n<tr>\n<th>key</th>\n<th>Description</th>\n<th>Type</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>id</td>\n<td>ID</td>\n<td><em>number | string</em></td>\n</tr>\n<tr>\n<td>name</td>\n<td>Name</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>tel</td>\n<td>Phone</td>\n<td><em>string</em></td>\n</tr>\n<tr>\n<td>isDefault</td>\n<td>Is default contact</td>\n<td><em>boolean | undefined</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3>\n<p>The component exports the following type definitions:</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ContactListItem</span>, <span class="hljs-title class_">ContactListProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="theming" tabindex="-1">Theming</h2>\n<div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3>\n<p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Default Value</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-contact-list-padding</td>\n<td><em>var(--van-padding-sm) var(--van-padding-sm) 80px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-contact-list-edit-icon-size</td>\n<td><em>16px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-contact-list-add-button-z-index</td>\n<td><em>999</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-contact-list-radio-color</td>\n<td><em>var(--van-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-contact-list-item-padding</td>\n<td><em>var(--van-padding-md)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,e))}}}]);