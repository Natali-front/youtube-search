import { NgModule } from "@angular/core";
import { CardComponent } from "./card.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations:[
        CardComponent
    ],
    imports:[
        SharedModule,
        CommonModule 
    ],
    exports:[
        CardComponent
    ]
    
})
export class CardModule {}
