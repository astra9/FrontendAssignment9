import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MenuDataService } from "../RESTdata/menudata.service";
import { MenuItem } from "../RESTdata/MenuItem";

@Component({
    selector: "items-component",
    templateUrl: "./items.template.html"
})
export class Items{
    public category;
    private menuItems: MenuItem[]=Array<MenuItem>();
    
    constructor(public dataRepo: MenuDataService, private activateRoute: ActivatedRoute){
        this.category=activateRoute.snapshot.params["category"];
        this.dataRepo.getItemsByCategory(this.category).subscribe(
            data => {
                let tmpMenuItems = new Array<MenuItem>();
                for(let i=0; i<data.menu_items.length; i++){
                    let tmpItem=new MenuItem(
                        data.menu_items[i].id,
                        data.menu_items[i].short_name,
                        data.menu_items[i].name,
                        data.menu_items[i].description,
                        data.menu_items[i].price_small,
                        data.menu_items[i].price_large,
                        data.menu_items[i].small_portion_name,
                        data.menu_items[i].large_portion_name
                    )
                    tmpMenuItems.push(tmpItem);
                    
                }
                this.menuItems = [...tmpMenuItems];
            }
        );
    }

    getItems(){
       return this.menuItems;
    }
}