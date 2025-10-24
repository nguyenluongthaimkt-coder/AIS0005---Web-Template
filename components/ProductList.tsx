import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import ProductCard from './ProductCard';

// Define the type for a single product to ensure type safety.
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch data from the 'products' table in Supabase.
        const { data, error: dbError } = await supabase
          .from('products')
          .select('*')
          .order('created_at', { ascending: false }); // Show newest first

        if (dbError) {
          // If Supabase returns an error, throw it to be caught by the catch block.
          throw dbError;
        }

        // If data is successfully fetched, update the state.
        setProducts(data || []);
      } catch (err: any) {
        // If any error occurs during the fetch, update the error state.
        console.error('Error fetching products:', err);
        setError('Could not fetch products. Please ensure your Supabase table is configured correctly.');
      } finally {
        // Set loading to false once the fetch is complete (either success or failure).
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // The empty dependency array ensures this effect runs only once on mount.

  // Display a loading message while fetching data.
  if (loading) {
    return <div className="text-center text-gray-500 animate-pulse">Loading Products...</div>;
  }

  // Display an error message if the fetch failed.
  if (error) {
    return <div className="text-center text-red-500 bg-red-100 dark:bg-red-900/30 p-4 rounded-lg">{error}</div>;
  }

  // Display a message if no products are found.
  if (products.length === 0) {
      return <div className="text-center text-gray-500">No products found. Add some in your Supabase dashboard!</div>;
  }

  // Render the list of products using the ProductCard component.
  return (
    <div className="w-full">
        <h1 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] dark:from-[var(--accent-color-dark)] dark:to-[var(--gradient-to)] pb-2 animate-fadeInDown">
            Discover Our Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
  );
};

export default ProductList;
