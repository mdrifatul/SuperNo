## SuperNo

# Introduction

SuperNo is an innovative e-commerce platform that combines advanced shopping tools, secure payment solutions, and social connectivity. It provides an intuitive and responsive interface for a seamless online shopping journey. Fully optimized for all devices, SuperNo ensures smooth navigation across desktops, tablets, and smartphones, with a layout that adapts to different screen sizes for optimal viewing and effortless interaction

# Features

- Filtering & Browsing: Allows users to effortlessly search and filter products based on categories, price, and preferences.
- User Authentication: Secure multi-method registration and login system powered by Firebase.
- Payment Processing: Integrated with Stripe for seamless and secure transactions.

# Technology

-React, Tailwind, TanStack Query, Firebase, DaisyUi,

# Environment Variables

This project uses JSON Server to simulate backend API functionality. To start the server, run the following command in the project directory:
\*json-server -w public/order.json -p 5000

# Home Page

The home page features a wide selection of e-commerce products, providing an engaging shopping experience. Users can easily explore products by navigating through different categories or use the search bar to quickly find items by entering product names or brand names. This makes it easier for customers to discover and purchase products that match their needs. The design ensures a smooth and intuitive browsing experience.

# Payment

Each product on the website has a "Buy Now" button. When clicked, a Stripe payment form appears, allowing users to securely pay using their credit or debit card. Upon successful payment, the product details are stored in the order.json file, and users can view their orders on the Order page.

# Sign Up and Login

To make a payment, users must first sign up and log in. Firebase Authentication is used for secure sign-up and login processes. After logging in, users can click on their profile image to access a dropdown menu, which includes options to view their profile and log out of their account. This feature ensures a secure and personalized user experience.

# Profile

In the profile section, users can view their account information, which is fetched directly from their Firebase account. This allows users to see their registered details, such as name, email, and profile picture, providing a seamless and personalized experience.

# Order

The order section allows users to view a list of products they have purchased. This data is fetched from the order.json file, where the order details are stored after a successful payment. It provides a convenient way for users to track their past purchases.
