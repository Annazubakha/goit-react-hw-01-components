import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  width: 360px;
  border: 2px solid #0ed64a;
  padding: 10px;
  border-radius: 8px;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 26px;
  font-weight: bold;
`;
export const Img = styled.img`
  width: 46px;
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;

  background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return 'green';
      case false:
        return 'red';
    }
  }};
`;
