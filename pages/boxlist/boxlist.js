const Util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    channelId: '',
    source: '',
    appId:'',
    default:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.channelId = options.channelId;
    this.data.source = options.source;
    this.data.appId = options.appId;

    // 请求列表数据
    this.requestData(options);
  },

  requestData: function (e) {
    var that = this;
    wx.request({
      url: Util.apiUrl + '/box_list',
      data: {
        channel_id: e.channelId,
        source: e.source,
        appId: e.appId,
      },
      method: 'GET',
      success: function (res) {
        console.log(res);
        console.log(res.data.default);
        that.setData({
          // 拼接数组
          list: that.data.list.concat(res.data.list),
          default: res.data.default ? res.data.default : that.data.default,
        });
        console.log(that.data.default);
        // 如果存在默认值 则进入
        if (res.data.default) {
        }
      }
    })
  },

  onclick:function(){},

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
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: Util.shareConfig
})