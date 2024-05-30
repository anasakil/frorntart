import React from 'react';

const sharedClasses = {
  button: 'px-4 py-2 rounded-lg',
  primaryButton: 'bg-black text-white',
  secondaryButton: 'border border-black text-black',
  container: 'flex items-center justify-center min-h-screen ',
  card: 'bg-[#97644e]  p-6 rounded-lg shadow-lg text-center',
  text: 'dark:text-black',
  darkText: 'dark:text-black',
};

const ThankYouPage = () => {
  return (
    <div className={sharedClasses.container}>
      <div className={sharedClasses.card}>
        <img aria-hidden="true" alt="check" src="https://placehold.co/50x50" className="mx-auto mb-4" />
        <h1 className={`text-2xl font-semibold mb-2 ${sharedClasses.darkText}`}>Thank you!</h1>
        <p className={`${sharedClasses.text} mb-4`}>Your order has been confirmed & it is on the way. Check your email for the details.</p>
        <div className="flex justify-center space-x-4">
          <a href="/" className={`${sharedClasses.button} ${sharedClasses.primaryButton}`}>
            Go to Homepage
          </a>
          <a href="/profile" className={`${sharedClasses.button} ${sharedClasses.secondaryButton}`}>
            Check Order Details
          </a>
        </div>

      </div>
    </div>
  );
};

export default ThankYouPage;
