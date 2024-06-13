#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
const questions = [
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
let score = 0;
questions.forEach((q, index) => {
    console.log(`\nQuestion ${index + 1}: ${q.question}`);
    q.choices.forEach((choice, i) => {
        console.log(`${i}: ${choice}`);
    });
    const answer = readlineSync.questionInt("Your answer (enter the number): ");
    if (answer === q.correctAnswer) {
        console.log("Correct!");
        score++;
    }
    else {
        console.log(`Wrong! The correct answer is ${q.correctAnswer}: ${q.choices[q.correctAnswer]}`);
    }
});
console.log(`\nYou scored ${score} out of ${questions.length}`);
