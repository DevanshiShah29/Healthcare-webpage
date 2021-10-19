import React from "react";
import quote from "../assets/images/quote.png";
import video from "../assets/images/video.png";
import buttonArrow from "../assets/images/Slim vectorobject.png";

const Cards = () => {
  return (
    <section id="successen">
      <div className="video-container">
        <div className="play-video">
          <img className="cardImage" src={video} alt="video" />
          <button
            className="btn-play-video"
            data-video-id="https://www.youtube.com/embed/ppdFrLhj7us"
          ></button>
           <div class="title">Maak <span>in 2 minuten </span>kennis metonze <span>diensten</span> en <span>werkwijze</span>.</div>
        </div>
      </div>
      <div className="container">
        <div className="section-header clearfix">
          <div className="title">
            <span>Successen</span> in de wachtkamer
          </div>
          <div className="button">
            <a class="link" href="/#">
              Alle cases <img class="quote-img" src={buttonArrow} alt="quote" />
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="card-1 card">
              <div className="content">
                <div className="title">Tante Biotica</div>
                <div className="description">
                  Ministerie van Volksgezondheid
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card-2 card">
              <div className="content">
                <div className="title">Geloof je het selfie?</div>
                <div className="description">PsyQ / Parnassia Groep</div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img class="quote-img" src={quote} alt="quote" />
              <div className="quote-content">
                <div className="testimonial">
                  Uitgebreid assortiment aan patiënteninformatie die regelmatig
                  wordt meegenomen. Leuk om te zien dat mensen tussen de folders
                  aan het kijken zijn.{" "}
                </div>
                <div className="meta-info">
                  Huisartspraktijk de Jong in Goirle
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
