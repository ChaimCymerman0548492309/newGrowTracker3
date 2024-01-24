import React from 'react'
import { Park } from '../../../interfaces/garden_interfise';
import { Paragraph, StyledLabel, StyledParagraph } from '../../../../global/styles/StyledParagraph';
import Garden_info from './garden_info/garden_info';
import Gardner from './Gardner/Gardner';
import User from './user/User';



interface BodyProps {
    park: Park;
}


function Main_Body_gardenInfoPage({ park }: BodyProps) {

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <div style={{ width: '42%' }}>
                    <Garden_info park={park} />
                </div>
                <div style={{
                    width: '52%', display: 'flex',
                    flexDirection: 'column'
                }} >
                    <Gardner park={park} />
                    <User park={park} />
                </div>
            </div>
        </>
    )
}

export default Main_Body_gardenInfoPage