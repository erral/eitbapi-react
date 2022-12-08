import { addDecorator } from "@storybook/react";
import { Provider, useSelector } from "react-redux";
import store from "../src/store";
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from "react-intl";
import '../src/formatjs-polyfills';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/theme/global.css';
import '../src/theme/variables.css';
import messages_eu from "../src/locales/eu/eu.json";
import messages_es from "../src/locales/es/es.json";

const messages = {
  eu: messages_eu,
  es: messages_es
};

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

const AppWrapper = ({ children }) => {
  const selectedLangCode = useSelector(state => state.language.langCode);
  return (
      <IntlProvider locale={selectedLangCode} messages={messages[selectedLangCode]}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </IntlProvider>
  );
};

addDecorator((storyFn) => <ReduxProvider><AppWrapper>{storyFn()}</AppWrapper></ReduxProvider>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}