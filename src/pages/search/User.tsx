/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components";
import { UserI } from "interfaces/user";

const Item = styled.div`
  display: flex;
  margin: 20px 0;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 10px 10px;
  }

  .info {
    display: flex;
    flex-direction: column;
  }
`;

interface PropsI {
  user: UserI;
}

const User = ({ user }: PropsI) => {
  return (
    <Item>
      <img src={`./assets/images/${user.picture}`} />
      <div className="info">
        <h2>
          {user.name}, {user.age}, {user.rawPhone}
        </h2>
        <address>{user.address}</address>
      </div>
    </Item>
  );
};

export default User;
