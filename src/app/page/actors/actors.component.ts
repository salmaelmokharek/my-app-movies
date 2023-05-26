import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  imgurl = "https://image.tmdb.org/t/p/w300"
  actorsMovie : any[]=[]
  actorsTv : any[]=[]

  constructor(private movieService: MovieService,private route : ActivatedRoute){}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => {
      console.log('param', params.id);
      if (this.route.parent?.routeConfig?.path?.startsWith('movie')) {
        this.getActors(params.id);
      } else if (this.route.parent?.routeConfig?.path?.startsWith('tv')) {
        this.getActorsTv(params.id);
      }
    });
  }

  getActors(id: number) {
    this.movieService.getActorsMovie(id).subscribe(({cast}: any) => {
    this.actorsMovie = cast
    })
  }

  getActorsTv(id: number) {
    this.movieService.getActorsTv(id).subscribe(({cast}: any) => {
    this.actorsTv = cast
    })
  }
  resolveImage(avatar :string){
    if (avatar) {
      return `${this.imgurl}${avatar}`

    }
    return '../../../assets/user!.jpg'
  }
}
