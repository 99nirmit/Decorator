import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'decorator';
  
  ename:string = "Nirmit";
  
  Eobj = {
    id:12,
    name:"Nirmit",
    department:"Angular",
    salary:20000
  }
}
