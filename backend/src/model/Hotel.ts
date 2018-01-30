import * as fs from 'fs';
import * as path from 'path';

export class Hotel {
    protected id: Number;
    private name: String;
    private stars: String;
    private price: Number;
    private image: String;
    private amenities: Array<{}>;
    
    constructor() {}

    // Getters & Setters

    public getId() {
        return this.id;
    }

    public setId(id) {
        this.id = id;
    }

    public getName() {
        return this.name;
    }

    public setName(name) {
        this.name = name;
    }

    public getStars() {
        return this.stars;
    }

    public setStars(stars) {
        this.stars = stars;
    }

    public getPrice() {
        return this.price;
    }

    public setPrice(price) {
        this.price = price;
    }

    public getImage() {
        return this.image;
    }

    public setImage(image) {    
        this.image = image;
    }

    public getAmenities() {
        return this.amenities;
    }

    public setAmenities(amenities) {
        this.amenities = amenities;
    }

    // Data
    public getAll() {
        return this.getAllFromJSON();
    }

    public filter(name, stars:Array<Number>, callback) {
        let all = this.getAllFromJSON();
        let filtered = [];

        let self = this;
        
        all.forEach( function(hotel, id) { 
            if(hotel["name"].includes(name) && self.checkStars(stars, hotel["stars"])) {
                filtered.push(hotel);
            }   
            if (id === all.length - 1) {
                callback(filtered);
            }        
       });
    }


    private checkStars(starsFilter, modelStar): boolean {
        if(starsFilter.length == 0) return true;

        return (starsFilter.includes(modelStar));

        
    }

    private getAllFromJSON() {
        var content = fs.readFileSync(path.join(__dirname, '../..', '/data/data.json'), 'utf8');
        
        return JSON.parse(content);

    }
}