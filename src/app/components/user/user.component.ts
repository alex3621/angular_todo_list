import { Component, Input, input, Output, EventEmitter, output } from '@angular/core';
import { DUMMY_USERS } from '../../dummy_user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!:{
    id: string,
    name: string,
    avatar: string
  }
  @Input ({required:true}) selected!:boolean;
  @Output() select = new EventEmitter();



  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser(){

    console.log('image path is '+ this.imagePath)
    this.select.emit(this.user.id);
  }
}
