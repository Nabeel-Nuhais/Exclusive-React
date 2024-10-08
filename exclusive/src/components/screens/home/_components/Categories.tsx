import React from "react";
import styled from "styled-components";

const Categories = () => {
  return (
    <>
      <MainContainer>
        <CategorySectionWrapper>
          <CategoryHeader>
            <IconWrapper>
              <CategoryIcon
                src={
                  require("../../../../assets/images/icons/rectangle.svg")
                    .default
                }
                alt="category-icon"
              />
            </IconWrapper>
            <CategoryLabel>Categories</CategoryLabel>
          </CategoryHeader>

          <CategoryTitle>
            <Heading>Browse By Category</Heading>
          </CategoryTitle>

          <CategoryItems>
            <ItemsGrid>
              <CategoryItem>
                <IconWrapper>
                  <GamingIcon
                    src={
                      require("../../../../assets/images/icons/Gamepad.svg")
                        .default
                    }
                    alt="gaming-icon"
                  />
                </IconWrapper>
                <CategoryName>Gaming</CategoryName>
              </CategoryItem>

              <CategoryItem>
                <IconWrapper>
                  <ComputerIcon
                    src={
                      require("../../../../assets/images/icons/Computer.svg")
                        .default
                    }
                    alt="computer-icon"
                  />
                </IconWrapper>
                <CategoryName>Computers</CategoryName>
              </CategoryItem>

              <CategoryItem>
                <IconWrapper>
                  <CameraIcon
                    src={
                      require("../../../../assets/images/icons/Camera.svg")
                        .default
                    }
                    alt="camera-icon"
                  />
                </IconWrapper>
                <CategoryName>Camera</CategoryName>
              </CategoryItem>

              <CategoryItem>
                <IconWrapper>
                  <PhoneIcon
                    src={
                      require("../../../../assets/images/icons/CellPhone.svg")
                        .default
                    }
                    alt="phone-icon"
                  />
                </IconWrapper>
                <CategoryName>Phones</CategoryName>
              </CategoryItem>

              <CategoryItem>
                <IconWrapper>
                  <SmartWatchIcon
                    src={
                      require("../../../../assets/images/icons/SmartWatch.svg")
                        .default
                    }
                    alt="smartwatch-icon"
                  />
                </IconWrapper>
                <CategoryName>SmartWatch</CategoryName>
              </CategoryItem>

              <CategoryItem>
                <IconWrapper>
                  <HeadphoneIcon
                    src={
                      require("../../../../assets/images/icons/eadphone.svg")
                        .default
                    }
                    alt="headphones-icon"
                  />
                </IconWrapper>
                <CategoryName>HeadPhones</CategoryName>
              </CategoryItem>
            </ItemsGrid>
          </CategoryItems>
        </CategorySectionWrapper>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0 50px 0;
`;

const CategorySectionWrapper = styled.div`
  width: 100%;
  max-width: 75%;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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

const CategoryTitle = styled.div`
  margin: 10px 0 25px 0;
`;

const Heading = styled.h2`
  margin: 0;
  font-size: 36px;
  font-weight: 600;
`;

const CategoryItems = styled.div``;

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
`;

const CategoryItem = styled.button`
  border: 1px solid #b3b3b3;
  border-radius: 4px;
  display: inline-grid;
  justify-content: center;
  padding: 40px 0;
  gap: 10px;
  cursor: pointer;
  background: #fff;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const CategoryName = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
`;

const GamingIcon = styled.img``;

const ComputerIcon = styled.img``;

const CameraIcon = styled.img``;

const PhoneIcon = styled.img``;

const SmartWatchIcon = styled.img``;

const HeadphoneIcon = styled.img``;

export default Categories;
