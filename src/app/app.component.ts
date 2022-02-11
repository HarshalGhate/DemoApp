import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  public value1:string="";
  public MyImg=new Array(12);
  public randomImg="";
  public isclick:boolean=false;
  public Accept(value:string)
  {
    this.value1=value;
    this.value1="Happy Birthday "+this.value1;
    //this.MyImg="assets/a.jpg";
  }

  //audio
  @ViewChild('audioOption')
  audioPlayerRef!: ElementRef;
  Random()
  {
    
      this.MyImg = ["assets/h1.jpg","assets/h2.jpg","assets/h3.jpg","assets/h4.jpg","assets/h5.jpg","assets/h6.jpg","assets/h7.jpg","assets/h8.jpg","assets/h9.jpg","assets/h10.jpg","assets/h11.jpg","assets/h12.jpg"];
      this.randomImg = this.MyImg[Math.floor(Math.random() * this.MyImg.length)];
      
  }  
  onAudioPlay()
  {
    this.audioPlayerRef.nativeElement.play();
  }

  
  @ViewChild('videoPlayer')
  videoplayer!: ElementRef;
  video()
  {
    this.isclick=true;
      
    console.log('im Play!');
    this.videoplayer?.nativeElement.play();

  }
  
}



//<img [src]="MyImg" width="200px">
