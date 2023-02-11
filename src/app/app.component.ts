import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (){
    
const firebaseConfig = {
  apiKey: "AIzaSyB8DPG8riEkRV7cijtEvfDiL4Z0csLAunA",
  authDomain: "librairy-4a245.firebaseapp.com",
  projectId: "librairy-4a245",
  databaseURL: "https://librairy-4a245.firebaseio.com",
  storageBucket: "librairy-4a245.appspot.com",
  messagingSenderId: "318728409758",
  appId: "1:318728409758:web:e8dcf0dfc87acde84ae18f"
};
firebase.initializeApp(firebaseConfig);
  }
}
