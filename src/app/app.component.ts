import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  public value1:string="";
  public MyImg="";
  public Accept(value:string)
  {
    this.value1=value;
    this.value1="Happy Birthday "+this.value1;
    this.MyImg="assets/a.jpg";
  }
}
//<img [src]="MyImg" width="200px">
