import { useLoaderData } from 'react-router-dom'
import { getMenu } from '../../services/apiRestaurant'
import MenuItem from './MenuItem'

function Menu() {
    const menu = useLoaderData()

    return (
        <ul className="px-2 divide-y divide-stone-200">
            {menu.map((pizza) => (
                <MenuItem pizza={pizza} key={pizza.id} />
            ))}
        </ul>
    )
}

//Right here we are awaiting a API call to the apiRestaurant page where getMenu lives.
export async function loader() {
    const menu = await getMenu()
    return menu
}

export default Menu
