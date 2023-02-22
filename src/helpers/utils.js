import { FormattedMessage } from 'react-intl';

export const string_to_slug = (str) => {
  // console.log('string_to_slug: ', str);
  return str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

export const sort_by_key = (list, key, order_type = 'ASC') => {
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

const LANGUAGES = {
  eu: <FormattedMessage id="eu" defaultMessage="Basque" />,
  es: <FormattedMessage id="es" defaultMessage="Spanish" />,
  en: <FormattedMessage id="em" defaultMessage="English" />,
  fr: <FormattedMessage id="fr" defaultMessage="French" />,
};

export const program_language = (identifier) => {
  const lower_case = identifier.toLowerCase();
  return LANGUAGES[lower_case];
};

export const getSmallestImage = (images) => {
  return sort_by_key(images, 'width').slice(0, 1)[0];
};
