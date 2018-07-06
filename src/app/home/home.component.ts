import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  albums: any[];
  constructor(private albumSrv: AlbumService) { 

    this.albumSrv
      .getAlbums()
      .subscribe((res:any) => {
        this.albums = res;
      })
      
  }

}
