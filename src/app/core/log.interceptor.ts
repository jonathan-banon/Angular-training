import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     console.log("Request =>",req); // J'affiche la requête
       // Je passe la requête à la suite des interceptors cachés d'angular
       // Et je retourne ce résultat pour que la requête ait bien lieu
     return next.handle(req).pipe(
        tap((response) => {
            if (response instanceof HttpResponse) {
                
            }
        })
     )
  }
}