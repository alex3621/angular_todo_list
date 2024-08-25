import { Component, Input , Output, EventEmitter} from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTask } from '../components/add-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name! : string
  @Input({required: true}) userId! : string
  @Output() add_clicked = new EventEmitter<boolean>();
  @Output() cancel_clicked = new EventEmitter<boolean>();

  constructor(private taskService : TasksService){}

  get selectedUserTasks (){
    return this.taskService.getUserTasks(this.userId);
  }

  onCompleteTask(id:string){
    return this.taskService.removeTask(id);
  }

  addTask()
  {
    console.log('add task clicked');
    this.add_clicked.emit(true);
  }

  cancel_addTask()
  {
    console.log('cancel task clicked');
    this.cancel_clicked.emit(true);
  }

}
