import logo from './logo.svg';
import './App.css';

const schedule = {
  "title" : 'CS Courses 2022-2023',
  "courses" : {
    "F336" : {
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
      <h1>{schedule.title}</h1>
      <p>{schedule.courses.F396.term} CS {schedule.courses.F396.number}: {schedule.courses.F396.title} ({schedule.courses.F396.meets})</p>
      <p>{schedule.courses.F397.term} CS {schedule.courses.F397.number}: {schedule.courses.F397.title} ({schedule.courses.F397.meets})</p>
      <p>{schedule.courses.F336.term} CS {schedule.courses.F336.number}: {schedule.courses.F336.title} ({schedule.courses.F336.meets})</p>
    </div>
  );
}

export default App;
