import css from "./VoteOptions.module.css";

function VoteOptions({handleVote, resetVotes, canReset}) {
    {
        return (
            <div className={css.container}>
                <button onClick={() => handleVote("good")} className={css.button}>Good</button>
                <button onClick={() => handleVote("neutral")} className={css.button}>Neutral</button>
                <button onClick={() => handleVote("bad")} className={css.button}>Bad</button>
                {canReset && <button onClick={resetVotes} className={`${css.button} ${css.reset}`}>Reset</button>}
            </div>
        )
    }
}

export default VoteOptions;