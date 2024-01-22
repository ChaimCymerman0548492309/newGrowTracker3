import React from 'react'
import { Park } from '../../../../interfaces/garden_interfise';
import { Paragraph, StyledParagraph } from '../../../../../global/styles/StyledParagraph';




interface BodyProps {
    park: Park;
}


function Gardner({ park }: BodyProps) {
    return (
        <>
            <div style={{
                //  border: '2px solid black',
                display: 'flex', flexGrow: '2', height: '65%'
            }}>
                <div style={{
                    //  border: '2px solid green', 
                    width: '60%', flexGrow: '2'
                }}>
                    <StyledParagraph>Gardner : <Paragraph
                        component='span' textcolor='black'>
                        {park.Gardner.name}</Paragraph>
                    </StyledParagraph>
                    <StyledParagraph>Gardner Phone :
                        <Paragraph component='p' textcolor='black'>
                            {park.Gardner.Phone}</Paragraph>
                    </StyledParagraph>
                    <StyledParagraph>Gardner Rating :
                        <Paragraph component='span' textcolor='black'>
                            {park.Gardner.Rating}</Paragraph></StyledParagraph>
                </div>
                <div style={{
                    alignItems: 'center', justifyItems: 'center',
                    // border: '2px solid red',
                    flexGrow: '1'
                }}>
                    <div style={{ borderRadius: '30%' }}>
                        <img src={park.Gardner.gardner_image}
                            alt={"Gardner.gardner_image"}
                            style={{ width: '100px', height: '100px' }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gardner