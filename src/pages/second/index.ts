const app = getApp()
import store from '../../store/store'
import {create} from '../../../omix/index'

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
  onTap: function () {
    store.data.data += 1;
    store.freshColor();
    wx.navigateBack()
  },
  onLoad: function () {
  }
})
