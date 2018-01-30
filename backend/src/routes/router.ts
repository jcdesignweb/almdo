import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as simpleJSONFilter from 'simple-json-filter';
import * as cors from "cors";

import { Settings } from '../config/settings';
import { HotelController } from '../controller/HotelController';


export class Router {

    private router: any;
    constructor() {
        var app = express();
        this.router = express.Router();

        const options:cors.CorsOptions = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: Settings.clientURI,
            preflightContinue: false
        };
          
        //use cors middleware
        this.router.use(cors(options));

        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use('/api', this.router);

        app.listen(3000);

    }

    routes() {

        this.router.route('/hotel/list').get(function(req, res) {

            let hotelController = new HotelController();
            res.json(hotelController.getAll());

            
        });

        
        this.router.route('/hotel/filter').post(function(req, res) {
            
            let hotelController = new HotelController();
            hotelController.filter(req.body.hotel, req.body.stars, function(filtered) {
               res.json(filtered);
            });

        });

    }
}

