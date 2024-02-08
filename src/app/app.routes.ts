import { Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';

export const routes: Routes = [
  { path: '', component: AddItemComponent, pathMatch: 'full' },
];
