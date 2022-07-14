import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { registration } from "../../actions/registration";
import "./RegistrationPage.css";

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
		registration(data.login, data.email, data.password);
		alert(JSON.stringify(data));
		//reset();
	};

	return (
		<div className="page">
			<div className="registrationPage">
				<Link className="link" to="/">
					Login
				</Link>
				<h1 style={{ marginTop: 40 }}>Registration</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<label className="registrationLabel">
						Username:
						<input
							className="inputTextRegistration"
							placeholder="Ivan"
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
					<div style={{ height: 30 }}>
						{errors?.login && (
							<p className="errorMassageRegistration">
								{errors?.login?.message || "Error!"}
							</p>
						)}
					</div>
					<label className="registrationLabel">
						Email:
						<input
							className="inputTextRegistration"
							placeholder="sample@sample.com"
							{...register("email", {
								required: "Поле обязательно к заполнению",
								pattern: {
									value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
									message: "Email введен неправильно",
								},
							})}
						/>
					</label>
					<div style={{ height: 30 }}>
						{errors?.email && (
							<p className="errorMassageRegistration">
								{errors?.email?.message || "Error!"}
							</p>
						)}
					</div>
					<label className="registrationLabel">
						Password:
						<input
							className="inputTextRegistration"
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
									message:
										"Пароль должен содержать как минимум 1 заглавную и 1 строчную букву",
								},
							})}
						/>
					</label>
					<div style={{ height: 30, maxWidth: 300 }}>
						{errors?.password && (
							<p className="errorMassageRegistration">
								{errors?.password?.message || "Error!"}
							</p>
						)}
					</div>
					<label className="registrationLabel">
						Confirm Password:
						<input
							className="inputTextRegistration"
							type="password"
							{...register("repeatPassword", {
								required: "Поле обязательно к заполнению",
								validate: (value) =>
									value === password.current ||
									"Пароли не совпадают",
							})}
						/>
					</label>
					<div style={{ height: 30 }}>
						{errors?.repeatPassword && (
							<p className="errorMassageRegistration">
								{errors?.repeatPassword?.message || "Error!"}
							</p>
						)}
					</div>
					<input
						className="registrationSubmit"
						type="submit"
						disabled={!isValid}
						value="Sign up"
					/>
				</form>
			</div>
		</div>
	);
};
