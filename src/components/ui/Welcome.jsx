import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import rwandaSchool1 from "@/assets/rwanda_school.png";
import rwandaSchool2 from "@/assets/rwanda_school_2.png";
import rwandaSchool3 from "@/assets/rwanda_school_3.png";
import rwandaSchool4 from "@/assets/rwanda_school_4.png";
import rwandaSchool5 from "@/assets/rwanda_school_5.png";
import rwandaSchool6 from "@/assets/rwanda_school_6.png";
import rwandaSchool7 from "@/assets/rwanda_school_7.png";
import "./Welcome.css";

export default function Welcome() {
  const images = [
    rwandaSchool1,
    rwandaSchool2,
    rwandaSchool3,
    rwandaSchool4,
    rwandaSchool5,
    rwandaSchool6,
    rwandaSchool7,
  ];

  return (
    <div className="welcome-container">
      <Card className="welcome-card">
        <CardContent>
          <h2 className="welcome-title">Welcome to GS AKABUGA</h2>
          <p className="welcome-text">
            Welcome to the GS AKABUGA Gallery. Here, we showcase moments that reflect the vibrant life of our school community.
            From engaging classroom activities and cultural celebrations to sports events and collaborative projects, our gallery captures
            the essence of learning and growth at GS AKABUGA. Every photo tells a story of dedication, joy, and the pursuit of excellence. 
            We invite you to browse through these snapshots and experience the spirit and pride that define our school.
          </p>
        </CardContent>
      </Card>

      {/* Image Gallery */}
      <div className="image-gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`GS AKABUGA ${index + 1}`}
            className="welcome-image"
          />
        ))}
      </div>
    </div>
  );
}
