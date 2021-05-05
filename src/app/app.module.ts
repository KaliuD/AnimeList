import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './components/cards/list/list.component';
import { ContentComponent } from './components/cards/content/content.component';
import { NavComponent } from './components/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { AnimeFormComponent } from './components/anime-form/anime-form.component';
import { CardsModule } from './components/cards/cards.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AnimeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
