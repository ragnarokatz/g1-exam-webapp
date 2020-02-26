// Data model classes for the app

// Describes a product
export class Product {
  id: number;
  name: string;
}

// Describes a vehicle
export class Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  msrp: number;
  photo: string;
  description: string;
}

export class Question {
  order: number;
  question: string;
  answers: Array<string>;
  correct: number;
  image: string;
}