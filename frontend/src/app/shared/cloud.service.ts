import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Hotel } from 'app/model/hotel';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CloudService {
  public hotels : Array<Hotel>;

  public hotelsHasBeenChanged: Subject<Array<Hotel>> = new Subject();

  private kBaseServerURI = "http://localhost:3000";

  constructor (
    private http: Http
  ) {
  }

  getAllHotels() {
    let self = this;
    this.http.get(this.kBaseServerURI + "/api/hotel/list")
    .map((res:Response) => res.json()).subscribe(response => {

      let hotels = [];
      
      response.forEach(hotel => {
        hotels.push(new Hotel(hotel));
      });

      this.hotelsHasBeenChanged.next(hotels);
    });
  }

  filter(hotelName: string, stars: any) {
    this.http.post(this.kBaseServerURI + "/api/hotel/filter", {"hotel": hotelName, "stars": stars})
    .map((res:Response) => res.json()).subscribe(response => {

      let hotels = [];
      
      response.forEach(hotel => {
        hotels.push(new Hotel(hotel));
      });

      this.hotelsHasBeenChanged.next(hotels);
      
    });
  }

}
