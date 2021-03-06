# Калькулятор условий займа

В данном репозитории содержится исходный код калькулятора условий займа, используемого на сайте ДЗП.

## Установка зависимостей для сборки

Чтобы получить HTML+CSS+JS для калькулятора, вначале их нужно собрать с помощью nodejs. Для этого вам потребуется установить:

- [NodeJS и NPM](https://nodejs.org/en/) версии не ниже 12-ой и 6-ой соответственно. При разработке использовался NodeJS v12 и NPM v6, но на v15 и v7 сборка работала тоже.
- [GIT](https://git-scm.com/) - как минимум, чтобы скачать этот репозиторий себе на компьютер.

После того, как описанные приложения будут установлены, открыть командную строку в каталоге с проектом и выполнить команду

```bash
npm ci
```

которая скачает и установит прочие зависимости автоматически.

## Сборка

После того, как зависимости были установлены, проект требуется собрать. Для этого, также в командной строке, следует выполнить:

```bash
npm build
```

Эта команда запускает сборку проекта из исходных файлов. По её завершеню в каталоге проекта должна появиться папка `./dist`, в которой и находится собранный калькулятор.

## Вставка калькулятора на сайт

После сборки, калькулятор можно встраивать на сайт. Сперва рекомендуется перенести на ваш сайт SVG-иконки, которые используются внутри HTML-кода калькулятора. Они находятся в папке `./dist`. Скопируйте их на ваш сайт (при необходимости их можно переименовать).

В файле `./dist/index.html` находится HTML-код. По итогам сборки он минифицирован, что осложняет работу с ним. Но фактически, этот код ничем не отличается от того, что находится в файле `./src/index.html` - лишь тем, что он сжат. Поэтому HTML для калькулятора вполне можно взять из `./src/index.html`. За отображение виджета отвечает тег `div.dzp-calc-root`. Вставьте его на вашу страницу.

Затем следует изменить пути к иконкам, что отображаются на калькуляторе (смотри предыдущий пункт). Найдите HTML-код вида:

```html
<img src="./assets/*.svg"
```

где звёздочка - название SVG-файла. Замените содержимое атрибута `src` на реальный путь к файлу на вашем сайте - например, `src="/assets/dzp-calc-little-loan.svg"`. Сделайте так для всех четырёх SVG-иконок.

Также для корректного отображения потребуется файл `./dist/src.*.css`. Звёздочкой здесь помечена hash-сумма, которую сборщик добавляет в имена файлов. Можно переименовать css-файл как угодно, на работоспособность калькулятора это не повлияет. Подключите этот файл стилями на вашем сайте.

Затем нужно подключить JS. Он находится `./src/src.*.js` (звёздочка - это hash-сумма, как и в предыдущем пункте). Скрипт будет работать, куда (и когда) бы его не подключили: внутри тега `<head>`, перед закрывающим тегом `</body>` или даже динамически, из другого скрипта. Код калькулятора сработает в любом случае.

Если всё было сделано правильно, на вашем сайте должен появиться работоспособный калькулятор.

## Нюансы использования

**Во-первых**, следует отметить, что калькулятор представлен **в двух вариациях** - _вертикальной_ (для продуктовых страниц) и _горизонтальной_ (для блога). Отличаются они модификатором `dzp-calc-root--horizontal` на корневом теге `div`. Для горизонтальной элемент должен выглядеть как

```html
<div class="dzp-calc-root dzp-calc-root--horizontal">...</div>
```

Для вертикальной:

```html
<div class="dzp-calc-root">...</div>
```

**Во-вторых**, калькулятор свёрстан таким образом, чтобы полностью менять свои внутренние размеры в зависимости от `font-size` страницы, на которой он находится (то есть, все размеры заданы в `em`). Чтобы уменьшить или увеличить калькулятор, достаточно задать другой `font-size` блоку, в котором находится виджет. Изначально он был свёрстан из расчёта, что `font-size` будет равен `16px`.

**В-третьих**, дизайн калькулятора рассчитан на то, что на сайте будет использоваться шрифт `Roboto`. При этом сам _шрифт в стилях не подключется_. Де факто, виджет смотрится нормально с любым шрифтом семейства `sans`.

## Правка исходного кода

С помощью команды

```bash
npm start
```

можно запустить локальный сервер для разработки, на котором вы можете изменять исходный код калькулятора и сразу же видеть результат изменений.

Главное, по окончаню правок, не забудьте снова пересобрать калькулятор и подключить на ваш сайт его новую версию.
