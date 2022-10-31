import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LogService {
    constructor(private http: HttpClient) {}

    getApi(): void {
        this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe((data) => {
            console.log('data => ', data)
        })
    }
}