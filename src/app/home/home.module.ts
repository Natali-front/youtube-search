import { NgModule } from "@angular/core";
import { CardModule } from "../card/card.module";
import { FavoriteCardModule } from "../favorite-card/favoriteCard.module";
import { FavoriteModule } from "../favorite/favorite.module";
import { SearchModule } from "../search/search.module";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations:[
        HomeComponent
    ],
    imports:[
        CardModule,
        FavoriteCardModule,
        FavoriteModule,
        SearchModule,
        CommonModule
    ]
    ,
    exports:[
        HomeComponent
    ]
})

export class HomeModule {}