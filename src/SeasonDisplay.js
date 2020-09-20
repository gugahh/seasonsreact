import './css/SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach!',
        iconName: 'sun outline'
    },
    winter: {
        text: 'Damn, it\'s cold in here!',
        iconName: 'snowflake outline'
    }
};

const SeasonDisplay = (props) => {

    const latitude = props.latitude;
    const mesAtual = new Date().getMonth() + 1;

    const season = getSeason(latitude, mesAtual);
    const { text, iconName } = seasonConfig[season];
        
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${iconName} icon massive`} />
            <h1>{text}</h1>
            <i className={`icon-right ${iconName} icon massive`} />
        </div>
     ) ;

     /**
      * Obtem a 'estacao do ano', baseado em latitude e o mes corrente.
      * Retorna 'summer' (verao) ou 'winter' (inverno).
      * @param {*} latitude 
      * @param {*} mesAtual 
      */
     function getSeason(latitude, mesAtual) {
        var estacao = (
            //Hemisferio Sul:
            ( (latitude <= 0) && ( mesAtual >= 10 || mesAtual <= 3))  
            //Hemisferio norte
            || ((latitude > 0) && mesAtual >= 4 && mesAtual <= 9) 
        ) ? 'summer' : 'winter';

        return estacao;
     }
}

export default SeasonDisplay;