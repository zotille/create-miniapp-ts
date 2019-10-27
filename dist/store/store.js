"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    data: {
        data: 1,
        color: '#fff'
    },
    freshColor: function () {
        this.data.color = "#" + Math.round(Math.random() * Math.pow(2, 4 * 6)).toString(16).padStart(6, 0);
    }
};
