import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  firstName: string = "Tom";
  lastName : string = "Hiddleston";
  blue : any = "";
  val : string ="";

  public myFunction() : void {
alert('show alert!!!');
  }
}
