import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 4px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })};
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  text-shadow: #d3d2d1 1px 1px 10px;
`;
const Button = styled.button`
  border: none;
  padding: 16px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 800;
  transition: all 0.5s ease;

  &:hover {
    color: white;
    background-color: teal;
    transform: scale(1.1);
  }
`;

function CategoryItem({ item }) {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
}

export default CategoryItem;
