import React from "react";
import checkmark from "../assets/images/ion-checkmark.png";
import buttonArrow from "../assets/images/Slim vectorobject white.png";
import overlay from "../assets/images/overlay kopiëren.png";
const Form = () => {
  return (
    <section id="form-wrapper">
      <div className="container">
        <div className="title">
          Download gratis <span>onze whitepaper</span> en kom alles te weten
          over <span>wachtkamercommunicatie</span>
        </div>

        <div className="form-box-wrapper">
          <div className="row">
            <div className="col-md-7">
              <div className="instruction">
                <img className="checkmark" src={checkmark} alt="checkmark" />
                Volledig overzicht van bereikcijfers en meer campagne
                voorbeelden.
              </div>
              <div className="instruction">
                <img className="checkmark" src={checkmark} alt="checkmark" />
                Nulla tempus ultrices scelerisque orbi sagittis neque ut
                consect.
              </div>
              <div className="instruction">
                <img className="checkmark" src={checkmark} alt="checkmark" />
                Vivamus magna augue elementum id turpis!
              </div>

              <form>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      className="input-box"
                      type="text"
                      name="firstName"
                      placeholder="Voornaam"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="input-box"
                      type="text"
                      name="LastName"
                      placeholder="Achternaam"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <input
                      className="input-box"
                      type="text"
                      name="Email"
                      placeholder="E-mailadres"
                    />
                  </div>
                </div>

                <button className="button" type="submit">
                  <img src={buttonArrow} alt="arrow" />
                  Stuur maar op!
                </button>
              </form>
            </div>
            <div className="col-md-5">
              <div className="overlay-wrapper">
                <img className="overlay-img" src={overlay} alt="overlay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
