"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var settings_1 = require("../config/settings");
var HotelController_1 = require("../controller/HotelController");
var Router = /** @class */ (function () {
    function Router() {
        var app = express();
        this.router = express.Router();
        var options = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: settings_1.Settings.clientURI,
            preflightContinue: false
        };
        //use cors middleware
        this.router.use(cors(options));
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use('/api', this.router);
        app.listen(3000);
    }
    Router.prototype.routes = function () {
        this.router.route('/hotel/list').get(function (req, res) {
            var hotelController = new HotelController_1.HotelController();
            res.json(hotelController.getAll());
        });
        this.router.route('/hotel/filter').post(function (req, res) {
            var hotelController = new HotelController_1.HotelController();
            hotelController.filter(req.body.hotel, req.body.stars, function (filtered) {
                res.json(filtered);
            });
        });
    };
    return Router;
}());
exports.Router = Router;
//# sourceMappingURL=router.js.map