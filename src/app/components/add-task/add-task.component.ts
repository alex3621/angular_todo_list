import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() cancel_clicked = new EventEmitter<void>();
  enteredTitle=''
  enteredSummary=''
  enteredDueDate=''

  cancel_add()
  {
    console.log('cancelling');
    this.cancel_clicked.emit();
  }
  onSubmit(){
    
  }
}
