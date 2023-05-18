import styled from "styled-components";
export const UserIconWithName = (props) => {
  const { image, name, height, width } = props; //userで受け取ってもよいが、必要な情報だけ受け取った方が良い
  return (
    <SContainer>
      <SImg height={height} width={width} src={image} alt="Profile" />
      <SName>{name}</SName>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
