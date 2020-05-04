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
      databaseURL: "xxxxx",
      projectId: "xxxxx",
      storageBucket: "xxxxxx",
      messagingSenderId: "xxxxxx",
      appId: "xxxxxxx",
      measurementId: "xxxxxx"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
