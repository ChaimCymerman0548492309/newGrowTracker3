import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #f2f2f2; /* רקע כללי של כל הרכיב */
  padding: 30px; /* רווח סוף רכיב */
`;

export const Card = styled.div`
  width: calc(33.33% - 10px);
  margin-bottom: 20px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 16px;
`;

export const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #666;
`;

// export const Button = styled.button`
//   background-color: #25880C;
//   color: #ffffff;
//   padding: 10px 20px;
//   font-size: 16px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #1E6A08;
//   }
// `;
