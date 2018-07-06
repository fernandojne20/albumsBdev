import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  albumDetails: any[];
  constructor(private route: ActivatedRoute, private albumSrv: AlbumService) { 
    this.route.params.subscribe(params => {
      this.albumSrv.getAlbumId(params.id).subscribe((albums:any) => {
        console.log(albums);
        
        this.albumDetails = albums
      })
    });
  }

  
}
