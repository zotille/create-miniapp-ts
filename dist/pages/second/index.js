"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
var store_1 = require("../../store/store");
var index_1 = require("../../../omix/index");
index_1.create(store_1.default, {
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    onTap: function () {
        store_1.default.data.data += 1;
        store_1.default.freshColor();
        wx.navigateBack();
    },
    onLoad: function () {
    }
});
