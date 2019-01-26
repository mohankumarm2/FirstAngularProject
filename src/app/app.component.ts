import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngularProject';
  FirstText='this is the first text';

  clicked(){
  alert("clicked from button");
  }
}
