import React from 'react'
import { Park } from '../../../interfaces/garden_interfise';
import { Paragraph, StyledParagraph } from '../../../../global/styles/StyledParagraph';
import { TextContainer } from '../../../../global/styles/Divs';



interface BodyProps {
  park: Park;
}


function Body_gardenInfoPage({ park }: BodyProps) {
  return (
    <>
      <StyledParagraph>Address:
        <Paragraph
          component='span'
          textcolor='black'
          >
          {park.Address.street},
          {park.Address.city}
        </Paragraph>
      </StyledParagraph>

      <TextContainer>
        <StyledParagraph >Description : </StyledParagraph>
        <Paragraph
          component='span'
          textcolor='black'
          lineheight="23px">
          {park.description}
        </Paragraph>
      </TextContainer>
    </>
  )
}

export default Body_gardenInfoPage








{/* <StyledParagraph>Address: <StyledParagraph textColor="#080808">{park.Address.street},
                    {park.Address.city}</StyledParagraph></StyledParagraph> */}
