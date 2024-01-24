import React, { useEffect, useState } from 'react'
import { Garden } from '../../interfaces/GardensInterFice';
import { useNavigate } from 'react-router-dom';
import { CardContainer, Card, Image, Content, Description, Title } from '../../../global/styles/Cards';
import ButtonStyled from '../../../global/styles/ButtonStyled';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { fetchUsers } from '../../../../store/userSlice';
import { fetchGardenData } from '../../../../store/gardenSlice';
import axios from 'axios';
// import {CardContainer, Card



interface AllGardensProps {
  allGardens: Garden[];
}




function AllGardens({ allGardens }: AllGardensProps) {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const [GardensData , setGardensData] = useState<Garden[] | undefined >()
  // const {gardenData}  = useAppSelector((state: any) => state.garden);




  async function getGardens() {
    try {
      const response = await axios.get('http://localhost:4000/garden-rest-api');
      if (response.data) {
        console.log('data is available');
        setGardensData(response.data);
      } else { 
        console.log('date not comming from server , the arry is empty !'); }
    } catch (e) {
      console.log(e +'error connecting to server');
    }
  }


  useEffect(() => {
    getGardens()
    dispatch(fetchUsers());
    dispatch(fetchGardenData());
  }, []);

  const { users, status, error } = useAppSelector((state) => state.users);
  // console.log(users);

  // console.log(gardenData);

  if (status === 'loading') {
    return <h2>Loading...</h2>;
  }

  if (status === 'failed') {
    return <h2>Error: {error}</h2>;
  }

  // Check if users data is available
  if (users.length === 0) {
    return <h2>No users found</h2>;
  }



  return (
    <CardContainer>
      {GardensData?.map((garden) => (
        <Card key={garden.id} onClick={() => { nav(`/gardenInfoPage/${garden.id}`) }}>
          <Image src={garden.GardenImg[0]} alt={garden.GardenImgAlt} />
          <Content>
            <Title>{garden.name}</Title>
            <Description>{garden.description}</Description>
            <ButtonStyled >Details</ButtonStyled>
          </Content>
        </Card>
      ))}
    </CardContainer>
  );
}

export default AllGardens