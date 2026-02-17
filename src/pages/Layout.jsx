import { StoreProvider } from "../hooks/useGlobalReducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreProvider>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </StoreProvider>
);

