export const Paper = ({ words }) => {
	console.log(words[0]);
	return (
		<>
			{words ? (
				<div>
					<h2>{words[0].word}</h2>
					{words[0].meanings.map((item) => {
						return <h4>{item.partOfSpeech}</h4>;
					})}
					{words[0].meanings.map((item) => {
						return item.definitions.map((def) => {
							console.log(def.definition);
							return (
								<>
									<p>{def.definition}</p>
								</>
							);
						});
					})}
				</div>
			) : null}
		</>
	);
};
