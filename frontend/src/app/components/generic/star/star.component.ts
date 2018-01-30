import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  private _total = 0;
  @Input('total') total: number;
  

  private stars: any;
  constructor() {}

  ngOnInit() {
    this.stars = [];
    for(let i=0; i<this.total; i++) 
      this.stars.push(new Set());
  }

}
