-- Quick test: Add a test customer manually
-- Run this in Supabase SQL Editor

-- 1. First, make sure tables exist
-- (Run the migration file if you haven't already)

-- 2. Insert a test customer
INSERT INTO customers (stripe_customer_id, email, full_name, created_at)
VALUES ('cus_test123', 'christian.rolfsson@brevlycka.se', 'Christian Rolfsson', NOW())
ON CONFLICT (stripe_customer_id) DO UPDATE 
SET email = EXCLUDED.email, updated_at = NOW();

-- 3. Verify it was created
SELECT * FROM customers WHERE email = 'christian.rolfsson@brevlycka.se';

-- Now you can test the Customer Portal with this email!
