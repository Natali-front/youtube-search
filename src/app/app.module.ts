import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CardModule } from './card/card.module';
import { FavoriteCardModule } from './favorite-card/favoriteCard.module';
import { SearchModule } from './search/search.module';
import { FavoriteModule } from './favorite/favorite.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    CardModule,
    FavoriteCardModule,
    SearchModule,
    FavoriteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };
