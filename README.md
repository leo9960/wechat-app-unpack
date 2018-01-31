# wechat-app-unpack
微信小程序解包心得

思路、源码：http://lrdcq.com/me/read.php/66.htm

### 解包工具：

Python2版本：https://gist.github.com/feix/32ab8f0dfe99aa8efa84f81ed68a0f3e

Python3版本：https://gist.github.com/Integ/bcac5c21de5ea35b63b3db2c725f07ad

PHP版本：https://github.com/Clarence-pan/unpack-wxapkg

JAVA版本：https://github.com/moqi2011/unweapp

nodejs版本：https://github.com/thedreamwork/unwxapkg

Kaitai Struct版本：https://github.com/coolzilj/kaitai_struct_format_for_wxapkg


## 目前分析如下:

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

2018-01-27更新：~~由于还原总是不那么完美，便重新写了一个wxml分析器(在wxmlana中)，可以用于对照混淆代码和还原后的代码（感谢q群[211691897]中各位大佬的帮忙）~~

2018-01-31更新：由于安全问题，以后不再提供wxml分析器的源码，稍晚时间会提供在线版的分析器供大家使用

目前分析器理论上支持以下几个版本：

    v0.6vv_20170214_fbi
	v0.6vv_20170919_fbi_wxs
	v0.6vv_20171120_cua_xc
    v0.6vv_20171201_cua_xc
    v0.6vv_20171208_cua_xc
    v0.6vv_20180104_fbi
    v0.6vv_20180111_fbi

目前我分析了一小部分代码，写了个解析器，可以手动一个页面一个页面还原出wxml源码，~~但还无法解析变量（就是{{}}这一类的）~~

2018-01-04更新：~~可以解析单变量形式（如{{index}}），但表达式形式的还无法解析~~

2018-01-04更新：~~可以解析单变量形式（如{{index}}）、表达式形式（如{{count?1:2}}）~~

2018-01-04更新：~~可以解析block以及wx:for、wx:key~~

2018-01-09更新：~~修复部分bug，template模板组件还无法解析~~

2018-01-09更新：~~想到一个新思路还原源码，不再需要手动拷贝代码出来，防止变量丢失~~

2018-01-10更新：~~通过多人探讨发现，不同小程序可能由于编译上线时间不同，其中的函数及变量也发生了变化，目前analysis.js中的函数仅支持替换page-frame.html中版本为：~~

    window.__wcc_version__ = 'v0.6vv_20170905_fbi_wxs'

~~如有其他版本的请将版本号以及对应的小程序名称发至Issues中，我会抽时间来研究~~

~~打开page-frame.html，将文件夹（wxmlana）下的ana.js引入~~

        <script src="ana.js"></script>

~~打开文件夹（wxmlana）下的analysis.js，按照对应的函数名称，替换page-frame.html中的函数~~

        //原page-frame.html中的名称：
        function _v(k) {...}
        function _n(tag){...}
        function $gwrt(should_pass_type_info){...}
        function wfor(to_iter, func, env, _s, global, father, itemname, indexname, keyname, o){...}
        if (path && e_[path]) {...}

~~注释掉page-frame.html中的 nf_init() ：~~

        ...
        //nf_init();
        ...

~~在chrome中打开page-frame.html，在控制台（console）中输入：~~

        //解析单个wxml
        $gwx("...wxml地址...")();        //例如$gwx("./page/API/index.wxml")();

        //解析所有wxml
        $gwx("ana")()

~~即可获得源码~~

#### ~~已知问题~~

~~1.template模块组件会被自动加载进源码中~~

~~2.会无视带有 wx:if 的组件，但其子组件还是会被还原出来的~~

