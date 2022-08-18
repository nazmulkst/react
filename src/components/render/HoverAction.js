export default function HoverAction({count, incrementCount}) {
    return (
        <>
            <h1 onMouseOver={incrementCount}>Render Hovered {count} times</h1>
            <br />
        </>
    )
}