type IAnyObject = Record<string, any>
class Base<T = {}, D = {}> implements WechatMiniprogram.Page.ILifetime {
  onLoad(query: Record<string, string | undefined>): void {

  }
  onShow(): void {

  }
  onReady(): void {

  }
  onHide(): void {

  }
  onUnload(): void {

  }
  onPullDownRefresh(): void {

  }
  onReachBottom(): void {

  }
  onShareAppMessage(options: WechatMiniprogram.Page.IShareAppMessageOption): WechatMiniprogram.Page.ICustomShareContent {
    throw new Error("Method not implemented.");
  }
  onPageScroll(options: WechatMiniprogram.Page.IPageScrollOption): void {

  }
  onTabItemTap(options: WechatMiniprogram.Page.ITabItemTapOption): void {

  }
  onResize(options: WechatMiniprogram.Page.IResizeOption): void {

  }
  data!: T;
  setData!: (
    data: Partial<T> & IAnyObject,
    callback?: () => void,
  ) => void
}

export default Base