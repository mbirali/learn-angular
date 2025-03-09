import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "la-home",
  imports: [RouterLink],
  template: `
    <div class="home card">
      <button>
        <a routerLink="users"> GET ALL USERS </a>
      </button>
    </div>
  `,
  styles: ``,
})
export class HomeComponent {}
