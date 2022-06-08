Запуск тестов из ветки master доступен с версией node.js >= v14.8. Если версия node.js меньше, необходимо использовать ветку [old_node_version](https://github.com/NelyaOs/Drom-testing-task/tree/old_node_version)

Инструкция по запуску:
1) Склонировать репозиторий
2) Выполнить команду ```npm i```
3) Запустить appium server на порту 4723
4) Создать android эмулятор с версией 5.1 (target version у приложения 5.1)
5) Установить [.apk](https://github.com/NelyaOs/Drom-testing-task/blob/master/apk/app.apk) файл на эмулятор
6) При необходимости поменять конфиг файл (https://github.com/NelyaOs/Drom-testing-task/blob/master/index.js#L8) т.к. может быть другой deviceName
7) Запустить тест из [package.json](https://github.com/NelyaOs/Drom-testing-task/blob/master/package.json)
