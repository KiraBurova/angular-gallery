import { Component, Input, OnChanges } from '@angular/core';
import { ImagesService } from '../shared/images.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
   visibleImages;

  constructor(private imagesService: ImagesService) {
    this.imagesService.loadImages().subscribe(data => this.visibleImages  = data);
   }
}
