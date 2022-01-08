import { Route, Routes } from "react-router-dom"
import { List } from "./list"
import { NewProductForm } from "./new-product-form"
import { Product } from "./product"

export function Products() {
    return (
        <>
            <h1>Products</h1>
            <Routes>
                <Route>
                    <Route path=":productID" element={<Product />} />
                    <Route path="new" element={<NewProductForm />} />
                    <Route index element={<List />} />
                </Route>
            </Routes>
        </>
    )
}