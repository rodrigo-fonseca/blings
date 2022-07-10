import { RawUserI, UserI } from "interfaces/user";

function map(users: RawUserI[]): UserI[] {
  return users.map((user) => {
    return {
      id: user._id,
      picture: user.picture,
      birthday: user.birthday,
      name: user.name,
      address: user.address,
      rawPhone: user.phone_number,
      nameLowerCase: _lowerCase(user.name),
      phone: _parsePhone(user.phone_number),
      age: _getAge(new Date(_parseAge(user.birthday))),
    };
  });
}

function _getAge(birthday: Date): string {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);

  return String(Math.abs(ageDate.getUTCFullYear() - 1970));
}

function _parseAge(birthday: string): string {
  return birthday.split(" ")[0] || "";
}

function _parsePhone(phone: string): string {
  return phone.replace(/[() ]+/g, "");
}

function _lowerCase(data: string) {
  return data.toLowerCase();
}

const userModel = {
  map,
};

export default userModel;
