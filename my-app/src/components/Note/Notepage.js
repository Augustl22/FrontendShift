import React, { useState, useMemo } from "react";
import { Note } from "./Note";
import { useForm } from "react-hook-form";
import "./Note.css";
import { CirclePicker } from "react-color";
import { addNote } from "../../actions/addNote";

export const Notepage = () => {
	const [modalActive, setModalActive] = useState(false);
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		addNote(data.startDate,data.endDate,data.name,data.type,"Blue")
	};

	return (
		<div>
			<div>
				<button onClick={() => setModalActive(true)}>Заметка</button>
			</div>
			<Note active={modalActive} setActive={setModalActive}>
				<form className="formNote" onSubmit={handleSubmit(onSubmit)}>
					<input
						className="noteName"
						placeholder="Введи название"
						{...register("name")}
					/>
					<div>
						<input
							className="noteDateTimeLeft"
							type="datetime-local"
							{...register("startDate")}
						></input>
						<input
							className="noteDateTimeRight"
							type="datetime-local"
							{...register("endDate")}
						></input>
					</div>
					<br />

					<CirclePicker
						colors={[
							"Grey",
							"Red",
							"Green",
							"Blue",
							"Yellow",
							"Violet",
						]}
					/>
					<select className="selectNote" {...register("type")}>
						<option value={"event"}>Мероприятие</option>
						<option value={"meeting"}>Встреча</option>
						<option value={"goal"}>Цель</option>
					</select>

					<input
						className="submitNote"
						type="submit"
						disabled={!isValid}
					/>
				</form>
			</Note>
		</div>
	);
};
