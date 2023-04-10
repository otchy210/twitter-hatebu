import { Config, Json, Message, MessageAction } from '../types';

class BackgroundApi {
    private send(action: MessageAction, payload?: Json): Promise<Json> {
        const message: Message = {
            action,
            payload,
        };
        return new Promise((resolve) => {
            chrome.runtime.sendMessage(message, resolve);
        });
    }
    async getConfig(): Promise<Config> {
        const jsonConfig = await this.send('getConfig');
        return {
            template: jsonConfig['template'],
        } as Config;
    }
}

const instance = new BackgroundApi();

export const useBackgroundApi = () => instance;
