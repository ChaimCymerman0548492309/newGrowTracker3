import React from 'react'
import { Park } from '../../../../interfaces/garden_interfise';
import { Paragraph, StyledLabel, StyledParagraph } from '../../../../../global/styles/StyledParagraph';

interface Props {
    park: Park;
}


function Garden_info({ park }: Props) {
    return (
        <><div>
            <StyledParagraph
            >Park Size :
                <Paragraph component='span'
                    textcolor='black'>{
                        park.Park_size}
                    square meters</Paragraph>
            </StyledParagraph>
            <StyledParagraph >Vegetation :
                <Paragraph component='span'
                    textcolor='black'
                    lineheight="15px">
                    {park.Vegetation}
                </Paragraph>
            </StyledParagraph>
            <StyledParagraph
            >Type :
                <Paragraph
                    component='span'
                    textcolor='black' >
                    {park.Type}</Paragraph>
            </StyledParagraph>
        </div>
            <div
            >
                <StyledParagraph>Treatment :
                </StyledParagraph>
                <ul>
                    <li>
                        <input type="checkbox"
                            checked={park.Treatment.grass_trimming}
                            readOnly style={{ cursor: 'pointer' }} />
                        <StyledLabel >
                            Grass Trimming
                        </StyledLabel>
                    </li>
                    <li>
                        <input type="checkbox"
                            checked={park.Treatment.tree_pruning} readOnly
                            style={{ cursor: 'pointer' }} />
                        <StyledLabel>Tree Pruning

                        </StyledLabel>
                    </li>
                    <li>
                        <input type="checkbox"
                            checked={park.Treatment.pest_control} readOnly style={{ cursor: 'pointer' }} />
                        <StyledLabel>Pest Control
                        </StyledLabel>
                    </li>
                </ul>
            </div></>
    )
}

export default Garden_info