import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthanticationService, AccessToken } from '../service/authantication.service';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router'; // Import Router

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthanticationService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem(AccessToken); 

    // Exclude login and registration requests
    const excludedUrls = ['/api/user/login', '/api/user/register']; // Adjust paths as necessary
    const isExcluded = excludedUrls.some(url => req.url.includes(url));

    // If the request is to an excluded URL, skip token injection
    if (isExcluded) {
      console.log('Request excluded from interceptor:', req.url);
      return next.handle(req); // Pass through the original request
    }

    // If no token, redirect to login
    if (!token) {
      this.router.navigate(['/login']); // Adjust the route as necessary
      return throwError(() => new Error('No token, redirecting to login'));
    } 

    console.log('Retrieved token:', token);  // Log the token for debugging
    console.log('Intercepting request to:', req.url); // Log the request URL for debugging

    // If the token is present, clone the request and add the Authorization header
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    console.log('Request with token:', clonedRequest);
    return next.handle(clonedRequest);  // Pass the cloned request with the token
  }
}
