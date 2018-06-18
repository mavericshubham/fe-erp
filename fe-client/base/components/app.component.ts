import { Component } from '@angular/core';
import { AppService } from '@clientApp/app.service';


const compPropBase = {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
};
@Component(compPropBase)
export class BaseAppComponent {
  title = 'global';
  constructor(private serv: AppService) {
    console.log(this.serv.x);
  }
}

export let compProp = {
  selectors: 'app-root',
  templateUrls: './app.component.html',
  styleUrlss: ['./app.component.css'],
  providers: [AppService]
};


