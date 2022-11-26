import { Component } from "@angular/core";
import { Category } from "../RESTdata/Category";
import { MenuDataService } from "../RESTdata/menudata.service";

@Component({
    selector: "home-component",
    templateUrl: "./home.template.html"
})
export class Home{
    constructor(public dataRepo: MenuDataService){}
    public categories: Category[]= new Array<Category>();

    ngOnInit(){
        this.categories=this.dataRepo.getAllCategories();
    }

    getCategories(){
        return this.dataRepo.getAllCategories();
    }

    getItems(category: string){
        this.dataRepo.getItemsByCategory(category);
        return this.dataRepo.getMenuItems();
    }
}