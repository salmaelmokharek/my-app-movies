import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { param } from 'jquery';
import { Observable,of } from 'rxjs';

@Component({
  selector: 'app-detailstv',
  templateUrl: './detailstv.component.html',
  styleUrls: ['./detailstv.component.css']
})
export class DetailstvComponent implements OnInit {
  seasons: any[] = []

constructor(private movieService: MovieService,private route : ActivatedRoute){}
  ngOnInit(): void {

  }
}
