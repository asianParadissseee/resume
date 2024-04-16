import {useCallback} from 'react';

const HREF_ATTR = {
    EMAIL: 'mailto',
    TELEPHONE: 'tel'
};

export function useHandleHref() {
    return useCallback((attr, value) => {
        const formattedValue = attr === HREF_ATTR.TELEPHONE ? value.replace(/\D/g, '') : value;
        window.location.href = `${attr}:${formattedValue}`;
    }, []);
}

