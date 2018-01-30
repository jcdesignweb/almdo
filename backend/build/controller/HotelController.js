"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hotel_1 = require("../model/Hotel");
var HotelController = /** @class */ (function () {
    function HotelController() {
        this.hotel = new Hotel_1.Hotel();
    }
    HotelController.prototype.getAll = function () {
        return this.hotel.getAll();
    };
    HotelController.prototype.filter = function (name, stars, callback) {
        var _stars = [];
        if (stars["ch1"] === true)
            _stars.push(1);
        if (stars["ch2"] === true)
            _stars.push(2);
        if (stars["ch3"] === true)
            _stars.push(3);
        if (stars["ch4"] === true)
            _stars.push(4);
        if (stars["ch5"] === true)
            _stars.push(5);
        return this.hotel.filter(name, _stars, callback);
    };
    return HotelController;
}());
exports.HotelController = HotelController;
//# sourceMappingURL=HotelController.js.map