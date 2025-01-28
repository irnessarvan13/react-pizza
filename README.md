
# React Pizza App

This project is a full-stack React-based application designed to provide users with a seamless pizza ordering experience. It includes features such as menu browsing, cart management, order creation, and order tracking.

## Features

- **Menu Browsing**: View available pizzas with details such as name, ingredients, and price.
- **Cart Management**: Add, update, or remove items from the cart.
- **Order Creation**: Place orders with optional priority handling.
- **Order Tracking**: Track the status of your order and its estimated delivery time.
- **Error Handling**: Friendly error pages for failed actions or missing routes.

## Technologies Used

### Frontend

1. **React**: Core framework for building user interfaces.
2. **React Router**: For managing client-side routing with nested routes and loaders.
3. **Redux Toolkit**: For state management, including user, cart, and order data.
4. **Tailwind CSS**: For styling components and ensuring responsive design.
5. **JavaScript**: For dynamic behavior and API integration.

### Backend (Simulated)

- **API Integration**: Communication with a mock API for fetching menu items, creating orders, and updating orders.
- **Geolocation API**: To fetch user location and address for order details.


### Highlights

- **`features`**: Contains slices for Redux state management (e.g., cart, order, user).
- **`services`**: API utilities for interacting with the backend.
- **`ui`**: Reusable components like `Header`, `Button`, and `Loader`.
- **`utils`**: Helper functions for formatting currency, dates, etc.
- **`store.js`**: Redux store configuration.

## Key Components

1. **`App.jsx`**: Main entry point for routing and layout.
2. **`AppLayout.jsx`**: Provides the structure for the app with a header, main content area, and cart overview.
3. **`Menu.jsx`**: Displays the list of pizzas fetched from the API.
4. **`Cart.jsx`**: Manages cart items and allows order navigation.
5. **`CreateOrder.jsx`**: Handles user input for creating a new order.

## Advanced Features

- **Dynamic Routing**: Nested routes with data loaders and actions for fetching and submitting data.
- **Geolocation**: Automatic address fetching using user location.
- **Priority Orders**: Additional handling for marking orders as priority.

## Styling

The app uses **Tailwind CSS** extensively for:

- Responsive design
- Utility-first styling
- Custom components (e.g., input fields, loaders, buttons)
