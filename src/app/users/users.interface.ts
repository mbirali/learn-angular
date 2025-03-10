import { Observable } from "rxjs";
import { User } from "./user.type";

export interface IUsersService {
  getAll(): Observable<User[]>;

  getOne(id: number): Observable<User>;
}
