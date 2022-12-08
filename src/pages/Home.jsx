import React from 'react';
import { FormattedMessage } from 'react-intl';

const Home = () => {
  const docs = [
    {
      title: 'Routes',
      url: [
        'https://gitlab.com/codesyntax/cs-react-template/-/blob/main/src/config/routes.js',
        'https://gitlab.com/codesyntax/cs-react-template/-/blob/main/src/components/Navbar/Navbar.jsx#L19',
        'https://reactrouter.com/docs/en/v6/getting-started/overview',
      ],
      description: 'React Router DOM 6 integration with dynamic routes',
    },
    {
      title: 'i18n',
      url: [
        'https://formatjs.io/docs/react-intl/',
        'https://gitlab.com/codesyntax/cs-react-template/-/blob/main/package.json#L33',
      ],
      description: 'react-intl + i18n sync + extractor + language switcher',
    },
    {
      title: 'API REST Fetching',
      url: [
        'https://axios-http.com/',
        'https://gitlab.com/codesyntax/cs-react-template/-/tree/main/src/api',
      ],
      description: 'Axios integration with base instance',
    },
    {
      title: 'Redux',
      url: [
        'https://react-redux.js.org/',
        'https://gitlab.com/codesyntax/cs-react-template/-/tree/main/src/store',
      ],
      description: 'Redux integration',
    },
    {
      title: 'Redux thunk',
      url: [
        'https://redux.js.org/usage/writing-logic-thunks',
        'https://gitlab.com/codesyntax/cs-react-template/-/blob/main/src/store/actions/language.js#L37',
      ],
      description: 'Async redux actions with redux-thunk',
    },
    {
      title: 'Bootstrap',
      url: ['https://react-bootstrap.github.io/'],
      description: 'Bootstrap + React Bootstrap integration',
    },
    {
      title: 'Storybook',
      url: [
        'https://storybook.js.org/',
        'https://gitlab.com/codesyntax/cs-react-template/-/blob/main/.storybook/preview.js',
        'https://gitlab.com/codesyntax/cs-react-template/-/blob/main/src/components/Navbar/Navbar.stories.jsx',
      ],
      description:
        'Storybook integration with boostrap, redux, routes and i18n)',
    },
    {
      title: 'Eslint + Prettier',
      url: [
        'https://gitlab.com/codesyntax/cs-react-template/-/blob/main/.eslintrc.json',
      ],
      description: 'Codesyntax coding pattern',
    },
    {
      title: 'Husky',
      url: ['https://github.com/typicode/husky'],
      description: 'Executes eslint and prettier before commit',
    },
    {
      title: 'Font awesome',
      url: [
        'https://fontawesome.com/v5/docs/web/use-with/react#using-icons-via-individual-use',
        'https://gitlab.com/codesyntax/cs-react-template/-/blob/main/src/components/LanguageSelector/LanguageSelector.jsx#L19',
      ],
      description: 'Font awesome for react',
    },
    {
      title: 'HOC',
      url: [
        'https://gitlab.com/codesyntax/cs-react-template/-/blob/main/src/helpers/hocs/initialLoader.jsx',
      ],
      description: 'Added initial loader custom HOC',
    },
    {
      title: 'Hooks',
      url: [
        'https://gitlab.com/codesyntax/cs-react-template/-/blob/main/src/pages/About.jsx#L7',
        'https://gitlab.com/codesyntax/cs-react-template/-/blob/main/src/hooks/useAsync.js',
      ],
      description: 'Added basic useAsync hook',
    },
    {
      title: 'Local storage util',
      url: [
        'https://gitlab.com/codesyntax/cs-react-template/-/blob/main/src/helpers/storage.js',
      ],
      description: 'Added localstorage util',
    },
  ];
  return (
    <div>
      <h1>
        <FormattedMessage id="Home page" defaultMessage="Home page" />
      </h1>
      <h2>
        <FormattedMessage
          id="Welcome to CS React Template"
          defaultMessage={'Welcome to CS React Template'}
        />
      </h2>
      <p>
        <FormattedMessage
          id="This is home page"
          defaultMessage="This is home page"
        />
      </p>
      <ul>
        {docs.map((doc, i) => (
          <li key={i}>
            <hr />
            <h4>{doc.title}</h4>
            <p>{doc.description}</p>
            {doc.url.map((url, j) => (
              <div key={j}>
                <a href={url} target="_blank" rel="noreferrer">
                  {url}
                </a>
                <br />
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
