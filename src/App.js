import { useState } from "react";
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';


const Main = ({term}) => {
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!data) return <h1>No user data found</h1>;
  console.log(term);
  let filterCourses= Object.keys(data.courses).filter(word => word.substring(0,1)=== term );
  
  console.log(filterCourses);

  return filterCourses.map(item =>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"> {data.courses[item].term}</h5>
        <p class="card-text">CS {data.courses[item].number}: {data.courses[item].title}</p>
        <div class="card-footer">
          {data.courses[item].meets}
        </div>
      </div>
    </div>
  );
}

const queryClient = new QueryClient();

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
  const [term,setTerm]= useState("F");
  return (
    <div className="App">
      <div class='container'>
        <h1>{schedule.title}</h1>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary" onClick={()=>{setTerm("F")}}>Fall</button>
          <button type="button" class="btn btn-secondary" onClick={()=>{setTerm("W")}}>Winter</button>
          <button type="button" class="btn btn-secondary" onClick={()=>{setTerm("S")}}>Spring</button>
        </div>
        <br/>
        <br/>
        <QueryClientProvider client={queryClient}>
          <div className="container">
            <Main term={term}/>
          </div>
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
