import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showtv',
  templateUrl: './showtv.component.html',
  styleUrls: ['./showtv.component.css']
})
export class ShowtvComponent implements OnInit {
    showtv: any = {}


     constructor(private movieService: MovieService, private route: ActivatedRoute) {}

     ngOnInit(): void {

       this.route.params.subscribe((params: any) => {
         this.getOneTv(params.id)
       })
     }

     getOneTv(id: number){
       this.movieService.getTv(id).subscribe((response: any) => {
         this.showtv = response
         console.log(this.showtv)
       })
     }
   }

