// Data model classes for the app

// Describes a question
export class Question {
  order: number;
  question: string;
  answers: Array<string>;
  correct: number;
  image: string;
}
