import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { InterceptorService } from '../service/interceptor.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AccessInterceptor implements HttpInterceptor {
  public token: string | null = this.interService.accessToken;
  constructor(
    private interService: InterceptorService,
    private toastrService: ToastrService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: { 'access-token': '112233223432423423' },
    });

    return next.handle(request).pipe(
      map((res) => {
        console.log('Passed through the interceptor in response');
        return res;
      }),
      catchError((error: HttpErrorResponse) => {
        let errMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('This is Client Side Error');
        } else {
          console.log('This is Server  Side Error');
          this.toastrService.error('This is Server side Error','Error');
          errMsg = `Error Code :  ${error.status} , Message : ${error.message}`;
        }
        console.log(errMsg);
        return throwError(errMsg);
      })
    );
  }
}
