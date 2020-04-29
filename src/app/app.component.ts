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
      apiKey: "AIzaSyB_bHNS4rUrKc0DjIFbGRn3vivEn06_VO8",
      authDomain: "test-6f1ff.firebaseapp.com",
      databaseURL: "https://test-6f1ff.firebaseio.com",
      projectId: "test-6f1ff",
      storageBucket: "test-6f1ff.appspot.com",
      messagingSenderId: "1070631459889",
      appId: "1:1070631459889:web:77891bb7f3227c390cc910",
      measurementId: "G-QMXRGR6V1N"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
