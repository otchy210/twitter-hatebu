import React, { useEffect, useState } from 'react';
import { useSyncStorage } from '../utils/Storage';
import GlobalStyle from './GlobalStyle';

const DEFAULT_TEMPLATE = 'デフォルト';

export const PopupPage: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [template, setTemplate] = useState<string>('');
    const syncStorage = useSyncStorage();
    useEffect(() => {
        Promise.all([syncStorage.getConfig<string>('template', DEFAULT_TEMPLATE)]).then(([template]) => {
            setTemplate(template);
            setLoading(false);
        });
    }, []);
    if (loading) {
        return;
    }
    const onClickSave = () => {
        syncStorage.setConfig('template', template);
    };
    return (
        <>
            <GlobalStyle />
            <textarea
                value={template}
                onChange={(e) => {
                    setTemplate(e.target.value);
                }}
            />
            <button onClick={onClickSave}>Save</button>
        </>
    );
};
