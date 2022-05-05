import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Form from './Form';

const MailChimpForm = () => {
  const postUrl =
    'https://gmail.us9.list-manage.com/subscribe?u=564fe909692e1ba1bd58077ae&id=3b355568c9';
  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Form
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </>
  );
};

export default MailChimpForm;
