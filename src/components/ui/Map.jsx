import React from "react";
import { Button } from "@/components/ui/button";
import "./Map.css"; // Import the CSS file

export default function Map() {
  return (
    <div className="map-container">
      <h2 className="map-title">Our Location</h2>
      <p className="map-description">
        GS AKABUGA is located in Akabuga, Kiramuruzi, Gatsibo District, Eastern Province, Rwanda.
        Use the map below to find your way to our campus.
      </p>

      {/* Google Map Embed */}
      <div className="map-frame">
        <iframe
          title="School Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.555555555555!2d30.3939!3d-1.8001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5f5f5f5f5f5%3A0x5f5f5f5f5f5f5f5f!2sAkabuga%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1633023226784!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Call-to-Action */}
      <Button className="map-button">Get Directions</Button>
    </div>
  );
}
