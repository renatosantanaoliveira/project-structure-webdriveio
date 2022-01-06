[javascript-image]: https://img.shields.io/badge/javascript-red
[javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[webdriverio-image]:https://img.shields.io/badge/webdriverio-9.2.0-beige
[webdriverio-url]:https://webdriver.io/docs/gettingstarted

# Project structure WebdriverIO UI
[![JavaScript Version][javascript-image]][javascript-url]
[![WebdriverioIO Version][webdriverio-image]][webdriverio-url]

Estrutura do projeto:
```
.
├── config
│   └── urls.js
├── data
│   └── user.json
├── test
│   ├── pageobjects
│   │   ├── bookstore.page.js
│   │   ├── login.page.js
│   │   ├── page.js
│   │   └── profile.page.js
│   └── specs
│       ├── bookstore
│       │   └── bookstore.spec.js
│       └── login
│           └── login.spec.js
├── jsconfig.json
├── package-lock.json
├── package.json
├── README.md
└── wdio.conf.js
```