import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { color, motion } from "framer-motion";
import images from "../../constants/images";
import { useState, useEffect } from "react";
import Name from "@/components/Name/Name";
import { BsFillSkipForwardFill } from "react-icons/bs";
import { HashLoader } from "react-spinners";
function Index() {
	const router = useRouter();
	const [opa, setOpa] = useState("0");
	const [isHidden, setIsHidden] = useState("");

	useEffect(() => {
		setTimeout(() => {
			router.push("../desktop");
		}, 7000);
	}, []);

	function clickHanlder() {
		router.push("../desktop");
	}
	return (
		<div className=" h-screen  overflow-hidden w-screen">
			<div className="flex h-screen w-screen items-center justify-center  relative p-6 bg-black flex-col">
				<Name />
				<div className="mt-5">
					<HashLoader size={70} color="#36d7b7" />
				</div>{" "}
				<div className="absolute bottom-[30%] right-[23%]">
					<BsFillSkipForwardFill
						onClick={clickHanlder}
						size={50}
						color="white"
						className="  hover:scale-125 duration-200 
						"
					/>
				</div>
			</div>
		</div>
	);
}

export default Index;
