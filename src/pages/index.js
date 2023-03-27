import Head from "next/head";
import { useState, useContext } from "react";
import React from "react";

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
			<script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-ZLBV3DN4D9"
			></script>
			<script>
				window.dataLayer = window.dataLayer || []; function gtag()
				{dataLayer.push(arguments)}
				gtag('js', new Date()); gtag('config', 'G-ZLBV3DN4D9');
			</script>
			<Splash />
		</>
	);
}
