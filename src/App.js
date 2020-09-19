import React from 'react';

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

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    componentDidMount() {
        console.log('>> O Componente foi exibido.');
    }

    componentDidUpdate() {
        console.log('>> O Componente foi atualizado.')
    }

    // Obs: Implementar o metodo RENDER eh obrigatorio!
    render() {
        if (this.state.latitude && !this.state.errorMessage) {

            return <div>Latitude: {this.state.latitude}</div>;

        } else if (!this.state.latitude && this.state.errorMessage) {

            return <div>ErrorMessage: {this.state.errorMessage}</div>;

        }
        return <div>Loading...</div>;
    }

}

export default App;