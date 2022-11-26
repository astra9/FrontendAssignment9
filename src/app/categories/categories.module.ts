import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { Categories } from "./categories.component";

@NgModule({
    imports:[BrowserModule, RouterModule],
    declarations:[
        Categories
    ],
    exports:[Categories]
})
export class CategoriesModule{

}