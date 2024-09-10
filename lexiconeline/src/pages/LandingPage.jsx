import { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Searchbar } from "../components/Searchbar/Searchbar";
import { Paper } from "../components/Paper/Paper";

export const LandingPage = () => {
	const [data, setData] = useState();

	useEffect(() => {
		console.log(data);
	}, [data]);


	return (
		<>
			<Header />
			<Main></Main>
			<Searchbar wordData={setData} />
			{data ? <Paper words={data} /> : null}
		</>
	);
};
