import React from "react";

const Users = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    if (!data) {
      fetch("https://reqres.in/api/users")
        .then((res) => res.json())
        .then(setData);
    }
  }, [data]);

  if (!data) return "loading...";
  return data.data.map((u) => <p>{u.first_name}</p>);
};

export default Users;
