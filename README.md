# A solution in Node + React (webpage) that solves the following problem

A company sells hundreds of products on-line and customer place orders from all over the world,
just like eBay. Each product has a different weight and price. Every customer can order any number
of different products that need to be separated into one or more packages (each containing one or
more products) and then collected by the courier company for delivery to the customer.
There are certain rules for each package that must be followed:
1. The total cost of all products within a single package cannot exceed $250 for international
customs purposes.
2. If multiple packages for the same order are required, then the weight of each package should
have the lowest possible shipping cost for the order and be as evenly distributed as possible

## Follow the following command to run in your local:

### For Backend
1. `cd backend`
2. `npm install`
3. `Create database manually for mysql`
4. `npx sequelize-cli db:seed:all` to seed all the data into database table
5. `create .env file and copy and paste from .env.local and rename according to your system`
6. `node server.js` to run the server

### For Frontend
1. `cd frontend`
2. `npm install`
3. `create .env file and copy and paste from .env.local and rename according to your system`
4. `npm start` to run the frontend

