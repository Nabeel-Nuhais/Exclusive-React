import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [dropDown, setDropDown] = useState(false);

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <Header>
      <Wrapper>
        <PromoSection>
          <PromoText>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </PromoText>
          <ShopButton to={"/products"}>ShopNow</ShopButton>
        </PromoSection>

        <LanguageSelector>
          <LanguageText>English</LanguageText>
          <ArrowContainer onClick={toggleDropDown}>
            <ArrowIcon
              src={
                require("../../assets/images/icons/short-arrow-down.svg")
                  .default
              }
              alt="down-arrow"
            />
            {dropDown && (
              <DropdownMenu>
                <DropdownItem>English</DropdownItem>
                <DropdownItem>Spanish</DropdownItem>
                <DropdownItem>French</DropdownItem>
              </DropdownMenu>
            )}
          </ArrowContainer>
        </LanguageSelector>
      </Wrapper>
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  height: 48px;

  @media (max-width: 1024px) {
    display: block;
    height: 68px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  width: 75%;
  align-items: center;
  position: relative;

  @media (max-width: 1024px) {
    display: grid;
    width: 100%;
    height: 100%;
  }
`;

const PromoSection = styled.div`
  position: absolute;
  display: flex;

  @media (max-width: 1024px) {
    display: inline-flex;
    position: unset;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const PromoText = styled.p`
  margin: 0;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
`;

const ShopButton = styled(Link)`
  color: #fff;
  margin-left: 12px;
  font-weight: 600;
  font-size: 14px;
`;

const LanguageSelector = styled.div`
  position: absolute;
  right: 0;
  display: flex;

  @media (max-width: 1024px) {
    position: unset;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const LanguageText = styled.div`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
`;

const ArrowContainer = styled.h4`
  margin: 0 0 0 8px;
  cursor: pointer;
`;

const ArrowIcon = styled.img``;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 110%;
  right: 0;
  background-color: #fff;
  color: #000;
  list-style-type: none;
  padding: 8px 0;
  border-radius: 4px;
  width: 120px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  text-align: left;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export default TopBar;
