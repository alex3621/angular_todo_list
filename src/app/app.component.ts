import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { TasksComponent } from "./tasks/tasks.component";
import { DUMMY_USERS } from './dummy_user';
import { AddTaskComponent } from './components/add-task/add-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf, AddTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
users = DUMMY_USERS
selectedUserId?:string;
showAddTask= false;

get selectedUser(){
  return this.users.find((user)=> user.id === this.selectedUserId)!; 
}

 onSelectUser(id:string){
  this.selectedUserId=id;
 }

 onAddTaskClicked() {
  this.showAddTask = true;
}

onAddTaskClose() {
  console.log('cancel clicked');
  this.showAddTask = false;
}
}
