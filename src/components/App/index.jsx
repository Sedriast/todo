import React from "react";
import { UI } from "./UI";
import { HomeProvider } from "../../hooks/useContexts";

function App() {
	return (
		<HomeProvider>
			<UI />
		</HomeProvider>
	);
}

export { App };
