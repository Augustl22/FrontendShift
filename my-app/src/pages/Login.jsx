import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const Login = () => {
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
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>
					Login:
					<input
						{...register("login",)}
					/>
				</label>
				<div style={{ height: 40 }}>
					{errors?.login && (
						<p>{errors?.login?.message || "Error!"}</p>
					)}
				</div>
				<label>
					Password:
					<input
						type="password"
						{...register("password", )}
					/>
				</label>
				<div style={{ height: 40 }}>
					{errors?.password && (
						<p>{errors?.password?.message || "Error!"}</p>
					)}
				</div>
				<input type="submit" disabled={!isValid} />
                <Link to="/registration">Зарегистрироваться</Link>
			</form>
		</div>
	);
}
