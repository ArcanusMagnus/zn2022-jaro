import MailchimpSubscribe from "react-mailchimp-subscribe";

import SignUpForm from "./SignUpForm";

const SignUpContainer = (props) => {
  const formUrl = `https://zizkovskanoc.us6.list-manage.com/subscribe/post?u=d0f2beb42b80d333a7787b47c&id=0b3a6d5082`;
  return (
    <div>
      <MailchimpSubscribe
        url={formUrl}
        render={({subscribe, status, message}) => (
          <SignUpForm
            status={status}
            message={message}
            onSend={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default SignUpContainer;
