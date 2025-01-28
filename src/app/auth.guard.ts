import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router: Router = inject(Router);

  // Check if user is logged in
  const isLoggedIn = !!localStorage.getItem('loginUser');

  // Protect routes that require authentication
  if (!isLoggedIn && ['/profile', '/'].includes(state.url)) {
    router.navigate(['/login']); // Redirect to login if not logged in
    return false;
  }

  // Prevent logged-in users from accessing the login page
  if (isLoggedIn && state.url === '/login') {
    router.navigate(['/']); // Redirect to root
    return false;
  }

  return true; // Allow navigation
};
