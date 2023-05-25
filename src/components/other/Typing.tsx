"use client";

import { useEffect, useState } from "react"

export default function Typing({
    baseText = "%text%", texts, timeForChar = 100, timeWait = 2000
}: {
    baseText: string,
    texts: string[],
    timeForChar?: number,
    timeWait?: number
}) {

    let [allPhrases, _] = useState(texts);
    let [i, setI] = useState<number>(1)
    let [k, setK] = useState<number>(0)
    let [phrase, setPhrase] = useState<string>(allPhrases[i])
    let [phrasePart, setPhrasePart] = useState<string>("")
    let [timer, setTimer] = useState(setTimeout(() => { }, 0))
    let [pause, setPause] = useState(false)

    function nextPhrase() {

        setTimer(setTimeout(() => {
            setPause(false)
            
            
            if (i >= allPhrases.length) {
                setI(0)
            }
            setPhrase(texts[i])
            if(phrase == undefined){
                return
            }
            setPhrasePart(phrase.slice(0, k))
            if (k >= phrase.length) {
                clearInterval(timer)

                setPause(true)
                setI(i + 1)
                setK(0)

            } else {
                setK(k + 1)
            }
        }, timeForChar))
    }

    useEffect(() => {
        if(pause){
            setTimeout(()=> {
                nextPhrase()
            }, timeWait)
        } else {
            nextPhrase()
        }
    }, [phrase, phrasePart, i, k, pause])

    return <>
        {baseText.replaceAll("%text%", phrasePart)}
    </>
}