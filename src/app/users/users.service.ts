import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { IUserService } from "./users.interface";
import { map, Observable } from "rxjs";
import { User } from "./user.type";

@Injectable({
  providedIn: "root",
})
export class UsersService implements IUserService {
  private readonly USERS_ENDPOINT = "data/users.json";

  private _httpClient = inject(HttpClient);

  getAll(): Observable<User[]> {
    return this._httpClient.get<User[]>(this.USERS_ENDPOINT);
  }

  getOne(id: number): Observable<User> {
    return this._httpClient
      .get<User[]>(this.USERS_ENDPOINT)
      .pipe(map((users) => users[id - 1]));
  }
}
