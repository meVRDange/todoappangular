import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private popupState = new BehaviorSubject<boolean>(true);
  popupState$ = this.popupState.asObservable();
  message: string="";

  showPopup(message: string) {
    console.log(`${message}`);
    this.message = message;
    this.popupState.next(true);
  }

  hidePopup() {
    this.popupState.next(false);
    this.message= "";
  }
}
