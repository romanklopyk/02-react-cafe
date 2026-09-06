import css from './App.module.css';
import React from "react";
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";
import type {VoteType, Votes} from "../../types/votes.ts";

function App() {

    const [votes, setVotes] = React.useState<Votes>({good: 0, bad: 0, neutral: 0});

    const totalVotes = votes.good + votes.bad + votes.neutral;

    const positiveRate = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0;


    function handleVote(type: VoteType):void {
        setVotes(prev => ({...prev, [type]: prev[type] + 1}));
    }

    function resetVotes():void {
        setVotes({good: 0, bad: 0, neutral: 0})
    }

    return (
        <div className={css.app}>
            <CafeInfo/>
            <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={totalVotes > 0}/>
            {totalVotes > 0 ? <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate}/> : <Notification/>}
        </div>
    )
}

export default App;