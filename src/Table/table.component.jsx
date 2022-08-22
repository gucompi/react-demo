import React,{useState} from 'react';

const Table = ({users}) => {
    return (
        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {users && users.map((user,index)=>{
            return (
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{user.First}</td>
                    <td>{user.Last}</td>
                    <td>{user.Handler}</td>
                </tr>
            )
          })}
        </tbody>
      </table>
    )
}

export default Table