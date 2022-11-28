import { Component } from "@angular/core";
import { Category } from "../RESTdata/Category";
import { MenuDataService } from "../RESTdata/menudata.service";
import { MenuItem } from "../RESTdata/MenuItem";

@Component({
    selector: "categories-component",
    templateUrl: "./categories.template.html"
})
export class Categories{
    constructor(public dataRepo: MenuDataService){
    }
    public categories: Category[]= new Array<Category>();

    ngOnInit(){
        this.categories=this.dataRepo.getAllCategories();
    }

    getCategories(){
        return this.dataRepo.getAllCategories();
    }
}