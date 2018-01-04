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
    define(
        "utils/util.js", 
        function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
        ...
        });
    define(
        "app.js", 
        function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
        ...
        });
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

### page-frame.html

目前我分析了一小部分代码，写了个解析器，可以手动一个页面一个页面还原出wxml源码，~~但还无法解析变量（就是{{}}这一类的）~~

2018-01-04更新：可以解析单变量形式（如{{index}}），但表达式形式的还无法解析

新建一个test.html，将wxmlana文件夹下的analysis.js,ana.js引入

新建一个z.js，然后从page-frame.html中找到以下这一段代码：

    (function(z){var a=11;
        function Z(ops){z.push(ops)};
        ...
    })(z);

将其复制到z.js里，并在test.html中引入z.js。

再从page-frame.html中找到以下这一段代码：（理论上有m0,m1,m2,...，分别对应不同的页面）

    var m0=function(e,s,r,gg){
        ...
        return r
    }

复制替换“...代码...”后将以下代码写入test.html:

    <script>
        ...代码...
        
        var object_raw=m0("","",root,"");       //（理论上有m0,m1,m2,...，分别对应不同的页面）
        console.log(object_raw);    //由wxml转成的对象
        console.log(ana(object_raw));    //解析对象后生成的源码
    </script>

在控制台（console）就能看到生成的wxml源码
