import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calci';
  input1=0;
  input2=0;
  result=0;
  calculation(){

  }
  add()
  {
    this.result=this.input1+this.input2;
  }
  sub()
  {
    this.result=this.input1-this.input2;
  }
  mul()
  {
    this.result=this.input1*this.input2;
  }
  div()
  {
    this.result=this.input1/this.input2;
  }
}
