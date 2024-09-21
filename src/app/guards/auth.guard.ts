import { CanActivateFn, Router } from '@angular/router';
import { AuthanticationService } from '../service/authantication.service';
import { inject } from '@angular/core';

// Define and export your CanActivate function
export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthanticationService);
  const router = inject(Router);

  const isAuthenticated = authService.isAuthenticated();  // Ensure method name is correct

  if (isAuthenticated) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
