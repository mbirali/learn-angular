import { HttpEventType, HttpInterceptorFn } from "@angular/common/http";
import { tap } from "rxjs";

export const usersInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`[INTERCEPTOR] [REQUEST]: ${req.url}`);
  return next(req).pipe(
    tap((event) => {
      if (event.type === HttpEventType.Response) {
        console.log(
          `[INTERCEPTOR] [RESPONSE]: ${req.url} (returned a response with status ${event.status})`
        );
      }
    })
  );
};
