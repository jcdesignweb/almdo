"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Router = /** @class */ (function () {
    function Router() {
        var router = express.Router();
        var app = express();
        app.use('/api', router);
        router.route('/hotel/list').get(function (req, res) {
        });
        router.route('/hotel/filter').get(function (req, res) {
        });
    }
    return Router;
}());
exports.Router = Router;
//# sourceMappingURL=index.js.map