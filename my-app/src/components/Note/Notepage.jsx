import React, { useState } from "react";
import { Note } from "./Note";
import { useForm } from "react-hook-form";
import "./Note.css"



export const Notepage = () => {
	
	const [modalActive, setModalActive] = useState(false);
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
	} = useForm();
	
	const onSubmit = (data) => {
		console.log(data);
		alert(JSON.stringify(data));
	};

	return (
		<div>
			<div>
			<button onClick={() => setModalActive(true)}>Заметка</button>
			</div>
			<Note active={modalActive} setActive={setModalActive}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input className="noteName"  placeholder="Введи название"
					{...register("nameNote",)}
				/>
				<div className="noteDateTime">
				<input className="noteDateTimeLeft" type="datetime-local" {...register("dataStart")}></input>
				<input className="noteDateTimeRight" type="datetime-local" {...register("dataEnd")}></input>
				</div>
				<br/>
				<textarea rows="10" cols="50" {...register("descriptionNote")}></textarea>
				
				<input type="submit" disabled={!isValid} />
			</form>
			</Note>

		</div>
	);
};
