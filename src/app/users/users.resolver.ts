import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { UsersService } from "./users.service";
import { User } from "./user.type";

export const usersResolver: ResolveFn<User[]> = (route, state) => {
  return inject(UsersService).getAll();
};

export const userResolver: ResolveFn<User> = (route, state) => {
  return inject(UsersService).getOne(+route.paramMap.get("userId")!);
};
