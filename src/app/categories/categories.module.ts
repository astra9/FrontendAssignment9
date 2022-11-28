import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { MenuDataModel } from "../RESTdata/menuservice.module";
import { Categories } from "./categories.component";

@NgModule({
    imports:[BrowserModule, RouterModule, MenuDataModel],
    declarations:[
        Categories
    ],
    exports:[Categories]
})
export class CategoriesModule{}