import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SafePipe } from 'src/app/pipes/safe.pipe';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FavoriteCardComponent } from './favorite-card/favoriteCard.component';
import { StylefavDirective } from './directives/stylefav.directive';





@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SafePipe,
    CardComponent,
    FavoriteComponent,
    FavoriteCardComponent,
    StylefavDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };
