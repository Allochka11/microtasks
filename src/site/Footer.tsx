type FooterType = {
    footerTitle: string
}

export const Footer = (props: FooterType) => {
    return (
        <div>{props.footerTitle}</div>
    )
}