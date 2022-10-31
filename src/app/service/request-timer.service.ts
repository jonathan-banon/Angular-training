import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogInterceptor } from '../core/log.interceptor';

@Injectable({
  providedIn: 'root'
})
export class RequestTimerService {


  constructor(public http: HttpClient, public log: LogInterceptor) { }

  getRequestTimer():void {
    const startFrom = new Date().getTime();
  }
}
