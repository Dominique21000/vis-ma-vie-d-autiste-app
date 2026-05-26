import {Component, computed, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vis-ma-vie-d-autiste-app';

  imageSrc=signal('img/avatar/vis-ma-vie-d-autiste_avatar.jpg');
  imageName=signal('Dominique SAUVIGNON, autiste de son état');
  imageHeight=signal(30);
}
