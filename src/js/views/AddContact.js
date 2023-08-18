import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const AddContact = () => {
	//declarar los 4 estados para nombre direccion telefono y mail
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
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
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
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
