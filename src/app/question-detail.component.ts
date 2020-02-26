import { Component, OnInit } from '@angular/core';
import { Question } from "./data-classes";
import { environment } from './../environments/environment';

// Enables access to the route / URL
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {

  // Initialization 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    // Extract the identifier from the URL
    this.id = this.route.snapshot.paramMap.get("id");

    // The following is only one of several ways
    // to convert a string to a number (do your own research)
    // Fetch the requested question object

    var url = environment.apiURL + `api/questions/${this.id}`;

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
        this.question = responseData;
      })
      .catch(error => {
        // Handles an error thrown above, as well as network general errors
        console.log(error);
      });
  }

  checkAnswer() {
    console.log(this.selection);
    console.log(this.question.correct);
    if (this.selection == this.question.correct) {
      this.state = "correct";
    } else {
      this.state = "wrong";
    }
  }

  // Properties
  question: Question;
  id: string;
  selection: number;
  state: string;
}
