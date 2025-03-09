import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";

@Component({
  selector: "la-root",
  imports: [RouterOutlet, ToolbarComponent],
  template: `
    <la-toolbar />
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = "learn-angular";
}
