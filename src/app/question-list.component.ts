import { Component, OnInit } from '@angular/core';
import { Question } from "./data-classes";
import { environment } from './../environments/environment';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  // Initialization 

  constructor() { }

  ngOnInit() {
    var url = environment.apiURL + `api/questions`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          // Parse the response body as JSON
          return response.json();
        } else if (response.status === 404) {
          // Not found
          throw Error("HTTP 404, Not found");
        } else {
          // Some other situation
          throw Error(`HTTP ${response.status}, ${response.statusText}`);
        }
      })
      .then(responseData => {
        this.questions = responseData;
      })
      .catch(error => {
        // Handles an error thrown above, as well as network general errors
        console.log(error);
      });
  }

  // Properties
  questions: Question[];
}
