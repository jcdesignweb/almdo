import { Hotel } from '../model/Hotel';

export class HotelController {
    private hotel: Hotel;
    constructor() {
        this.hotel = new Hotel();
    }
    
    public getAll() {
        return this.hotel.getAll();
    }

    public filter(name, stars, callback) {

        let _stars = [];
        if(stars["ch1"] === true)
            _stars.push(1);
        if(stars["ch2"] === true)
            _stars.push(2);
        if(stars["ch3"] === true)
            _stars.push(3);
        if(stars["ch4"] === true)
            _stars.push(4);
        if(stars["ch5"] === true)
            _stars.push(5);

        return this.hotel.filter(name, _stars, callback);
    }

}
