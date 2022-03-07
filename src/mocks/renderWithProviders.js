import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../redux/store";
const store = configureStore();

const renderWithProviders = (component) => {
  const Providers = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return render(component, { wrapper: Providers });
};

export default renderWithProviders;
