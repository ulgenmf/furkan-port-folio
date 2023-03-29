import "./globals.css";
import { useEffect } from "react";
import "../pages/splash/Splash.scss";
import "../components/DefaultWindow/DeafultWindow.scss";
import React, { createContext, useState } from "react";
import { useContext } from "react";
export const MyContext = createContext({
	userName: "",
	isFormHidden: "",
	isMessageSent: "",
	setUserName: () => {},
	setIsFormHidden: () => {},
	setIsMessageSent: () => {},
});

export default function App({ Component, pageProps }) {
	const [userName, setUserName] = useState("");
	const [isFormHidden, setIsFormHidden] = useState(true);
	const [isMessageSent, setIsMessageSent] = useState(false);

	return (
		<MyContext.Provider
			value={{
				userName,
				setUserName,
				isFormHidden,
				setIsFormHidden,
				isMessageSent,
				setIsMessageSent,
			}}
		>
			<div
				id="mobile-warning"
				className="__mobile pc:hidden text-5xl text-center items-center flex  text-purple-400 h-screen w-screen bg-black font-V3"
			>
				<p className="p-2">
					I see you are on a mobile device, sorry to inform you responsive
					configuration hasnt been completed yet, please try with bigger screen
				</p>
			</div>
			<div className="tablet:hidden mobile:hidden pc:block">
				<Component {...pageProps} />
			</div>
		</MyContext.Provider>
	);
}
