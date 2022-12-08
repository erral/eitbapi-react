function string_to_slug(str) {
  // console.log('string_to_slug: ', str);
  return str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

export { string_to_slug };
