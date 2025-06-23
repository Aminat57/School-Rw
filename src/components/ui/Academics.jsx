import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import stemImg from "@/assets/stem.png";
import literatureImg from "@/assets/literature.png";
import artsImg from "@/assets/arts.png";
import sportsImg from "@/assets/sports.png";
import "./Academics.css";

export default function Academics() {
  const navigate = useNavigate(); // React Router hook for navigation

  const programs = [
    { 
      name: "STEM Program", 
      desc: "Our STEM program integrates Science, Technology, Engineering, and Mathematics to inspire innovation and problem-solving skills.", 
      img: stemImg 
    },
    { 
      name: "Language & Literature", 
      desc: "We emphasize strong communication skills through reading, writing, and storytelling, fostering a love for language and literature.", 
      img: literatureImg 
    },
    { 
      name: "Arts & Music", 
      desc: "Our arts and music programs encourage creativity and self-expression through painting, sculpture, theater, and musical instruments.", 
      img: artsImg 
    },
    { 
      name: "Physical Education", 
      desc: "Promoting fitness, teamwork, and a healthy lifestyle through sports, yoga, and outdoor activities.", 
      img: sportsImg 
    }
  ];

  return (
    <div className="academics-container">
      <Card className="academics-card">
        <CardContent>
          {/* Title and Introduction */}
          <h2 className="academics-title">Academics</h2>
          <p className="academics-text">
            At GS AKABUGA Primary School, we offer a comprehensive academic program designed 
            to nurture intellectual curiosity, creativity, and critical thinking.
          </p>

          {/* Academic Programs Grid */}
          <div className="academics-grid">
            {programs.map((program, index) => (
              <div key={index} className="academics-program">
                <img 
                  src={program.img} 
                  alt={program.name} 
                  className="academics-image"
                />
                <h3 className="academics-subtitle">{program.name}</h3>
                <p className="academics-text">{program.desc}</p>
                <Button onClick={() => navigate("/not-found")} className="academics-btn">
                  Learn More
                </Button>
              </div>
            ))}
          </div>

          {/* Call-to-Action */}
          <div className="text-center mt-12">
            <Button onClick={() => navigate("/not-found")} className="academics-btn-large">
              Apply Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
