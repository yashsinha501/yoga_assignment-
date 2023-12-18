import React,{useState,useEffect} from 'react';
import axios from 'axios'


function MembersList() {

  const[lists,setLists] = useState([])

  const fetchList = async()=>{
    const list = await axios.get('http://localhost:5000/api/registrations');
    setLists(list.data);
  }

  useEffect(()=>{
    fetchList()
  },[])

  return (
    <>
      {/* <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Month</th>
              <th scope="col">Batch</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
          </tbody>  
        </table>
      </div> */}
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Month</th>
                  <th scope="col">Batch</th>
                </tr>
              </thead>
              <tbody>
              {lists.map((list,index) => (
                <tr key={index+1} >
                  <th scope="row">{index+1}</th>
                  <td>{list.name}</td>
                  <td>{list.age}</td>
                  <td>{list.startDate}</td>
                  <td>{list.batch}</td>
                </tr> ))}
              </tbody>  
            </table>
          </div>
    </>
  );
}

export default MembersList;
