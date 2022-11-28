import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Categories } from './categories/categories.component';
import { CategoriesResolver } from './categories/categories.resolver';
import { Home } from './home/home.component';
import { Items } from './items/items.component';
import { ItemsResolver } from './items/items.resolver';

const routes: Routes = [
  { path: "categories", component: Categories, resolve:{categories: CategoriesResolver}},
  { path: "items/:category", component: Items, resolve:{items: ItemsResolver}},
  { path: "" , component: Home }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
