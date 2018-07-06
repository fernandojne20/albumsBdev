import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { 

  }

  getAlbums(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
    .pipe( map( (album: any) => {
      const getAlbumsIds = this.getIds(album, 'albumId');
      const orderAlbums = this.orderIds( getAlbumsIds );
      const recentAlbums = this.getAlbumsById( orderAlbums, album, 'albumId', 3);
      return recentAlbums;
    }));
  }

  getAlbumId(id:string) {
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
    .pipe( map( (album: any) => {
      
      const albumsFiltered = album.filter( _album => _album.albumId == id);
      const getAlbumsIds = this.getIds(albumsFiltered, 'id');
      const orderAlbums = this.orderIds( getAlbumsIds );
      const recentAlbums = this.getAlbumsById( orderAlbums, albumsFiltered, 'id', 2);
      return recentAlbums;
    }));
  }

  private getIds(array:any[], property:string){
    var _value = 0;
    return array.map(item => {
      return item[property];
    }).filter(_item => {
      if(_item != _value){
        _value = _item;
        return true;
      }else {
        return false;
      }
    });
  }

  private orderIds(orderArray){
    return orderArray.sort((a, b) => b - a);
  }

  private getAlbumsById(idList, albumsList, property:string, length: number){
    const albumIds = idList.slice(0,length);
    let albums = [];
    albumIds.forEach(_albumId => {
      albums.push(albumsList.find(_album => _album[property] == _albumId));
    });

    return albums;
  }

}
