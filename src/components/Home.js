// Page 1.a - Home Page

import { PageFooter } from "./footer";
import { NavBar } from "./navbar";
import { NavLink } from "react-router-dom";

export function PageHome(props) {
  return (
    <body>
      < NavBar />
      <main>
          <section id="home-page">
              <h2>How do you feel today?</h2>
              <h3>Record your mood and get your daily MoodyBuddy puppy!</h3>
              <img src="img/heart-bar.png" alt="A heart bar" />
              <button type="button" className="button" id="home-quiz-btn"><NavLink to="/PageHome/PageQuiz">Record Today's Mood</NavLink></button>
          </section>
      </main>
      <PageFooter />
    </body>
  );
}
