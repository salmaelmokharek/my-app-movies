import { MovieService } from './../../services/movie.service';
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-embed',
  templateUrl: './youtube-embed.component.html',
  styleUrls: ['./youtube-embed.component.css']
})
export class YoutubeEmbedComponent {

  constructor(private sinitizer: DomSanitizer){}

  safeUrl(key:string){
    return this.sinitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}`)

  }

@Input() key :string =""
@Input() title : string =""


}
