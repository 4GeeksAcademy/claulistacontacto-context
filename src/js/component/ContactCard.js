import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";
import { Context } from "../store/appContext.js";
import { ModalNuevo } from "./ModalNuevo";

export const ContactCard = props => {
	const { store, actions } = useContext(Context);
	const [mostrarModal, setMostrarModal] = useState(false);

	const [state, setState] = useState({
		//initialize state here
	});

	// function editar(id) {
	// 	actions.editarContacto(fullName, email, address, phone, id);
	// }

	return (
		<>
			<li className="list-group-item">
				<div className="row w-100">
					<div className="col-12 col-sm-6 col-md-3 px-0">
						<img
							src={MikePhoto}
							alt="Mike Anamendolla"
							className="rounded-circle mx-auto d-block img-fluid"
						/>
					</div>
					<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
						<div className=" float-right">
							<button className="btn" onClick={() => setMostrarModal(true)}>
								<i className="fas fa-pencil-alt mr-3" />
							</button>
							<button className="btn" onClick={() => props.onDelete()}>
								<i className="fas fa-trash-alt" />
							</button>
						</div>
						<label className="name lead">{props.full_name}</label>
						<br />
						<i className="fas fa-map-marker-alt text-muted mr-3" />
						<span className="text-muted">{props.address}</span>
						<br />
						<span
							className="fa fa-phone fa-fw text-muted mr-3"
							data-toggle="tooltip"
							title=""
							data-original-title="(870) 288-4149"
						/>
						<span className="text-muted small">{props.phone}</span>
						<br />
						<span
							className="fa fa-envelope fa-fw text-muted mr-3"
							data-toggle="tooltip"
							data-original-title=""
							title=""
						/>
						<span className="text-muted small text-truncate">{props.email}</span>
					</div>
				</div>
				{mostrarModal && <ModalNuevo manejarModal={() => setMostrarModal(false)} />}
			</li>
		</>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	full_name: PropTypes.string,
	email: PropTypes.string,
	phone: PropTypes.string,
	address: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
