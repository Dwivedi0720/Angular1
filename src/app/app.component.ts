import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: { text: string; completed: boolean }[] = [];
  newTask = '';

  // Initialize the checkbox values for subtasks
  outsideCompleted = false;
  restaurantCompleted = false;
  froyoCompleted = false;
  punjabiCompleted = false;

  addTask() {
    if (this.newTask.trim() === '') return;
    this.tasks.push({ text: this.newTask, completed: false });
    this.newTask = '';
  }
}