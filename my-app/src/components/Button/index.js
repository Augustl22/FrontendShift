import React from "react";

import styles from './Button.module.css'

export const Button = ({ children, onSubmit }) => {
	return <button className={styles.button} onSubmit={onSubmit}>{children}</button>;
};
