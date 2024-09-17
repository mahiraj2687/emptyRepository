import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';  // For routing
import { CommonModule } from '@angular/common';  // Provides common directives like *ngIf and *ngFor
import { FormsModule } from '@angular/forms';    // For template-driven forms

@Component({
  selector: 'app-root',
  standalone: true,  // Standalone component
  imports: [RouterModule, RouterOutlet, CommonModule, FormsModule],  // Importing necessary modules
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-1';
  home = '/home';

  // Example form binding variable
  userInput: string = '';  // For demonstration purposes

  // Sample method to change title
  updateTitle(newTitle: string) {
    this.title = newTitle;
  }
}
