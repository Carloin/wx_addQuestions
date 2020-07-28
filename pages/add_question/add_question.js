// pages/add_question/add_question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [],
    ansimages:[],
    lists:[],
    inputValue:"",
    optsTag:[],
    radioindex:0,
    change:false,
    count:1,
    scrollStop:false,
    scrollTop:0
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

  },
  
  // 获取访问相册的功能
  chooseImage(e) {
    // console.log(e)
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        const images = this.data.images.concat(res.tempFilePaths)
        // 限制最多只能留下9张照片
        const images1 = images.length <= 9 ? images : images.slice(0, 9)
        this.setData({
          images: images1
        })
      }
    })
  },
  removeImage(e) {
    var that = this;
    var images = that.data.images;
    // 获取要删除的第几张图片的下标
    const idx = e.currentTarget.dataset.idx
    // splice  第一个参数是下表值  第二个参数是删除的数量
    images.splice(idx,1)
    this.setData({
      images: images
    })
  },
 
  handleImagePreview(e) {
    const idx = e.target.dataset.idx
    const images = this.data.images
    wx.previewImage({
      current: images[idx],  //当前预览的图片
      urls: images,  //所有要预览的图片
    })
  },

// 答案解析 获取访问相册的功能
anschooseImage(e) {
  wx.chooseImage({
    sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
    sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
    success: res => {
      const images = this.data.ansimages.concat(res.tempFilePaths)
      // 限制最多只能留下3张照片
      const images1 = images.length <= 9 ? images : images.slice(0, 9)
      this.setData({
        ansimages: images1
      })
    }
  })
},
ansremoveImage(e) {
  var that = this;
  var images = that.data.ansimages;
  // 获取要删除的第几张图片的下标
  const idx = e.currentTarget.dataset.idx
  // splice  第一个参数是下表值  第二个参数是删除的数量
  images.splice(idx,1)
  this.setData({
    ansimages: images
  })
},

anshandleImagePreview(e) {
  const idx = e.target.dataset.idx
  const images = this.data.ansimages
  wx.previewImage({
    current: images[idx],  //当前预览的图片
    urls: images,  //所有要预览的图片
  })
},
addList: function(e){
  var  lists = this.data.lists;
  var optsTag=this.data.optsTag;
  let delid=e.currentTarget.dataset.id;
  console.log("test1"+this.data.lists.length)
  console.log(lists)
  var newData = {};
  lists.push(newData);//实质是添加lists数组内容，使for循环多一次
  optsTag.push("A")
  this.setData({
    lists: lists,
    optsTag:optsTag,
    radioindex:this.data.lists.length
  })  
},
delList: function (e) {
  console.log("删除")
  console.log(e)
// console.log(e.currentTarget.dataset)
  
  // console.log(this.data.lists[delid])
  let delid=e.currentTarget.dataset.id;
  console.log(delid)
  var lists = this.data.lists;
  lists.splice(delid,1);
  console.log(lists)      //实质是删除lists数组内容，使for循环少一次

  // for(let i=0;i<lists.length;i++){
  //   lists=lists.fill((value,index)=>{
  //     console.log(value.id)
  //     console.log(lists[delid])
  //     return index!=delid;
  //   })
  // }
  this.setData({
    lists: lists,
  })
},  
changeRadio:function(){
  // this.data.check=checked
},
changeImg:function(e){
 let count =this.data.count;
  console.log("点击了",count);
  count++;
  console.log("changeImg")
  let changed=true;
  this.setData({
    change: changed,
    count:count
  })

},
// touchStart(e){
//   console.log('滚起来', e);
//   this.setData({
//     scrollStop: false
//   })
// },
touchEnd(e){
//  console.log('停下来', e);
//  let offTop=this.data.currentTarget.offsetTop;
//  console.log(e.scrollTop)
  this.setData({
    scrollStop: true
  })
},
// onPageScroll: function (e) {
//   console.log("123"+e.scrollTop);
//   this.setData({
//     scrollTop: e.scrollTop
//   })
// },
pub_button(){
  wx.showToast({
    title: '保存成功',
    icon: 'success',
    duration: 3000
  })  
  
  },

})