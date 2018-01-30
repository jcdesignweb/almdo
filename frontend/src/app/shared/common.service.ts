import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';


 
@Injectable()
export class CommonService {
    private filterClear = new Subject<any>();
 
    clearForm() {
      
      this.filterClear.next();
    }
 
    getSubscription(): Observable<any> {
        return this.filterClear.asObservable();
    }
}