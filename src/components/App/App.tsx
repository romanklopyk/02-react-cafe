import css from './App.module.css';
import React from "react";
import CafeInfo from '../CafeInfo/CafeInfo.tsx';
import VoteOptions from "../VoteOptions/VoteOptions.tsx";
import VoteStats from "../VoteStats/VoteStats.tsx";
import Notification from "../Notification/Notification.tsx";
import type {VoteType, Vote} from "../../types/types.ts";

function App() {

    const [votes, setVotes] = React.useState<Vote>({good: 0, bad: 0, neutral: 0});

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
            <VoteOptions handleVote={handleVote} resetVotes={resetVotes} canReset={totalVotes > 0}/>
            {totalVotes > 0 ? <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate}/> : <Notification/>}
        </div>
    )
}

export default App;