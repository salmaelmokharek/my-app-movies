import { DetailstvComponent } from './page/detailstv/detailstv.component';
import { ShowtvComponent } from './page/showtv/showtv.component';
import { VideosComponent } from './page/videos/videos.component';
import { ImageqComponent } from './page/imageq/imageq.component';
import { ActorsComponent } from './page/actors/actors.component';
import { ShowComponent } from './page/show/show.component';
import { SimilarComponent } from './page/similar/similar.component';
import { CategoriesComponent } from './page/categories/categories.component';
import { TvComponent } from './page/tv/tv.component';
import { MoviesComponent } from './page/movies/movies.component';
import { HomeComponent } from './page/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:"", component :HomeComponent},
  {path:"movies", component : MoviesComponent},
  {path:"tv", component : TvComponent},
  {path:"categories", component : CategoriesComponent},
  {path:'movie/:id', component : ShowComponent, children: [
    {path: 'similar', component : SimilarComponent},
    {path: 'actors', component : ActorsComponent},
    {path: 'imageq', component : ImageqComponent},
    {path: 'videos', component : VideosComponent}
  ]},
  {path:'tv/:id', component : ShowtvComponent, children: [
    {path: 'seasons', component : DetailstvComponent},
    {path: 'similar', component : SimilarComponent},
    {path: 'actors', component : ActorsComponent},
    {path: 'imageq', component : ImageqComponent},
    {path: 'videos', component : VideosComponent}
  ]},
  {path:"**", redirectTo:"/" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
