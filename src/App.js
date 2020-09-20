import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    // Constructor eh o primeiro metodo a ser executado na isntancia (precede Render.)
    constructor(props) {

        super(props); // Obrigatório no Construtor!

        /* Aqui no construtor é o UNICO momento em que é
           permitido atribuir diretamente o state! */
        this.state = {
            latitude: null,
            errorMessage: null
        };
    }

    // Invocado assim que o componente é inicialmenten exibido.
    // Bom lugar para dataloading.
    componentDidMount() {
        console.log('>> O Componente foi exibido.');
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude });
            },
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    // Invocado quando há alteração no estado ('state') do objeto.
    componentDidUpdate() {
        console.log('>> O Componente foi atualizado.')
    }

    // Obs: Implementar o metodo RENDER eh obrigatorio!
    render() {
        if (this.state.latitude && !this.state.errorMessage) {

            return <SeasonDisplay
                    latitude = {this.state.latitude}/>

        } else if (!this.state.latitude && this.state.errorMessage) {

            return <div>ErrorMessage: {this.state.errorMessage}</div>;

        }
        return <Spinner text="Loading"/>;
    }

}

export default App;