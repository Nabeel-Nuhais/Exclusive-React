import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TopBar from "../../../includes/TopBar.tsx";
import Header from "../../../includes/Header.tsx";
import Footer from "../../../includes/Footer.tsx";
import threeStar from "../../../../assets/images/icons/three-star.svg";
import fourStar from "../../../../assets/images/icons/four-star.svg";
import fourHalfStar from "../../../../assets/images/icons/four-half-star.svg";
import fiveStar from "../../../../assets/images/icons/five-star.svg";

interface BorderWrapperProps {
  $isActive: boolean;
}

interface ProductProps {
  products: {
    id: number;
    name: string;
    image: string;
    rating: number;
    colors: string[];
  }[];
}

const ProductDetails: React.FC<ProductProps> = ({ products }) => {
  const { id } = useParams<{ id: string }>();

  const product = products.find((item) => item.id === Number(id)) || null;

  const [selectedColor, setSelectedColor] = useState<string>("");

  useEffect(() => {
    if (product && product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const getStarIcon = (rating: number) => {
    if (rating >= 90) return fiveStar;
    if (rating >= 75) return fourHalfStar;
    if (rating >= 60) return fourStar;
    return threeStar;
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <TopBar />
      <Header />

      <Main>
        <Wrapper>
          <NavigatedContainer>
            <Home>Home</Home>/<Category>Gaming</Category>/
            <ItemName>{product.name}</ItemName>
          </NavigatedContainer>

          <TwoBlockContainer>
            <ProductBorder>
              <ProductImageContainer>
                <ProductImage
                  src={require(`../../../../assets/images/${product.image}`)}
                  alt={product.name}
                />
              </ProductImageContainer>
            </ProductBorder>

            <ProductDetailsContainer>
              <ProductName>{product.name}</ProductName>
              <StarRatingContainer>
                <StarRatingWrapper>
                  <StarIcon src={getStarIcon(product.rating)} alt="star-icon" />
                </StarRatingWrapper>
                <ProductRating>({product.rating} Reviews)</ProductRating>
              </StarRatingContainer>
              <ProductPrice>$192.00</ProductPrice>
              <ProductDescription>
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble-free install & mess-free
                removal. Pressure sensitive.
              </ProductDescription>

              <ColorSelection>
                Colors:
                {product.colors && product.colors.length > 0 ? (
                  product.colors.map((color) => (
                    <BorderWrapper
                      key={color}
                      $isActive={color === selectedColor}
                      onClick={() => handleColorSelect(color)}
                    >
                      <ColorCircle style={{ backgroundColor: color }} />
                    </BorderWrapper>
                  ))
                ) : (
                  <span>No color options available</span>
                )}
              </ColorSelection>

              <DeliveryInfoContainer>
                <FreeDeliveryContainer>
                  <ImageWrapper>
                    <TruckIcon
                      src={
                        require("../../../../assets/images/icons/free-delivery.svg")
                          .default
                      }
                      alt="truck-icon"
                    />
                  </ImageWrapper>
                  <TextContainer>
                    <FreeDeliveryText>Free Delivery</FreeDeliveryText>
                    <FreeDeliverySubText>
                      Enter your postal code for Delivery Availability
                    </FreeDeliverySubText>
                  </TextContainer>
                </FreeDeliveryContainer>
                <ReturnDeliveryContainer>
                  <ImageWrapper>
                    <ReturnIcon
                      src={
                        require("../../../../assets/images/icons/return-delivery.svg")
                          .default
                      }
                      alt="return-icon"
                    />
                  </ImageWrapper>
                  <TextContainer>
                    <ReturnDeliveryText>Return Delivery</ReturnDeliveryText>
                    <ReturnDeliverySubText>
                      Free 30 Days Delivery Returns. Details
                    </ReturnDeliverySubText>
                  </TextContainer>
                </ReturnDeliveryContainer>
              </DeliveryInfoContainer>
            </ProductDetailsContainer>
          </TwoBlockContainer>
        </Wrapper>
      </Main>

      <Footer />
    </>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 100%;
  width: 75%;
`;

const NavigatedContainer = styled.div`
  padding: 60px 0;
  display: flex;
  gap: 12px;
`;

const Home = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #7f7f7f;
`;

const Category = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #7f7f7f;
`;

const ItemName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #000;
`;

const ProductBorder = styled.div`
  width: 65%;
  display: flex;
  justify-content: center;
  border: 1px solid #f5f5f5;
  background: #f5f5f5;
  border-radius: 4px;
`;

const ProductImageContainer = styled.div`
  align-self: center;
  padding: 160px 0;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductDetailsContainer = styled.div`
  width: 50%;
  align-self: center;
`;

const ProductName = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

const StarRatingWrapper = styled.div``;

const StarIcon = styled.img``;

const ProductRating = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const ProductPrice = styled.span`
  font-weight: 400;
  font-size: 24px;
`;

const ProductDescription = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  padding: 12px 0 15px 0;
  border-bottom: 1px solid #9a9a9a;
`;

const ColorSelection = styled.div`
  display: flex;
  gap: 8px;
  font-size: 20px;
  font-weight: 400;
  align-items: center;
  margin: 0;
  padding: 20px 0;
`;

const BorderWrapper = styled.div<BorderWrapperProps>`
  border: 2px solid ${(props) => (props.$isActive ? "#000" : "transparent")};
  border-radius: 50%;
  padding: 2px;
  cursor: pointer;
  width: 18px;
  height: 18px;
  transition: border 0.3s ease;
`;

const ColorCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const DeliveryInfoContainer = styled.div`
  border: 1px solid #9a9a9a;
  padding: 17px 0;
  border-radius: 4px;
`;

const FreeDeliveryText = styled.span`
  margin: 0%;
  font-size: 16px;
  font-weight: 500;
`;

const ReturnDeliveryText = styled.span`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;
const TwoBlockContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 70px;
`;

const FreeDeliveryContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  gap: 5px;
`;

const ImageWrapper = styled.div`
  width: 35px;
  margin: 0 10px;
`;
const TruckIcon = styled.img`
  display: block;
  width: 100%;
`;
const ReturnDeliveryContainer = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #9a9a9a;
  padding-top: 10px;
  gap: 5px;
`;

const ReturnIcon = styled.img`
  display: block;
  width: 100%;
`;

const TextContainer = styled.div``;

const FreeDeliverySubText = styled.p`
  margin: 0%;
  font-size: 12px;
  font-weight: 500;
  text-decoration: underline;
`;

const ReturnDeliverySubText = styled.p`
  margin: 0%;
  font-size: 12px;
  font-weight: 500;
`;

const StarRatingContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 0;
`;

export default ProductDetails;
