import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { UsersService } from "./users.service";
import { map } from "rxjs";

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return inject(UsersService)
    .getOne(+route.paramMap.get("userId")!)
    .pipe(
      map((user) => {
        if (user.isAdmin) {
          console.log("[GUARD]: User is admin");

          router.navigateByUrl("unauthorized");
          return false;
        }
        console.log("[GUARD]: User is NOT admin");
        return true;
      })
    );
};
