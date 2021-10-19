import React from "react";
import buttonArrow from "../assets/images/Slim vectorobject.png";
import greenArrow from "../assets/images/greenArrow.png";

const Description = () => {
  return (
    <section id="description-wrapper">

      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="card-wrap-one card">
              <div className="icon">
                <img class="arrow-img" src={buttonArrow} alt="arrow" />
              </div>
              <div className="title-warp">
                <div className="title">Patiënt</div>
                <div className="subtitle">communicatie</div>
              </div>
              <div className="content">
                Miljoenen patiënten op het juiste moment bereiken? Lorem ipsum
                dolor sit amet consectetur adipiscing elit tiamac nulla vel
                velit tincidunt.
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card-wrap-two card">
              <div className="icon">
                <img class="arrow-img" src={greenArrow} alt="arrow" />
              </div>
              <div className="title-warp">
                <div className="title">Zorgprofessional</div>
                <div className="subtitle">communicatie</div>
              </div>

              <div className="content">
                De eerste prioriteit van de zorgprofessional is zijn/haar
                patiënten. Hoe bereikt u zorgprofessionals dan toch met uw
                boodschap?
              </div>
            </div>
          </div>
        </div>
        <p className="title">
          IDS is een <span>onafhankelijke organisatie</span> gespecialiseerd in
          voorlichting over gezondheid in de wachtkamer. Wij ondersteunen de{" "}
          <span>dagelijkse dialoog tussen patiënt en zorgverlener</span>
        </p>
        <div className="button">
          <a class="link" href="/#">
            Meer over IDS
            <img class="quote-img" src={buttonArrow} alt="arrow" />
          </a>
        </div>
      </div>

    </section>
  );
};

export default Description;
