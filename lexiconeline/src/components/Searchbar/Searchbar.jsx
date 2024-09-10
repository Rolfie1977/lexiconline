import { useState } from "react";

export const Searchbar = ({wordData}) => {
	const [searchedWord, setSearchedWord] = useState("");

	const handleSearchWord = (event) => {
		setSearchedWord(event.target.value);
	};

	const getWordData = async (word) => {
		console.log(word);
		fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
			.then((res) => res.json())
			.then((data) => wordData(data))
			.catch((error) => console.error(error));
	};

	return (
		<>
			<input
				onChange={(event) => handleSearchWord(event)}
				type="text"
				placeholder="Hello"
			/>
			<button onClick={() => getWordData(searchedWord)}>Search</button>
		</>
	);
};
