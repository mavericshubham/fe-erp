
import { BaseAppComponent, compProp } from '@baseComponents/app.component';

import { Component } from '@angular/core';
import { AppService } from '@clientApp/app.service';
console.log(compProp);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent extends BaseAppComponent {
  title = this.title + ' hisysmc2';
}
