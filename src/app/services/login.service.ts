import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  email :Observable<string> = new Observable();
  user :{email:string | null} = {email:null};
  constructor(private router: Router) { }
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
        this.user = {
          email: userCredential.user.email
        };
        this.router.navigate(['']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error([errorCode, errorMessage]);
      })
  }

  gatUserEmail() {
    return this.user.email
  }
}