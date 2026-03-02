# ZVSchool — Музыкальная школа

**URL**: [zvschool.ru](https://zvschool.ru)

## Технологии

- React + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

## Установка

```sh
git clone https://github.com/gavtv/shiny-code-react.git
cd shiny-code-react
npm install
npm run dev
```

## Deploy to GitHub Pages

```sh
npm run deploy
```

Сайт будет доступен по адресу: https://gavtv.github.io/shiny-code-react/

### Кастомный домен

Файл `CNAME` уже настроен на `zvschool.ru`. После деплоя укажите в DNS вашего домена:
- **A Record**: `@` → `185.199.108.153`
- **A Record**: `@` → `185.199.109.153`
- **A Record**: `@` → `185.199.110.153`
- **A Record**: `@` → `185.199.111.153`
- **CNAME**: `www` → `gavtv.github.io`
