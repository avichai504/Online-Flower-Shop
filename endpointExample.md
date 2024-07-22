# RESTfull API Endpoints

---

#### Real-world examples for each endpoint.

---

## User Module Endpoints

1. **Register User**

   - **Method**: POST
   - **Endpoint**: /api/users/register
   - **Description**: Registers a new user.
   - **Request Body**:
     ```json
     {
       "username": "john_doe",
       "email": "john@example.com",
       "password": "password123"
     }
     ```
   - **Example**:
     ```sh
     curl -X POST http://localhost:5000/api/users/register -H "Content-Type: application/json" -d '{
       "username": "john_doe",
       "email": "john@example.com",
       "password": "password123"
     }'
     ```
2. **Login User**

   - **Method**: POST
   - **Endpoint**: /api/users/login
   - **Description**: Logs in a user and returns a JWT token.
   - **Request Body**:
     ```json
     {
       "email": "john@example.com",
       "password": "password123"
     }
     ```
   - **Example**:
     ```sh
     curl -X POST http://localhost:5000/api/users/login -H "Content-Type: application/json" -d '{
       "email": "john@example.com",
       "password": "password123"
     }'
     ```
3. **Get User Profile**

   - **Method**: GET
   - **Endpoint**: /api/users/profile
   - **Description**: Retrieves the profile of the logged-in user.
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <JWT_TOKEN>"
     }
     ```
   - **Example**:
     ```sh
     curl -X GET http://localhost:5000/api/users/profile -H "Authorization: Bearer <JWT_TOKEN>"
     ```
4. **Logout User**

   - **Method**: POST
   - **Endpoint**: /api/users/logout
   - **Description**: Logs out the user.
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <JWT_TOKEN>"
     }
     ```
   - **Example**:
     ```sh
     curl -X POST http://localhost:5000/api/users/logout -H "Authorization: Bearer <JWT_TOKEN>"
     ```

## Product Module Endpoints

1. **Create Product**

   - **Method**: POST
   - **Endpoint**: /api/products
   - **Description**: Creates a new product.
   - **Request Body**:
     ```json
     {
       "name": "Jade Bracelet",
       "description": "A beautiful jade bracelet.",
       "price": 99.99,
       "stock": 50
     }
     ```
   - **Example**:
     ```sh
     curl -X POST http://localhost:5000/api/products -H "Authorization: Bearer <JWT_TOKEN>" -H "Content-Type: application/json" -d '{
       "name": "Jade Bracelet",
       "description": "A beautiful jade bracelet.",
       "price": 99.99,
       "stock": 50
     }'
     ```
2. **Get Product**

   - **Method**: GET
   - **Endpoint**: /api/products/:productId
   - **Description**: Retrieves a specific product by ID.
   - **Example**:
     ```sh
     curl -X GET http://localhost:5000/api/products/60d21b4667d0d8992e610c85
     ```
3. **Update Product**

   - **Method**: PUT
   - **Endpoint**: /api/products/:productId
   - **Description**: Updates a specific product by ID.
   - **Request Body**:
     ```json
     {
       "name": "Jade Necklace",
       "description": "An exquisite jade necklace.",
       "price": 199.99,
       "stock": 30
     }
     ```
   - **Example**:
     ```sh
     curl -X PUT http://localhost:5000/api/products/60d21b4667d0d8992e610c85 -H "Authorization: Bearer <JWT_TOKEN>" -H "Content-Type: application/json" -d '{
       "name": "Jade Necklace",
       "description": "An exquisite jade necklace.",
       "price": 199.99,
       "stock": 30
     }'
     ```
4. **Delete Product**

   - **Method**: DELETE
   - **Endpoint**: /api/products/:productId
   - **Description**: Deletes a specific product by ID.
   - **Example**:
     ```sh
     curl -X DELETE http://localhost:5000/api/products/60d21b4667d0d8992e610c85 -H "Authorization: Bearer <JWT_TOKEN>"
     ```
5. **Get All Products**

   - **Method**: GET
   - **Endpoint**: /api/products
   - **Description**: Retrieves all products.
   - **Example**:
     ```sh
     curl -X GET http://localhost:5000/api/products
     ```

## Order Module Endpoints

1. **Create Order**

   - **Method**: POST
   - **Endpoint**: /api/orders
   - **Description**: Creates a new order.
   - **Request Body**:
     ```json
     {
       "userId": "<USER_ID>",
       "items": [
         {
           "productId": "<PRODUCT_ID>",
           "quantity": 2
         }
       ],
       "total": 199.98
     }
     ```
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <JWT_TOKEN>"
     }
     ```
   - **Example**:
     ```sh
     curl -X POST http://localhost:5000/api/orders -H "Authorization: Bearer <JWT_TOKEN>" -H "Content-Type: application/json" -d '{
       "userId": "60d21b4667d0d8992e610c84",
       "items": [
         {
           "productId": "60d21b4667d0d8992e610c85",
           "quantity": 2
         }
       ],
       "total": 199.98
     }'
     ```
2. **Get Order**

   - **Method**: GET
   - **Endpoint**: /api/orders/:orderId
   - **Description**: Retrieves a specific order by ID.
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <JWT_TOKEN>"
     }
     ```
   - **Example**:
     ```sh
     curl -X GET http://localhost:5000/api/orders/60d21b4667d0d8992e610c86 -H "Authorization: Bearer <JWT_TOKEN>"
     ```
3. **Get User Orders**

   - **Method**: GET
   - **Endpoint**: /api/orders/user/:userId
   - **Description**: Retrieves all orders for a specific user.
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <JWT_TOKEN>"
     }
     ```
   - **Example**:
     ```sh
     curl -X GET http://localhost:5000/api/orders/user/60d21b4667d0d8992e610c84 -H "Authorization: Bearer <JWT_TOKEN>"
     ```

## Cart Module Endpoints

1. **Get Cart**

   - **Method**: GET
   - **Endpoint**: /api/carts/:userId
   - **Description**: Retrieves the cart for a specific user.
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <JWT_TOKEN>"
     }
     ```
   - **Example**:
     ```sh
     curl -X GET http://localhost:5000/api/carts/60d21b4667d0d8992e610c84 -H "Authorization: Bearer <JWT_TOKEN>"
     ```
2. **Add to Cart**

   - **Method**: POST
   - **Endpoint**: /api/carts/add
   - **Description**: Adds an item to the cart.
   - **Request Body**:
     ```json
     {
       "userId": "60d21b4667d0d8992e610c84",
       "productId": "60d21b4667d0d8992e610c85",
       "quantity": 2
     }
     ```
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <JWT_TOKEN>"
     }
     ```
   - **Example**:
     ```sh
     curl -X POST http://localhost:5000/api/carts/add -H "Authorization: Bearer <JWT_TOKEN>" -H "Content-Type: application/json" -d '{
       "userId": "60d21b4667d0d8992e610c84",
       "productId": "60d21b4667d0d8992e610c85",
       "quantity": 2
     }'
     ```
3. **Remove from Cart**

   - **Method**: POST
   - **Endpoint**: /api/carts/remove
   - **Description**: Removes an item from the cart.
   - **Request Body**

     ```json
     {
       "userId": "60d21b4667d0d8992e610c84",
       "productId": "60d21b4667d0d8992e610c85"
     }
     ```
   - **Headers**:

     ```json
     {
       "Authorization": "Bearer <JWT_TOKEN>"
     }
     ```
   - **Example**:

     ```sh
     curl -X POST http://localhost:5000/api/carts/remove -H "Authorization: Bearer <JWT_TOKEN>" -H "Content-Type: application/json" -d '{
       "userId": "60d21b4667d0d8992e610c84",
       "productId": "60d21b4667d0d8992e610c85"
     }'
     ```
4. **Clear Cart**

   - **Method**: POST
   - **Endpoint**: /api/carts/clear
   - **Description**: Clears the cart for a specific user.
   - **Request Body**:
     ```json
     {
       "userId": "60d21b4667d0d8992e610c84"
     }
     ```
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <JWT_TOKEN>"
     }
     ```
   - **Example**:
     ```sh
     curl -X POST http://localhost:5000/api/carts/clear -H "Authorization: Bearer <JWT_TOKEN>" -H "Content-Type: application/json" -d '{
       "userId": "60d21b4667d0d8992e610c84"
     }'
     ```

## Category Module Endpoints

1. **Create Category**

   - **Method**: POST
   - **Endpoint**: /api/categories
   - **Description**: Creates a new category.
   - **Request Body**:
     ```json
     {
       "name": "Jade Jewelry"
     }
     ```
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <JWT_TOKEN>"
     }
     ```
   - **Example**:
     ```sh
     curl -X POST http://localhost:5000/api/categories -H "Authorization: Bearer <JWT_TOKEN>" -H "Content-Type: application/json" -d '{
       "name": "Jade Jewelry"
     }'
     ```
2. **Get Category**

   - **Method**: GET
   - **Endpoint**: /api/categories/:categoryId
   - **Description**: Retrieves a specific category by ID.
   - **Example**:
     ```sh
     curl -X GET http://localhost:5000/api/categories/60d21b4667d0d8992e610c87
     ```
3. **Update Category**

   - **Method**: PUT
   - **Endpoint**: /api/categories/:categoryId
   - **Description**: Updates a specific category by ID.
   - **Request Body**:
     ```json
     {
       "name": "Exquisite Jade Jewelry"
     }
     ```
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <JWT_TOKEN>"
     }
     ```
   - **Example**:
     ```sh
     curl -X PUT http://localhost:5000/api/categories/60d21b4667d0d8992e610c87 -H "Authorization: Bearer <JWT_TOKEN>" -H "Content-Type: application/json" -d '{
       "name": "Exquisite Jade Jewelry"
     }'
     ```
4. **Delete Category**

   - **Method**: DELETE
   - **Endpoint**: /api/categories/:categoryId
   - **Description**: Deletes a specific category by ID.
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <JWT_TOKEN>"
     }
     ```
   - **Example**:
     ```sh
     curl -X DELETE http://localhost:5000/api/categories/60d21b4667d0d8992e610c87 -H "Authorization: Bearer <JWT_TOKEN>"
     ```
5. **Get All Categories**

   - **Method**: GET
   - **Endpoint**: /api/categories
   - **Description**: Retrieves all categories.
   - **Example**:
     ```sh
     curl -X GET http://localhost:5000/api/categories
     ```
