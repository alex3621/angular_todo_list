import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { TasksComponent } from "./tasks/tasks.component";
import { DUMMY_USERS } from './dummy_user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
users = DUMMY_USERS
selectedUserId= 'u1'

get selectedUser(){
  return this.users.find((user)=> user.id === this.selectedUserId)!; 
}

 onSelectUser(id:string){
  this.selectedUserId=id;
 }
}
