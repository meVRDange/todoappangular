import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PopupService } from './popup-service.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // email :Observable<string> = new Observable();
  // user :{email:string | null} = {email:null};

  constructor(private router: Router,
    private popupService: PopupService
  ) { }

  signUp = async(email :string, password :string): Promise<string> => {
    try{
      const userCredential =  await  createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      this.popupService.showPopup("Verification email sent");
      return "success";
    } catch(error: any) {
      console.log(error);
      return error.message;
    }
  }

  createUserWithEmailAndPassword(email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        this.signInEmailAndPassword(email, password);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error([errorCode, errorMessage]);
      })
  }

  signInEmailAndPassword(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // this.user = {
        //   email: userCredential.user.email
        // };
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error([errorCode, errorMessage]);
      })
  }

  // gatUserEmail() {
  //   return this.user.email
  // }
}