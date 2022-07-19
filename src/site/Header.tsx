type HeaderType = {
    headerTitle: string
}

export const Header = (props: HeaderType) => {

    console.log(props)
    return (
        <div>{props.headerTitle}</div>
    )
}