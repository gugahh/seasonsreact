import React from 'react';

const SeasonDisplay = (props) => {
    var hemisferio = null;

    if (props.latitude <= 0) {
        hemisferio = 'Sul';
    } else {
        hemisferio = 'Norte';
    }

    const mesAtual = new Date().getMonth() + 1;

    var mesQuente = 
    (
        (hemisferio === 'Sul' && ( mesAtual >= 10 || mesAtual <= 3)) 
        || (hemisferio === 'Norte' && mesAtual >= 4 && mesAtual <= 9)
    ) ? true : false;

    var climaLocal = ( (mesQuente) 
        ? 'Está quente aí, não?' 
        : 'Opa, deve estar bem frio, hein?');

    return (
        <div>
            <p>Hemisfério: <b>{hemisferio}</b></p>
            <p>Mês: <b>{mesAtual}</b></p>
            <p>Mês Quente: {mesQuente ? 'true' : 'false'}</p>
            <h3>{climaLocal}</h3>
        </div>
     ) ;
}

export default SeasonDisplay;