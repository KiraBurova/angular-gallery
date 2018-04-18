import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../shared/images.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  image: any;
  constructor(private imagesService: ImagesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.image = this.imagesService.getImage(this.route.snapshot.params['id']);
    console.log(this.image, typeof this.image.urls.full)
  }

}
