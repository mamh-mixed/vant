(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{126:function(e,n,t){"use strict";var r=t(63);t.n(r).a},127:function(e,n,t){(e.exports=t(12)(!1)).push([e.i,".demo-list .van-cell {\n  text-align: center;\n}\n.demo-list .page-desc {\n  padding: 5px 0;\n  margin: 0;\n  font-size: 14px;\n  text-align: center;\n  color: #7d7e80;\n}\n.demo-list .page-desc--text {\n  margin: 0;\n}\n.demo-list .page-desc--option {\n  margin: 12px;\n}\n.demo-list .van-checkbox__label {\n  color: #7d7e80;\n}\n",""])},207:function(e,n,t){"use strict";t.r(n);var r={i18n:{"zh-CN":{errorInfo:"错误提示",finishedText:"没有更多了",errorText:"请求失败，点击重新加载"},"en-US":{errorInfo:"Error Info",finishedText:"Finished",errorText:"Request failed. Click to reload"}},data:function(){return{list:[{items:[],refreshing:!1,loading:!1,error:!1,finished:!1},{items:[],refreshing:!1,loading:!1,error:!1,finished:!1}]}},methods:{onLoad:function(e){var n=this.list[e];setTimeout(function(){for(var t=0;t<10;t++){var r=n.items.length+1;n.items.push(r<10?"0"+r:r)}n.loading=!1,1!==e||10!==n.items.length||n.error?n.error=!1:n.error=!0,n.items.length>=40&&(n.finished=!0)},500)},onRefresh:function(e){var n=this.list[e];setTimeout(function(){n.items=[],n.error=!1,n.finished=!1,n.refreshing=!1,window.scrollTo(0,10)},1e3)}}},i=(t(126),t(7)),s=Object(i.a)(r,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("demo-section",[t("van-tabs",[t("van-tab",{attrs:{title:e.$t("basicUsage")}},[t("van-pull-refresh",{on:{refresh:function(n){return e.onRefresh(0)}},model:{value:e.list[0].refreshing,callback:function(n){e.$set(e.list[0],"refreshing",n)},expression:"list[0].refreshing"}},[t("van-list",{attrs:{finished:e.list[0].finished,"finished-text":e.$t("finishedText")},on:{load:function(n){return e.onLoad(0)}},model:{value:e.list[0].loading,callback:function(n){e.$set(e.list[0],"loading",n)},expression:"list[0].loading"}},e._l(e.list[0].items,function(e){return t("van-cell",{key:e,attrs:{title:e}})}),1)],1)],1),t("van-tab",{attrs:{title:e.$t("errorInfo")}},[t("van-pull-refresh",{on:{refresh:function(n){return e.onRefresh(1)}},model:{value:e.list[1].refreshing,callback:function(n){e.$set(e.list[1],"refreshing",n)},expression:"list[1].refreshing"}},[t("van-list",{attrs:{finished:e.list[1].finished,error:e.list[1].error,"error-text":e.$t("errorText")},on:{"update:error":function(n){return e.$set(e.list[1],"error",n)},load:function(n){return e.onLoad(1)}},model:{value:e.list[1].loading,callback:function(n){e.$set(e.list[1],"loading",n)},expression:"list[1].loading"}},e._l(e.list[1].items,function(e){return t("van-cell",{key:e,attrs:{title:e}})}),1)],1)],1)],1)],1)},[],!1,null,null,null);n.default=s.exports},63:function(e,n,t){var r=t(127);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(13)(r,i);r.locals&&(e.exports=r.locals)}}]);