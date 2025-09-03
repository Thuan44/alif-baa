import { Link } from "react-router-dom"

const BaseCard = ({
    title,
    text,
    icon,
    link,
}: {
    title: string
    text: string
    icon: any
    link?: string
}) => {
    const content = (
        <>
            <h2 className="font-bold text-lg">{title}</h2>
            {icon && icon}
            <p className="text-center">{text}</p>
        </>
    )

    return (
        link ? (
            <Link to={link} className="flex flex-col items-center gap-24 rounded-xl p-40 bg-secondary/40 text-white border-[1px] border-white/25 base-transition hover:shadow-md hover:-translate-y-4.5">
                {content}
            </Link>
        ) : (
            <div className="flex flex-col items-center gap-24 rounded-xl p-40 bg-secondary/40 text-white border-[1px] border-white/25 base-transition hover:shadow-md hover:-translate-y-4.5">
                {content}
            </div>
        )
    )
}

export default BaseCard
