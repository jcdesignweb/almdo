"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var Hotel = /** @class */ (function () {
    function Hotel() {
    }
    // Getters & Setters
    Hotel.prototype.getId = function () {
        return this.id;
    };
    Hotel.prototype.setId = function (id) {
        this.id = id;
    };
    Hotel.prototype.getName = function () {
        return this.name;
    };
    Hotel.prototype.setName = function (name) {
        this.name = name;
    };
    Hotel.prototype.getStars = function () {
        return this.stars;
    };
    Hotel.prototype.setStars = function (stars) {
        this.stars = stars;
    };
    Hotel.prototype.getPrice = function () {
        return this.price;
    };
    Hotel.prototype.setPrice = function (price) {
        this.price = price;
    };
    Hotel.prototype.getImage = function () {
        return this.image;
    };
    Hotel.prototype.setImage = function (image) {
        this.image = image;
    };
    Hotel.prototype.getAmenities = function () {
        return this.amenities;
    };
    Hotel.prototype.setAmenities = function (amenities) {
        this.amenities = amenities;
    };
    // Data
    Hotel.prototype.getAll = function () {
        return this.getAllFromJSON();
    };
    Hotel.prototype.filter = function (name, stars, callback) {
        var all = this.getAllFromJSON();
        var filtered = [];
        var self = this;
        all.forEach(function (hotel, id) {
            if (hotel["name"].includes(name) && self.checkStars(stars, hotel["stars"])) {
                filtered.push(hotel);
            }
            if (id === all.length - 1) {
                callback(filtered);
            }
        });
    };
    Hotel.prototype.checkStars = function (starsFilter, modelStar) {
        if (starsFilter.length == 0)
            return true;
        return (starsFilter.includes(modelStar));
    };
    Hotel.prototype.getAllFromJSON = function () {
        var content = fs.readFileSync(path.join(__dirname, '../..', '/data/data.json'), 'utf8');
        return JSON.parse(content);
    };
    return Hotel;
}());
exports.Hotel = Hotel;
//# sourceMappingURL=Hotel.js.map