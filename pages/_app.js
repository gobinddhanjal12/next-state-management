import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { LoaderProvider } from "@/context/LoaderContext";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <LoaderProvider>
        <Component {...pageProps} />
      </LoaderProvider>
    </Provider>
  );
}
