# はてブついっと

「[はてなブックマークで Twitter 連携機能・Twitter ログインが利用できない障害が発生しています](https://bookmark.hatenastaff.com/entry/2023/04/08/074419)」という障害 (？) の報告をうけて、Twitter API の状況に関わらず、はてブのエントリーページから自分のブコメを簡単にツイート出来る Google Chrome エクステンションを書きました。

本家 twitter.com 上の URL https://twitter.com/intent/tweet を必要なパラメータと共に開くと、ツイートの内容がプリセットされた状態で画面が開く、という本家の機能を利用しており、Twitter API には一切頼っていないため、障害 (？) 耐性が大変高くなっております。

このエクステンションをインストールすると、はてなブックマークのエントリーページに「Twitter を開く」アイコンが追加されるので、それをクリックするといい感じになります。

![はてブついっと](https://www.otchy.net/s/img/hatebu-twit-v1.0.1/animation.gif)

インストールは [chrome ウェブストア](https://chrome.google.com/webstore/detail/%E3%81%AF%E3%81%A6%E3%83%96%E3%81%A4%E3%81%84%E3%81%A3%E3%81%A8/ciiacodoiephflaplbkcfflplilpbgmm?hl=ja&authuser=0) から行ってください。皆様のお役に立てれば幸いです。

また、Feedly ユーザ様におかれましては、姉妹品の「[Feedly はてブ](https://chrome.google.com/webstore/detail/feedly-%E3%81%AF%E3%81%A6%E3%83%96/ggaaakgimbjhmglfoahnaoknmceipgni)」もよろしくお願いします。

## Changelog

-   1.0.1 [2023-04-11] Change its name/icon to meet Google Chrome Web Store policy
-   1.0.0 [2023-04-11] Initial version

## Development

### Initial setup

```
$ git config --local core.hooksPath .githooks
$ chmod +x .githooks/*
```
