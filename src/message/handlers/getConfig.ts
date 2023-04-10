import { MessageHandler } from '../../types';
import { useSyncStorage } from '../../utils/Storage';

export const getConfig: MessageHandler = {
    action: 'getConfig',
    handle: async () => {
        const syncStorage = useSyncStorage();
        const template = await syncStorage.getConfig<string>('template');
        return {
            template,
        };
    },
};
