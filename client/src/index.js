import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Teaser from "./components/Teaser"
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "./components/page";

storyblokInit({
  accessToken: "zli0rMOA0AP2nDLCD1olXAtt",
  use: [apiPlugin],
  components: {
	teaser:Teaser,
	page:Page
  }
});

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
