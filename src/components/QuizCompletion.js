import React, { useState, useEffect } from 'react';
import { PageFooter } from "./footer";
import { Header } from "./Header";
import { NavLink } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import puppyData from '../data/puppy-data.json';


function MatchPuppy(puppyData) {

  // read the score from 'day', 'motivation', & 'sleep'


  let mockQuizScores = [1, 2, 5];

  // add up the quiz score
  let quizScoreSum = 0;
  mockQuizScores.forEach(mockQuizScore => {
    quizScoreSum += mockQuizScore;
  });
  console.log(quizScoreSum); // should be 8

  // find the matching score puppy, with the corresponded quiz score
  const findMatchingPuppy = score => {
    return puppyData.find(puppy => puppy.score === score);
  };

  const matchingPuppy = findMatchingPuppy(quizScoreSum);
  console.log(matchingPuppy); // Log the matching puppy's details (json info)
}

export function PageQuizCompletion(props){
  const [dogName, setDogName] = useState('');

  const handleNameChange = (event) => {
    setDogName(event.target.value);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="quiz-completion-page">
          <h1>Congratulations on completing today's check-in!</h1>
          <h2>Here is your today's MoodyBuddy!</h2>
          <img src="../img/doog 1.png" alt="A cute pixel art Shiba Inu" className="main" />
          <p id="dog-breed">dog breed</p>
          <section className="name-input-container">
            <input
              type="text"
              placeholder="Name"
              value={dogName}
              onChange={handleNameChange}
            />
            <button type="button" onClick={() => setDogName(dogName)}>Submit</button>
          </section>
          {dogName && <p id="name-display" className="quote">Your MoodyBuddy's name is {dogName}</p>}
          <p className="quote">
            Remember, even on tough days, I'm here to wag my tail and remind you that brighter moments are just around the corner.
            You're doing great!
          </p>
          <button type="button" className="button"><NavLink to="/PageHome">Back to Home</NavLink></button>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}
