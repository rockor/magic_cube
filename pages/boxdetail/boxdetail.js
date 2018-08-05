const Util = require('../../utils/util.js');

// pages/boxdetail/boxdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    loadingHidden:false,
    channelId:'',
    source:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 接受传输的 渠道&来源
    this.data.channelId = options.channelId;
    this.data.source = options.source;

    // 请求数据
    this.requestData(options);

    // 获取系统信息
    wx.getSystemInfo({
      success:function(e) {
        console.log(e);
      }
    });
  },

  /**
   * 请求详情列表函数
   */
  requestData: function (e) {
    var that = this;
    wx.request({
      url: Util.apiUrl + '/box_detail',
      data: {
        channel_id: e.channelId,
        source:e.source,
      },
      method: 'GET',
      success: function (res) {
        console.log(res);
        that.setData({
          // 拼接数组
          list: that.data.list.concat(res.data.list),

          // 关闭loading动画
          loadingHidden: true,
        });

        // 如果存在默认值 则进入
        if (res.data.default) {
            //  wx.reLaunch({
            //    url: '../boxlist/boxlist?channelId=' + that.data.channelId + '&source=' + that.data.source + '&appId=' + res.data.default.appId,
            //  })
        }
      }
    })
  },

  /**
   * 跳转至列表页面 
   */
  impList:function(e) {
    wx.reLaunch({
      url: '../boxlist/boxlist?channelId=' + this.data.channelId + '&source=' + this.data.source + '&appId=' + e.currentTarget.id,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: Util.shareConfig
})