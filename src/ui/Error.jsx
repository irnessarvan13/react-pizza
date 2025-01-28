import { useRouteError } from 'react-router-dom'
import LinkButton from './LinkButton'

function Error() {
    const error = useRouteError()
    //This console.log gives us an error object with data for that error.
    //We then display that error data or that error message down below.

    return (
        <div>
            <h1>Something went wrong 😢</h1>
            <p>{error.data || error.message}</p>

            <LinkButton to="-1">&larr; Go back</LinkButton>
        </div>
    )
}

export default Error
