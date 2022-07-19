type BodyType = {
    bodyTitle: string
}

export const Body = (props: BodyType) => {
    return (
        <div>{props.bodyTitle}</div>
    )
}