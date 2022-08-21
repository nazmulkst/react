export default function ClickChange({count, changeHandler, theme, switchTheme}){
    const style = theme === 'dark' ? { backgroundColor: '#000', color: '#fff' } : null;
    return (
        <>
            <button type="button" onClick={changeHandler} style={style}>Content Clicked {count} times</button>
            <button type="button" onClick={switchTheme}>Change Theme</button>
        </>
    )
}