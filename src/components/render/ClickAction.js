export default function ClickAction({count, incrementCount}){
    return (
        <>
            <button type="button" onClick={incrementCount}>Render Clicked {count} times</button>
            <br />
        </>
    )
}