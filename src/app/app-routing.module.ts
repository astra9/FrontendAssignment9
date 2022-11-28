import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Categories } from './categories/categories.component';
import { Home } from './home/home.component';
import { Items } from './items/items.component';

const routes: Routes = [
  { path: "categories", component: Categories},
  { path: "items/:category", component: Items},
  { path: "" , component: Home }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
