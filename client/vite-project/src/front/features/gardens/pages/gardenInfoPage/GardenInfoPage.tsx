import React, { FC } from 'react';
import { CustomTitle } from '../../../global/styles/CustomTitle';
import { StyledLabel, StyledParagraph } from '../../../global/styles/StyledParagraph';
import { Container, LeftDiv, RightDiv, TextContainer, TytleContainer } from '../../../global/styles/Divs';
import garden from '../../../../../assets/garden.svg'
import Ellipse from '../../../../../assets/Ellipse.svg'
import { MapContainer } from '../../../global/styles/MapContainer';
import OpenLayersMap from '../../../global/components/openLayersMap/OpenLayersMap';
import { foto } from '../../../../../assets/Gardner_image';
import { foto3 } from '../../../../../assets/foto3';
import { foto2 } from '../../../../../assets/foto2';
import { StyledCheckbox } from '../../../global/styles/StyledCheckbox';
import './GardenInfoPage.css'


const GardenInfoPage = () => {
    const park = {
        name: 'Citys Garden',
        Description: "Envisioning a garden filled with colorful blooms, the customer seeks a gardener to ensure each flower receives the care it needs. Pruning, watering, and maintaining soil health are essential tasks to cultivate this vibrant haven.",
        Contact_person: {
            name: 'Moshe',
            phone_number: '0548899258',
        },
        Gardner: {
            name: 'Oliver Greenfield',
            Phone: '+1 (555) 123-4567',
            Rating: 5,
            gardner_image: Ellipse,
        },
        Park_size: 100,
        Vegetation: 'grass, ornamental trees',
        Type: 'urban garden',
        Treatment: {
            grass_trimming: true,
            tree_pruning: true,
            pest_control: true
        },
        Coordinates: [30.333, 34.456],
        Address: {
            street: 'Menachem Begin 230',
            city: 'Tel Aviv'
        },
        GardenImg: [garden, foto, foto2, foto3],
        GardenImgAlt: 'Garden Image',
    };
    return (
        <Container>
            <LeftDiv>
                <TytleContainer style={{ border: '2px solid black', textAlign: 'center' }}>
                    <CustomTitle size="h1" color="#0C2706" fontStyles={{ fontWeight: 'bold' }}>
                        {park.name}</CustomTitle>
                </TytleContainer>
                <StyledParagraph>Address: <StyledParagraph textColor="#080808">{park.Address.street},
                    {park.Address.city}</StyledParagraph></StyledParagraph>

                <TextContainer>
                    <StyledParagraph >Description: </StyledParagraph>
                    <StyledParagraph textColor="#080808" lineHeight="23px">{park.Description}
                    </StyledParagraph>
                </TextContainer>
                <div style={{ display: 'flex', border: '2px solid black', justifyContent: 'space-between' }}>
                    <div style={{ border: '2px solid red', paddingLeft: '2%', width: '42%' }}>
                        <div style={{ border: '2px solid red', }}>
                            <StyledParagraph lineHeight='0px'>Park Size:
                                <StyledParagraph textColor="#080808">{
                                    park.Park_size} square meters</StyledParagraph> </StyledParagraph>
                            <StyledParagraph lineHeight='0px'>Vegetation:
                                <StyledParagraph textColor="#080808" lineHeight="15px">{park.Vegetation}
                                </StyledParagraph>
                            </StyledParagraph>
                            <StyledParagraph lineHeight='0px'>Type:<StyledParagraph textColor="#080808" >
                                {park.Type}</StyledParagraph> </StyledParagraph>
                        </div>
                        <div style={{ border: '2px solid red', }}>
                            <StyledParagraph>Treatment:</StyledParagraph>
                            <ul>
                                <li>
                                    <input type="checkbox" checked={park.Treatment.grass_trimming} 
                                readOnly style={{ cursor: 'pointer' }} />
                                    <StyledLabel >Grass Trimming</StyledLabel>
                                </li>
                                <li>
                                    <input type="checkbox" checked={park.Treatment.tree_pruning} readOnly style={{ cursor: 'pointer' }} />
                                    <StyledLabel>Tree Pruning</StyledLabel>
                                </li>
                                <li>
                                    <input type="checkbox" checked={park.Treatment.pest_control} readOnly style={{ cursor: 'pointer' }} />
                                    <StyledLabel>Pest Control</StyledLabel>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ width: '52%' }} >
                        <div style={{ border: '2px solid green' }}>
                            <StyledParagraph lineHeight='0px'>Contact Person:
                                <StyledParagraph textColor="#080808">{park.Contact_person.name}</StyledParagraph>
                            </StyledParagraph>
                            <StyledParagraph lineHeight='0px'>Contact Number:
                                <StyledParagraph textColor="#080808">{park.Contact_person.phone_number}
                                </StyledParagraph> </StyledParagraph>
                        </div>
                        <div style={{ border: '2px solid green', display: 'flex' }}>
                            <div style={{ border: '2px solid green', width: '60%' }}>
                                <StyledParagraph>Gardner: <StyledParagraph textColor="#080808">
                                    {park.Gardner.name}</StyledParagraph></StyledParagraph>
                                <StyledParagraph>Gardner Phone: <StyledParagraph textColor="#080808">
                                    {park.Gardner.Phone}</StyledParagraph></StyledParagraph>
                                <StyledParagraph>Gardner Rating: <StyledParagraph textColor="#080808">
                                    {park.Gardner.Rating}</StyledParagraph></StyledParagraph>
                            </div>
                            <div style={{ alignItems: 'center', border: '2px solid red', width: '100px' }}>
                                <div style={{ borderRadius: '30%' }}>
                                    <img src={park.Gardner.gardner_image}
                                        alt={"Gardner.gardner_image"} style={{ width: '100px', height: '100px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <p>Coordinates: {park.Coordinates.join(', ')}</p> */}
                <MapContainer>
                    <OpenLayersMap />
                </MapContainer>
            </LeftDiv>
            <RightDiv>
                <div style={{ height: '85%', marginTop: '15%' }}>
                    <img style={{ width: '100%', height: '100%' }} src={park.GardenImg[0]}
                        alt={`Garden Image `} />
                </div>
                <div className='imgesDiv' >
                    <div className='imgeDiv'>
                        <img style={{ width: '100%', height: '100%' }} src={park.GardenImg[1]}
                            alt={`Garden Image `} />
                    </div>
                    <div className='imgeDiv'>
                        <img style={{ width: '100%', height: '100%' }} src={park.GardenImg[2]}
                            alt={`Garden Image `} />
                    </div>
                    <div className='imgeDiv'>
                        <img style={{ width: '100%', height: '100%' }} src={park.GardenImg[3]}
                            alt={`Garden Image `} />
                    </div>
                </div>

            </RightDiv>
        </Container>
    );
}

export default GardenInfoPage;







