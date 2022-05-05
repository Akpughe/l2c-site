import React, { useState } from 'react';
import axios from 'axios';

const Form = ({ status, message, onValidated }) => {
  const GETFORM_FORM_ENDPOINT =
    'https://getform.io/f/686e681c-b5fb-4329-a3e5-d378ac7f335d';
  const [formStatus, setFormStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const options = [
    { value: 'software development', label: 'Software Development' },
    { value: 'data science', label: 'Data Science' },
    { value: 'ui/ux design', label: 'UI/UX Design' },
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
  });

  const { firstName, lastName, email, phone, program } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending');
    const formDatum = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDatum.append(key, value);
    });

    setLoading(true);

    axios
      .post(GETFORM_FORM_ENDPOINT, formDatum, {
        headers: {
          Accept: 'application/json',
          Accept: 'application/json, text/plain, */*',
        },
      })
      .then(function (response) {
        setLoading(false);
        setFormStatus(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          program: '',
        });
        // console.log(response);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="application-form"
      style={{ width: 'fit-content' }}
    >
      <div className="row">
        <div className="input input_mobile">
          <input
            name="firstName"
            type="text"
            value={firstName}
            onChange={(e) => onChange(e)}
            className="form_input"
            placeholder="Firstname"
          />
        </div>
        <div className="input">
          <input
            name="lastName"
            type="text"
            value={lastName}
            onChange={(e) => onChange(e)}
            className="form_input"
            placeholder="Lastname"
          />
        </div>
      </div>
      <div className="row2">
        <div className="input">
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => onChange(e)}
            className="form_input"
            placeholder="Email"
          />
        </div>
      </div>
      <div className="row2">
        <div className="input">
          <input
            name="phone"
            type="text"
            value={phone}
            onChange={(e) => onChange(e)}
            className="form_input"
            placeholder="Phone number"
          />
        </div>
      </div>
      <div className="row2">
        <div className="input select_inp">
          {/* <Select
            name="program"
            value={program}
            options={options}
            placeholder={'Choose Program Category'}
            theme={(theme) => ({
              ...theme,
              borderRadius: 2,
              borderWidth: 0,
              colors: {
                ...theme.colors,
                primary25: 'rgba(5, 170, 225, 0.1)',
                primary: '#05aae1',
              },
            })}
          /> */}

          <select name="program" className='select_input' value={program} onChange={(e) => onChange(e)}>
            <option value="" disabled>Select a Program</option>
            <option value="softwaredevelopment">Software Development</option>
            <option value="datascience">Data Science</option>
            <option value="uiuxdesign">UI/UX Design</option>
          </select>
        </div>
      </div>

      <button className="submit" type="submit" >
        {loading ? (
          <img src="../roll.svg" alt="" width={80} />
        ) : (
          <span className="">
            Submit
          </span>
        )}
      </button>
    </form>
  );
};

export default Form;
