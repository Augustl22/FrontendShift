import React from "react";

import { Input } from "../components/Input/index";
import { Button } from "../components/Button/index";


export const RootPage = () => {
	const [formState, setFormState] = React.useState({
		name: "",
		password: "",
	});

	const onChange = (event) => {
		const field = event.target.name;
		console.log("@@@", field);
		setFormState({ ...formState, [field]: event.target.value });
	};

    const onSubmit = () => {
        
    }

	console.log("formState", formState);

	return (
		<form>
			<Input name="name" value={formState.name} onChange={onChange} type="text" placeholder="Username"/>
            <Input name="password" value={formState.password} onChange={onChange} type="password" placeholder="password"/>

			<div>name - {formState.name}</div>
			<div>password - {formState.password}</div>

            <Button onSubmit={onSubmit}>Login</Button>
		</form>
	);
};
