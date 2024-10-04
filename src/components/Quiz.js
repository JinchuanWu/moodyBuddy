import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PageFooter } from "./footer";
import { Header } from "./Header";
import { NavLink } from 'react-router-dom';


export default function PageQuiz({ handleSubmit }) {
  const formik = useFormik({
    initialValues: {
      day: '',
      sleep: '',
      motivation: '',
      dailyNote: '',
      date: new Date().toLocaleDateString(),
    },
    validationSchema: Yup.object({
      day: Yup.number().required('Day rating is required'),
      sleep: Yup.number().required('Sleep rating is required'),
      motivation: Yup.number().required('Motivation rating is required'),
      dailyNote: Yup.string().required('This field is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values); // Call the passed-in submit function
      resetForm();
    },
  });


  return (
    <div>
      <Header />
      <main>
        <section id="quiz-container" className="container">
          <form id="quiz-form" className="form" onSubmit={formik.handleSubmit}>
            {/* Question 1 */}
            <section className="question">
              <h2>How was your day?</h2>
              <div className="quiz-icon-sections">
                {[1, 2, 3, 4, 5].map((value, index) => (
                  <label key={index}>
                    <input
                      type="radio"
                      name="day"
                      value={value}
                      onChange={formik.handleChange}
                      checked={formik.values.day === String(value)}
                      className="hidden"
                    />
                    <img src={formik.values.day === String(value) ? `../img/emojis/color-face${value}.png` : `../img/emojis/gray-face${value}.png`}
                    alt={`This is a face with value ${value}`} />
                  </label>
                ))}
              </div>
            </section>
            {/* Question 2 */}
            <section className="question">
              <h2>How well did you sleep?</h2>
              <div className="quiz-icon-sections">
                {[1, 2, 3, 4, 5].map((value, index) => (
                  <label key={index}>
                    <input
                      type="radio"
                      name="sleep"
                      value={value}
                      onChange={formik.handleChange}
                      checked={formik.values.sleep === String(value)}
                      className="hidden"
                    />
                    <img src={formik.values.sleep === String(value) ? `../img/emojis/color-circle${value}.png` : `../img/emojis/gray-circle${value}.png`}
                    alt={`This is a ${value * 20}% full circle`} />
                  </label>
                ))}
              </div>
            </section>
            {/* Question 3 */}
            <section className="question">
              <h2>How motivated are you today?</h2>
              <div className="quiz-icon-sections">
                {[1, 2, 3, 4, 5].map((value, index) => (
                  <label key={index}>
                    <input
                      type="radio"
                      name="motivation"
                      value={value}
                      onChange={formik.handleChange}
                      checked={formik.values.motivation === String(value)}
                      className="hidden"
                    />
                    <img src={formik.values.motivation === String(value) ? `../img/emojis/color-circle${value}.png` : `../img/emojis/gray-circle${value}.png`}
                    alt={`This is a ${value * 20}% full circle`} />
                  </label>
                ))}
              </div>
            </section>
            
            {/* Question 5 - Daily note input */}
            <label htmlFor="daily-note">
              <h2>
              Write something down....
              </h2>
            </label>
            <input
              type="text"
              id="daily-note"
              name="dailyNote"
              className="text-box"
              onChange={formik.handleChange}
              value={formik.values.dailyNote}
            />
            {formik.errors.dailyNote && <div className="error">{formik.errors.dailyNote}</div>}
            <br /><br />
            <button type="submit" className="button">Submit</button>
          </form>
        </section>
        <section id="next-step-container">
          <p><i>After you submit the form, click the below button for next step.</i></p>
          <button className="button"><NavLink to="/PageHome/PageQuizCompletion">Next Page</NavLink></button>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}