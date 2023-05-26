import { Component, Input } from '@angular/core';

@Component({

  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  imgurl = "https://image.tmdb.org/t/p/w300"
  @Input() item : any ={}
  @Input() tv : any ={}

  isMovie(): boolean {
    return this.item !== undefined && this.item.id !== undefined;
  }
  isTV(): boolean {
    return this.tv !== undefined && this.tv.id !== undefined;
  }

  resolveImage(avatar :string){
    if (avatar) {
      return `${this.imgurl}${avatar}`

    }
    return '../../../assets/no-camera.png'
  }
}
