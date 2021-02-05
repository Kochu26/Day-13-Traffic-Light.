import React from "react";

export class Semaforo extends React.Component {
	constructor() {
		super();
		this.state = {
			Rojo: false,
			Amarillo: false,
			Verde: false
		};
		this.brillaAmarillo = this.brillaAmarillo.bind(this);
		this.brillaRojo = this.brillaRojo.bind(this);
		this.brillaVerde = this.brillaVerde.bind(this);
		this.Reset = this.Reset.bind(this);
	}

	brillaRojo() {
		let r = true;
		let a = false;
		let v = false;

		this.setState({
			Rojo: r,
			Amarillo: a,
			Verde: v
		});
	}

	brillaAmarillo() {
		let r = false;
		let a = true;
		let v = false;

		this.setState({
			Rojo: r,
			Amarillo: a,
			Verde: v
		});
	}

	brillaVerde() {
		let r = false;
		let a = false;
		let v = true;

		this.setState({
			Rojo: r,
			Amarillo: a,
			Verde: v
		});
	}

	Reset() {
		let r = false;
		let a = false;
		let v = false;

		this.setState({
			Rojo: r,
			Amarillo: a,
			Verde: v
		});
	}

	render() {
		return (
			<div>
				<div
					className="d-flex flex-column align-items-center justify-content-center"
					id="semaforo">
					<div>
						<button
							id={this.state.Rojo ? "estiloBrillo" : null}
							className="btn btn-danger"
							onClick={this.brillaRojo}></button>
					</div>
					<div>
						<button
							id={this.state.Amarillo ? "estiloBrillo" : null}
							className="btn btn-warning"
							onClick={this.brillaAmarillo}></button>
					</div>
					<div>
						<button
							id={this.state.Verde ? "estiloBrillo" : null}
							className="btn btn-success"
							onClick={this.brillaVerde}></button>
					</div>
				</div>
				<div>
					<button
						id="reset"
						className="btn btn-outline-light"
						onClick={this.Reset}>
						Reset
					</button>
				</div>
			</div>
		);
	}
}
