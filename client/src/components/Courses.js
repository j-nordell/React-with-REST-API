import React, { useEffect, useState } from 'react';
import Course from './Course';
import axios from 'axios';

function Courses() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    axios(`http://localhost:5000/api/courses`)
        .then(response => setCourses(response.data))
        .catch(error => console.log('Error fetching and parsing data', error))
        .finally(() => setIsLoading(false));
  }, [true]);

  let allCourses = courses.map(course => <Course key={course.course.id} title={course.course.title}/>);

  console.log(courses);

  return(
    <div>
      { allCourses }
    </div>
  );
}

export default Courses;