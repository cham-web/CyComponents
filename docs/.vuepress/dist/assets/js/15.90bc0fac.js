(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{445:function(n,e,t){},474:function(n,e,t){"use strict";t(445)},513:function(n,e,t){"use strict";t.r(e);var a={data:()=>({link:"",str:"\n          <template>\n            <view>\n              <view class=\"flex-center home-container-box-btn\" @click=\"sancInfo\">\n                扫码获取\n              </view>\n            </view>\n          </template>\n\n          <script>\n            export default {\n              data() {\n                return {\n\n                }\n              },\n              methods: {\n                // webH5扫码\n                scanCodeH5(){\n                  let that = this;\n                  uni.chooseImage({\n                      count: 1, //默认9\n                      sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有\n                      // sourceType: ['album'], //从相册选择\n                      success: function (chooseImageRes) {\n                        uni.showLoading({\n                          title:'识别中',\n                          mask:true\n                        })\n                          const tempFilePaths = chooseImageRes.tempFilePaths;\n                          uni.uploadFile({\n                              url: 'https://upload.api.cli.im/upload.php?kid=cliim', //这个接口为草料二维码上传图片接口\n                              filePath: tempFilePaths[0],\n                              name: 'Filedata',\n                              success: (uploadFileRes) => {\n                                  console.log(JSON.parse(uploadFileRes.data));\n                                  let result = JSON.parse(uploadFileRes.data)\n                                  if(result.status==1){\n                                    uni.request({\n                                      url:'https://cli.im/apis/up/deqrimg', //这个接口为草料二维码识别二维码接口\n                                      method:'POST',\n                                      header: {\n                                        'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息\n                                      },\n                                      data:{\n                                        img:result.data.path\n                                      },\n                                      success(data) {\n                                        let resultData = data.data\n                                        if(resultData.status==1){\n                                          let scanCodeResult = resultData.info.data[0]\n                                          console.log('二维码内容',scanCodeResult)\n                                          }else{\n                                            that.toast('非法二维码')\n                                          }\n                                        }else{\n                                          that.toast(resultData.info)\n                                        }\n                                        console.log(data)\n                                      },\n                                      complete(res) {\n                                        uni.hideLoading()\n                                        console.log(res)\n                                      }\n                                    })\n                                  }else{\n                                    uni.hideLoading()\n                                    that.toast(result.info)\n                                  }\n                                  \n                              },\n                              file:()=>{\n                                uni.hideLoading()\n                              }\n                          });\n                      }\n                  })\n                }\n              }\n            }\n          <\/script>\n          <style>\n          .flex-center {\n            /* #ifndef APP-NVUE */\n            display: flex;\n            /* #endif */\n            flex-direction: row;\n            justify-content: center;\n            align-items: center;\n          }\n          .home-container-box-btn{\n            width:686rpx;\n            height:98rpx;\n            background:rgba(46,213,115,1);\n            border-radius:49rpx;\n            font-size:32rpx;\n            font-family:PingFang SC;\n            font-weight:500;\n            color:rgba(255,255,255,1);\n            line-height:48rpx;\n          }\n          </style>\n        "}),methods:{scanCodeH5(){let n=this;uni.chooseImage({count:1,sizeType:["compressed"],success:function(e){uni.showLoading({title:"识别中",mask:!0});const t=e.tempFilePaths;uni.uploadFile({url:"https://upload.api.cli.im/upload.php?kid=cliim",filePath:t[0],name:"Filedata",success:e=>{console.log(JSON.parse(e.data));let t=JSON.parse(e.data);1==t.status?uni.request({url:"https://cli.im/apis/up/deqrimg",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{img:t.data.path},success(e){let t=e.data;if(1==t.status){let e=t.info.data[0];e?console.log("二维码内容",e):n.toast("非法二维码")}else n.toast(t.info);console.log(e)},complete(n){uni.hideLoading(),console.log(n)}}):(uni.hideLoading(),n.toast(t.info))},file:()=>{uni.hideLoading()}})}})}}},s=(t(474),t(22)),i=Object(s.a)(a,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"web页面扫描二维码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web页面扫描二维码"}},[n._v("#")]),n._v(" WEB页面扫描二维码")]),n._v(" "),t("h3",{attrs:{id:"有两种方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有两种方案"}},[n._v("#")]),n._v(" 有两种方案")]),n._v(" "),t("h4",{attrs:{id:"第一种方案为-首先调用手机的摄像头拍照-然后把照片上传服务器识别二维码内容-返回二维码内容。第二种方案为-首先调用摄像机获取视频流-然后实时截取视频照片-识别二维码。但是第二种方案有两个问题待解决-1-调用摄像机有兼容问题-ios只能获取一帧画面-2-摄像头现在只能调用前置摄像头摄像。所以再此是第一种方案的实现方法。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一种方案为-首先调用手机的摄像头拍照-然后把照片上传服务器识别二维码内容-返回二维码内容。第二种方案为-首先调用摄像机获取视频流-然后实时截取视频照片-识别二维码。但是第二种方案有两个问题待解决-1-调用摄像机有兼容问题-ios只能获取一帧画面-2-摄像头现在只能调用前置摄像头摄像。所以再此是第一种方案的实现方法。"}},[n._v("#")]),n._v(" 第一种方案为：首先调用手机的摄像头拍照，然后把照片上传服务器识别二维码内容，返回二维码内容。"),t("br"),n._v("第二种方案为：首先调用摄像机获取视频流，然后实时截取视频照片，识别二维码。"),t("br"),n._v("但是第二种方案有两个问题待解决："),t("br"),n._v("1.调用摄像机有兼容问题，iOS只能获取一帧画面；"),t("br"),n._v("2.摄像头现在只能调用前置摄像头摄像。"),t("br"),n._v("所以再此是第一种方案的实现方法。")]),n._v(" "),t("h3",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[n._v("#")])]),n._v(" "),[t("demo",{attrs:{codeStr:n.str}},[n._v("\n    WEB页面扫描二维码\n    "),t("view",{staticClass:"flex-center home-container-box-btn",on:{click:n.sancInfo}},[n._v("\n      扫码获取\n    ")])])]],2)}),[],!1,null,null,null);e.default=i.exports}}]);