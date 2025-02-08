import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllProducts = async () => {
    const ALL_PRODUCTS_QUERY = defineQuery(`  
        *[
            _type == "product"
        ] | order( name asc )
    `);
    try {
        // Use sanityFetch to send the query to Sanity
        const products = await sanityFetch({
            query: ALL_PRODUCTS_QUERY,
        });

        // Return the products
        return products.data || [];
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};
