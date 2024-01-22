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
//   const dispatch = useAppDispatch();

//   async function getUsers(){
//     await dispatch(fetchUsers())
//   }

// useEffect(() => {
//    getUsers();
// }, []);

//   const { users, status, error } = useAppSelector((state) => state.users);



//   if (status === "loading") return <h2>loading </h2>;
//   if (status === "failed") return <h2>error: {error}</h2>;

//   // כאן הוסף הדפסה נוספת כדי לבדוק האם משהו חוזר מהשרת
//   console.log("Data received from the server:", users);
  
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