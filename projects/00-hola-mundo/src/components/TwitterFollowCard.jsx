import { useState } from "react"

const TwitterFollowCard = ({ userName, name, isFollowing }) => {
    const imageSrc = `https://unavatar.io/${userName}`
    const [state, setState] = useState(isFollowing)
    const text = state ? 'Siguiendo' : 'Seguir'
    const buttonClass = state ? 'tw-followCard-button is-following' : 'tw-followCard-button'


    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" alt="Foto de Alexander Hipp en Unsplash" src={imageSrc} />
                <div className="tw-followCard-info">
                    <strong >{name}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClass} onClick={() => setState(!state)}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}

export default TwitterFollowCard