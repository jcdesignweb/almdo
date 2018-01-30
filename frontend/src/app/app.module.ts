import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { GridComponent } from './components/grid/grid.component';

import { MaterializeModule } from "angular2-materialize";
import { CellComponent } from './components/cell/cell.component';
import { StarComponent } from './components/generic/star/star.component';

import { CloudService } from './shared/cloud.service';
import { CommonService } from './shared/common.service';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    GridComponent,
    CellComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [CloudService,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
