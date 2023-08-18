import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const ModalNuevo = ({ manejarModal }) => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const { store, actions } = useContext(Context);

	// crear funcion agregar contacto con OnSubmit

	function manipularFullName(e) {
		setFullName(e.target.value);
	}
	function manipularEmail(e) {
		setEmail(e.target.value);
	}
	function manipularAddress(e) {
		setAddress(e.target.value);
	}
	function manipularPhone(e) {
		setPhone(e.target.value);
	}
	console.log(fullName);

	function agregarTodo(e) {
		e.preventDefault();
		actions.agregarContacto(fullName, email, phone, address);
	}

	return (
		<div>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Modal title</h5>
						<button
							type="button"
							className="btn-close"
							onClick={manejarModal}
							data-bs-dismiss="modal"
							aria-label="Close">
							X
						</button>
					</div>
					<div className="modal-body">
						<form>
							<div className="form-group">
								<label>Full Name</label>
								<input
									type="text"
									className="form-control"
									placeholder="Full Name"
									onChange={manipularFullName}
								/>
							</div>
							<div className="form-group">
								<label>Email</label>
								<input
									type="email"
									className="form-control"
									placeholder="Enter email"
									onChange={manipularEmail}
								/>
							</div>
							<div className="form-group">
								<label>Phone</label>
								<input
									type="phone"
									className="form-control"
									placeholder="Enter phone"
									onChange={manipularPhone}
								/>
							</div>
							<div className="form-group">
								<label>Address</label>
								<input
									type="text"
									className="form-control"
									placeholder="Enter address"
									onChange={manipularAddress}
								/>
							</div>
							<button type="button" className="btn btn-primary form-control" onClick={agregarTodo}>
								save
							</button>
						</form>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
							Close
						</button>
						<button type="button" className="btn btn-primary">
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

ModalNuevo.propTypes = {
	manejarModal: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/
ModalNuevo.defaultProps = {};
