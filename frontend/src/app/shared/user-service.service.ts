import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  url: string = environment.apiBaseUrl + '/User';

  constructor(private http: HttpClient) {}

  modifyName(name: string) {
    return this.http.post(this.url, { name });
  }
}
