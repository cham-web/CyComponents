(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{497:function(e,t,n){"use strict";n.r(t);var s={data:()=>({link:"",str:"\n      // uni-app 中使用方法\n        import Socket from '@/utils/socket'\n        let socket = new Socket({url: 'ws://192.168.1.168:9988/ws'})\n        // 初始化连接\n        socket.init()\n        // user里面的key可以在 utils -> proto -> SocketSend.js -> Message 中找到\n        const user = {type: 1, code: '666'}\n        /*\n          发送数据\n          @param {string} ASXC 这个为后台固定字符串，使用时需要向java要\n          @param {object} user\n        */\n        socket.send('ASXC', user)\n        // 返回数据的方法\n        socket.receviMessage().then(res => {\n          console.log(res)\n        })\n\n        // web中使用方法\n        import { CySocket } from '@/utils/CySocket'\n        let cySocket = new CySocket({\n            server: 'ws://192.168.1.168:9988/ws',\n            autoReconnect: false,\n            // socket打开事件\n            openSocket: function() {\n                // user里面的key可以在 utils -> proto -> SocketSend.js -> Message 中找到\n                const user = {type: 1, code: '666'}\n                /*\n                    发送数据\n                    @param {string} ASXC 这个为后台固定字符串，使用时需要向java要\n                    @param {object} user\n                */\n                this.sendMsg('ASXC', user)\n            },\n            // socket数据返回事件\n            receiveMsg: function(data) {\n                console.log(data)\n            }\n        })\n      "})},o=n(22),r=Object(o.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"java中使用socket的方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#java中使用socket的方法"}},[e._v("#")]),e._v(" java中使用socket的方法")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("公司git地址 "),n("a",{attrs:{href:"http://39.99.37.143:3000/HuangGuanJun/webPublic/src/master/js/utils",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),n("OutboundLink")],1)])]),e._v(" "),[n("demo",{attrs:{codeStr:e.str}})]],2)}),[],!1,null,null,null);t.default=r.exports}}]);