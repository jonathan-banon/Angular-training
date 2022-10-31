import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public role: String = "USER";

  constructor() { }
}
