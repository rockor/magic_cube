const Page = require('../../utils/ald-stat.js').Page;
const Util = require('../../utils/util.js');

Page({
  data: {
    list: [],
    maxtime: '',
    loadingHidden: false,
    hasMore: true,
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
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
  onReachBottom: function () {
    //加载更多
    this.requestData('list');
  },

  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    // 加载最新
    this.requestData('newlist');
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
        that.setData({
          // 拼接数组
          list: a == 'newlist' ? [].concat(res.data.list).concat(that.data.list)  :that.data.list.concat(res.data.list),
          loadingHidden: true,
          maxtime: res.data.info.maxtime,
          hasMore:false,
        });

        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
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