import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() cancel_clicked = new EventEmitter<void>();

  cancel_add()
  {
    console.log('cancelling');
    this.cancel_clicked.emit();
  }
}
