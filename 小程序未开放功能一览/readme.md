# WAService.js (v1.9.1)

#### 虽然一直在js里，但至今依然未开放(部分API在小游戏中开放了)

### 1.9.0新开放API

canvasGetImageData：获取canvas像素数据

        wx.canvasGetImageData({
            canvasId: "canvas", 
            "x":0, 
            "y":0, 
            "width":100, 
            "height":100,
            success: function (res) {
                console.log(res);
                /*{
                    data:(Uint8ClampedArray),
                    height:,
                    width:
                }*/
            }
        });

canvasPutImageData：设置canvas像素数据

        wx.canvasPutImageData({
            "canvasId": "canvas",
            "data": data,      //(Uint8ClampedArray)length=4*width*height
            "x": 0,
            "y": 0,
            "width": 100,
            "height": 100
        })

updateApp：暂时不知

setTabBarBadge: 设置TabBar的小圆点

removeTabBarBadge: 移除TabBar的小圆点

showTabBarRedDot: 显示TabBar的小圆点

hideTabBarRedDot: 隐藏TabBar的小圆点

showTabBar: 显示TabBar

hideTabBar: 隐藏TabBar

setTabBarStyle: 设置TabBar样式

setTabBarItem: 设置TabBar的Item

#### 使用以下API(即wx.~~~)会提示{errMsg: "~~~:fail no permission"}或者无任何反应

##### 猜测用途：

ShareInfoStorage: 不知
                    
chooseMedia: 选择媒体（种类可能更多？）

chooseWeChatContact: 选择微信联系人
                    
openUrl: 打开网址
                    
checkIsSupportFacialRecognition: 检查是否支持面部识别

startFacialRecognitionVerify:开始人脸识别认证

startFacialRecognitionVerifyAndUploadVideo: 开始人脸识别认证并上传认证视频
                    
triggerGettingWidgetData: 不知

navigateToDevMiniProgram: 导航至开发版小程序（内测版小程序？）

setNavigationBarRightButton: 设置右上角按钮

onTapNavigationBarRightButton: 点击右上角按钮
                    
openDeliveryList: 不知
                    
addNativeDownloadTask: 加入到原生下载
                    
getBatteryInfo: 获取电池电量（异步），小游戏已支持

getBatteryInfoSync: 获取电池电量（同步），小游戏已支持

readFile: 读取文件内容，小游戏已支持

chooseContact: 选择联系人
                    