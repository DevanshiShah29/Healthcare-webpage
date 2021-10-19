import React from 'react'
import kwf from '../assets/images/kwf.png'
import vogel from '../assets/images/a vogel.png'
import df from '../assets/images/diabetes fonds.png'
import equipe from '../assets/images/equipe.png'
import hartstichting from '../assets/images/hartstichting.png'
import pfizer from '../assets/images/pfizer.png'
import unilever from '../assets/images/unilever.png'
import vws from '../assets/images/vws.png'

const Logos = () => {
    
    return (
        <section id="logo-container">
            <div className="container">
                <div className="row">
                    <div className="logos">
                        <img src={kwf} alt="logo"/>
                        <img src={vogel} alt="logo"/>
                        <img src={pfizer} alt="logo"/>
                        <img src={equipe} alt="logo"/>
                        <img src={vws} alt="logo"/>
                        <img src={unilever} alt="logo"/>
                        <img src={hartstichting} alt="logo"/>
                        <img src={df} alt="logo"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Logos
