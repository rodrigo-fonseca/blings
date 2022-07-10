import { useState, useCallback, ChangeEvent } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { users as dataUsers } from "data/users";
import Users from "pages/search/Users";
import debounce from "lodash.debounce";
import { UserI } from "interfaces/user";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 50px;

  .separator {
    border: 1px solid #e8e8e8;
    height: 1px;
    width: 100%;
    margin-top: 30px;
  }
`;

interface ParsedInputSearch {
  name?: string;
  age?: string;
  phone?: string;
}

const SearchUsers = () => {
  const [users, setUsers] = useState<UserI[]>(dataUsers);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandler = useCallback(debounce(search, 500), []);

  function search(e: ChangeEvent<HTMLInputElement>) {
    if (!e) return;

    const parsed = parse(e.target.value);
    const users = dataUsers.filter((user) => {
      const { name, age, phone } = parsed;

      if (name && !contains(user.nameLowerCase, name)) return false;
      if (
        age &&
        !containsNumber(user.age, age) &&
        phone &&
        !containsNumber(user.phone, phone)
      )
        return false;

      return true;
    });

    setUsers(users);
  }

  function containsNumber(data: string, input: string): boolean {
    const substring = data.substring(0, input.length);
    return contains(substring, input);
  }

  function contains(data: string, input: string): boolean {
    return Boolean(data.match(input));
  }

  function parse(user: string): ParsedInputSearch {
    const s = user.split(" ");

    return s.reduce((acc: ParsedInputSearch, data) => {
      if (!data) return acc;

      if (!isNumber(data)) {
        if (acc["name"]) acc["name"] += ` ${removeNoise(data)}`;
        else acc["name"] = removeNoise(data);
      } else {
        acc["age"] = data;
        acc["phone"] = data;
      }

      return acc;
    }, {});
  }

  function isNumber(data: string): boolean {
    return /^\d+$/.test(data);
  }

  function removeNoise(data: string): string {
    return data
      .replace(/[^\w\s\']|_/g, "")
      .replace(/\s+/g, " ")
      .toLowerCase();
  }

  return (
    <Wrapper>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Ex: John 33"
            onChange={debounceHandler}
          />
        </Form.Group>
      </Form>

      <div className="separator"></div>

      <Users users={users} />
    </Wrapper>
  );
};

export default SearchUsers;
