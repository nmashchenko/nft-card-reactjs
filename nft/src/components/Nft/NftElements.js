import styled from 'styled-components'

export const NftContainer = styled.div`
  background: hsl(217, 54%, 11%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NftCard = styled.div`
  height: 36rem;
  width: 23rem;
  background: hsl(216, 50%, 16%);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 35px;

  @media screen and (max-width: 480px) {
    width: 20rem;
    height: 33rem;
  }
`

export const ImageWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const ImageLink = styled.a`
  width: 19rem;
  height: 18rem;
  border-radius: 15px;
`

export const Img = styled.img`
  display: block;
  width: 19rem;
  height: 18rem;
  border-radius: 15px;

  &:hover{
    opacity: 0.3;
  }

  @media screen and (max-width: 480px) {
    width: 17rem;
    height: 17rem;
  }
`

export const IconImg = styled.img`
`

export const ImgHover = styled.div`
  position: absolute;
  width: 19rem;
  height: 18rem;
  border-radius: 15px;
  opacity: 0;
  transition: .5s ease;
  background-color: hsl(178, 100%, 50%);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    opacity: 1;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    width: 17rem;
    height: 17rem;
  }
`

export const Icon = styled.div`
  opacity: 1;
`

export const NftTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 25px;
  margin-left: 32px;

  @media screen and (max-width: 480px) {
    margin-top: 25px;
  }
`

export const NftH1 = styled.a`
  font-size: 18px;
  font-weight: 600;
  color: hsl(0, 0%, 100%);
  text-decoration: none;

  &:hover{
    color: hsl(178, 100%, 50%);
  }
  
`

export const NftP = styled.p`
  margin-top: 15px;
  color: hsl(215, 51%, 70%);
  font-weight: 300;
  max-width: 350px;
  font-size: 18px;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`

export const NftInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 32px;
  margin-top: 30px;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 480px) {
    margin-top: 25px;
  }
`

export const NftEtheriumLogo = styled.img`
  width: 11px;
  height: 18px;
`

export const NftPrice = styled.h3`
  margin-left: 10px;
  color: hsl(178, 100%, 50%);
  font-size: 18px;

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`

export const NftTimeIcon = styled.img`
  margin-left: 90px;
  width: 17px;
  height: 17px;

  @media screen and (max-width: 480px) {
    margin-left: 75px;
  }
`

export const NftTimeLeft = styled.h3`
  margin-left: 5px;
  color: hsl(215, 51%, 70%);
  font-weight: 300;

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`

export const NftHR = styled.hr`
  margin-top: 20px;
  margin-left: 32px;
  border: none;
  height: 0.5px;
  background-color: hsl(215, 51%, 70%);
  border: 0 none;
  max-width: 80%;
`

export const NftCreator = styled.div`
  margin-top: 17px;
  margin-left: 32px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const NftAvatar = styled.img`
  width: 30px;
  height: 30px;
  border: 1px solid #73AD21;
  border-radius: 15px;
  border-color: hsl(0, 0%, 100%);
`

export const NftCreatorTxt = styled.p`
  font-weight: 300;
  margin-left: 15px;
  color: hsl(215, 51%, 70%);
  font-size: 18px;

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`

export const NftLink = styled.a`
  text-decoration: none;
  font-size: 18px;
  margin-left: 5px;
  color: hsl(0, 0%, 100%);
  font-weight: 300;

  &:hover{
    color: hsl(178, 100%, 50%);
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`
