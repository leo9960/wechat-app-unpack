(function (z) {
    var a = 11;

    function Z(ops) {
        z.push(ops)
    }
    Z([3, 'index']);
    Z([3, 'index-hd']);
    Z([3, 'index-logo']);
    Z([3, 'resources/kind/logo.png']);
    Z([3, 'index-desc']);
    Z([3, '以下将演示小程序接口能力，具体属性参数详见小程序开发文档。']);
    Z([3, 'index-bd']);
    Z([3, 'kind-list']);
    Z([
        [7],
        [3, 'list']
    ]);
    Z([
        [6],
        [
            [7],
            [3, 'item']
        ],
        [3, 'id']
    ]);
    Z([3, 'kind-list-item']);
    Z([3, 'kindToggle']);
    Z([a, [3, 'kind-list-item-hd '],
        [
            [2, '?:'],
            [
                [6],
                [
                    [7],
                    [3, 'item']
                ],
                [3, 'open']
            ],
            [1, 'kind-list-item-hd-show'],
            [1, '']
        ]
    ]);
    Z([3, 'kind-list-text']);
    Z([a, [
        [6],
        [
            [7],
            [3, 'item']
        ],
        [3, 'name']
    ]]);
    Z([3, 'kind-list-img']);
    Z([a, [3, 'resources/kind/'], z[9],
        [3, '.png']
    ]);
    Z([a, [3, 'kind-list-item-bd '],
        [
            [2, '?:'],
            [
                [6],
                [
                    [7],
                    [3, 'item']
                ],
                [3, 'open']
            ],
            [1, 'kind-list-item-bd-show'],
            [1, '']
        ]
    ]);
    Z([a, [3, 'navigator-box '],
        [
            [2, '?:'],
            [
                [6],
                [
                    [7],
                    [3, 'item']
                ],
                [3, 'open']
            ],
            [1, 'navigator-box-show'],
            [1, '']
        ]
    ]);
    Z([3, 'page']);
    Z([
        [6],
        [
            [7],
            [3, 'item']
        ],
        [3, 'pages']
    ]);
    Z([3, '*item']);
    Z([3, 'navigator']);
    Z([a, [3, 'pages/'],
        [
            [6],
            [
                [7],
                [3, 'page']
            ],
            [3, 'url']
        ]
    ]);
    Z([3, 'navigator-text']);
    Z([a, [
        [6],
        [
            [7],
            [3, 'page']
        ],
        [3, 'zh']
    ]]);
    Z([3, 'navigator-arrow']);
    Z([3, 'container']);
    Z([
        [8], 'title', [1, 'action-sheet']
    ]);
    Z([3, 'head']);
    Z([3, 'page-body']);
    Z([3, 'btn-area']);
    Z([3, 'actionSheetTap']);
    Z([3, 'default']);
    Z([3, '弹出action sheet']);
    Z([3, 'foot']);
    Z([
        [8], 'title', [1, 'createAnimation']
    ]);
    Z([3, 'page-section']);
    Z([3, 'animation-element-wrapper']);
    Z([
        [7],
        [3, 'animation']
    ]);
    Z([3, 'animation-element']);
    Z([3, 'animation-buttons']);
    Z([3, 'true']);
    Z([3, 'rotate']);
    Z([3, 'animation-button']);
    Z([3, '旋转']);
    Z([3, 'scale']);
    Z([3, '缩放']);
    Z([3, 'translate']);
    Z([3, '移动']);
    Z([3, 'skew']);
    Z([3, '倾斜']);
    Z([3, 'rotateAndScale']);
    Z([3, '旋转并缩放']);
    Z([3, 'rotateThenScale']);
    Z([3, '旋转后缩放']);
    Z([3, 'all']);
    Z([3, '同时展示全部']);
    Z([3, 'allInQueue']);
    Z([3, '顺序展示全部']);
    Z([3, 'reset']);
    Z([3, 'animation-button animation-button-reset']);
    Z([3, '还原']);
    Z([
        [8], 'title', [1, 'backgroundAudio']
    ]);
    Z([3, 'page-body-info']);
    Z([3, 'time-big']);
    Z([a, [
        [7],
        [3, 'formatedPlayTime']
    ]]);
    Z([3, 'seek']);
    Z([3, 'slider']);
    Z([3, '269']);
    Z([3, '0']);
    Z([3, '1']);
    Z([
        [7],
        [3, 'playTime']
    ]);
    Z([3, 'play-time']);
    Z([3, '00:00']);
    Z([3, '04:29']);
    Z([3, 'page-body-text tc']);
    Z([3, '注意：离开当前页面后背景音乐将保持播放，但退出小程序将停止']);
    Z([3, 'page-body-buttons']);
    Z([
        [2, '==='],
        [
            [7],
            [3, 'playing']
        ],
        [1, true]
    ]);
    Z([3, 'stop']);
    Z([3, 'page-body-button']);
    Z([3, '/image/stop.png']);
    Z([3, 'pause']);
    Z([3, '/image/pause.png']);
    Z([
        [2, '==='],
        [
            [7],
            [3, 'playing']
        ],
        [1, false]
    ]);
    Z([3, 'play']);
    Z([3, '/image/play.png']);
    Z([
        [8], 'title', [1, 'createContext']
    ]);
    Z([3, 'canvas']);
    Z([3, 'canvas-element']);
    Z([3, 'canvas-buttons']);
    Z([3, 'method']);
    Z([
        [7],
        [3, 'methods']
    ]);
    Z([
        [7],
        [3, 'method']
    ]);
    Z([3, 'canvas-button']);
    Z([a, [
        [7],
        [3, 'method']
    ]]);
    Z([3, 'toTempFilePath']);
    Z([3, 'primary']);
    Z([3, 'toTempFilePath']);
    Z([
        [8], 'title', [1, 'chooseLocation']
    ]);
    Z([3, 'page-body-text-small']);
    Z([3, '当前位置信息']);
    Z([
        [2, '==='],
        [
            [7],
            [3, 'hasLocation']
        ],
        [1, false]
    ]);
    Z([3, 'page-body-text']);
    Z([3, '未选择位置']);
    Z([
        [2, '==='],
        [
            [7],
            [3, 'hasLocation']
        ],
        [1, true]
    ]);
    Z([a, [
        [7],
        [3, 'locationAddress']
    ]]);
    Z([3, 'page-body-text-location']);
    Z([a, [3, 'E: '],
        [
            [6],
            [
                [6],
                [
                    [7],
                    [3, 'location']
                ],
                [3, 'longitude']
            ],
            [1, 0]
        ],
        [3, '°'],
        [
            [6],
            [
                [6],
                [
                    [7],
                    [3, 'location']
                ],
                [3, 'longitude']
            ],
            [1, 1]
        ],
        [3, '′']
    ]);
    Z([a, [3, 'N: '],
        [
            [6],
            [
                [6],
                [
                    [7],
                    [3, 'location']
                ],
                [3, 'latitude']
            ],
            [1, 0]
        ], z[109][3],
        [
            [6],
            [
                [6],
                [
                    [7],
                    [3, 'location']
                ],
                [3, 'latitude']
            ],
            [1, 1]
        ], z[109][5]
    ]);
    Z([3, 'chooseLocation']);
    Z([3, '选择位置']);
    Z([3, 'clear']);
    Z([3, '清空']);
    Z([
        [8], 'title', [1, 'customMessage']
    ]);
    Z([3, 'page-body-wrapper']);
    Z([3, 'page-body-title']);
    Z([3, '\n        点击气泡icon打开客服消息界面\n      ']);
    Z([3, 'page-body-line']);
    Z([3, 'weapp']);
    Z([3, '40']);
    Z([
        [8], 'title', [1, 'scanCode']
    ]);
    Z([3, '联系客服']);
    Z([
        [8], 'title', [1, 'downloadFile']
    ]);
    Z([
        [7],
        [3, 'imageSrc']
    ]);
    Z([3, 'center']);
    Z([3, 'page-body-wording']);
    Z([3, '\r\n          点击按钮下载服务端示例图片\r\n        ']);
    Z([3, 'downloadImage']);
    Z([3, '下载']);
    Z([
        [8], 'title', [1, 'saveFile']
    ]);
    Z([
        [2, '!='],
        [
            [7],
            [3, 'tempFilePath']
        ],
        [1, '']
    ]);
    Z([3, 'image']);
    Z([3, 'aspectFit']);
    Z([
        [7],
        [3, 'tempFilePath']
    ]);
    Z([
        [2, '&&'],
        [
            [2, '==='],
            [
                [7],
                [3, 'tempFilePath']
            ],
            [1, '']
        ],
        [
            [2, '!='],
            [
                [7],
                [3, 'savedFilePath']
            ],
            [1, '']
        ]
    ]);
    Z([
        [7],
        [3, 'savedFilePath']
    ]);
    Z([
        [2, '&&'],
        [
            [2, '==='],
            [
                [7],
                [3, 'tempFilePath']
            ],
            [1, '']
        ],
        [
            [2, '==='],
            [
                [7],
                [3, 'savedFilePath']
            ],
            [1, '']
        ]
    ]);
    Z([3, 'chooseImage']);
    Z([3, 'image-plus image-plus-nb']);
    Z([3, 'image-plus-horizontal']);
    Z([3, 'image-plus-vertical']);
    Z([3, 'image-plus-text']);
    Z([3, '请选择文件']);
    Z([3, 'saveFile']);
    Z([3, '保存文件']);
    Z([3, '删除文件']);
    Z([3, 'confirm']);
    Z([
        [6],
        [
            [7],
            [3, 'dialog']
        ],
        [3, 'hidden']
    ]);
    Z([
        [6],
        [
            [7],
            [3, 'dialog']
        ],
        [3, 'title']
    ]);
    Z([a, [
        [6],
        [
            [7],
            [3, 'dialog']
        ],
        [3, 'content']
    ]]);
    Z([
        [8], 'title', [1, 'getLocation']
    ]);
    Z([3, '当前位置经纬度']);
    Z([3, '未获取']);
    Z([a, z[109][1], z[109][2], z[109][3], z[109][4], z[109][5]]);
    Z([a, z[110][1], z[110][2], z[109][3], z[110][4], z[109][5]]);
    Z([3, 'getLocation']);
    Z([3, '获取位置']);
    Z([
        [8], 'title', [1, 'getNetworkType']
    ]);
    Z([3, '网络状态']);
    Z([
        [2, '==='],
        [
            [7],
            [3, 'hasNetworkType']
        ],
        [1, false]
    ]);
    Z([3, '点击绿色按钮可获取网络状态']);
    Z([
        [2, '==='],
        [
            [7],
            [3, 'hasNetworkType']
        ],
        [1, true]
    ]);
    Z([3, 'page-body-text-network-type']);
    Z([a, [
        [7],
        [3, 'networkType']
    ]]);
    Z([3, 'getNetworkType']);
    Z([3, '获取手机网络状态']);
    Z([
        [8], 'title', [1, 'getSystemInfo']
    ]);
    Z([3, 'weui-cells weui-cells_after-title']);
    Z([3, 'weui-cell weui-cell_input']);
    Z([3, 'weui-cell__hd']);
    Z([3, 'weui-label']);
    Z([3, '手机品牌']);
    Z([3, 'weui-cell__bd']);
    Z([3, 'weui-input']);
    Z([1, true]);
    Z([3, '未获取']);
    Z([3, 'text']);
    Z([
        [6],
        [
            [7],
            [3, 'systemInfo']
        ],
        [3, 'brand']
    ]);
    Z([3, '手机型号']);
    Z([
        [6],
        [
            [7],
            [3, 'systemInfo']
        ],
        [3, 'model']
    ]);
    Z([3, '微信语言']);
    Z([
        [6],
        [
            [7],
            [3, 'systemInfo']
        ],
        [3, 'language']
    ]);
    Z([3, '微信版本']);
    Z([
        [6],
        [
            [7],
            [3, 'systemInfo']
        ],
        [3, 'version']
    ]);
    Z([3, '屏幕宽度']);
    Z([
        [6],
        [
            [7],
            [3, 'systemInfo']
        ],
        [3, 'windowWidth']
    ]);
    Z([3, '屏幕高度']);
    Z([
        [6],
        [
            [7],
            [3, 'systemInfo']
        ],
        [3, 'windowHeight']
    ]);
    Z([3, 'DPI']);
    Z([
        [6],
        [
            [7],
            [3, 'systemInfo']
        ],
        [3, 'pixelRatio']
    ]);
    Z([3, 'getSystemInfo']);
    Z([3, '获取手机系统信息']);
    Z([
        [8], 'title', [1, 'getUserInfo']
    ]);
    Z([3, '用户信息']);
    Z([
        [2, '==='],
        [
            [7],
            [3, 'hasUserInfo']
        ],
        [1, false]
    ]);
    Z([3, '点击绿色按钮可获取用户头像及昵称']);
    Z([
        [2, '==='],
        [
            [7],
            [3, 'hasUserInfo']
        ],
        [1, true]
    ]);
    Z([3, 'userinfo-avatar']);
    Z([
        [6],
        [
            [7],
            [3, 'userInfo']
        ],
        [3, 'avatarUrl']
    ]);
    Z([3, 'userinfo-nickname']);
    Z([a, [
        [6],
        [
            [7],
            [3, 'userInfo']
        ],
        [3, 'nickName']
    ]]);
    Z([3, 'getUserInfo']);
    Z([3, '获取用户信息']);
    Z([
        [8], 'title', [1, 'choose/previewImage']
    ]);
    Z([3, '图片来源']);
    Z([3, 'sourceTypeChange']);
    Z([3, 'selector']);
    Z([
        [7],
        [3, 'sourceType']
    ]);
    Z([
        [7],
        [3, 'sourceTypeIndex']
    ]);
    Z([a, [
        [6],
        [
            [7],
            [3, 'sourceType']
        ],
        [
            [7],
            [3, 'sourceTypeIndex']
        ]
    ]]);
    Z([3, '图片质量']);
    Z([3, 'sizeTypeChange']);
    Z([
        [7],
        [3, 'sizeType']
    ]);
    Z([
        [7],
        [3, 'sizeTypeIndex']
    ]);
    Z([a, [
        [6],
        [
            [7],
            [3, 'sizeType']
        ],
        [
            [7],
            [3, 'sizeTypeIndex']
        ]
    ]]);
    Z([3, '数量限制']);
    Z([3, 'countChange']);
    Z([
        [7],
        [3, 'count']
    ]);
    Z([
        [7],
        [3, 'countIndex']
    ]);
    Z([a, [
        [6],
        [
            [7],
            [3, 'count']
        ],
        [
            [7],
            [3, 'countIndex']
        ]
    ]]);
    Z([3, 'weui-cells']);
    Z([3, 'weui-cell']);
    Z([3, 'weui-uploader']);
    Z([3, 'weui-uploader__hd']);
    Z([3, 'weui-uploader__title']);
    Z([3, '点击可预览选好的图片']);
    Z([3, 'weui-uploader__info']);
    Z([a, [
            [6],
            [
                [7],
                [3, 'imageList']
            ],
            [3, 'length']
        ],
        [3, '/'], z[221][1]
    ]);
    Z([3, 'weui-uploader__bd']);
    Z([3, 'weui-uploader__files']);
    Z([
        [7],
        [3, 'imageList']
    ]);
    Z([3, 'weui-uploader__file']);
    Z([3, 'previewImage']);
    Z([3, 'weui-uploader__img']);
    Z([
        [7],
        [3, 'image']
    ]);
    Z([3, 'weui-uploader__input-box']);
    Z([3, 'weui-uploader__input']);
    Z([
        [8], 'title', [1, 'Login']
    ]);
    Z([
        [2, '==='],
        [
            [7],
            [3, 'hasLogin']
        ],
        [1, true]
    ]);
    Z([3, '已登录']);
    Z([3, '每个微信号中仅需登录 1 次，后续每次进入页面即可根据微信 id 自动拉取用户信息']);
    Z([
        [2, '==='],
        [
            [7],
            [3, 'hasLogin']
        ],
        [1, false]
    ]);
    Z([3, '每个微信号中仅需登录一次']);
    Z([3, 'login']);
    Z([3, '微信登录']);
    Z([
        [8], 'title', [1, 'makePhoneCall']
    ]);
    Z([3, 'desc']);
    Z([3, '请在下方输入电话号码']);
    Z([3, 'bindInput']);
    Z([3, 'input']);
    Z([3, 'number']);
    Z([3, 'makePhoneCall']);
    Z([
        [7],
        [3, 'disabled']
    ]);
    Z([3, '拨打']);
    Z([
        [8], 'title', [1, 'modal']
    ]);
    Z([3, 'modalTap']);
    Z([3, '有标题的modal']);
    Z([3, 'noTitlemodalTap']);
    Z([3, '无标题的modal']);
    Z([
        [8], 'title', [1, 'navigationBarLoading']
    ]);
    Z([3, 'showNavigationBarLoading']);
    Z([3, '显示加载动画']);
    Z([3, 'hideNavigationBarLoading']);
    Z([3, '隐藏加载动画']);
    Z([
        [8], 'title', [1, 'navigateTo/Back, redirectTo']
    ]);
    Z([3, 'navigateTo']);
    Z([3, '跳转新页面']);
    Z([3, 'navigateBack']);
    Z([3, '返回上一页']);
    Z([3, 'redirectTo']);
    Z([3, '在当前页面打开']);
    Z([
        [8], 'title', [1, 'onAccelerometerChange']
    ]);
    Z([3, 'page-section page-section_center']);
    Z([3, '倾斜手机即可移动下方小球']);
    Z([3, 'page-body-canvas']);
    Z([3, 'big-ball']);
    Z([3, 'page-body-ball']);
    Z([3, 'small-ball']);
    Z([3, 'page-body-xyz']);
    Z([a, [3, 'X: '],
        [
            [7],
            [3, 'x']
        ]
    ]);
    Z([a, [3, 'Y: '],
        [
            [7],
            [3, 'y']
        ]
    ]);
    Z([a, [3, 'Z: '],
        [
            [7],
            [3, 'z']
        ]
    ]);
    Z([3, 'page-body-controls']);
    Z([3, 'startAccelerometer']);
    Z([
        [7],
        [3, 'enabled']
    ]);
    Z([3, '开始监听']);
    Z([3, 'stopAccelerometer']);
    Z([
        [2, '!'],
        [
            [7],
            [3, 'enabled']
        ]
    ]);
    Z([3, '停止监听']);
    Z([
        [8], 'title', [1, 'onCompassChange']
    ]);
    Z([3, '旋转手机即可获取方位信息']);
    Z([3, 'direction']);
    Z([3, 'bg-compass-line']);
    Z([3, 'bg-compass']);
    Z([3, 'compass.png']);
    Z([a, [3, 'transform: rotate('],
        [
            [7],
            [3, 'direction']
        ],
        [3, 'deg)']
    ]);
    Z([3, 'direction-value']);
    Z([a, [
        [7],
        [3, 'direction']
    ]]);
    Z([3, 'direction-degree']);
    Z([3, 'o']);
    Z([3, 'controls']);
    Z([3, 'startCompass']);
    Z([3, 'stopCompass']);
    Z([
        [8], 'title', [1, 'onNetworkStatusChange']
    ]);
    Z([
        [2, '==='],
        [
            [7],
            [3, 'isConnected']
        ],
        [1, false]
    ]);
    Z([3, '没有网络连接']);
    Z([
        [2, '==='],
        [
            [7],
            [3, 'isConnected']
        ],
        [1, true]
    ]);
    Z([a, z[165][1]]);
    Z([
        [8], 'title', [1, 'openLocation']
    ]);
    Z([3, 'openLocation']);
    Z([3, '经度']);
    Z([3, 'longitude']);
    Z([3, '113.324520']);
    Z([3, '纬度']);
    Z([3, 'latitude']);
    Z([3, '23.099994']);
    Z([3, '位置名称']);
    Z([3, 'name']);
    Z([3, 'T.I.T 创意园']);
    Z([3, '详细位置']);
    Z([3, 'address']);
    Z([3, '广州市海珠区新港中路397号']);
    Z([3, 'submit']);
    Z([3, '查看位置']);
    Z([
        [8], 'title', [1, 'on/stopPullDownRefresh']
    ]);
    Z([3, '下滑页面即可刷新']);
    Z([3, 'stopPullDownRefresh']);
    Z([3, '停止刷新']);
    Z([
        [8], 'title', [1, 'requestPayment']
    ]);
    Z([3, '支付金额']);
    Z([3, 'price']);
    Z([3, '0.01']);
    Z([3, '实际接口应用中可自定义金额']);
    Z([3, 'requestPayment']);
    Z([
        [7],
        [3, 'loading']
    ]);
    Z([3, '支付']);
    Z([
        [8], 'title', [1, 'request']
    ]);
    Z([3, '\r\n        点击向服务器发起请求\r\n      ']);
    Z([3, 'makeRequest']);
    Z([
        [7],
        [3, 'buttonDisabled']
    ]);
    Z([3, 'request']);
    Z([3, 'weui-cells__title']);
    Z([3, '扫码结果']);
    Z([a, [
        [7],
        [3, 'result']
    ]]);
    Z([3, 'scanCode']);
    Z([3, '扫一扫']);
    Z([
        [8], 'title', [1, 'sendMessage']
    ]);
    Z([3, '发送内容（以下字段可自由适配）']);
    Z([3, '实例字段']);
    Z([3, '请输入']);
    Z([3, '跳转链接']);
    Z([
        [6],
        [
            [7],
            [3, 'shareData']
        ],
        [3, 'path']
    ]);
    Z([3, '发送模板消息']);
    Z([
        [8], 'title', [1, 'setNaivgationBarTitle']
    ]);
    Z([3, 'setNaivgationBarTitle']);
    Z([3, '页面标题']);
    Z([3, 'title']);
    Z([3, '请输入页面标题并点击设置即可']);
    Z([3, '设置']);
    Z([
        [8], 'title', [1, 'share-button']
    ]);
    Z([3, '\n        轻触下方图标即可转发\n      ']);
    Z([3, 'handleTapShareButton']);
    Z([3, 'button-share']);
    Z([3, 'share-button']);
    Z([3, 'share']);
    Z([3, '/image/share.png']);
    Z([3, 'width: 27px; height: 27px']);
    Z([
        [8], 'title', [1, 'onShareAppMessage']
    ]);
    Z([3, '标题']);
    Z([
        [6],
        [
            [7],
            [3, 'shareData']
        ],
        [3, 'title']
    ]);
    Z([3, '描述']);
    Z([
        [6],
        [
            [7],
            [3, 'shareData']
        ],
        [3, 'desc']
    ]);
    Z([3, '跳转页面']);
    Z([3, 'weui-cells__tips']);
    Z([3, '点击右上角菜单转发给好友']);
    Z([
        [8], 'title', [1, 'get/set/clearStorage']
    ]);
    Z([3, 'key']);
    Z([3, 'keyChange']);
    Z([3, 'key']);
    Z([3, '请输入key']);
    Z([
        [7],
        [3, 'key']
    ]);
    Z([3, 'value']);
    Z([3, 'dataChange']);
    Z([3, 'data']);
    Z([3, '请输入value']);
    Z([
        [7],
        [3, 'data']
    ]);
    Z([3, 'setStorage']);
    Z([3, '存储数据']);
    Z([3, 'getStorage']);
    Z([3, '读取数据']);
    Z([3, 'clearStorage']);
    Z([3, '清理数据']);
    Z([a, z[151][1]]);
    Z([
        [8], 'title', [1, 'templateMessage']
    ]);
    Z([3, 'submitForm']);
    Z([3, '点击提交，发送示例模板消息']);
    Z([3, '示例地点']);
    Z([
        [6],
        [
            [7],
            [3, 'formData']
        ],
        [3, 'address']
    ]);
    Z([3, '示例时间']);
    Z([3, 'time']);
    Z([
        [6],
        [
            [7],
            [3, 'formData']
        ],
        [3, 'time']
    ]);
    Z([3, '示例物品']);
    Z([
        [6],
        [
            [7],
            [3, 'formData']
        ],
        [3, 'name']
    ]);
    Z([3, '示例单号']);
    Z([3, 'serial']);
    Z([
        [6],
        [
            [7],
            [3, 'formData']
        ],
        [3, 'serial']
    ]);
    Z([3, '点我提交']);
    Z([
        [8], 'title', [1, 'toast']
    ]);
    Z([3, 'body-view']);
    Z([3, 'toast1Tap']);
    Z([3, '点击弹出默认toast']);
    Z([3, 'toast2Tap']);
    Z([3, '点击弹出设置duration的toast']);
    Z([3, 'toast3Tap']);
    Z([3, '点击弹出显示loading的toast']);
    Z([3, 'hideToast']);
    Z([3, '点击隐藏toast']);
    Z([
        [8], 'title', [1, 'uploadFile']
    ]);
    Z([3, '选择图片']);
    Z([
        [8], 'title', [1, 'chooseVideo']
    ]);
    Z([3, '视频来源']);
    Z([a, z[211][1]]);
    Z([3, '摄像头']);
    Z([3, 'cameraChange']);
    Z([
        [7],
        [3, 'camera']
    ]);
    Z([
        [7],
        [3, 'cameraIndex']
    ]);
    Z([a, [
        [6],
        [
            [7],
            [3, 'camera']
        ],
        [
            [7],
            [3, 'cameraIndex']
        ]
    ]]);
    Z([3, '拍摄长度']);
    Z([3, 'durationChange']);
    Z([
        [7],
        [3, 'duration']
    ]);
    Z([
        [7],
        [3, 'durationIndex']
    ]);
    Z([a, [
        [6],
        [
            [7],
            [3, 'duration']
        ],
        [
            [7],
            [3, 'durationIndex']
        ]
    ]]);
    Z([
        [2, '==='],
        [
            [7],
            [3, 'src']
        ],
        [1, '']
    ]);
    Z([3, 'chooseVideo']);
    Z([3, '添加视频']);
    Z([
        [2, '!='],
        [
            [7],
            [3, 'src']
        ],
        [1, '']
    ]);
    Z([3, 'video']);
    Z([
        [7],
        [3, 'src']
    ]);
    Z([
        [8], 'title', [1, 'start/stopRecord、play/stopVoice']
    ]);
    Z([
        [2, '&&'],
        [
            [2, '&&'],
            [
                [2, '==='],
                [
                    [7],
                    [3, 'recording']
                ],
                [1, false]
            ],
            [
                [2, '==='],
                [
                    [7],
                    [3, 'playing']
                ],
                [1, false]
            ]
        ],
        [
            [2, '==='],
            [
                [7],
                [3, 'hasRecord']
            ],
            [1, false]
        ]
    ]);
    Z([3, 'page-body-time']);
    Z([a, [
        [7],
        [3, 'formatedRecordTime']
    ]]);
    Z([3, 'startRecord']);
    Z([3, '/image/record.png']);
    Z([
        [2, '==='],
        [
            [7],
            [3, 'recording']
        ],
        [1, true]
    ]);
    Z([a, z[443][1]]);
    Z([3, 'stopRecord']);
    Z([3, 'button-stop-record']);
    Z([
        [2, '&&'],
        [
            [2, '==='],
            [
                [7],
                [3, 'hasRecord']
            ],
            [1, true]
        ],
        [
            [2, '==='],
            [
                [7],
                [3, 'playing']
            ],
            [1, false]
        ]
    ]);
    Z([a, z[66][1]]);
    Z([3, 'time-small']);
    Z([a, z[443][1]]);
    Z([3, 'playVoice']);
    Z([3, '/image/trash.png']);
    Z([
        [2, '&&'],
        [
            [2, '==='],
            [
                [7],
                [3, 'hasRecord']
            ],
            [1, true]
        ],
        [
            [2, '==='],
            [
                [7],
                [3, 'playing']
            ],
            [1, true]
        ]
    ]);
    Z([a, z[66][1]]);
    Z([a, z[443][1]]);
    Z([3, 'stopVoice']);
    Z([
        [8], 'title', [1, 'WebSocket']
    ]);
    Z([3, 'weui-cell weui-cell_switch']);
    Z([3, 'Socket状态']);
    Z([3, 'weui-cell__ft']);
    Z([3, 'toggleSocket']);
    Z([
        [2, '!'],
        [
            [7],
            [3, 'hasLogin']
        ]
    ]);
    Z([3, '消息']);
    Z([3, '\r\n            Hello, 小程序!\r\n          ']);
    Z([3, 'sendMessage']);
    Z([
        [2, '!='],
        [
            [7],
            [3, 'socketStatus']
        ],
        [1, 'connected']
    ]);
    Z([3, '点我发送']);
    Z([3, 'page-foot']);
    Z([3, 'none']);
    Z([3, 'switchTab']);
    Z([3, '/page/component/index']);
    Z([3, 'icon-foot']);
    Z([3, '../../../../image/icon_foot.png']);
    Z([3, 'page-head']);
    Z([3, 'page-head-title']);
    Z([a, [
        [7],
        [3, 'title']
    ]]);
    Z([3, 'page-head-line']);
    Z([
        [7],
        [3, 'desc']
    ]);
    Z([3, 'page-head-desc']);
    Z([a, [
        [7],
        [3, 'desc']
    ]]);
    Z([3, '以下将展示小程序官方组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见小程序开发文档。']);
    Z([a, z[12][1], z[12][2]]);
    Z([a, z[14][1]]);
    Z([a, z[16][1], z[9], z[16][3]]);
    Z([a, z[17][1], z[17][2]]);
    Z([a, z[18][1], z[18][2]]);
    Z([a, z[23][1],
        [
            [7],
            [3, 'page']
        ],
        [3, '/'],
        [
            [7],
            [3, 'page']
        ]
    ]);
    Z([a, [
        [7],
        [3, 'page']
    ]]);
    Z([
        [8], 'title', [1, 'audio']
    ]);
    Z([3, 'page-section page-section-gap']);
    Z([3, 'text-align: center;']);
    Z([
        [7],
        [3, 'audioAction']
    ]);
    Z([
        [6],
        [
            [7],
            [3, 'current']
        ],
        [3, 'author']
    ]);
    Z([
        [6],
        [
            [7],
            [3, 'current']
        ],
        [3, 'name']
    ]);
    Z([
        [6],
        [
            [7],
            [3, 'current']
        ],
        [3, 'poster']
    ]);
    Z([
        [6],
        [
            [7],
            [3, 'current']
        ],
        [3, 'src']
    ]);
    Z([3, 'text-align: left']);
    Z([
        [8], 'title', [1, 'button']
    ]);
    Z([3, 'buttonContainer']);
    Z([3, '页面主操作 Normal']);
    Z([3, '页面主操作 Loading']);
    Z([3, '页面主操作 Disabled']);
    Z([3, '页面次要操作 Normal']);
    Z([3, '页面次要操作 Disabled']);
    Z([3, 'warn']);
    Z([3, '警告类操作 Normal']);
    Z([3, '警告类操作 Disabled']);
    Z([3, 'button-sp-area']);
    Z([3, '按钮']);
    Z([3, '不可点击的按钮']);
    Z([3, 'mini-btn']);
    Z([3, 'mini']);
    Z([
        [8], 'title', [1, 'canvas']
    ]);
    Z([
        [8], 'title', [1, 'checkbox']
    ]);
    Z([3, 'page-section-title']);
    Z([3, '默认样式']);
    Z([3, 'checkbox']);
    Z([3, 'cb']);
    Z([3, '选中\n      ']);
    Z([3, '未选中\n      ']);
    Z([3, '推荐展示样式']);
    Z([3, 'checkboxChange']);
    Z([
        [7],
        [3, 'items']
    ]);
    Z([
        [6],
        [
            [7],
            [3, 'item']
        ],
        [3, 'value']
    ]);
    Z([3, 'weui-cell weui-check__label']);
    Z([
        [6],
        [
            [7],
            [3, 'item']
        ],
        [3, 'checked']
    ]);
    Z([a, z[14][1]]);
    Z([
        [8], 'title', [1, 'form']
    ]);
    Z([3, 'formReset']);
    Z([3, 'formSubmit']);
    Z([3, 'switch']);
    Z([3, 'switch']);
    Z([3, 'radio']);
    Z([3, 'radio']);
    Z([3, 'radio1']);
    Z([3, '选项一']);
    Z([3, 'radio2']);
    Z([3, '选项二']);
    Z([3, 'checkbox']);
    Z([3, 'checkbox1']);
    Z([3, 'checkbox2']);
    Z([3, 'slider']);
    Z([3, '50']);
    Z([3, 'input']);
    Z([3, '这是一个输入框']);
    Z([3, 'Submit']);
    Z([3, 'Reset']);
    Z([
        [8], 'title', [1, 'icon']
    ]);
    Z([3, 'icon-box']);
    Z([3, 'icon-box-img']);
    Z([3, '93']);
    Z([3, 'success']);
    Z([3, 'icon-box-ctn']);
    Z([3, 'icon-box-title']);
    Z([3, '成功']);
    Z([3, 'icon-box-desc']);
    Z([3, '用于表示操作顺利完成']);
    Z([3, 'info']);
    Z([3, '提示']);
    Z([3, '用于表示信息提示；也常用于缺乏条件的操作拦截，提示用户所需信息']);
    Z([3, '#C9C9C9']);
    Z([3, '普通警告']);
    Z([3, '用于表示操作后将引起一定后果的情况；也用于表示由于系统原因而造成的负向结果']);
    Z([3, '强烈警告']);
    Z([3, '用于表示由于用户原因造成的负向结果；也用于表示操作后将引起不可挽回的严重后果的情况']);
    Z([3, 'waiting']);
    Z([3, '等待']);
    Z([3, '用于表示等待，告知用户结果需等待']);
    Z([3, 'icon-small-wrp']);
    Z([3, 'icon-small']);
    Z([3, '23']);
    Z([3, 'success_no_circle']);
    Z([3, '多选控件图标_已选择']);
    Z([3, '用于多选控件中，表示已选择该项目']);
    Z([3, 'circle']);
    Z([3, '多选控件图标_未选择']);
    Z([3, '用于多选控件中，表示该项目可被选择，但还未选择']);
    Z([3, '错误提示']);
    Z([3, '用于在表单中表示出现错误']);
    Z([3, '单选控件图标_已选择']);
    Z([3, '用于单选控件中，表示已选择该项目']);
    Z([3, 'download']);
    Z([3, '用于表示可下载']);
    Z([3, 'info_circle']);
    Z([3, '用于在表单中表示有信息提示']);
    Z([3, 'cancel']);
    Z([3, '停止或关闭']);
    Z([3, '用于在表单中，表示关闭或停止']);
    Z([3, '14']);
    Z([3, 'search']);
    Z([3, '搜索']);
    Z([3, '用于搜索控件中，表示可搜索']);
    Z([
        [8], 'title', [1, 'image']
    ]);
    Z([3, 'Local Image']);
    Z([3, 'page-section-ctn']);
    Z([3, '../../resources/pic/1.jpg']);
    Z([3, 'Internet Image']);
    Z([3, '../../resources/pic/2.jpg']);
    Z([
        [8], 'title', [1, 'input']
    ]);
    Z([3, '可以自动聚焦的input']);
    Z([3, '将会获取焦点']);
    Z([3, '控制最大输入长度的input']);
    Z([3, '10']);
    Z([3, '最大输入长度为10']);
    Z([a, [3, '实时获取输入值：'],
        [
            [7],
            [3, 'inputValue']
        ]
    ]);
    Z([3, 'bindKeyInput']);
    Z([3, '输入同步到view中']);
    Z([3, '控制输入的input']);
    Z([3, 'bindReplaceInput']);
    Z([3, '连续的两个1会变成2']);
    Z([3, '控制键盘的input']);
    Z([3, 'bindHideKeyboard']);
    Z([3, '输入123自动收起键盘']);
    Z([3, '数字输入的input']);
    Z([3, '这是一个数字输入框']);
    Z([3, '密码输入的input']);
    Z([3, '这是一个密码输入框']);
    Z([3, '带小数点的input']);
    Z([3, '带小数点的数字键盘']);
    Z([3, 'digit']);
    Z([3, '身份证输入的input']);
    Z([3, '身份证输入键盘']);
    Z([3, 'idcard']);
    Z([3, '控制占位符颜色的input']);
    Z([3, '占位符字体是红色的']);
    Z([3, 'color:#F76260']);
    Z([
        [8], 'title', [1, 'label']
    ]);
    Z([3, '表单组件在label内']);
    Z([3, 'group']);
    Z([
        [7],
        [3, 'checkboxItems']
    ]);
    Z([3, 'label-1']);
    Z([
        [6],
        [
            [7],
            [3, 'item']
        ],
        [3, 'name']
    ]);
    Z([3, 'label-1-text']);
    Z([a, [
        [6],
        [
            [7],
            [3, 'item']
        ],
        [3, 'value']
    ]]);
    Z([3, 'label用for标识表单组件']);
    Z([3, 'radioChange']);
    Z([
        [7],
        [3, 'radioItems']
    ]);
    Z([3, 'label-2']);
    Z([3, 'label-2-text']);
    Z([a, z[14][1]]);
    Z([3, 'label内有多个时选中第一个']);
    Z([3, 'label-3']);
    Z([3, 'checkbox-3']);
    Z([3, 'label-3-text']);
    Z([3, '点击该label下的文字默认选中第一个checkbox']);
    Z([
        [8], 'title', [1, 'map']
    ]);
    Z([
        [7],
        [3, 'covers']
    ]);
    Z([
        [7],
        [3, 'latitude']
    ]);
    Z([
        [7],
        [3, 'longitude']
    ]);
    Z([
        [7],
        [3, 'markers']
    ]);
    Z([3, 'width: 100%; height: 300px;']);
    Z([
        [8], 'title', [1, '新建的页面']
    ]);
    Z([
        [8], 'title', [1, 'navigator']
    ]);
    Z([3, 'navigator-hover']);
    Z([3, 'navigate?title\x3dnavigate']);
    Z([3, '跳转到新页面']);
    Z([3, 'other-navigator-hover']);
    Z([3, 'redirect?title\x3dredirect']);
    Z([3, '在当前页打开']);
    Z([
        [8], 'title', [1, '当前页']
    ]);
    Z([
        [8], 'title', [1, 'picker']
    ]);
    Z([3, '地区选择器']);
    Z([3, '当前选择']);
    Z([3, 'bindPickerChange']);
    Z([
        [7],
        [3, 'array']
    ]);
    Z([
        [7],
        [3, 'index']
    ]);
    Z([a, [
        [6],
        [
            [7],
            [3, 'array']
        ],
        [
            [7],
            [3, 'index']
        ]
    ]]);
    Z([3, '时间选择器']);
    Z([3, 'bindTimeChange']);
    Z([3, '21:01']);
    Z([3, '09:01']);
    Z([
        [7],
        [3, 'time']
    ]);
    Z([a, [
        [7],
        [3, 'time']
    ]]);
    Z([3, '日期选择器']);
    Z([3, 'bindDateChange']);
    Z([3, '2017-09-01']);
    Z([3, 'date']);
    Z([3, '2015-09-01']);
    Z([
        [7],
        [3, 'date']
    ]);
    Z([a, [
        [7],
        [3, 'date']
    ]]);
    Z([
        [8], 'title', [1, 'progress']
    ]);
    Z([3, 'progress-box']);
    Z([3, '20']);
    Z([3, '3']);
    Z([3, 'progress-cancel']);
    Z([3, '60']);
    Z([3, '#10AEFF']);
    Z([3, '80']);
    Z([
        [8], 'title', [1, 'radio']
    ]);
    Z([3, 'r1']);
    Z([3, 'r2']);
    Z([a, z[14][1]]);
    Z([
        [8], 'title', [1, 'scroll-view']
    ]);
    Z([3, 'Vertical Scroll\n纵向滚动']);
    Z([3, 'page-section-spacing']);
    Z([3, 'scroll']);
    Z([3, 'lower']);
    Z([3, 'upper']);
    Z([
        [7],
        [3, 'toView']
    ]);
    Z([
        [7],
        [3, 'scrollTop']
    ]);
    Z([3, 'height: 300rpx;']);
    Z([3, 'scroll-view-item demo-text-1']);
    Z([3, 'demo1']);
    Z([3, 'scroll-view-item demo-text-2']);
    Z([3, 'demo2']);
    Z([3, 'scroll-view-item demo-text-3']);
    Z([3, 'demo3']);
    Z([3, 'Horizontal Scroll\n横向滚动']);
    Z([3, 'scroll-view_H']);
    Z([3, 'width: 100%']);
    Z([3, 'scroll-view-item_H demo-text-1']);
    Z([3, 'scroll-view-item_H demo-text-2']);
    Z([3, 'scroll-view-item_H demo-text-3']);
    Z([
        [8], 'title', [1, 'slider']
    ]);
    Z([3, '设置step']);
    Z([3, 'slider2change']);
    Z([3, '5']);
    Z([3, '显示当前value']);
    Z([3, 'slider3change']);
    Z([3, '设置最小/最大值']);
    Z([3, 'slider4change']);
    Z([3, '200']);
    Z([3, '100']);
    Z([
        [8], 'title', [1, 'swiper']
    ]);
    Z([3, 'page-section page-section-spacing swiper']);
    Z([
        [7],
        [3, 'autoplay']
    ]);
    Z([
        [7],
        [3, 'indicatorDots']
    ]);
    Z([
        [7],
        [3, 'interval']
    ]);
    Z([
        [7],
        [3, 'background']
    ]);
    Z([3, '*this']);
    Z([a, [3, 'swiper-item '],
        [
            [7],
            [3, 'item']
        ]
    ]);
    Z([3, 'margin-top: 40rpx;margin-bottom: 0;']);
    Z([3, '指示点']);
    Z([3, 'changeIndicatorDots']);
    Z([3, '自动播放']);
    Z([3, 'changeAutoplay']);
    Z([3, 'page-section page-section-spacing']);
    Z([3, '幻灯片切换时长(ms)']);
    Z([a, [
        [7],
        [3, 'duration']
    ]]);
    Z([3, '2000']);
    Z([3, '500']);
    Z([3, '自动播放间隔时长(ms)']);
    Z([a, [
        [7],
        [3, 'interval']
    ]]);
    Z([3, 'intervalChange']);
    Z([3, '10000']);
    Z([
        [8], 'title', [1, 'switch']
    ]);
    Z([3, 'switch1Change']);
    Z([3, 'switch2Change']);
    Z([3, '开启中']);
    Z([3, '关闭']);
    Z([
        [8], 'title', [1, 'text']
    ]);
    Z([3, 'text-box']);
    Z([a, [
        [7],
        [3, 'text']
    ]]);
    Z([3, 'add']);
    Z([
        [2, '!'],
        [
            [7],
            [3, 'canAdd']
        ]
    ]);
    Z([3, 'add line']);
    Z([3, 'remove']);
    Z([
        [2, '!'],
        [
            [7],
            [3, 'canRemove']
        ]
    ]);
    Z([3, 'remove line']);
    Z([
        [8], 'title', [1, 'textarea']
    ]);
    Z([3, '输入区域高度自适应，不会出现滚动条']);
    Z([3, 'textarea-wrp']);
    Z([3, 'bindTextAreaBlur']);
    Z([3, '这是一个可以自动聚焦的textarea']);
    Z([3, 'height: 3em']);
    Z([
        [8], 'title', [1, 'video']
    ]);
    Z([3, 'page-section tc']);
    Z([3, 'videoErrorCallback']);
    Z([
        [7],
        [3, 'danmuList']
    ]);
    Z([3, 'myVideo']);
    Z([3,
        'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey\x3d30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400\x26bizid\x3d1023\x26hy\x3dSH\x26fileparam\x3d302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
    ]);
    Z([3, '弹幕内容']);
    Z([3, 'bindInputBlur']);
    Z([3, '在此处输入弹幕内容']);
    Z([3, 'bindSendDanmu']);
    Z([3, '发送弹幕']);
    Z([
        [8], 'title', [1, 'view']
    ]);
    Z([3, 'flex-direction: row\n横向布局']);
    Z([3, 'flex-wrp']);
    Z([3, 'flex-direction:row;']);
    Z([3, 'flex-item demo-text-1']);
    Z([3, 'flex-item demo-text-2']);
    Z([3, 'flex-item demo-text-3']);
    Z([3, 'flex-direction: column\n纵向布局']);
    Z([3, 'flex-direction:column;']);
    Z([3, 'flex-item flex-item-V demo-text-1']);
    Z([3, 'flex-item flex-item-V demo-text-2']);
    Z([3, 'flex-item flex-item-V demo-text-3']);
})(z);