Технические требования

Технологии: Next.js, TypeScript, shadcn/ui, Tailwind CSS, Apollo GraphQL, Zustand, Git.
Компоненты: Используйте готовые решения из shadcn/ui. При необходимости, создавайте свои модифицированные компоненты на основе существующих из shadcn/ui.
Адаптивная верстка: Важно обеспечить адаптацию под различные устройства, ориентируйтесь на лучшие практики (не выполнил).
Код: Стремитесь к чистому, понятному и легко поддерживаемому коду.
Результат работы: Разместите код готового приложения на GitHub или GitLab. В README добавьте описание проекта, инструкцию по запуску и развертыванию. Деплой на Vercel или другой удобный хостинг приветствуется, но необязателен. Работа с GraphQL API:
Документация: https://fakeapi.platzi.com/en/gql/auth-jwt/
URL: https://api.escuelajs.co/graphql
Описание страниц приложения

Страница входа Используйте готовый адаптивный шаблон: https://ui.shadcn.com/blocks#authentication01. Аутентификация с использованием пары JWT токенов через API. Используйте GraphQL мутации login , refreshToken . После успешного входа пользователь должен оказаться на странице My Info / Time Off.
Страница My Info / Time Off Ссылка на макет с адаптивным дизайном: https://www.figma.com/design/vS21LQxUY8JnQUzG9yIuyR/HarmonyHR-test-task?nodeid=1-610&t=7O3Wdsd2QEEZwC3W-4. Получайте данные с помощью GraphQL запроса myProfile (используйте только полученные name и avatar , остальное заполните тестовыми данными как на макете). Добавьте работающую кнопку выхода из системы в правом верхнем углу. Доступ к странице должен быть только у авторизованных пользователей.

Установка зависимостей
npm install
Запуск клиента
npm run dev

email: "john@mail.com", password: "changeme"
