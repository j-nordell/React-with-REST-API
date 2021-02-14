import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UpdateCourse() {
  return(
    <>
      <div className="bounds course--detail">
          <h1>Create Course</h1>
          <div>
            <h2 className="validation--errors--label">Validation errors</h2>
            <div className="valdiation-errors">
              <ul>
                <li>There was some error</li>
              </ul>
            </div>
          </div>
          <form method="POST">
            <div className="grid-66">
              <h4 className="course--label">Course</h4>
              <div>
                <label htmlFor="title">Course title</label>
                <input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..."
                    value="" />
              </div>
              <p>By Joe Smith</p>
              <div className="course-description">
                <label htmlFor="description">Course description</label>
                <div><textarea id="description" name="description" placeholder="Course description..."></textarea></div>
              </div>
              </div>
              <div className="grid-25 grid-right">
                <div className="course--stats">
                  <ul class="course--stats--list">
                    <li className="course--stats--list--item">
                      <h4>Estimated Time</h4>
                      <div>
                        <label htmlFor="estimatedTime">Estimated time</label>
                        <input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input"
                          placeholder="Hours" value="" />
                      </div>
                    </li>
                    <li className="course--stats--list--item">
                      <h4>Materials Needed</h4>
                      <div>
                        <label htmlFor="materialsNeeded">List materials</label>
                        <textarea id="materialsNeeded" name="materialsNeeded" placeholder="List materials..."></textarea>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            <div className="grid-100 pad-bottom"><button className="button" type="submit">Create Course</button><button className="button button-secondary" onClick="event.preventDefault(); location.href='index.html';">Cancel</button></div>
          </form>
      </div>
    </>
  );
}

export default UpdateCourse;