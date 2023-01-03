import { Link } from 'react-router-dom';
import { CardWrapper, Container, ProductName } from './ProductList.styled';

export const ProductList = ({ products }) => {
  return (
    <Container>
      {products.map(product => (
        <CardWrapper key={product.id}>
          <Link to={`${product.id}`}>
            <img src="https:via.placeholder.com/200x100" alt="" />
            <ProductName>{product.id}</ProductName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};
