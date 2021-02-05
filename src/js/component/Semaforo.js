import React from "react";

export class Semaforo extends React.Component {
    constructor(){
        super();
        this.state = {
            Rojo: false,
            Amarillo : false,
            Verde : false
        }
        

    }

    brillaRojo (){
        let r = true;
        let a = false;
        let v = false;
        
        this.setState({ 
            Rojo: r,
            Amarillo: a,
            Verde: v
         });
    }

    brillaAmarillo (){
        let r = false;
        let a = true;
        let v = false;
        
        this.setState({ 
            Rojo: r,
            Amarillo: a,
            Verde: v
         });
    }

    brillaVerde (){
        let r = false;
        let a = false;
        let v = true;
        
        this.setState({ 
            Rojo: r,
            Amarillo: a,
            Verde: v
         });
    }

    render() {
        if (this.state.Rojo===true){
            return(
                <div>
                <button
						type="button"
						className="btn btn-light"
						style={estiloBoton}
						onClick={this.stopTimer}>rojo
						
					</button>
					<button
						type="button"
						className="btn btn-outline-light"
						style={estiloBoton}
						onClick={this.resumeTimer}>verde
						
					</button>
					<button
						type="button"
						className="btn btn-outline-light"
						style={estiloBoton}
						onClick={this.resetTimer}>
						amarillo
					</button>
            </div>
            );
        }

        else if (this.state.Amarillo===true){
            return(
                <div>
                <button
						type="button"
						className="btn btn-outline-light"
						style={estiloBoton}
						onClick={this.stopTimer}>
						rojo
					</button>
					<button
						type="button"
						className="btn btn-light"
						style={estiloBoton}
						onClick={this.resumeTimer}>
						verde
					</button>
					<button
						type="button"
						className="btn btn-outline-light"
						style={estiloBoton}
						onClick={this.resetTimer}>
						amarillo
					</button>
            </div>
            );
        }

        else if (this.state.Amarillo===true){
            return(
                <div>
                <button
						type="button"
						className="btn btn-outline-light"
						style={estiloBoton}
						onClick={this.stopTimer}>
						rojo
					</button>
					<button
						type="button"
						className="btn btn-outline-light"
						style={estiloBoton}
						onClick={this.resumeTimer}>
						verde
					</button>
					<button
						type="button"
						className="btn btn-light"
						style={estiloBoton}
						onClick={this.resetTimer}>
						amarillo
					</button>
            </div>
            );
        }
		
    }
}