"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
var store_1 = require("../../store/store");
var index_1 = require("../../../omix/index");
var util_1 = require("../../utils/util");
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
        wx.navigateTo({
            url: '../second/index'
        });
    },
    onLoad: function () {
        console.log(util_1.formatTime(new Date()));
    }
});
