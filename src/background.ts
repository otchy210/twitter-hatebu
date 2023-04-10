import { getConfig } from './message/handlers/getConfig';
import { MessageListener } from './message/MessageListener';
import { Json, Message } from './types';

const messageListener = new MessageListener([getConfig]);

chrome.runtime.onMessage.addListener((message: Message, _: chrome.runtime.MessageSender, callback: (response?: Json) => void) => {
    messageListener.listen(message, callback);
    return true;
});
