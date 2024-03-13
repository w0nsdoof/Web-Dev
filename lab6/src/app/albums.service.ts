import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private albumsUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.albumsUrl);
  }

  getAlbumById(albumId: number): Observable<any> {
    return this.http.get<any>(`${this.albumsUrl}/${albumId}`);
  }

  getPhotosByAlbumId(albumId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.albumsUrl}/${albumId}/photos`);
  }

  deleteAlbum(albumId: number): Observable<any> {
    return this.http.delete<any>(`${this.albumsUrl}/${albumId}`);
  }

  updateAlbumTitle(albumId: number, newTitle: string): Observable<any> {
    const updateUrl = `${this.albumsUrl}/${albumId}`;
    return this.http.put<any>(updateUrl, { title: newTitle });
  }
}
