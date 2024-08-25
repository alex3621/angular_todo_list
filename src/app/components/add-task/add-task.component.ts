import { Component, EventEmitter, Output, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';
import { TasksService } from '../../tasks/tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Input () userId!:string;
  @Output() cancel_clicked = new EventEmitter<void>();
  enteredTitle=''
  enteredSummary=''
  enteredDueDate=''
  private taskService = inject(TasksService)

  cancel_add()
  {
    console.log('cancelling');
    this.cancel_clicked.emit();
  }
  onSubmit(){
    this.taskService.addTask({
      title:this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate
    }, this.userId)
    this.cancel_add();
  }
}
