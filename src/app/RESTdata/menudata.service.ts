import { Injectable } from "@angular/core";
import { MenuItem } from "./MenuItem";
import { HttpDataSource } from "./HTTPclient"
import { Category } from "./Category";

@Injectable()
export class MenuDataService{
    private categories: Category[]=Array<Category>();
    private menuItems: MenuItem[]=Array<MenuItem>();
    constructor(private dataSource: HttpDataSource){
        this.dataSource.getAllCategories().subscribe(data => console.log(data));//this.categories=data);
    }

    getAllCategories(): Category[]{
        console.log(this.categories);
        return this.categories;
    }

    getItemsByCategory(category: string){
        this.dataSource.getItemsForCategory(category).subscribe(
            data => this.menuItems=data.menu_items
        );
    }

    getMenuItems(){
        return this.menuItems;
    }
}