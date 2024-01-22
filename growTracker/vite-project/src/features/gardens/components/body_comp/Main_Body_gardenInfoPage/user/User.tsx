import React from 'react'
import { Paragraph, StyledParagraph } from '../../../../../global/styles/StyledParagraph'
import { Park } from '../../../../interfaces/garden_interfise';


interface Props {
    park: Park;
}




function User({park} : Props ) {
    return (
        <>
            <div style={{ flexGrow: '1', height: '35%' }}>
                <StyledParagraph >Contact Person :
                    <Paragraph component='span'
                        textcolor='black'>{park.Contact_person.name}</Paragraph>
                </StyledParagraph>
                <StyledParagraph>Contact Number :
                    <Paragraph component='span'
                        textcolor='black'>{park.Contact_person.phone_number}
                    </Paragraph>
                </StyledParagraph>
            </div>
        </>
    )
}

export default User