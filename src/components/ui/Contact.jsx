import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import contactImg from "@/assets/contact.png"; // Ensure the image path is correct
import "./Contact.css"; // Import CSS

export default function Contact() {
  return (
    <div className="contact-container">
      <Card className="contact-card">
        <CardContent className="p-8">
          {/* Title */}
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            Have any questions? Feel free to reach out to us. We’re here to help!
          </p>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-info-item">
              <Mail className="contact-icon" />
              <span>info@gs_akabuga.com</span>
            </div>
            <div className="contact-info-item">
              <Phone className="contact-icon" />
              <span>+123 456 7890</span>
            </div>
          </div>

          {/* Form & Image Side-by-Side */}
          <div className="contact-form-container">
            {/* Image */}
            <img src={contactImg} alt="Contact Support" className="contact-image" />

            {/* Contact Form */}
            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message" rows="4" />
              <div className="text-center">
                <Button className="send-button">Send Message</Button>
              </div>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="faq-container">
            <h3 className="faq-title">Frequently Asked Questions</h3>
            <div className="faq-list">
              <details className="faq-item">
                <summary>What are your school hours?</summary>
                <p>Our school operates from 8:00 AM to 3:00 PM, Monday to Friday.</p>
              </details>
              <details className="faq-item">
                <summary>How can I apply for admission?</summary>
                <p>You can apply through our website's admissions page or visit our school office.</p>
              </details>
              <details className="faq-item">
                <summary>Do you offer extracurricular activities?</summary>
                <p>Yes, we offer a variety of extracurricular activities including sports, music, and arts programs.</p>
              </details>
              <details className="faq-item">
                <summary>Is transportation provided for students?</summary>
                <p>Yes, we have a school bus service available for students. Please contact us for routes and fees.</p>
              </details>
              <details className="faq-item">
                <summary>Are meals provided at the school?</summary>
                <p>Yes, we provide nutritious meals for students during school hours.</p>
              </details>
              <details className="faq-item">
                <summary>What curriculum do you follow?</summary>
                <p>We follow a well-structured curriculum that meets national education standards while encouraging creativity and critical thinking.</p>
              </details>
              <details className="faq-item">
                <summary>How do I schedule a school tour?</summary>
                <p>You can schedule a school tour by contacting our office via phone or email.</p>
              </details>
            </div>
          </div>

          {/* Our Culture Section */}
          <div className="culture-section">
            <h3 className="culture-title">Our Culture</h3>
            <p>
              At GS AKABUGA Primary School, we embrace a culture of inclusivity, respect, and lifelong learning. 
              Our students thrive in a supportive environment that encourages curiosity, creativity, and personal growth.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
