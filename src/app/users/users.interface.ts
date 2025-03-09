import { Observable } from "rxjs";
import { User } from "./user.type";

export interface IUserService {
  getAll(): Observable<User[]>;

  getOne(id: number): Observable<User>;
}
