import "./assets/css/app.css"
import TwitterFollowCard from "./components/TwitterFollowCard"

const App = () => {
    const users = [
        {
            userName: 'lachy',
            name: 'Lazaro Zamora',
            isFollowing: false
        }, {
            userName: 'alex7x',
            name: 'Alejandro Zaldivar',
            isFollowing: true
        }, {
            userName: 'amyma',
            name: 'Amanda Mansalvo',
            isFollowing: false
        }, {
            userName: 'cacha',
            name: 'Cachita Cache',
            isFollowing: false
        }
    ]

    return (
        <section className="App">
            {users.map(({ userName, name, isFollowing }) => {
                return (
                    <TwitterFollowCard key={userName} userName={userName} name={name} isFollowing={isFollowing} />
                )
            })}
        </section>
    )
}

export default App     