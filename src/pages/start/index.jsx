import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import images from "../../constants/images";
import { useState, useEffect } from "react";
import Name from "@/components/Name/Name";
import { FadeLoader } from "react-spinners";
function Index() {
	const router = useRouter();
	const [opa, setOpa] = useState("0");
	const [isHidden, setIsHidden] = useState("");

	useEffect(() => {
		setTimeout(() => {
			router.push("../desktop");
		}, 3000);
	}, []);

	return (
		<div className=" h-screen  overflow-hidden w-screen">
			<div className="flex h-screen w-screen items-center justify-center p-6 bg-black flex-col">
				<Name />
				<FadeLoader height={50} width={10} className="absolute" color="#36d7b7" />
			</div>
			<div></div>
		</div>
	);
}

export default Index;
