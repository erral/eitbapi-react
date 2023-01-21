import { FormattedMessage } from 'react-intl';

function string_to_slug(str) {
  // console.log('string_to_slug: ', str);
  return str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

export { string_to_slug };

const sort_by_key = (list, key, order_type = 'ASC') => {
  if (order_type === 'ASC') {
    list.sort((a, b) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return '';
    });
  }
  if (order_type === 'DESC') {
    list.sort((a, b) => {
      if (a[key] < b[key]) {
        return 1;
      }
      if (a[key] > b[key]) {
        return -1;
      }
      return '';
    });
  }
  return list;
};

export { sort_by_key };

const LANGUAGES = {
  eu: <FormattedMessage id="eu" defaultMessage="Basque" />,
  es: <FormattedMessage id="es" defaultMessage="Spanish" />,
  en: <FormattedMessage id="em" defaultMessage="English" />,
  fr: <FormattedMessage id="fr" defaultMessage="French" />,
};

const program_language = (identifier) => {
  const lower_case = identifier.toLowerCase();
  return LANGUAGES[lower_case];
};

export { program_language };
