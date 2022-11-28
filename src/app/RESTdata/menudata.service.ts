import { Injectable } from "@angular/core";
import { MenuItem } from "./MenuItem";
import { HttpDataSource } from "./HTTPclient"
import { Category } from "./Category";

@Injectable()
export class MenuDataService{
    private categories: Category[]=Array<Category>();
    private menuItems: MenuItem[]=Array<MenuItem>();
    
    constructor(private dataSource: HttpDataSource){
        this.dataSource.getAllCategories().subscribe(data => {
            for(let i=0; i<data.length; i++){
                let tmpData=data[i];
                let newCategory=new Category(tmpData.id,
                    tmpData.short_name, 
                    tmpData.name, 
                    tmpData.special_instructions, 
                    tmpData.url);
                this.categories.push(newCategory);
            }
        });
    }

    getAllCategories(): Category[]{
        return this.categories;
    }
   
    getItemsByCategory(category: string){
        return this.dataSource.getItemsForCategory(category); 
    }

    getMenuItems(){
        return this.menuItems;
    }
}