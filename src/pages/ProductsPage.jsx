import { useParams } from 'react-router-dom';
const ProductsPage = () => {
    const { id } = useParams();
    console.log("id "+id)
    return (
        <div>
        <h1>Products</h1>
        </div>
    );
    }
export default ProductsPage;