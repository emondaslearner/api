import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import stringSimilarity from "string-similarity";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchValue: [],
    };
  }
  delete(id) {
    const datas = this.state.users.filter((data) => {
      return data.id != id;
    });
    localStorage.setItem("users", JSON.stringify(datas));
    const data = JSON.parse(localStorage.getItem("users"));
    this.setState(() => ({
      users: data,
    }));
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("users", JSON.stringify(data));
      });
    const data = JSON.parse(localStorage.getItem("users"));
    this.setState(() => ({
      users: data,
    }));
  }
  render() {
    return (
      <div className="users">
        {this.state.users.map((data) => {
          return (
            <div className="user" key={data.id}>
              <h4 className="text-center">{data.name}</h4>
              <h6>Username: {data.username}</h6>
              <h6>Email: {data.email}</h6>
              <p>Phone: {data.phone}</p>
              <p>Website: {data.website}</p>
              <div onClick={() => this.delete(data.id)} className="delete">
                <FontAwesomeIcon icon={faTrashCan} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users;
