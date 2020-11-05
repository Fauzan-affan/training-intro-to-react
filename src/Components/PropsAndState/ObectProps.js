const ObectProps = (props) => {
    return (
        <div>
            Hello {props.name.name1} and {props.name.name2}!
            {props.children}
        </div>
    )
}

export default ObectProps