import { Outlet, useNavigation } from 'react-router-dom'
import CartOverview from '../features/cart/CartOverview'
import Header from './Header'
import Loader from './Loader'

//This is the parent route of every other route in our application.
//The <Outlet /> component is provided by React Router to render child routes in a parent route.
//It acts as a placeholder that React Router dynamically replaces with the content of the currently matched child route.
function AppLayout() {
    const navigation = useNavigation()
    const isLoading = navigation.state === 'loading'

    /*
	This console.log gives a object with a state of either idle or loading.
	The loading only appears when there is data being fetched and it takes a little bit (there is a delay) of the data coming in.
	This delay is very temporarily meaning its quick as usual but you can still see there is a delay.
	So down below we said if the navigation.state = loading then display the loader component which is the like spinning thing.
	*/

    return (
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
            {isLoading && <Loader />}

            <Header />

            <div className="overflow-scroll">
                <main className="max-w-3xl mx-auto">
                    <Outlet />
                </main>
            </div>

            <CartOverview />
        </div>
    )
}

export default AppLayout
