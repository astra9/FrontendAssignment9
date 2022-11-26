import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpDataSource, URL, URL_CATEGORIES } from "./HTTPclient";
import { MenuDataService } from "./menudata.service";


@NgModule({
    imports: [HttpClientModule],
    providers: [HttpDataSource, MenuDataService,
        {
            provide: URL, 
            useValue: "https://davids-restaurant.herokuapp.com/menu_items.json?category="
        },
        {
            provide: URL_CATEGORIES, 
            useValue: "https://davids-restaurant.herokuapp.com/categories.json"
        }
    ]

})
export class MenuDataModel{}