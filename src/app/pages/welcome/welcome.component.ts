import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  imports:[IonicModule]
})
export class WelcomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
