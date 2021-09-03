import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  padding: 16px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  width: 500px;
  box-shadow: 4px 4px 8px 0 rgba(25, 26, 27, 0.2);
  border-radius: 20px;
`;

export const DescContainer = styled.div`
  background-color: white;
  padding: 36px;
  align-items: center;
`;

export const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  width: 200px;
  margin-right: auto;
  margin-left: auto;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const Tag = styled.p`
  font-size: 20px;
  color: grey;
`;

export const Location = styled.p`
  font-size: 20px;
  color: grey;
`;

export const StatsList = styled.ul`
  padding: 0px;
  display: flex;

  align-items: center;
  justify-content: center;

  background-color: #a2bdca;
  list-style: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 33.33333%;
  padding: 10px;
  outline: 1px solid grey;
  background-color: #a2bdca;
`;

export const StatLabel = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 500;
  color: gray;
`;

export const StatQuantity = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 700;
`;
