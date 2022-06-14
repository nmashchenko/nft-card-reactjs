import React from "react";
import img from "../../images/image-equilibrium.jpg";
import altImg from "../../images/icon-view.svg";
import ethlogo from "../../images/icon-ethereum.svg";
import time from "../../images/icon-clock.svg";
import avatar from "../../images/image-avatar.png";
import {
  NftContainer,
  NftCard,
  ImageWrapper,
  Img,
  NftTextContainer,
  NftH1,
  NftP,
  NftInfo,
  NftEtheriumLogo,
  NftPrice,
  NftTimeIcon,
  NftTimeLeft,
  NftHR,
  NftCreator,
  NftAvatar,
  NftCreatorTxt,
  NftLink,
  ImgHover,
  IconImg,
  Icon,
  ImageLink
} from "./NftElements";

import {useNavigate} from 'react-router-dom'

const Nft = () => {
  const router = useNavigate();
  const checkClick = () => {
    router('/nftcard_id')
  }

  return (
    <>
      <NftContainer>
        <NftCard>
          <ImageWrapper>
            <Img src={img} alt="img"></Img>
            <ImgHover onClick={checkClick}>
              <Icon>
                <IconImg src={altImg}></IconImg>
              </Icon>
            </ImgHover>
          </ImageWrapper>
          <NftTextContainer>
            <NftH1 href="/">Equilibrium #3419</NftH1>
            <NftP>Our Equilibrium collection promotes balance and calm.</NftP>
          </NftTextContainer>
          <NftInfo>
            <NftEtheriumLogo src={ethlogo} alt="ethlogo"></NftEtheriumLogo>
            <NftPrice>0.041 ETH</NftPrice>
            <NftTimeIcon src={time} alt="time"></NftTimeIcon>
            <NftTimeLeft>3 days left</NftTimeLeft>
          </NftInfo>
          <NftHR></NftHR>
          <NftCreator>
            <NftAvatar src={avatar} alt="avatar"></NftAvatar>
            <NftCreatorTxt>Creation of</NftCreatorTxt>
            <NftLink href="/">Nikita Mashchenko</NftLink>
          </NftCreator>
        </NftCard>
      </NftContainer>
    </>
  );
};

export default Nft;
