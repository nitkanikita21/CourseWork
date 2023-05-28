"use client";

import { useEffect, useState } from "react";

export default function Typing({
    baseText = "%text%", texts, timeForChar = 100, timeWait = 2000
}: {
    baseText: string,
    texts: string[],
    timeForChar?: number,
    timeWait?: number
}) {

    // eslint-disable-next-line no-unused-vars
    const [allPhrases, _] = useState(texts);
    const [i, setI] = useState<number>(1);
    const [k, setK] = useState<number>(0);
    const [phrase, setPhrase] = useState<string>(allPhrases[i]);
    const [phrasePart, setPhrasePart] = useState<string>("");
    // eslint-disable-next-line no-empty-function
    const [timer, setTimer] = useState(setTimeout(() => { }, 0));
    const [pause, setPause] = useState(false);

    function nextPhrase() {

        setTimer(setTimeout(() => {
            setPause(false);


            if (i >= allPhrases.length) {
                setI(0);
            }
            setPhrase(texts[i]);
            if (phrase == undefined) {
                return;
            }
            setPhrasePart(phrase.slice(0, k));
            if (k >= phrase.length) {
                clearInterval(timer);

                setPause(true);
                setI(i + 1);
                setK(0);

            } else {
                setK(k + 1);
            }
        }, timeForChar));
    }

    useEffect(() => {
        if (pause) {
            setTimeout(() => {
                nextPhrase();
            }, timeWait);
        } else {
            nextPhrase();
        }
    }, [phrase, phrasePart, i, k, pause]);

    return <>
        {baseText.replaceAll("%text%", phrasePart)}
    </>;
}