# VectorWayContest-Chat-App

Это приложение для первого VectorWay контеста.

## Getting Started

Склонируйте репозиторий и установите все зависимости

```
git clone https://github.com/VeselAbaya/VectorWayContest-Chat-App.git
npm install
```

### package.json scripts

```
{
  ...
  "scripts": {
    "dev": "webpack --watch",
    "start": "node server/server.js",
    "test": "mocha server/**/*.test.js",
    "test-watch": "nodemon --exec 'npm test'",
    "server": "nodemon server/server.js"
  },
  ...
}
```
* npm start - для heroku
* npm run server - типа hack-the-fucking-bank :)
* npm run test(-watch) - просто несколько тестов для парочки классов, используемых на сервере
* npm run dev - для начала разработки фронта транспиляция всех js и все такое... <br>

### server/config/config.json
В общем, конфиг файл выглядит так
```
{
  "PORT": 3030,
  "MONGODB_URI": "mongodb://localhost:27017/chatApp", 
  "JWT_SECRET": "KaaUsCHAasdRANDOMNIHqwertySIMVOLOV"
}
```
* PORT: Впишите здесь свой порт
* MONGODB_URI: Локальная база данных (27017 - вроде как стандартный порт)
* JWT_SECRET: Ваш JWT ключ (это дерьмо будет здесь, пока вы не напишите нормальную аутентификацию) <br>
Как он используется вы можете посмотреть в файле server/config/config.js

## Deployment on heroku

Изучите, по желанию, как деплоить на [heroku](https://devcenter.heroku.com/articles/git) <br>
Вообще, если заинтересованы, можете написать мне, и я буду деплоить сам (будет что-то типа командной разработки, будем работать над одним проектом - круто!)

## MONGODB

Также можете изучить, как работать с этой базой данных, и опять-таки, если будут любые вопросы, пишите мне в личку, и мы вместе попроубем разобраться!

## Authors

* **Antay Juskovets** - [VK profile](https://vk.com/veselabaya) <br>
Пишите абсолютно со всеми вопросами и УПРЕКАМИ, буду рад выслушать, помочь и/или исправиться. 
