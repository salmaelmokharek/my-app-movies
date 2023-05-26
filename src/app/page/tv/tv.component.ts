import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  constructor(private movieService : MovieService){}

  PopularTv :any[]=[]
  searchValue : string =""

  ngOnInit(): void {
    this.getPopulartv()

  }
  search(){

    if (this.searchValue) {
      this.movieService.searchTv(this.searchValue).subscribe(({results}:any)=>{
      this.PopularTv = results

      })
      return
    }
    this.getPopulartv()
  }

  getPopulartv(page: number=1){
    this.movieService.getPopulartv("popular",page).subscribe((data:any) =>{
      console.log(data)
    this.PopularTv = data.results})
  }

  paginate(event: any){
     this.getPopulartv(event.page +1)
  }

}
