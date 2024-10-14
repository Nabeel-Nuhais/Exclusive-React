import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ProductsHome = ({ productItems }) => {
  const navigate = useNavigate();

  // const eightProducts = productItems.filter((i, index) => index <= 7);
  const eightProducts = productItems.slice(0, 8);

  const handleViewAllClick = () => {
    navigate("/products");
  };

  return (
    <>
      <MainContainer>
        <CardWrapper>
          <ProductContainer>
            {eightProducts?.map((product, index) => (
              <ProductContent key={index}>
                <TopContainer>
                  <ProductImageWrapper>
                    <ProductImage
                      src={require(`../../../../assets/images/${product.image}`)}
                      alt="product-image"
                    />
                  </ProductImageWrapper>
                  <TopRightContainer>
                    <LikeIconWrapper>
                      <LikeIcon
                        src={
                          require("../../../../assets/images/icons/heart.svg")
                            .default
                        }
                        alt="like-icon"
                      />
                    </LikeIconWrapper>
                    <ViewIconWrapper>
                      <ViewIcon
                        src={
                          require("../../../../assets/images/icons/view.svg")
                            .default
                        }
                        alt="view-icon"
                      />
                    </ViewIconWrapper>
                  </TopRightContainer>
                  <AddToCartButton>Add To Cart</AddToCartButton>
                </TopContainer>
                <ProductDetails>
                  <ProductName>{product.name}</ProductName>
                  <PriceAndRatingContainer>
                    <ProductPrice>{product.price}</ProductPrice>
                    <ProductOfferPrice>{product.offer_price}</ProductOfferPrice>
                    <StarRatingWrapper>
                      <StarIcon
                        src={
                          require("../../../../assets/images/icons/three-star.svg")
                            .default
                        }
                        alt="star-icon"
                      />
                    </StarRatingWrapper>
                    <RatingCount>({product.rating})</RatingCount>
                  </PriceAndRatingContainer>
                </ProductDetails>
              </ProductContent>
            ))}
          </ProductContainer>

          <ButtonContainer>
            <ViewAllButton onClick={handleViewAllClick}>
              View All Products
            </ViewAllButton>
          </ButtonContainer>
        </CardWrapper>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CardWrapper = styled.div`
  width: 100%;
  max-width: 75%;
`;

const AddToCartButton = styled.button`
  background: #000;
  cursor: pointer;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  bottom: 0px;
  width: 100%;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #f5f5f5;
  padding: 30px 0;
  background: #f5f5f5;
  border-radius: 4px;
  height: 60%;
  cursor: pointer;

  position: relative;

  &:hover ${AddToCartButton} {
    opacity: 1;
  }
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

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  border-bottom: 1px solid #b3b3b3;
  padding-bottom: 30px;
`;

const ProductContent = styled.div``;

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
  font-size: 16px;
  font-weight: 500;
`;

const StarRatingWrapper = styled.div``;

const StarIcon = styled.img``;

const RatingCount = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px 0 50px 0;
`;

const ViewAllButton = styled.button`
  background: #db4444;
  padding: 16px 48px;
  color: #fff;
  border: 1px solid #db4444;
  border-radius: 4px;
`;

const ProductOfferPrice = styled.p``;


export default ProductsHome;
