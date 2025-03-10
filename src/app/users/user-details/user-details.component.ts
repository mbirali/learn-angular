import { Component, input } from "@angular/core";
import { UserAddressPipe } from "../user-address.pipe";
import { User } from "../user.type";

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
