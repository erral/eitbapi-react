const fs = require('fs');

const dir = './src/locales';
const files = fs.readdirSync(dir);

// Get all the locales from the locales directory
const excludeFiles = ['base.json'];
let availableLocales = [];
for (const file of files) {
  if (!excludeFiles.includes(file)) {
    availableLocales.push(file);
  }
}

console.log('Available locales: ', availableLocales);

// CREATE <locale>.json if it doesn't exist
// For each locale, and if directory is empty, create a new json file with content of base.json only with keys
for (const locale of availableLocales) {
  const localeDir = `${dir}/${locale}`;
  const files = fs.readdirSync(localeDir);
  if (files.length === 0) {
    console.log('Creating new locale file for: ', locale);
    const baseFile = fs.readFileSync(`${dir}/base.json`);
    let json_file = JSON.parse(baseFile.toString());
    Object.keys(json_file).forEach((key) => {
      json_file[key] = '';
    });
    fs.writeFileSync(
      `${localeDir}/${locale}.json`,
      JSON.stringify(json_file, null, 2),
    );
  }
}

// For each locale, and if directory exists, compare the keys of the json file with the keys of the base.json and add missing keys
for (const locale of availableLocales) {
  const localeDir = `${dir}/${locale}`;
  const files = fs.readdirSync(localeDir);
  if (files.length > 0) {
    // console.log("Updating locale file for: ", locale);
    const baseFile = fs.readFileSync(`${dir}/base.json`);
    const json_file = fs.readFileSync(`${localeDir}/${locale}.json`);
    let json_file_parsed = JSON.parse(json_file.toString());
    let base_file_parsed = JSON.parse(baseFile.toString());
    Object.keys(base_file_parsed).forEach((key) => {
      if (!json_file_parsed.hasOwnProperty(key)) {
        json_file_parsed[key] = '';
        console.log(`Adding missing key to ${locale}: `, key);
      }
    });
    // If the json file has more keys than the base file, remove the extra keys
    Object.keys(json_file_parsed).forEach((key) => {
      if (!base_file_parsed.hasOwnProperty(key)) {
        delete json_file_parsed[key];
        console.log(`Removing extra key from ${locale}: `, key);
      }
    });
    fs.writeFileSync(
      `${localeDir}/${locale}.json`,
      JSON.stringify(json_file_parsed, null, 2) + '\n',
    );
  }
}

console.log('\x1b[36m%s\x1b[0m', 'Finished!');
