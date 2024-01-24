import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TytleContainer } from '../../styles/Divs';
import ButtonStyled from '../../styles/ButtonStyled';
import { CustomTitle } from '../../styles/CustomTitle';
const treeImageURL = 'https://www.thespruce.com/thmb/ClRANI4jTWhkGeNhvJtArRhlGSA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-difference-between-trees-and-shrubs-3269804-hero-a4000090f0714f59a8ec6201ad250d90.jpg';

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #4CD164;
`;

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #C3E6C1; /* Light green background color */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const InputField = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

function Home() {
  const { register, handleSubmit } = useForm();
  const nav = useNavigate();

  const onSubmit = (data : any ) => {
    console.log(data);
    
    // Perform validation, send data to server, etc.
    // For simplicity, let's assume validation is successful.

    // Navigate to 'AllGardens' page after successful login
    nav('/AllGardens');
  };

  return (
    <CenteredDiv>
      <StyledImage src={treeImageURL} alt="GrowTracker Logo" />
      <TytleContainer>
        <CustomTitle data-testid="cy-tytle">
          Welcome to the GrowTracker app
        </CustomTitle>
      </TytleContainer>

      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <InputField
          type="email"
          placeholder="Email"
          {...register('email', { required: true })}
        />
        <InputField
          type="password"
          placeholder="Password"
          {...register('password', { required: true })}
        />
        <ButtonStyled data-testid="cy-Button" type="submit">
        Click me to continue... :)

        </ButtonStyled>
      </LoginForm>
    </CenteredDiv>
  );
}

export default Home;
