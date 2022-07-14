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
			<form className="formNote" onSubmit={handleSubmit(onSubmit)}>
				<input className="noteName"  placeholder="Введи название"
					{...register("nameNote",)}
				/>
				<div>
				<input className="noteDateTimeLeft" type="datetime-local" {...register("dataStart")}></input>
				<input className="noteDateTimeRight" type="datetime-local" {...register("dataEnd")}></input>
				</div>
				<br/>
				<textarea className="textareaNote" rows="7" cols="50" {...register("descriptionNote")}></textarea>
				
				<input className="submitNote" type="submit" disabled={!isValid} />
			</form>
			</Note>

		</div>
	);
};
