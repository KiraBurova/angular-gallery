import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';
import { environment } from '../../environments/environment';

@Injectable()
export class ImagesService {
  images: any[];

  constructor(private http: HttpClient) { }

  public loadImages() {
    return this.http.get(environment.API_URL + environment.API_KEY).do((images: any[]) => this.images = images);
  }


  getImage(id:number) {
    return this.images.slice(0).find(image => image.id == id);
  }

}
