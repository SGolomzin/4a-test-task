# Тестовое задание - верстка

## Доп. информация
Время таймера выставлено согласно ТЗ.
Модальное окно открывается после задержки в 2 секунды чтобы не загораживать анимации.

## Куда смотреть?

- `@/components/Content.astro` - анимация мигания кнопки [стр.45](https://github.com/SGolomzin/4a-test-task/blob/main/src/components/Content.astro?plain=1#L45)
- `@/components/Content.astro` - анимация появления контента [стр.61](https://github.com/SGolomzin/4a-test-task/blob/main/src/components/Content.astro?plain=1#L61)
- `@/components/Timer.tsx` - анимация мигания таймера [стр.25](https://github.com/SGolomzin/4a-test-task/blob/main/src/components/Timer.tsx?plain=1#L25)
- `@/components/Badge.tsx` - анимация исчезновения баджей [стр.18](https://github.com/SGolomzin/4a-test-task/blob/main/src/components/Badge.tsx?plain=1#L18)
- `@/components/PriceTransition.tsx` - анимация исчезновения цены со скидкой [стр.17](https://github.com/SGolomzin/4a-test-task/blob/main/src/components/PriceTransition.tsx?plain=1#L17)

## Что можно улучшить

- [ ] Вынести запрос данных с сервера (тарифы) в отдельный хук
- [ ] Сохранять полученные тарифы в одельном store
- [ ] Добавить скелетоны тарифов пока данные не получены с сервера (на данный момент запрос происходит на серверной части приложения)
- [ ] Анимации внутри модального окна

### Стек технологий:
Astro, React, GSAP, TypeScript, Bun, shadcn/ui, Tailwind, zustand