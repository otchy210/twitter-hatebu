import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import { consts } from '../utils/consts';
import { useSyncStorage } from '../utils/Storage';
import GlobalStyle from './GlobalStyle';

const Title = styled.div`
    color: ${colors.darkGrey};
    font-size: 1.2rem;
    font-weight: bold;
    border-left: solid 4px ${colors.blue};
    padding: 0.2rem;
`;

const Textarea = styled.textarea`
    margin-top: 0.5rem;
    border: solid 1px ${colors.lightGrey};
    width: 30rem;
    height: 4rem;
`;

const Desc = styled.div`
    color: ${colors.darkGrey};
    margin-top: 0.5rem;
`;

const Code = styled.code`
    display: inline-block;
    color: ${colors.blue};
    font-family: monospace;
`;

const Link = styled.span`
    color: ${colors.blue};
    text-decoration: underline;
    cursor: pointer;
`;

const Flex = styled.div`
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const Button = styled.button`
    padding: 0.5rem;
    border: 0;
    border-radius: 2px;
    background-color: ${colors.blue};
    color: ${colors.white};
    cursor: pointer;
`;

const Note = styled.span`
    color: ${colors.grey};
    font-size: 0.8rem;
`;

export const PopupPage: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [template, setTemplate] = useState<string>('');
    const [note, setNote] = useState<string>('');
    const syncStorage = useSyncStorage();
    useEffect(() => {
        Promise.all([syncStorage.getConfig<string>('template', consts.defaultTemplate)]).then(([template]) => {
            setTemplate(template);
            setLoading(false);
        });
    }, []);
    if (loading) {
        return;
    }
    const onClickDefault = () => {
        setTemplate(consts.defaultTemplate);
    };
    const onClickSave = async () => {
        await syncStorage.setConfig('template', template);
        setNote('保存されました');
        setTimeout(() => {
            setNote('');
        }, 1000);
    };
    return (
        <>
            <GlobalStyle />
            <Title>ツイートテンプレート</Title>
            <Textarea
                value={template}
                onChange={(e) => {
                    setTemplate(e.target.value);
                }}
            />
            <Desc>
                テンプレート中にはブックマークコメントを表す <Code>{consts.commentVar}</Code> と記事タイトルを表す <Code>{consts.titleVar}</Code>{' '}
                を使用する事が出来ます。
                <br />
                生成したツイートが長すぎる場合は、URL を含めて 140 文字以内におさまるようにツイートの最後が切り取られます。
                <br />(<Link onClick={onClickDefault}>テンプレートをデフォルトに戻す</Link>)
            </Desc>
            <Flex>
                <Button onClick={onClickSave}>保存</Button>
                <Note>{note}</Note>
            </Flex>
        </>
    );
};
