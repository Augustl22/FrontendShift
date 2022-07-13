import React, { useState } from "react";
import { Note } from "./Note";
import { useForm } from "react-hook-form";



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

	//const nowDate = new Date();
	//const date = nowDate.toISOString().substr(0,10);

	return (
		<div>
			<div>
			<button onClick={() => setModalActive(true)}>Заметка</button>
			</div>
			<Note active={modalActive} setActive={setModalActive}>
			<form onSubmit={handleSubmit(onSubmit)}>
					<input placeholder="Введи название"
						{...register("nameNote",)}
					/>
				<div style={{ height: 40 }}>
					{errors?.nameNote && (
						<p>{errors?.nameNote?.message || "Error!"}</p>
					)}
				</div>
				<input type="datetime-local" {...register("dataStart")}></input>
				<input type="datetime-local" {...register("dataEnd")}></input>
				<br/>
				<textarea rows="10" cols="45" {...register("descriptionNote")}></textarea>
				
				<input type="submit" disabled={!isValid} />
			</form>
			</Note>

		</div>
	);
};
