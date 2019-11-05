//index.js
//获取应用实例
const app = getApp()
import store from '../../store/store'
import { create } from '../../../omix/index'
import { formatTime } from '../../utils/util'
import Base from '../../base'

export interface IndexData {
  motto: string
  userInfo: {}
  hasUserInfo: boolean
  canIUse: boolean
}
class Index extends Base<IndexData>{
  data = {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  }
  //事件处理函数
  onTap = () => {
    store.data.data += 1;
    store.freshColor();
    wx.navigateTo({
      url: '../second/index'
    })
  }
  onLoad() {
  }
}

create(store, new Index())
