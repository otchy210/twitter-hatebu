import { consts } from './utils/consts';
import { useConfig } from './utils/useConfig';

const POSSIBLE_MAX_TWEET_LENGTH = 140 - 12;

const openTwitter = async () => {
    const titleElem = document.querySelector('.js-entry-info-title-text');
    const title = titleElem.getAttribute('title');
    const url = titleElem.getAttribute('href');
    const entryElem = document.querySelector('.entry-myBookmark-text');
    const comment = entryElem.textContent;
    const template = (await useConfig()).template;
    const rawTweet = template.replaceAll(consts.commentVar, comment).replaceAll(consts.titleVar, title);
    const tweet = rawTweet.length <= POSSIBLE_MAX_TWEET_LENGTH ? rawTweet : rawTweet.slice(0, POSSIBLE_MAX_TWEET_LENGTH - 1) + '…';
    const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}&url=${encodeURIComponent(url)}`;
    window.open(tweetURL);
};

const handleContainer = (container: HTMLDivElement) => {
    const menu = container.querySelector('.js-bookmark-menu');
    const li = document.createElement('li');
    li.classList.add('entry-myBookmark-tweet');
    li.innerHTML = `
        <button type="button" class="entry-myBookmark-menu-btn">
            <span class="entry-myBookmark-popup">Twitter を開く</span>
        </button>`;
    li.addEventListener('click', openTwitter);
    menu.insertBefore(li, menu.firstChild);
};

const observer = new MutationObserver((records: MutationRecord[]) => {
    records
        .filter((record) => {
            const target = record.target as HTMLDivElement;
            return target.classList.contains('js-entry-myBookmark-container');
        })
        .map((record) => {
            return record.target;
        })
        .forEach((target) => {
            handleContainer(target as HTMLDivElement);
        });
});
observer.observe(document.body, { childList: true, subtree: true });

const style = document.createElement('style');
style.innerHTML = `
    .entry-myBookmark-tweet button:before {
        -webkit-mask-image: url(/953af105e6ecbf610a0325354f889d29acbbb0b7/images/v4/public/icons/ic-arrow-turn-up-right.svg);
    }
`;
document.head.appendChild(style);
