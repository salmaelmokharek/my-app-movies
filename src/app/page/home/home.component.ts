import { MovieService } from './../../services/movie.service';
import { Component,OnInit  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit   {
  upComingMovie: any []=[]
  upPopularMovie: any []=[]

  ngOnInit(): void {
    this.getAllUpComing()
    this.getPopular()


  }
  constructor(private movieService : MovieService){}



  getAllUpComing(){
    this.movieService.getUpComing('upcoming').subscribe(({results} : any) =>{
    this.upComingMovie = results
    console.log(results)

    }
    )
  }

  getPopular(){
    this.movieService.getUpComing('popular').subscribe(({results} : any) =>{
    this.upPopularMovie = results
    console.log(results)

    }
    )
  }



}
