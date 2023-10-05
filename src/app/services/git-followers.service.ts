import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service.';

@Injectable({
  providedIn: 'root',
})
export class GitFollowersService extends DataService {
  constructor(http: HttpClient) {
    super('https://dummyjson.com/users', http);
  }
}
