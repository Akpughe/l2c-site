import React from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/Form';

const Apply = () => {
  return (
    <>
      <Navbar />
      <div className="application">
        <div className="application-left">
          <h1>Start Your Application</h1>
          <p>
            Submit your application to start the admissions process for your
            program!
          </p>
          <ul>
            <li>
              {' '}
              <span>
                Applications are free to submit and editable upon request.
              </span>{' '}
            </li>
            <li>
              Enrollment is ‘first come, first serve’. Applying early is highly
              recommended.
            </li>
            <li>From start to finish, this only takes 2 minutes!</li>
          </ul>
        </div>
        <div className="apply_form">
          <h2>First, let’s get some basic info.</h2>
          <Form />
        </div>
      </div>
    </>
  );
};

export default Apply;
