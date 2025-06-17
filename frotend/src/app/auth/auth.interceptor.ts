import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {UserAuthService} from '../service/user-auth.service';
import {Token} from '@angular/compiler';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router,
              private UserAuthService: UserAuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.headers.get('No-Auth') === 'True'){
      return next.handle(req.clone());
    }
    const token = this.UserAuthService.getToken();
    req = this.addToken(req,token);
    return next.handle(req).pipe(
      catchError(
        (err: HttpErrorResponse) => {
          console.log(err.status);

          if(err.status === 401){
            this.router.navigate(['/login']);
          }else if(err.status === 401){
            this.router.navigate(['/forbidden']);
          }
          return throwError("something went wrong");
        }
      )
    );

  }
  private addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone(
      {
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }



}
