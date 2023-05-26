import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
 show: any = {}


  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.params.subscribe((params: any) => {
      this.getOneMovie(params.id)
    })

  }

  getOneMovie(id: number) {
    this.movieService.getMovie(id).subscribe((response: any) => {
      this.show = response
      console.log(this.show)
    })
  }
}
