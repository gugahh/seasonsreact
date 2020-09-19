import React from 'react';

const HEMISF_SUL = 'Sul';
const HEMISF_NORTE = 'Norte';

const SeasonDisplay = (props) => {

    const hemisferio = (props.latitude <= 0) 
        ? HEMISF_SUL
        : HEMISF_NORTE;

    const mesAtual = new Date().getMonth() + 1;

    const mesQuente = (
        (hemisferio === HEMISF_SUL && ( mesAtual >= 10 || mesAtual <= 3)) 
        || (hemisferio === HEMISF_NORTE && mesAtual >= 4 && mesAtual <= 9)
    ) ? true : false;

    const climaLocal = mesQuente 
        ? 'Está quente aí, não?' 
        : 'Opa, deve estar bem frio, hein?';


    const iconStyle = mesQuente ? `sun icon` : `snowflake icon`;
        
    return (
        <div>
            <i className={iconStyle} />
            <h1>{climaLocal}</h1>
            <i className={iconStyle} />
        </div>
     ) ;
}

export default SeasonDisplay;