import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Items } from "./items.component";

@NgModule({
    imports:[BrowserModule, RouterModule],
    declarations:[
        Items
    ],
    exports:[Items]
})
export class ItemsModule{

}