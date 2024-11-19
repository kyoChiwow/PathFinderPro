const NewsFaq = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between bg-base-200 rounded-xl mt-20 py-4 px-4 xl:py-4 xl:px-8 gap-8 lg:gap-0">
      {/* NewsLetter Div */}
      <div className="lg:w-[48%] bg-white p-4 rounded-xl">
        {/* NewsLetter Info div */}
        <div className="text-center mt-8">
          <h1 className="text-4xl font-bold mb-8">Subscribe to our Newsletter</h1>
          <p className="font-medium text-lg mb-4">
            Want to stay in touch with our latest updates, seminars and other
            activities? Please enter your email below and we will send you all
            the updates.
          </p>
        </div>
        {/* NewsLetter Info div */}

        {/* Input Field Div (Non Functional) */}
        <div>
          <div className="join w-full mt-8">
            <input
              className="input input-bordered join-item input-info w-full"
              placeholder="Enter Your Email"
            />
            <button className="btn join-item btn-info rounded-r-full">Subscribe</button>
          </div>
        </div>
        {/* Input Field Div (Non Functional) */}
      </div>
      {/* NewsLetter Div */}

      {/* FAQ Div */}
      <div className="lg:w-[48%]">
        <div className="collapse collapse-arrow bg-white mb-4">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
          What services do you offer?
          </div>
          <div className="collapse-content">
            <p>We provide a diverse range of services tailored to your needs, including [specific examples relevant to your site, e.g., personal development sessions, gadget troubleshooting, or online consultations]. Each service is designed to deliver the highest quality and customer satisfaction. You can explore all our offerings in detail on the Services page, where you’ll find descriptions, pricing, and service durations. If you’re unsure which service suits you best, our support team is here to guide you!</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white mb-4">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          How can I book a service?
          </div>
          <div className="collapse-content">
            <p>Booking a service with us is straightforward and user-friendly. Simply navigate to the Services section of our website, choose the service youre interested in, and click on Book Now. You’ll be guided through a secure checkout process to confirm your appointment or service order. Once completed, you’ll receive a confirmation email with all the necessary details. If you need assistance or have questions during the booking process, our team is available via chat or email to help you every step of the way.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white mb-4">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          What is your refund policy?
          </div>
          <div className="collapse-content">
            <p>Our goal is to ensure you’re fully satisfied with the services we provide. If, for any reason, you’re not happy with your experience, we have a flexible refund policy in place. Refunds are available under specific conditions, such as cancellations made within the allowed timeframe or issues caused on our end. For more details, please review our Terms and Conditions page or contact our support team directly. We’re committed to resolving any issues promptly and fairly to maintain your trust and satisfaction.</p>
          </div>
        </div>
      </div>
      {/* FAQ Div */}
    </div>
  );
};

export default NewsFaq;
