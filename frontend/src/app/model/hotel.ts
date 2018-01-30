export class Hotel {
    protected id: Number;
    private name: String;
    private stars: Number;
    private price: Number;
    private image: String;
    private amenities: Array<{}>;
    
    constructor(response:any) {
        this.id = response["id"];
        this.name = response["name"];
        this.stars = response["stars"];
        this.price = response["price"];
        this.image = response["image"];
        this.amenities = response["amenities"];        
    }

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

}