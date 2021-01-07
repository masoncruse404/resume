import React from 'react'
import { Button } from '../ButtonElements';
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine,Heading,BtnWrap,ImgWrap,Img, Subtitle} from './InfoElements'
const InfoSection = ({headlineFontSize,customFontSize,lightBg,id, imgStart, topLine, headline, darkText, description, buttonLabel, link,img, alt,lightText, primary, dark, dark2}) => {
    return (
        <>
         <InfoContainer lightBg={lightBg} id={id}>
             <InfoWrapper>
                 <InfoRow imgStart={imgStart}>
                     <Column1>
                     <TextWrapper>
                         <TopLine customFontSize={customFontSize} >{topLine}</TopLine>
                         <Heading headlineFontSize={headlineFontSize}lightText={lightText}>{headline}</Heading>
                         <Subtitle darkText={darkText}>{description}</Subtitle>
                         <BtnWrap>
                             <Button to={link}
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact="true"
                             offset={-80}
                             primary={primary ? 1 : 0}
                             dark={dark ? 1 : 0}
                             dark2={dark2 ? 1 : 0}
                             
                             >{buttonLabel}</Button>
                         </BtnWrap>
                     </TextWrapper>
                     </Column1>
                     <Column2>
                      <ImgWrap>
                       <Img src={img} alt={alt}/>
                      </ImgWrap>
                     </Column2>
                 </InfoRow>
             </InfoWrapper>
         </InfoContainer>
        </>
    )
}

export default InfoSection;
