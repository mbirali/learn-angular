import { Routes } from "@angular/router";
import { Error404Component } from "./components/error-404/error-404.component";
import { HomeComponent } from "./components/home/home.component";
import { UnauthorizedComponent } from "./components/unauthorized/unauthorized.component";
import { adminGuard } from "./users/admin.guard";
import { UserDetailsComponent } from "./users/user-details/user-details.component";
import { UsersListComponent } from "./users/users-list/users-list.component";
import { userResolver, usersResolver } from "./users/users.resolver";

export const routes: Routes = [
  {
    path: "", // "/"
    component: HomeComponent,
    title: "Home Page",
  },
  {
    path: "users",
    component: UsersListComponent,
    resolve: {
      users: usersResolver,
    },
    title: "Users",
  },
  {
    path: "users/:userId",
    component: UserDetailsComponent,
    resolve: {
      user: userResolver,
    },
    canActivate: [adminGuard],
  },
  {
    path: "unauthorized",
    component: UnauthorizedComponent,
    resolve: {
      users: usersResolver,
    },
  },
  {
    path: "**",
    component: Error404Component,
  },
];
