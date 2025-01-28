import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { UserService } from './services/user.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router: Router = inject(Router);
  const userService = inject(UserService);

  const isLoggedIn = !!userService.getUser();

  if (!isLoggedIn && ['/profile', '/'].includes(state.url)) {
    router.navigate(['/login']);
    return false;
  }

  if (isLoggedIn && state.url === '/login') {
    router.navigate(['/']);
    return false;
  }

  return true;
};
