type JsonPrimitive = string | number | boolean | null;

type JsonArray = JsonPrimitive[] | JsonArray[] | JsonObject[];

type JsonObject = {
    [key: string]: JsonPrimitive | JsonArray | JsonObject;
};

export type Json = JsonPrimitive | JsonArray | JsonObject;

export type MessageAction = 'getWordItems' | 'notifyCardLoaded' | 'bgNotifyCardLoaded' | 'getConfig' | 'notifyConfigChanged';

export type Message = {
    action: MessageAction;
    payload?: Json;
};

export type MessageHandler = {
    action: MessageAction;
    handle: (payload?: Json) => Promise<Json>;
};

export type ConfigKey = 'template';

export type Config = {
    template: string;
};
