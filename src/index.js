import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  // Constructor eh o primeiro metodo a ser executado na isntancia (precede Render.)
  constructor(props) {

    super(props); // Obrigatório no Construtor!

    /* Aqui no construtor é o UNICO momento em que é
       permitido atribuir diretamente o state! */
    this.state = { latitude: 'Unknown' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState( { latitude: position.coords.latitude } );
        console.log('Latitude: ' + position.coords.latitude);
      } ,
      (err) => console.log(err)
    );
  }

  // Obs: Implementar este metodo eh obrigatorio.
  render() {
    return <div>Latitude: {this.state.latitude}</div>
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
