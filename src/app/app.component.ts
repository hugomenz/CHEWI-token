import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { faDiscord, faFacebook, faTelegram, faTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private meta: Meta,private title: Title) {
    this.meta.addTags([
      {name: 'getChewis', content: 'Join the resistance'},
      {name: 'whitepaper', content: 'Whitepaper'}
    ]);
    this.setTitle('Chewi Token');
  }
  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
    }
  ngOnInit() {
  }

  faFacebook = faFacebook;
  faTelegram = faTelegram;
  faTwitter = faTwitter;
  faDiscord = faDiscord;

}
