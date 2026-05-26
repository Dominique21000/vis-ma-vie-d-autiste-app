import { Component, signal } from '@angular/core';
import { MainNavigationComponent } from "../main-navigation/main-navigation.component";

@Component({
  selector: 'app-welcome',
  imports: [MainNavigationComponent],
  templateUrl: './welcome.component.html',
  styles: ``
})
export class WelcomeComponent {
  title = 'vis-ma-vie-d-autiste-app';

  imageSrc=signal('img/avatar/vis-ma-vie-d-autiste_avatar.jpg');
  imageName=signal('Dominique SAUVIGNON, autiste de son état');
  imageHeight=signal(30); 
}
