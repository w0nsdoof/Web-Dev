import { Component } from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.scss'
})
export class AlbumPhotosComponent {
  albumId: number = 0;
  photos: any[] = [];

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.albumId = +params['id'];
      this.albumsService.getPhotosByAlbumId(this.albumId).subscribe(photos => {
        this.photos = photos;
      });
    });
  }

}
