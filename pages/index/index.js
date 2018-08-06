const Page = require('../../utils/ald-stat.js').Page;
const Util = require('../../utils/util.js');

Page({
  data: {
    list: [],
    maxtime: '',
    loadingHidden: false
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    //加载最新
    // wx.reLaunch({
    //   url: '../boxdetail/boxdetail?channelId=wk&source=wechat',
    // })
    this.requestData('newlist');
  },

  /**
   * 上拉刷新
   */
  bindscrolltoupper: function () {
    //加载最新
    this.requestData('newlist');
  },

  /**
   * 加载更多
   */
  bindscrolltolower: function () {
    //加载更多
    this.requestData('list');
  },

  /**
   * 请求数据
   */
  requestData: function (a) {
    var that = this;
    wx.request({
      url: Util.apiUrl + '/word',
      data: {
        action: a,
        model: 'data',
        maxtime: that.data.maxtime
      },
      method: 'GET',
      success: function (res) {
        console.log(res);
        that.setData({
          // 拼接数组
          list: that.data.list.concat(res.data.list),
          loadingHidden: true,
          maxtime: res.data.info.maxtime
        })

      }
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  onShareAppMessage: Util.shareConfig
})