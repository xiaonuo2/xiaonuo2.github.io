(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1514:function(n,t,o){"use strict";o(542)},1515:function(n,t,o){var e=o(3)(!1);e.push([n.i,".markdown{margin-bottom:.9375rem}.markdown pre{font-family:monospace,monospace}.markdown .v-note-op{box-sizing:border-box}.markdown .v-note-edit{min-height:37.5rem}.markdown .v-show-content{color:#000;background-color:#fbfbfb}.markdown .v-show-content pre{color:#fbfbfb}.markdown .v-note-op,.markdown .v-note-panel,.markdown .v-note-wrapper,.markdown textarea{background-color:var(--t2)!important;color:var(--t1)!important}.markdown .v-note-op,.markdown .v-note-panel{border-color:var(--t1)!important}.markdown .btn-list{margin-top:.9375rem;font-size:0}.markdown .btn-list button{margin:0 .9375rem 0 0}",""]),n.exports=e},1631:function(n,t,o){"use strict";o.r(t);var e=o(1506),r=(o(1507),o(417)),l=o.n(r),c=(o(418),o(412)),d={name:"Markdown",components:{mavonEditor:e.mavonEditor},head:function(){return this.$store.state.currentTool.head},data:function(){return{content:"",html:"",markdownOption:{bold:!0},externalLink:!1,isMobile:!1}},mounted:function(){var n=this;window.innerWidth<700&&(this.isMobile=!0),this.$nextTick((function(){n.$refs.md.markdownIt.set({highlight:function(n,t){return t&&l.a.getLanguage(t)?l.a.highlight(t,n).value:""}})}))},methods:{downloadHtml:function(){Object(c.a)(this.html,"markdown.html")},downloadMd:function(){Object(c.a)(this.content,"markdown.md")},handleHtml:function(n,t){this.html=t}}},m=d,w=(o(1514),o(2)),component=Object(w.a)(m,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"markdown"},[o("client-only",[o("mavon-editor",{ref:"md",staticClass:"typo",attrs:{"box-shadow":!1,subfield:!0,"default-open":n.isMobile?"edit":"preview","external-link":n.externalLink},on:{change:n.handleHtml},model:{value:n.content,callback:function(t){n.content=t},expression:"content"}})],1),n._v(" "),o("div",{staticClass:"btn-list"},[o("button",{staticClass:"nya-btn",on:{click:n.downloadHtml}},[n._v("\n            下载 HTML 文件\n        ")]),n._v(" "),o("button",{staticClass:"nya-btn",on:{click:n.downloadMd}},[n._v("\n            下载 MD 文件\n        ")])])],1)}),[],!1,null,null,null);t.default=component.exports},412:function(n,t,o){"use strict";t.a=function(content,n){var t=document.createElement("a");t.download=n,t.style.display="none";var o=new Blob([content]);t.href=URL.createObjectURL(o),t.click()}},542:function(n,t,o){var content=o(1515);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,o(4).default)("fb1456c2",content,!0,{sourceMap:!1})}}]);