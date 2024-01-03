import React, { FC } from 'react';
import { CustomTitle } from '../../../global/styles/CustomTitle';
import { StyledParagraph } from '../../../global/styles/StyledParagraph';
import { Container, LeftDiv, RightDiv, TextContainer, TytleContainer } from '../../../global/styles/Divs';
import garden from '../../../../../assets/garden.svg'
import Ellipse from '../../../../../assets/Ellipse.svg'
import { MapContainer } from '../../../global/styles/MapContainer';
import OpenLayersMap from '../../../global/components/openLayersMap/OpenLayersMap';





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
            gardner_image : Ellipse,
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
        GardenImg: [garden,],
        GardenImgAlt: 'Garden Image',
    };
    return (
        <Container>
            <LeftDiv>
                <TytleContainer style={{ border: '2px solid black' }}>
                    <CustomTitle size="h1" color="#0C2706" fontStyles={{ fontWeight: 'bold' }}> {park.name}</CustomTitle>
                </TytleContainer>
                <TextContainer>Address: <StyledParagraph textColor="#080808">{park.Address.street}, {park.Address.city}</StyledParagraph></TextContainer>

                <TextContainer>
                    <StyledParagraph>Description: </StyledParagraph>
                    <StyledParagraph textColor="#080808">{park.Description}</StyledParagraph>
                </TextContainer>
                <div style={{ display: 'flex',justifyItems :'', border: '2px solid black' }}>
                    <div style={{ border: '2px solid red' }}>
                        <p>Park Size: {park.Park_size} square meters</p>
                        <p>Vegetation: {park.Vegetation}</p>
                        <p>Type: {park.Type}</p>
                    </div>
                    <div>
                        <div style={{ border: '2px solid green' }}>
                            <StyledParagraph lineHeight='0px'>Contact Person:<StyledParagraph textColor="#080808">{park.Contact_person.name}</StyledParagraph> </StyledParagraph>
                            <StyledParagraph lineHeight='0px'>Contact Number:<StyledParagraph textColor="#080808">{park.Contact_person.phone_number}</StyledParagraph> </StyledParagraph>
                        </div>
                        <div style={{ border: '2px solid green' ,display : 'flex'}}>
                        <div style={{ border: '2px solid green' }}>
                            <p>Gardner: {park.Gardner.name}</p>
                            <p>Gardner Phone: {park.Gardner.Phone}</p>
                            <p>Gardner Rating: {park.Gardner.Rating}</p> </div>
                            <div style={{borderRadius : '30%' ,paddingLeft : '5px'}}>
                                <img src={park.Gardner.gardner_image} alt={"Gardner.gardner_image"} style={{width: '100px', height: '100px'}}/>
                            </div>
                           
                        </div>
                    </div>

                </div>
                <p>Treatment: {JSON.stringify(park.Treatment)}</p>
                {/* <p>Coordinates: {park.Coordinates.join(', ')}</p> */}
                <MapContainer>
                    <OpenLayersMap />
                </MapContainer>


            </LeftDiv>
            <RightDiv>
                <img style={{ width: '100%', height: '100%' }} src={park.GardenImg[0]} alt={`Garden Image `} />
                <div>
                    <img src={park.GardenImgAlt} alt="Garden Image" />
                </div>
            </RightDiv>
        </Container>
    );
}

export default GardenInfoPage;







