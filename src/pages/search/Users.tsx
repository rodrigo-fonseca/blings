import { UserI } from "interfaces/user";
import styled from "styled-components";
import User from "pages/search/User";

const Wrapper = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

interface PropsI {
  users: UserI[];
}

const Users = ({ users }: PropsI) => {
  return (
    <Wrapper>
      <ul>
        {users.map((user, i: number) => {
          return (
            <li key={i}>
              <User user={user} />
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Users;
