import { Component, input } from "@angular/core";
import { HighlightDirective } from "../../directives/highlight.directive";
import { RouterLink } from "@angular/router";
import { User } from "../user.type";
import { TitleCasePipe } from "@angular/common";

@Component({
  selector: "la-users-list",
  template: `
    <h1>Users List</h1>
    <div class="users-list">
      @for (user of users(); track $index) {
      <div class="card" laHighlight>
        <a [routerLink]="user.id + ''">
          <h4>{{ user.name | titlecase }}</h4>
        </a>
        <div>
          <b> {{ user.email }} </b>
        </div>
        <div>Admin: {{ user.isAdmin }}</div>
      </div>
      }
    </div>
  `,
  imports: [HighlightDirective, RouterLink, TitleCasePipe],
})
export class UsersListComponent {
  users = input<User[]>([]);
}
