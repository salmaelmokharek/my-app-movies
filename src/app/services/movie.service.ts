import { switchMap } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  url: string = "https://api.themoviedb.org/3"
  apiKey: string = "7ac62819735894b20974676d22d3b9e2"


  constructor(private http : HttpClient) {}


  getUpComing(option:any){
    return this.http.get(`${this.url}/movie/${option}?api_key=${this.apiKey}`)
  }
  getMovies(option: string, page:number=1) {
    return this.http.get(`${this.url}/movie/${option}?page=${page}&api_key=${this.apiKey}`)
    // .pipe(switchMap(resp => of(resp.results.splice(0,count))))
  }

  getSimilarMovies(id: number) {
    return this.http.get(`${this.url}/movie/${id}/similar?api_key=${this.apiKey}`)
  }

  getMovie(id: number) {
    return this.http.get(`${this.url}/movie/${id}?api_key=${this.apiKey}`)
  }

  getActorsMovie(id: number) {
    return this.http.get(`${this.url}/movie/${id}/credits?api_key=${this.apiKey}`)
  }

  getImages(id: number) {
    return this.http.get(`${this.url}/movie/${id}/images?api_key=${this.apiKey}`)
  }
  getVideos(id: number) {
    return this.http.get(`${this.url}/movie/${id}/videos?api_key=${this.apiKey}`)
  }
  searchMovies(query:string , page:number=1){
    return this.http.get(`${this.url}/search/movie?page=${page}&query=${query}&api_key=${this.apiKey}`)
  }
//--------------------------------------------------------------
  getPopulartv(option: string, page:number=1){
    return this.http.get(`${this.url}/tv/${option}?page=${page}&api_key=${this.apiKey}`)
  }
  getTv(id: number) {
    return this.http.get(`${this.url}/tv/${id}?api_key=${this.apiKey}`)
  }
  getSimilarTv(id: number) {
    return this.http.get(`${this.url}/tv/${id}/similar?api_key=${this.apiKey}`)
  }
  getActorsTv(id: number) {
    return this.http.get(`${this.url}/tv/${id}/credits?api_key=${this.apiKey}`)
  }
  getImagesTv(id: number) {
    return this.http.get(`${this.url}/tv/${id}/images?api_key=${this.apiKey}`)
  }
  getVideosTv(id: number) {
    return this.http.get(`${this.url}/tv/${id}/videos?api_key=${this.apiKey}`)
  }

  getSeason(id: number , season_number: number): Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/tv/${id}/season/${season_number}?api_key=${this.apiKey}`);
  }

  searchTv(query:string , page:number=1){
    return this.http.get(`${this.url}/search/tv?page=${page}&query=${query}&api_key=${this.apiKey}`)
  }
}
// https://api.themoviedb.org/3/tv/{tv_id}/season/{season_number}/episode/{episode_number}?api_key=<<api_key>>&language=en-US

