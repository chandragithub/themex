import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private colorSource = new BehaviorSubject<any>([]);
  currentColor = this.colorSource.asObservable();

  constructor() { console.log(this.currentColor); }

  changeColor(color: any) {
    this.colorSource.next(color);
  }

}
