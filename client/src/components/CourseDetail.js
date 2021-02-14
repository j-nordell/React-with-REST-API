import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CourseDetail(props) {
  const [course, setCourse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    axios(`http://localhost:5000/api/courses/${props.id}`)
        .then(response => setCourse(response.data))
        .catch(error => console.log('Error fetching and parsing data', error))
        .finally(() => setIsLoading(false));
  }, [props.id]);

  console.log(course);

  return(
    <div className="bounds course--detail">
      <div className="grid-66">
          {
            isLoading
              ? <p>Loading ...</p>
              : <>
              <div className="course--header">
                <h4 className="course--label">Course</h4>
                <h3 className="course--title">{ course.course.title }</h3>
                <p>By { `${course.user.firstName} ${course.user.lastName}` }</p>  
              </div>
              <div className="course--description">
                <p>{course.course.description}</p>
              </div>
              </>
          }
      </div>
    </div>
  );
}

export default CourseDetail;