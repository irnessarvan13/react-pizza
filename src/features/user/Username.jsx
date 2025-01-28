import { useSelector } from 'react-redux'

function Username() {
    //useSelector is a React Redux hook that allows components to access data from the Redux store.
    //This line uses useSelector to read the username value from the Redux store.
    //The state.user.username refers to the username property in the user slice of the Redux store.
    const username = useSelector((state) => state.user.username)

    if (!username) return null

    return (
        <div className="hidden text-sm font-semibold md:block">{username}</div>
    )
}

export default Username
