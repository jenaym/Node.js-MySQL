
	CREATE DATABASE bamazon;
    
    USE bamazon;
    
    CREATE TABLE products (
		item_id INT NOT NULL,
        product_name VARCHAR(200) NOT NULL,
        department_name VARCHAR(100) NOT NULL,
        price DECIMAL(5,2) NOT NULL,
        stock_quantity INT NOT NULL, 
        PRIMARY KEY(item_id)
	);
    
    INSERT INTO products 
    VALUE (1001, "63 Inch Adjustable Garden Leaf Rake", "Garden & Outdoor", 27.95, 42);
    
    SELECT * FROM products;
    
    
    INSERT INTO products
    VALUE (2222, "KitchenAir Artisan Titlt-Head Stand Mixer", "Home & Kitchen", 279.00, 24),
		(3992, "Vitamix 7500 Blender", "Home & Kitchen", 529.99, 13),
        (4299, "Clinique Superbalaned Makeup Foundation", "Beauty & Personal Care", 34.93, 38),
        (4580, "MAC Eye liner pencil Technakohl Graphblack - black", "Beauty & Personal Care", 26.69, 89),
        (5374, "Men's Levi's 512 Slim Taper Fit Jean", "Clothing", 24.55, 17),
        (5856, "roswear Women's Casual V Neck Cuffed Sleeves Blouse", "Clothing", 15.99, 29),
        (5972, "Nike Women's Dry Tempo Running Short", "Clothing", 44.98, 19),
        (5989, "Nike Women's NSW Gym Vintage Short", "Clothing", 12.98, 9),
        (6400, "Adidas Women's Superstar Shoes Running", "Shoes", 37.78, 25);
    
