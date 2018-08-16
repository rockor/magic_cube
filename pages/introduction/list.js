// pages/introduction/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carousel:{
      imgUrls: [
        {
          url:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          appId: 'wx06138759bb16c2f7',
          path: '',
          extraData: {},
        },
        {
          url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          appId: 'wx06138759bb16c2f7',
          path: '',
          extraData: {},
        },
        {
          url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
          appId: 'wx06138759bb16c2f7',
          path: '',
          extraData: {},
        },
      ],
      indicatorDots: false,
      indicatorColor: '#ccc',
      indicatorActiveColor: '#000000',
      autoplay: true,
      interval: 5000,
      duration: 500,
    },
    loadingHidden:true,
    showModal:true,
    screenHidden:false,
    list:[
      {
        'icon':'../../image/zhihu.png',
        'name':'知乎',
        'description':'有问题上知乎',
        'number':'100W+',
        'appId': 'wx06138759bb16c2f7',
        'path': '',
        'extraData':'12123',
      },
      {
        'icon': '../../image/wangyi.png',
        'name': '网易云音乐',
        'description': '听音乐首选网易云音乐听音乐首选网易云音乐听音乐首选网易云音乐听音乐首选网易云音乐',
        'number': '100W+',
        'appId': 'wx06138759bb16c2f7',
        'path': '',
        'extraData': '12123',
      },
      {
        'icon': '../../image/baidu.png',
        'name': '百度地图',
        'description': '迷路不用怕百度来帮你',
        'number': '100W+',
        'appId': 'wx06138759bb16c2f7',
        'path': '',
        'extraData': '12123',
      },
      {
        'icon': '../../image/zhihu.png',
        'name': '知乎',
        'description': '有问题上知乎',
        'number': '100W+',
        'appId': 'wx06138759bb16c2f7',
        'path': '',
        'extraData': '12123',
      },
      {
        'icon': '../../image/zhihu.png',
        'name': '知乎',
        'description': '有问题上知乎',
        'number': '100W+',
        'appId': 'wx06138759bb16c2f7',
        'path': '',
        'extraData': '12123',
      },
    ],
    adData:{
      img_url:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1534406309&di=d7122ffb1674a813ce124c0f7f8c907e&src=http://www.uimaker.com/uploads/allimg/20150317/1426578302125011.jpg',
      descriptiton:'好好玩的游戏你尝试一下吧',
      icon_url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534418599978&di=db045127ae932076735d91d415a4349d&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01e286575c3fe40000018c1b2abf3c.png%401280w_1l_2o_100sh.png',
      name:'好玩的游戏',
      appId: 'wx06138759bb16c2f7',
      path: '',
      extraData: '12123'
    },
  },

  bannerClick: function(e) {
    console.log('我点击了banner轮播图');
  },

  iconClick:function(e) {
    console.log('我点击了icon推荐');
  },

  adClick:function(e) {
    console.log('我点击了推荐广告');
  },

  /**
   * 点击关闭事件 -- 遮罩层隐藏， 关闭弹框
   */
  clickClose:function(e) {
    console.log('我要关闭弹框');

    this.setData({
      showModal: false,
      screenHidden: true,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  onShareAppMessage: function () {
  
  }
})