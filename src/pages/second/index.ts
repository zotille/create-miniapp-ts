const app = getApp()
import store from '../../store/store'
import { create } from '../../../omix/index'
import Base from '../../base'
import { IndexData } from '../index'

class Second extends Base<IndexData> {
  data = {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  }
  onTap() {
    store.data.data += 1;
    store.freshColor();
    wx.navigateBack()
  }
  onLoad() {
  }
}
create(store, new Second)