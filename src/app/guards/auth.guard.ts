import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const user = localStorage.getItem("user-type")
  if(user == "admin"){
    return true
  }
  return false;
};
