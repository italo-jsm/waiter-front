
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { LoginService } from '../service/login.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private injector: Injector){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const service: LoginService = this.injector.get(LoginService)
        if(service.isLoggedIn() && request.url.startsWith(environment.API_BASE)){
            const authRequest = request.clone({
                setHeaders: {'Authorization': service.token}
            });
            return next.handle(authRequest);
        }else return next.handle(request)  
    }

}
