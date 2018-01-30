import { Component, OnInit } from '@angular/core';
import { CloudService } from '../../shared/cloud.service';
import { CommonService } from '../../shared/common.service';
import { Hotel } from '../../model/hotel';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  public hotels: Array<Hotel>;

  constructor(private cloudService: CloudService, private commonService: CommonService) { } 
  
  ngOnInit() {
    let self = this;

    this.cloudService.hotelsHasBeenChanged.subscribe((hotels) => {
      this.hotels = hotels;
    });

    this.getHotels();
  }

  public clearFilters() {
    this.getHotels();
    this.commonService.clearForm();
  }

  private getHotels() {
    this.cloudService.getAllHotels();
  }
}
