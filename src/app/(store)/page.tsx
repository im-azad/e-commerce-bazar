import ProductsView from "@/components/ProductsView";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
    const products = await getAllProducts();
    // const categories = await getAllCategories();
    return (
        <div className="">
            <h1>Home</h1>
            <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4">
                <ProductsView products={products} />
            </div>
        </div>
    );
}
