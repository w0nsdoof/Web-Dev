import { Component } from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {AlbumsService} from "../albums.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.scss'
})
export class AlbumDetailComponent {
  albumId: number = 0;
  album: any;
  editedTitle: string = "";

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.albumId = +params['id'];
      this.albumsService.getAlbumById(this.albumId).subscribe(album => {
        this.album = album;
        this.editedTitle = album.title;
      });
    });
  }

  saveChanges() {
    this.album.title = this.editedTitle;
 
    this.albumsService.updateAlbumTitle(this.albumId, this.editedTitle).subscribe(() => {
      console.log('Album title updated successfully');
    });
  }

}
