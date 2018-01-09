const downloadExampleUrl = require('../../../../config').downloadExampleUrl

Page({
  downloadImage: function() {
    var self = this

    wx.downloadFile({
      url: downloadExampleUrl,
      success: function(res) {
        console.log('downloadFile success, res is', res)

        self.setData({
          imageSrc: res.tempFilePath
        })
      },
      fail: function({errMsg}) {
        console.log('downloadFile fail, err is:', errMsg)
      }
    })
  }
})
