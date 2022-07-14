import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { authorization } from "../../actions/authorization";
import { useDispatch } from "react-redux";
import "./LoginPage.css";

export const Login = () => {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		authorization(data.username, data.password);
		alert(JSON.stringify(data));
	};

	return (
		<div className="page">
			<div className="loginPage">
				<Link className="link" to="/registration">
					Sign up
				</Link>
				<h1 style={{ marginTop: 40 }}>Login</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<label className="loginLabel">
						Username:
						<input
							className="inputTextLogin"
							{...register("username")}
						/>
					</label>
					<div style={{ height: 30 }}>
						{errors?.login && (
							<p>{errors?.login?.message || "Error!"}</p>
						)}
					</div>
					<label className="loginLabel">
						Password:
						<input
							className="inputTextLogin"
							type="password"
							{...register("password")}
						/>
					</label>
					<div style={{ height: 30 }}>
						{errors?.password && (
							<p>{errors?.password?.message || "Error!"}</p>
						)}
					</div>
					<input
						className="loginSubmit"
						type="submit"
						disabled={!isValid}
						value="Login"
					/>
				</form>
			</div>
		</div>
	);
};
