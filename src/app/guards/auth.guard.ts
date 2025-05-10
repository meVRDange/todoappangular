import { CanActivateFn , RedirectCommand } from '@angular/router';
import { getAuth } from 'firebase/auth';

export  const  authGuard: CanActivateFn  = async (route, state) => {
  const auth =  getAuth();
  try{
    await auth.currentUser?.reload()
      const user = auth.currentUser;
      if (user !=null && user.emailVerified) {
          return true;
      }
      else {
       return new RedirectCommand(['/login'])
      }
    }  
};
