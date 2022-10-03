import logo from './logo.svg';
import './App.css';

const schedule = {
  "title": 'CS Courses 2022-2023',
  "courses": {
    "F336": {
      'term': 'Fall',
      'number': '336',
      'meets': 'MW 5:00-6:00pm',
      'title': 'Design and Analysis of Algorithms'
    },
    'F396': {
      'term': 'Fall',
      'number': '396',
      'meets': 'MWF 8:00-9:00am',
      'title': 'Generative Methods'
    },
    'F397': {
      'term': 'Fall',
      'number': '397',
      'meets': 'MWF 3:00-4:00pm',
      'title': 'Rapid Prototyping for Software Innovation'
    }
  }
};

function App() {
  return (
    <div className="App">
      <div class='container'>


        <h1>{schedule.title}</h1>
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"> {schedule.courses.F396.term}</h5>
                <p class="card-text">CS {schedule.courses.F396.number}: {schedule.courses.F396.title}</p>
                <div class="card-footer">
                  {schedule.courses.F396.meets}
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"> {schedule.courses.F397.term}</h5>
                <p class="card-text">CS {schedule.courses.F397.number}: {schedule.courses.F397.title}</p>
                <div class="card-footer">
                  {schedule.courses.F397.meets}
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{schedule.courses.F336.term}</h5>
                <p class="card-text"> CS {schedule.courses.F336.number}: {schedule.courses.F336.title} </p>
                <div class="card-footer">
                  {schedule.courses.F336.meets}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
