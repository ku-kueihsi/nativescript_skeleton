import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My App"></ActionBar>
    <!-- Your UI components go here -->
  `
})
export class AppComponent {
  // Your TypeScript logic goes here
  constructor() {
    // Set your break point here in vscode. It should stop here.
    console.log("Hello World");
  }
}
