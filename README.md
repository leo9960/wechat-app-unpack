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
