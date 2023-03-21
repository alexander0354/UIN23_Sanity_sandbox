import { Link } from "react-router-dom";

export default function ProductCard ({productInfo}) {
    return (
        <article>
            <h2>{productInfo.product_title}</h2>
            <p>Pris: {productInfo.price}</p>
            <Link to={productInfo.slug.current}>Les mer</Link>
        </article>
    )
}