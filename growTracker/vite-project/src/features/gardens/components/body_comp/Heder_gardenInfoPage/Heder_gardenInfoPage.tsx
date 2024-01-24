import React, { useEffect } from 'react'
import { Park } from '../../../interfaces/garden_interfise'
import { TytleContainer } from '../../../../global/styles/Divs'
import { CustomTitle } from '../../../../global/styles/CustomTitle'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { fetchUsers } from '../../../../../store/userSlice';

interface HederProps {
  park_name: string;
}

function Heder_gardenInfoPage( park_name : HederProps)  {

  
    return (
    <div>
      
      <TytleContainer>
        <CustomTitle size="h1" color="#0C2706" 
        style={{ fontWeight: 'bold' }}
        >
          {park_name.park_name}
        </CustomTitle>
      </TytleContainer>
    </div>
  )
}

export default Heder_gardenInfoPage