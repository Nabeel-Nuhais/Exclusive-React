import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import threeStar from "../../../../assets/images/icons/three-star.svg";
import fourStar from "../../../../assets/images/icons/four-star.svg";
import fourHalfStar from "../../../../assets/images/icons/four-half-star.svg";
import fiveStar from "../../../../assets/images/icons/five-star.svg";

interface BorderWrapperProps {
  $isActive: boolean;
}

interface Product {
  id: string;
  name: string;
  image: string;
  rating: number;
  price: string;
  category: string[];
  colors: string[];
  stock?: string;
  newLabel?: string;
  discountLabel?: string;
  offerPrice?: string;
}

interface RelatedItemsProps {
  products: Product[];
}

const RelatedItems: React.FC<RelatedItemsProps> = ({ products }) => {

  const getStarIcon = (rating: number) => {
    if (rating >= 90) return fiveStar;
    if (rating >= 75) return fourHalfStar;
    if (rating >= 60) return fourStar;
    return threeStar;
  };

  const { products: productItems } = require("../../../helpers/products.json");

  const initialSelectedColors = Array.isArray(productItems)
  ? productItems.reduce((acc, product) => {
      acc[product.id] = product.colors ? product.colors[0] : "";
      return acc;
    }, {})
  : {};

  const limitedProducts = products.slice(0, 4);

  const [selectedColors, setSelectedColors] = useState(initialSelectedColors);

  const handleColorSelect = (color: string, productId: string) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: color,
    }));
  };

  return (
    <MainContainer>
      <CategorySectionWrapper>
        <CategoryHeader>
          <IconWrapper>
            <CategoryIcon
              src={require("../../../../assets/images/icons/rectangle.svg").default}
              alt="category-icon"
            />
          </IconWrapper>
          <CategoryLabel>Related Item</CategoryLabel>
        </CategoryHeader>

        <ProductContainer>
          {limitedProducts.map((product) => (
            <ProductContent key={product.id}>
              <TopContainer to={`/product/${product.id}`}>
                {product["new-label"] && (
                  <NewArrival>
                    <NewLabel>{product["new-label"]}</NewLabel>
                  </NewArrival>
                )}
                {product["discount-label"] && (
                  <DiscountOffer>
                    <DiscountLabel>{product["discount-label"]}</DiscountLabel>
                  </DiscountOffer>
                )}
                <ProductImageWrapper>
                  <ProductImage
                    src={require(`../../../../assets/images/${product.image}`)}
                    alt={product.name}
                  />
                </ProductImageWrapper>
                <TopRightContainer>
                  <LikeIconWrapper>
                    <LikeIcon
                      src={require("../../../../assets/images/icons/heart.svg").default}
                      alt="like-icon"
                    />
                  </LikeIconWrapper>
                  <ViewIconWrapper>
                    <ViewIcon
                      src={require("../../../../assets/images/icons/view.svg").default}
                      alt="view-icon"
                    />
                  </ViewIconWrapper>
                </TopRightContainer>
                <AddToCartButton>Add To Cart</AddToCartButton>
              </TopContainer>

              <ProductDetails>
                <ProductName>{product.name}</ProductName>
                <PriceAndRatingContainer>
                  {product["offer-price"] ? (
                    <>
                      <ProductPrice>{product["offer-price"]}</ProductPrice>
                      <OriginalPrice>{product.price}</OriginalPrice>
                    </>
                  ) : (
                    <ProductPrice>{product.price}</ProductPrice>
                  )}
                  <StarRatingWrapper>
                    <StarIcon src={getStarIcon(product.rating)} alt="star-icon" />
                  </StarRatingWrapper>
                  <RatingCount>({product.rating})</RatingCount>
                </PriceAndRatingContainer>
                <ColorSelection>
                  {product.colors?.map((color, index) => (
                    <BorderWrapper
                      key={index}
                      $isActive={color === selectedColors[product.id]}
                      onClick={() => handleColorSelect(color, product.id)}
                    >
                      <ColorCircle style={{ backgroundColor: color }} />
                    </BorderWrapper>
                  ))}
                </ColorSelection>
              </ProductDetails>
            </ProductContent>
          ))}
        </ProductContainer>
      </CategorySectionWrapper>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0 80px 0;
`;

const CategorySectionWrapper = styled.div`
  width: 100%;
  max-width: 75%;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 40px 0px 50px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CategoryIcon = styled.img``;

const CategoryLabel = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #db4444;
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

const ProductContent = styled.div`
  margin-bottom: 25px;
`;

const AddToCartButton = styled.button`
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 0 0 4px 4px;
  position: absolute;
  bottom: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
`;


const TopContainer = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  border: 1px solid #f5f5f5;
  background: #f5f5f5;
  border-radius: 4px;
  position: relative;
  height: 60%;
  padding: 30px 0;
  cursor: pointer;

  &:hover ${AddToCartButton} {
    opacity: 1;
  }
`;

const ProductImageWrapper = styled.div`
  align-self: center;
`;

const ProductImage = styled.img``;

const ProductDetails = styled.div``;

const ProductName = styled.h3`
  margin: 15px 0 5px 0;
  font-size: 16px;
  font-weight: 500;
`;

const PriceAndRatingContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const ProductPrice = styled.span`
  color: #db4444;
  font-weight: 500;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #7f7f7f;
`;

const StarRatingWrapper = styled.div``;

const StarIcon = styled.img``;

const RatingCount = styled.span`
  font-size: 14px;
`;

const ColorSelection = styled.div`
  display: flex;
  gap: 8px;
`;

const BorderWrapper = styled.div<BorderWrapperProps>`
  border: 2px solid ${(props) => (props.$isActive ? "#000" : "transparent")};
  border-radius: 50%;
  padding: 2px;
  cursor: pointer;
  width: 18px;
  height: 18px;
`;

const ColorCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const NewArrival = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  background: #00ff66;
  border: 1px solid #00ff66;
  border-radius: 4px;
  color: #fafafa;
  padding: 4px 12px;
`;

const NewLabel = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
`;

const DiscountOffer = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  background: #db4444;
  border: 1px solid #db4444;
  border-radius: 4px;
  color: #fafafa;
  padding: 4px 12px;
`;

const DiscountLabel = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
`;

const TopRightContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const LikeIconWrapper = styled.div`
  cursor: pointer;
`;

const LikeIcon = styled.img`
  border: 1px solid #fff;
  border-radius: 50%;
  background: #fff;
  padding: 5px;
`;

const ViewIconWrapper = styled.div`
  cursor: pointer;
`;

const ViewIcon = styled.img`
  border: 1px solid #fff;
  border-radius: 50%;
  background: #fff;
  padding: 5px;
`;


export default RelatedItems;
