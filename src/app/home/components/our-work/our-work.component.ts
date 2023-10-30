import { Component } from '@angular/core';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.css'],
})
export class OurWorkComponent {
  slides = [
    { img: '/assets/img/panels7.jpeg' },
    { img: '/assets/img/panels8.jpeg' },
    { img: '/assets/img/panels9.jpg' },
    { img: '/assets/img/panels10.jpeg' },
    { img: '/assets/img/panels11.jpeg' },
    { img: '/assets/img/panels12.jpeg' },
    { img: '/assets/img/panels13.jpeg' },
    { img: '/assets/img/panels14.jpg' },
    { img: '/assets/img/panels15.jpeg' },
    { img: '/assets/img/panel5.jpeg' },
    { img: '/assets/img/panel4.jpg' },
    { img: '/assets/img/panel3.jpg' },
  ];
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
}
