import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  @Output() itemAdded = new EventEmitter<string>();
  newItem = '';

  addItem() {
    this.itemAdded.emit(this.newItem);
    this.newItem = '';
  }
}
