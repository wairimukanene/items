import { Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { AddItemComponent } from './add-item/add-item.component';

export const routes: Routes = [
  { path: '', redirectTo: '/item-list', pathMatch: 'full' },
  { path: 'item-list', component: ItemListComponent },
  { path: 'add-item', component: AddItemComponent }
];
