import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.css']
})
export class SimilarComponent implements OnInit {
similarMovies: any[]=[]
similarTv : any[]=[]


   constructor(private movieService: MovieService,private route : ActivatedRoute){}

   ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => {
      console.log('param', params.id);
      if (this.route.parent?.routeConfig?.path?.startsWith('movie')) {
        this.getSimilar(params.id);
      } else if (this.route.parent?.routeConfig?.path?.startsWith('tv')) {
        this.getSimilartv(params.id);
      }
    });
  }


  getSimilar(id: number) {
    this.movieService.getSimilarMovies(id).subscribe(({results}: any) => {
      this.similarMovies = results
      console.log('similar movies', results)
    })
  }

  getSimilartv(id: number) {
    this.movieService.getSimilarTv(id).subscribe(({results}: any) => {
      this.similarTv = results
      console.log('similar TV shows', results)
    })
  }
}


