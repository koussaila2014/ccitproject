import { Component } from '@angular/core';
import * as firebase from 'firebase';
import {config} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'personal-website-template';
  constructor() {
    const firebaseConfig = {
      apiKey: "xxxxx",
      authDomain: "xxxxxxx",
      databaseURL: "xxxxxxxx",
      projectId: "xxxxxxxx",
      storageBucket: "xxxxxxxxxxxx",
      messagingSenderId: "xxxxxxxxx",
      appId: "xxxxxxxxxxxxxx",
      measurementId: "xxxxxxxxxxxxxx"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
