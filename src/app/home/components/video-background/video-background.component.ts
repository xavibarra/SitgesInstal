import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-background',
  templateUrl: './video-background.component.html',
  styleUrls: ['./video-background.component.css'],
})
export class VideoBackgroundComponent implements OnInit {
  ngOnInit(): void {
    const video = document.querySelector('video')!;
    video.muted = true;
    video.loop = true;
    video.play();
  }
}
