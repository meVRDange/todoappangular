import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { PopupService } from '../../../services/popup-service.service';


@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)'}),
        animate('300ms ease-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class PopupComponent implements OnInit{
  
  constructor(private popupService : PopupService) {}

  showPopup:boolean = true;
  message:string = "default message";
 

  ngOnInit(): void {
    console.log(`from service ${this.message}`);
    this.popupService.popupState$.subscribe(popupState => {
      this.showPopup = popupState;
      if(this.showPopup) {
        this.message= this.popupService.message;
        console.log(`from service ${this.message}`);
        setTimeout(() => {
        }, 100);

        setTimeout(() => {
          this.popupService.hidePopup();
        }, 3100);
      }
    })
  }
}
