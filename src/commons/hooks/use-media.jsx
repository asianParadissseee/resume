import { useState, useEffect } from 'react';

/**
 * Используйте этот хук для определения, соответствует ли текущее разрешение экрана указанному CSS медиа-запросу.
 *
 * @param {string} query - CSS медиа-запрос, например '(min-width: 768px)'.
 * @returns {boolean} Возвращает true, если текущее разрешение экрана соответствует медиа-запросу.
 */
export function useMediaQuery(query) {
    // Инициализация состояния matches с начальным значением, проверяя соответствие медиа-запроса.
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);

        // Функция обратного вызова для обновления состояния при изменении соответствия медиа-запросу.
        const documentChangeHandler = () => setMatches(mediaQueryList.matches);

        // Подписка на событие изменения медиа-запроса.
        mediaQueryList.addListener(documentChangeHandler);

        // Отписка от события при размонтировании компонента.
        return () => {
            mediaQueryList.removeListener(documentChangeHandler);
        };
    }, [query]);

    return matches;
}

