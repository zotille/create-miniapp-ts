//index.js
//获取应用实例
const app = getApp()
import store from '../../store/store'
import {create} from '../../../omix/index'
import { formatTime } from '../../utils/util'

interface IndexData {
  motto: string
  userInfo: {}
  hasUserInfo: boolean
  canIUse: boolean
}
interface IndexOption {
  onTap: () => void
}
create<IndexData, IndexOption>(store, {
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  onTap: function () {
    store.data.data += 1;
    store.freshColor();
    wx.navigateTo({
      url: '../second/index'
    })
  },
  onLoad: function () {
    console.log(formatTime(new Date()))
  }
})
