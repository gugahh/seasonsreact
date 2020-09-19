import React from 'react';

const SeasonDisplay = (props) => {
    var hemisferio = null;

    if (props.latitude <= 0) {
        hemisferio = 'Sul';
    } else {
        hemisferio = 'Norte';
    }

    const mesAtual = new Date().getMonth() + 1;

    const mesQuente = 
    (
        true
        //(hemisferio === 'Norte')

    );

    /*
            || (hemisferio === 'Sul')
    Norte  && mesAtual >= 4 && mesAtual <= 9
    Sul && (mesAtual >= 10 || mesAtual <= 3)
    */

    console.log('Hemisfério: ' + hemisferio);
    console.log('Mes quente: ' + mesQuente);
    console.log('Norte '  + (hemisferio === 'Norte' && mesAtual >= 4 && mesAtual <= 8));
    console.log('Sul '  + (hemisferio === 'Sul' && (mesAtual >= 10 || mesAtual <= 3)));

    var climaLocal = ( (mesQuente) 
        ? 'Está quente aí, não?' 
        : 'Opa, deve estar bem frio, hein?');

    console.log('Mes quente: ' + mesQuente);

    console.log('Clima Local: ' + climaLocal);

    return (
        <div>
            <p>Hemisfério: <b>{hemisferio}</b></p>
            <p>Mês: <b>{mesAtual}</b></p>
            <p>Mês Quente: {mesQuente ? 'true' : 'false'}</p>
            <p>{climaLocal}</p>
        </div>
     ) ;
}

export default SeasonDisplay;