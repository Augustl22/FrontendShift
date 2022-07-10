import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";

export const Registration = () => {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
		watch,
	} = useForm({
		mode: "onBlur",
	});
	const password = useRef({});
	password.current = watch("password", "");

	const onSubmit = (data) => {
		console.log(data);
		alert(JSON.stringify(data));
		reset();
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>
					Login:
					<input
						{...register("login", {
							required: "Поле обязательно к заполнению",
							minLength: {
								value: 3,
								message: "Минимум 3 символа",
							},
							maxLength: {
								value: 30,
								message: "Не больше 30 символов",
							},
						})}
					/>
				</label>
				<div style={{ height: 40 }}>
					{errors?.login && (
						<p>{errors?.login?.message || "Error!"}</p>
					)}
				</div>
				<label>
					Email:
					<input
						{...register("email", {
							required: "Поле обязательно к заполнению",
							pattern: {
								value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: "Email введен неправильно",
							},
						})}
					/>
				</label>
				<div style={{ height: 40 }}>
					{errors?.email && (
						<p>{errors?.email?.message || "Error!"}</p>
					)}
				</div>
				<label>
					Password:
					<input
						type="password"
						{...register("password", {
							required: "Поле обязательно к заполнению",
							minLength: {
								value: 8,
								message: "Минимум 8 символов",
							},
							maxLength: {
								value: 30,
								message: "Не больше 30 символов",	
							},
							pattern: {
								value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/,
								message: "Пароль должен содержать как минимум 1 заглавную и 1 строчную букву",
							},
						})}
					/>
				</label>
				<div style={{ height: 40 }}>
					{errors?.password && (
						<p>{errors?.password?.message || "Error!"}</p>
					)}
				</div>
				<label>
					Repeat Password:
					<input
						type="password"
						{...register("repeatPassword", {
							required: "Поле обязательно к заполнению",
							validate: value =>
							value === password.current || "Пароли не совпадают"
						})}
					/>
				</label>
				<div style={{ height: 40 }}>
					{errors?.repeatPassword && (
						<p>{errors?.repeatPassword?.message || "Error!"}</p>
					)}
				</div>
				<input type="submit" disabled={!isValid} />
                <Link to="/">Войти</Link>
			</form>
		</div>
	);
}
