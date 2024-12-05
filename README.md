## SuperNo

# Introduction

SuperNo is an innovative platform that integrates advanced e-commerce tools, AI-powered analytics, seamless payment solutions, and social connectivity. It delivers a user-friendly interface, offering an engaging and responsive experience for modern online shopping.

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
