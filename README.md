# EITB Nahieran Alternatiboa

[EITB Nahieran](https://eitb.tv) webgunearen itxura alternatiboa.

Azkenaldian ikasitako JS eta React-ekin egina.

Hau [https://erral.github.io/eitbapi-react/](https://erral.github.io/eitbapi-react/) helbidean ikusten da. Jatorrizkoa baino hobea iruditzen zait niri!

GitHub Pages zerbitzuan ostatatuta dago

Momentuz `npm run start` eginda txukun dabil.

## Eta APIa?

Hemen duzu [API berriaren kodea](https://github.com/erral/eitbapijs) eta [hemen ikusi dezakezu](https://eitbapi.erral.workers.dev/).

Guztia [nahieran-js](https://github.com/bipoza/nahieran-js) liburutegia erabiliz egindakoa.

## Martxan jartzeko

Hemen instalazio eta martxan jartzeko argibide batzuk. Erabili [nvm](https://github.com/nvm-sh/nvm) instalazioa egiteko, zure burua lasaiago biziko da.

Dependentziak instalatu:

```
nvm use
npm install
```

Martxan jarri (garapen ingurunean, berak irekiko du nabigatzailea):

```
nvm use
npm install
```

## Errore batzuk...

### About autoprefixer: Replace color-adjust to print-color-adjust. The color-adjust shorthand is currently deprecated error.

https://github.com/twbs/bootstrap/discussions/36286

Hau konpontzeko, npm install autoprefixer@10.4.5 --save-exact instalatu da. baina etorkizunean bug hau bootstrapetik konpontzen dutenean kendu dezakegu.

### Intl polyfill - EU pollyfills for unsupported browsers

Error: [@formatjs/intl Error MISSING_DATA] Missing locale data for locale: "eu" in Intl.NumberFormat. Using default locale: "en" as fallback.

Nabigatzaile batzuek ez dute euskarazko hizkuntzak onartzen. Horretarako euskarazko polyfills-ak eskuz instalatu behar ditugu.
\*MacOS-eko chromen behintzat ez du euskarazko euskarririk.

## Eskertzak

Eskerrik asko benetan lagun guzti hauei, emandako laguntzagatik

- [Xabi Ezpeleta](https://github.com/xezpeleta): azken xaxatzailea eta API helbideak bidali zizkidana
- [Aitzol Naberan](https://github.com/aitzol): nire bihotzeko sysadmina eta JavaScript APIaren ideia izan eta lehen bertsioa idatzi zuena
- [Bittor Poza](https://github.com/bipoza): JavaScript eta React magoa. Agur eta ohore!
- [Ion Lizarazu](https://github.com/ionlizarazu): JavaScript eta React magoa. Paleta eta pintzelarekin dena txukuntzen!
