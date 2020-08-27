import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  blogPosts: any = [
    {
      'author': 'Vinod Karantothu',
      'authorImg':'../../../assets/images/vinod.jpg',
      'authorTitle': 'Developer',
      'postedOn': '17 Jul 2020',
      'postImgSrc': 'https://www.capasystems.com/wp-content/uploads/2018/02/kundecases-small-2-1080x675.jpg',
      'blogContent': 'Welcome onboard!',
      'link':'https://google.com'
    }
  ];
  ngOnInit(): void {
  }


}
