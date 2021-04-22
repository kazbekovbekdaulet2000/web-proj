import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
// import { isLoged} from '../app.component'
@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const token = localStorage.getItem('token');
        if (token){
            console.log('JWT ' + token);
            const newReq = req.clone({
                headers: req.headers.append('Authorization', 'JWT '+ token)
            });
            return next.handle(newReq);
        }
        return next.handle(req);
    }

}