# wechat-app-unpack
微信小程序解包心得

目前分析如下:

### 目录

-\pages  每个页面的wxss样式文件

-app-config.json  页面配置的汇总（app.json+各个页面的配置文件）

-app-service.js 源码js的汇总

-page-frame.html  wxml文件的汇总

### app-config.json

    {
          "page":{       //各页面配置
          "pages/index/index.html":{      //页面地址
               "window":{"navigationBarTitleText":""}     //页面配置
          }
           ...
      },
      "entryPagePath":"pages/index/index.html",   //小程序入口地址
      "pages":["pages/index/index"],  //页面列表
      "global":{      //全局页面配置
          "window":{
              "backgroundTextStyle":"light",
              "navigationBarBackgroundColor":"#0a83b1",
              "navigationBarTitleText":"",
              "navigationBarTextStyle":"#fff"
          }
      }
    }

中文<->16进制在线互转：

https://www.bejson.com/convert/ox2str/

### app-service.json

    var __wxAppData = {};
    var __wxRoute;
    var __wxRouteBegin;
    var global = {};

    //一些第三方的js源码(所以不同小程序一般都不一样)
    define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){});
    define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){});
    require("app.js");
    ...

    //每个页面对应的js源码
    __wxRoute = 'pages/index/index';//页面路由地址
    __wxRouteBegin = true; 
    define(
        "pages/index/index.js", //js地址
        function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
            //js源码
        });
    require("pages/index/index.js");
    ...
