import { NgModule } from "@angular/core";
import { CardComponent } from "./card.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-routing.module";


@NgModule({
    declarations:[
        CardComponent
    ],
    imports:[
        SharedModule,
        CommonModule,
        AppRoutingModule 
    ],
    exports:[
        CardComponent
    ]
    
})
export class CardModule {}
