import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { slideInLeftAnimation } from './animations/slide-in-left';


@Component({
  selector: 'app-root',
  templateUrl: './templates/app.component.html',
  animations: [slideInLeftAnimation]
})
export class AppComponent {

}
