import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit{
videos : any[]=[]
videosTV : any[]=[]

  constructor(private movieService: MovieService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: any) => {
      console.log('param', params.id);
      if (this.route.parent?.routeConfig?.path?.startsWith('movie')) {
        this.getVideos(params.id);
      } else if (this.route.parent?.routeConfig?.path?.startsWith('tv')) {
        this.getVideosTV(params.id);
      }
    });
  }
  getVideos(id: number) {
    this.movieService.getVideos(id).subscribe(({results}: any) => {
      this.videos = results
    })
}
getVideosTV(id: number) {
  this.movieService.getVideosTv(id).subscribe(({results}: any) => {
    this.videosTV = results
  })
}
}
