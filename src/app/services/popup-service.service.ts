import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private popupState = new BehaviorSubject<boolean>(false);
  popupState$ = this.popupState.asObservable();

  message: string="";

  showPopup(message: string) {
    this.message = message;
    this.popupState.next(true);
  }

  hidePopup() {
    this.popupState.next(false);
    this.message= "";
  }
}
