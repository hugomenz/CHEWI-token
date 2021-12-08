import { Component } from '@angular/core';
import { faDiscord, faFacebook, faTelegram, faTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chewi';
  showFiller = false;

  faFacebook = faFacebook;
  faTelegram = faTelegram;
  faTwitter = faTwitter;
  faDiscord = faDiscord;

}
