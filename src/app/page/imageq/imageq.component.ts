import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-imageq',
  templateUrl: './imageq.component.html',
  styleUrls: ['./imageq.component.css']
})
export class ImageqComponent {
  imagesMovie : any[]=[]
  imagesTv : any[]=[]

  constructor(private movieService: MovieService,private route : ActivatedRoute){}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => {
      console.log('param', params.id);
      if (this.route.parent?.routeConfig?.path?.startsWith('movie')) {
        this.getImages(params.id);
      } else if (this.route.parent?.routeConfig?.path?.startsWith('tv')) {
        this.getImagesTV(params.id);
      }
    });
  }

  getImages(id: number) {
    this.movieService.getImages(id).subscribe(({backdrops}: any) => {
    this.imagesMovie = backdrops
    })
  }
  getImagesTV(id: number) {
    this.movieService.getImagesTv(id).subscribe(({backdrops}: any) => {
    this.imagesTv = backdrops
    })
  }
}
