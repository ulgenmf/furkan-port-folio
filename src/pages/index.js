import Head from "next/head";
import { useState, useContext } from "react";
import React from "react";
import Dos from "@/components/DOS/Dos";
import ContactForm from "@/components/ContactForm/ContactForm";

import Splash from "./splash/";
export const MyContext = React.createContext();

export default function Home() {
	return (
		<>
			<Head>
				<title>HIRE ME ?</title>
				<meta name="description" content="" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link
					href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300&display=swap"
					rel="stylesheet"
				/>
			</Head>

			{/* <Splash /> */}

			<Dos />
		</>
	);
}
