// import React, { FC } from 'react';
import { CustomTitle } from '../../../global/styles/CustomTitle';
import { StyledLabel, StyledParagraph } from '../../../global/styles/StyledParagraph';
import { Container, LeftDiv, RightDiv, TextContainer, TytleContainer } from '../../../global/styles/Divs';
import './GardenInfoPage.css'
import { Paragraph } from '../../../global/styles/StyledParagraph';
import Heder_gardenInfoPage from '../../components/body_comp/Heder_gardenInfoPage/Heder_gardenInfoPage';
import { Park } from '../../interfaces/garden_interfise';
import { MapContainer } from '../../../global/styles/MapContainer';
import OpenLayersMap from '../../../global/components/openLayersMap/OpenLayersMap';
import Body_gardenInfoPage from '../../components/body_comp/Body_gardenInfoPage/Body_gardenInfoPage';
import Main_Body_gardenInfoPage from '../../components/body_comp/Main_Body_gardenInfoPage/Main_Body_gardenInfoPage';
import Gallery from '../../components/body_comp/Gallery/Gallery';

interface GardenInfoPageProps {
    park: Park;
}


const GardenInfoPage = ({ park }: GardenInfoPageProps) => {

    return (
        <Container>
            <LeftDiv>
                <Heder_gardenInfoPage park_name={park.name} />
                <Body_gardenInfoPage park={park} />
                <Main_Body_gardenInfoPage park={park} />
                <MapContainer>
                    <OpenLayersMap />
                </MapContainer>
            </LeftDiv>
            <RightDiv>
               <Gallery park={park} />
            </RightDiv>
        </Container>
    );
}

export default GardenInfoPage;







