import { Component, OnInit, OnDestroy } from '@angular/core';
import { CloudService } from '../../shared/cloud.service';
import { CommonService } from '../../shared/common.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})


export class FilterComponent implements OnInit {
  public static kFilterOpen = 'open' ;
  public static kFilterClose: string = 'close';

  subscription: Subscription;


  public hotelNameModel: string;

  private chSelected: any;

  public showFilterStars : boolean;
  public showFilterInputs : boolean;

  public arrowFilterInputsIsClose : string;
  public arrowFilterStarsIsClose : string;

  public mobileFilterStateClass : string;
  
  constructor(private cloudService: CloudService, private commonService: CommonService) { 
    this.subscription = this.commonService.getSubscription().subscribe(message => { 
      this.init();
    });
  }

  ngOnInit() {

    this.init();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private init() {

    this.hotelNameModel = "";

    this.chSelected = {
      chAll: false,
      ch1: false,
      ch2: false,
      ch3: false,
      ch4: false,
      ch5: false
    };

    this.mobileFilterStateClass = FilterComponent.kFilterClose;
    this.showFilterInputs = this.showFilterStars = false;
  }

  onAllStarsClick() {
    
    this.chSelected.ch1 = this.chSelected.chAll;
    this.chSelected.ch2 = this.chSelected.chAll;
    this.chSelected.ch3 = this.chSelected.chAll;
    this.chSelected.ch4 = this.chSelected.chAll;
    this.chSelected.ch5 = this.chSelected.chAll;
  }

  onSelectStarAt(chElement) {
    
    this.chSelected[chElement] = !this.chSelected[chElement];
  }

  onToggleFilter(type:string) {
    if(type == "inputs") {
      this.showFilterInputs = !this.showFilterInputs;
    } else {
      this.showFilterStars = !this.showFilterStars;
    }
  }

  toggleMobileFilter() {
    this.mobileFilterStateClass = (this.mobileFilterStateClass == FilterComponent.kFilterOpen)? 
      FilterComponent.kFilterClose : FilterComponent.kFilterOpen;
  }

  filter() {
        
    this.cloudService.filter(this.hotelNameModel, this.chSelected);
  }


}
