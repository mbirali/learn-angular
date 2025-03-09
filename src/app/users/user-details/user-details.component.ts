import { JsonPipe } from "@angular/common";
import { Component, input } from "@angular/core";
import { User } from "../user.type";
import { UserAddressPipe } from "../user-address.pipe";

@Component({
  selector: "la-user-details",
  imports: [UserAddressPipe],
  template: `
    <h1>User Details</h1>
    <div class="card" laHighlight>
      <h4>{{ user()?.name }}</h4>
      <div>
        <b> {{ user()?.email }} </b>
      </div>
      <div>{{ user()?.address! | userAddress }}</div>
    </div>
  `,
  styles: ``,
})
export class UserDetailsComponent {
  user = input<User>();
}
