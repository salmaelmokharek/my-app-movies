import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent  implements OnInit{
listm :any[]=[]
constructor(private movieService : MovieService){}

ngOnInit(): void {
    this.getPopular()
}
getPopular(page: number=1){
  this.movieService.getMovies("popular",page).subscribe((data:any) =>{
    console.log(data)
  this.listm = data.results})
}
}
