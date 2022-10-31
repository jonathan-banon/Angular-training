import { Injectable } from "@angular/core";
import { 
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpClient
 } from "@angular/common/http";
 import { Observable, tap } from "rxjs";

 @Injectable()
 export class LogInterceptor implements HttpInterceptor {
    constructor() {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap((response) => {
                let start: number = new Date().getMilliseconds();
                if (response instanceof HttpResponse) {
                    console.log(start + 'milisecondes', response.url)
                }
            })
        )
    }
 }