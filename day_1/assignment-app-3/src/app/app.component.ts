import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPara = false;
  log = [''];

  togglePara() {
    this.showPara = !this.showPara;
    this.log.push( `Log id: ${(this.log.length).toString()} - ${new Date().toString()}` );
  }
}
