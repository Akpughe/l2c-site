import React from 'react';
import Navbar from '../components/navbar';
import Select from 'react-select';
import Form from '../components/Form';
import MailChimpForm from '../components/MailChimpForm';

const Apply = () => {
  const options = [
    { value: 'software development', label: 'Software Development' },
    { value: 'data science', label: 'Data Science' },
    { value: 'ui/ux design', label: 'UI/UX Design' },
  ];

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  };

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
          {/* <Form /> */}
          <MailChimpForm/>
        </div>
      </div>
    </>
  );
};

export default Apply;
