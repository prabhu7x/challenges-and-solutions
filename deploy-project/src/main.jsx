import React from "react";
import ReactDOM from "react-dom/client";
import {DataProvider} from './build/Context/DataContext'

import './build/app.css'
import App from './build/App'

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <App />
  </DataProvider>
);
