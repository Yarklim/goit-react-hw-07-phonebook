import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;

  text-align: center;
`;

export const Title = styled.h1`
  color: #ededed;

  margin-bottom: 20px;
`;

export const ContentList = styled.ul``;

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  margin-bottom: 10px;
`;

export const Img = styled.img`
  border-radius: 10px;
`;

export const Name = styled.p`
  font-size: 24px;
  color: #ededed;

  padding: 0 15px;
`;

export const Phone = styled.p`
  font-size: 24px;
  color: #ededed;

  margin-left: auto;
  padding: 0 15px;
`;

export const Link = styled.a`
  margin-left: 20px;
`;

export const ImgPhone = styled.img`
  width: 32px;
  height: 32px;
`;

export const ButtonClose = styled.button`
margin: 20px auto 0 auto;
  padding: 5px 20px;

  font-size: 18px;
  color: rgb(238, 238, 238);

  cursor: pointer;

  border: none;
  border-radius: 6px;
  background-color: #3a4043;
  box-shadow: 5px 5px 15px #4a4a4a;

  &:active {
    transform: scale(0.95);
    box-shadow: 2px 2px 8px #4a4a4a;
  }
  &:hover,
  &:focus {
    background: #325959;
  }
`;
