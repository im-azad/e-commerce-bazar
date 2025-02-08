import { Product } from "../../sanity.types";

interface ProductsViewProps {
    products: Product[];
}

const ProductsView = ( { products }: ProductsViewProps ) => {



    return <div className="flex flex-col">
        {/* Categories */}
        <div className="w-full sm:w-[200px]">
            {/* <CategorySelectorComponent categories={categories} /> */}
        </div>
        {/* Products */}
        <div className="flex-1">
            {/* <ProductsGrid products={products} /> */}

            <hr className="w-1/2 sm:w-3/1" />
        </div>
    </div>;
};

export default ProductsView;