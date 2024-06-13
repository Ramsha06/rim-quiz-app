#!/usr/bin/env node

import * as readlineSync from 'readline-sync';
//import chalk, { Chalk } from 'chalk';

interface Question {
    question: string;
    choices: string[];
    correctAnswer: number;
}

const questions: Question[] = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "London", "Madrid", "Paris"],
        correctAnswer: 3,
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: 1,
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3,
    }
];

let score: number = 0;

questions.forEach((q, index) => {
    console.log(`\nQuestion ${index + 1}: ${q.question}`);
    q.choices.forEach((choice, i) => {
        console.log(`${i}: ${choice}`);
    });

    const answer = readlineSync.questionInt("Your answer (enter the number): ");
    if (answer === q.correctAnswer) {
        console.log("Correct!");
        score++;
    } else {
        console.log(`Wrong! The correct answer is ${q.correctAnswer}: ${q.choices[q.correctAnswer]}`);
    }
});

console.log(`\nYou scored ${score} out of ${questions.length}`);
