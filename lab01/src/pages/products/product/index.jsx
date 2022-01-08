import { useParams } from "react-router-dom";

export function Product() {
    let param = useParams();
    return(
        <h1>Product infomation with product id {param.productID}</h1>
    );
}