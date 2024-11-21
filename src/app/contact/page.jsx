import React from "react";
import PageIntro from "../components/PageIntro";
import ContactDetails from "../components/ContactDetails";
import Container from "../components/Container";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <>
      <PageIntro eyebrow="Contact Us" title="Let's work together">
        <p>We can not wait to hear from you.</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
