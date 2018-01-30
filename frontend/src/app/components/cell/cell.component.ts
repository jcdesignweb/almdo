import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../../model/hotel';

@Component({
  selector: 'grid-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input('hotel') hotel: any;

  constructor() {}

  ngOnInit() {}

}
