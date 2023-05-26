import { query } from '@angular/animations';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  constructor(private movieService : MovieService){}

  PopularMovie :any[]=[]
  searchValue : string =""

  ngOnInit(): void {
    this.getPopular()
  }
  search(){

    if (this.searchValue) {
      this.movieService.searchMovies(this.searchValue).subscribe(({results}:any)=>{
      this.PopularMovie = results

      })
      return
    }
    this.getPopular()
  }

  getPopular(page: number=1){
    this.movieService.getMovies("popular",page).subscribe((data:any) =>{
      console.log(data)
    this.PopularMovie = data.results})
  }

  paginate(event: any){
     this.getPopular(event.page +1)
  }
}
