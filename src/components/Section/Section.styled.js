import styled from 'styled-components';

const Title = styled.h2`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;
const P = styled.p`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  padding-top: 0px;
  padding-bottom: 0px;
  margin-top: ${p => p.theme.space[0]}px;
`;

const Warning = styled.p`
  color: ${p => p.theme.colors.tomato};
  font-size: ${p => p.theme.fontSizes.l};
  font-family: ${p => p.theme.fonts.body};
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
`;

const Button = styled.button`
  padding: 10px 15px;
  margin-right: 10px;
  font-size: 24px;
  background-color: transparent;
  border: 1px black solid;
  border-radius: 10px;
  cursor: pointer;
  transition: color 250ms linear;
  transition: background-color 250ms linear;
  &:hover {
    color: white;
  }
  &.good:hover {
    background-color: green;
    border-color: green;
  }
  &.bad:hover {
    background-color: tomato;
    border-color: tomato;
  }
  &.neutral:hover {
    background-color: #ffd800;
    border-color: #ffd800;
  }
`;
export { Title, P, Warning, Button };