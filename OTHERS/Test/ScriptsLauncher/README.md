# Докумментация к программе по подключению пользовательских скриптов.

> Идея в том, чтобы не создавать каждый раз файл HTML для подключаемого скрипта.

Данная программа предназначена в первую очередь для того, чтобы подключать консольные скрипты. 

При подключении скриптов, которые работают с DOM - деревом возможны конфликты.

## Как пользоваться программой

***

1. Для работы приложения необходимо 2 файла — `index.html` и  `main.js`
2. В папку с программой необходимо добавить Ваши скрипты в формате .js. Лучше всего их добавить в отдельную папку.
3. Запустите программу из файла `index.html`. 
4. В поле ввода добавьте путь к своему скрипту и нажмите кнопку ***`Добавить файл`***. (Путь нужно указать от корневого каталога. Например Вы создали папку `111` и поместили туда файл `myFile.js`, тогда путь будет выглядеть так: `111/myFile.js`)
5. В окне браузера появится кнопка с названием вашего файла (без расширения).
6. Откройте инспектор браузера (**`F12`**) и нажмите на кнопку с названием вашего файла. Скрипт, который вы указали — запустится, удаляя все остальные скрипты (Работает только Ваш скрипт).

Данные добавляются в Local Storage браузера. Чтобы очистить все данные и удалить все кнопки — нажмите кнопку ***`Удалить все скрипты`***