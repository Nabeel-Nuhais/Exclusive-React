import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import TopBar from "../../../includes/TopBar.tsx";
import Header from "../../../includes/Header.tsx";
import Footer from "../../../includes/Footer.tsx";
import allProducts from "../../../helpers/products.json"

const ProductsList = () => {
  const location = useLocation();

  const productItems = location.state?.productItems || allProducts.products || [];

  return (
    <>
      <TopBar />
      <Header />

      <MainContainer>
        <CardWrapper>
          <NavigationContainer>
            <NavigationContent>
              <HomeNavigation to={"/"} className="active">
                Home
              </HomeNavigation>
              \
              <ProductsNavigation to={""} className="active">
                Products
              </ProductsNavigation>
            </NavigationContent>
          </NavigationContainer>

          <ProductContainer>
            {productItems?.map((product, index) => (
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
        </CardWrapper>
      </MainContainer>

      <Footer />
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 60px;
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

const NavigationContainer = styled.div`
  padding: 60px 0;
`;

const NavigationContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const HomeNavigation = styled(Link)`
  font-size: 14px;
  font-weight: 400;
  color: #7f7f7f;
  text-decoration: none;
`;

const ProductsNavigation = styled(Link)`
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  color: #000;

  &&.active {
    font-weight: 600;
  }
`;

export default ProductsList;
