import { Component, Output, EventEmitter, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MyService } from '../my-service.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent {
  form: FormGroup;
  items: any[] = [];
  data: any;

  @Output() itemAdded = new EventEmitter<{ name: string, description: string }>();

  constructor(private formBuilder: FormBuilder, private myService: MyService) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.fetchData();
  }

 
  fetchData(): void {
    this.myService.getData().subscribe(data => {
      this.data = data;
    });
  }

  addItem() {
    if (this.form.valid) {
      this.myService.postData(this.form.value).subscribe(response => {
        console.log(response);
        this.items.push(this.form.value);
        this.itemAdded.emit(this.form.value);
        this.form.reset();
      });
    }
  }
}

@NgModule({
  declarations: [AddItemComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [AddItemComponent]
})
export class AddItemModule { }
