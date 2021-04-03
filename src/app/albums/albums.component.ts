import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../service/api-rest.service';
import { Albums } from '../modules/albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {


  albumsData: Albums;

  constructor(
    public apirestService: ApiRestService) { }

  ngOnInit(): void {
    this.getAllAlbums();
  }

  getAllAlbums() {
    this.apirestService.getAlbums().subscribe(response => {
      console.log(response);
      this.albumsData = response;
    })
  }
 
}
