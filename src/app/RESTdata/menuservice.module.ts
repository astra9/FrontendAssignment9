import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpDataSource, URL, URL_CATEGORIES } from "./HTTPclient";


@NgModule({
    imports: [HttpClientModule],
    providers: [HttpDataSource,
        {
            provide: URL, 
            useValue: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/"
        },
        {
            provide: URL_CATEGORIES, 
            useValue: "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json"
        }
    ]

})
export class MenuDataModel{}