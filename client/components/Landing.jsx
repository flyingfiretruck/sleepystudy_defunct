import React, { useEffect } from 'react';
import { Button, Image } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  useEffect(() => {
    AOS.init({ duration: 1500});
  }, []);
  return (
    <div className="landing">
      <Image className="connection-image" src="../assets/connection.svg" alt="connection" />
      <p className="intro-paragraph" data-aos="fade-up" data-aos-anchor=".other-element">
        Did you know you might be able to learn while you sleep?
        There has been multiple studies demonstarting people's ability
        to learn while they are asleep, in a basic learning form called conditioning.
      </p>
      <Image className="studying-image" src="../assets/studying.svg" alt="studying"/>

      <p className="intro-paragraph" data-aos="fade-up" data-aos-anchor=".other-element">
        These studies had their subjects listen to different recordings while they were under REM sleep.
        Replicating the conditions of these experiments, this application allows you to listen to
        Youtube tutorials while you are asleep.
      </p>
      <div className="p3">
      <p className="intro-paragraph" data-aos="fade-up" data-aos-anchor=".other-element">
          Will this application really supplement your learning? I can't say for sure.
          But you won't lose anything from trying it out!
        </p>
      </div>
    </div>
  );
};


export default Landing;