import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {UserModel} from "../models/user.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private api: ApiService<UserModel>) {
  }

  signup(user: UserModel): Observable<UserModel> {
    return this.api.save('/signup', user);
  }

  login(user: UserModel): Observable<UserModel> {
    return this.api.save('/login', user);
  }
}
