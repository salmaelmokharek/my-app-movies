import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaginatorModule } from 'primeng/paginator';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { MoviesComponent } from './page/movies/movies.component';
import { TvComponent } from './page/tv/tv.component';
import { CategoriesComponent } from './page/categories/categories.component';
import { SliderComponent } from './component/slider/slider.component';
import { CardComponent } from './component/card/card.component';
import { ShowComponent } from './page/show/show.component';
import { SimilarComponent } from './page/similar/similar.component';
import { ActorsComponent } from './page/actors/actors.component';
import { ImageqComponent } from './page/imageq/imageq.component';
import { VideosComponent } from './page/videos/videos.component';
import { YoutubeEmbedComponent } from './component/youtube-embed/youtube-embed.component';
import { FormsModule } from '@angular/forms';
import { ShowtvComponent } from './page/showtv/showtv.component';
import { DetailstvComponent } from './page/detailstv/detailstv.component';
import { ResumePipe } from './pipes/resume.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    TvComponent,
    CategoriesComponent,
    SliderComponent,
    CardComponent,
    ShowComponent,
    SimilarComponent,
    ActorsComponent,
    ImageqComponent,
    VideosComponent,
    YoutubeEmbedComponent,
    ShowtvComponent,
    DetailstvComponent,
    ResumePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PaginatorModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
