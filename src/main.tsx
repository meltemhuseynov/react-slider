import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
const images: string[] = [
  "https://picsum.photos/id/88/700/500",
  "https://picsum.photos/id/10/700/500",
  "https://picsum.photos/id/120/700/500",
  "https://picsum.photos/id/55/700/500",
  "https://picsum.photos/id/111/700/500",
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <App images={images} />
);
