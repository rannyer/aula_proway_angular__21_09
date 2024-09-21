import { CanActivateFn } from '@angular/router';
import { jwtDecode } from "jwt-decode";
import { DecodedToken } from '../models/auth';

export const authGuard: CanActivateFn = (route, state) => {
  
  if(localStorage.getItem("access-token")){
    const token = localStorage.getItem("access-token") as string
    const decoded =  jwtDecode<DecodedToken>(token)
    if(decoded.email == "admin@mail.com"){
      return true
    }
  }
  
  return false;
};
