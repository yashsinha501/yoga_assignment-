import React,{useState,useEffect} from 'react';
import axios from 'axios'


function MembersList() {

  const [batchChange,setBatchChange] = useState('')
  const[lists,setLists] = useState([])
  const [editData, setEditData] = useState({
    _id: '',
    name: '',
    age: '',
    startDate: '',
    batch: '',
  });

  const fetchList = async()=>{
    const list = await axios.get('http://localhost:5000/api/registrations');
    setLists(list.data);
  }

  const deleteList = async (recordId)=>{
    try {
      const deleted = await axios.delete(`http://localhost:5000/api/delete/${recordId}`);
      // After successful deletion, fetch the updated list
      fetchList();
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };
  let globalBatch=editData.batch;
  let globaldate=editData.startDate;
  const handleUpdateClick = (list) => {
    globalBatch=list.batch
    globaldate=list.startDate
    setEditData({
      _id: list._id,
      name: list.name,
      age: list.age,
      startDate: list.startDate,
      batch: list.batch,
    });
  };

  const handleEditBatch = async () => {
    try {
      const { _id, batch } = editData;
      console.log(_id,batch);
      const globalMonth = new Date(globaldate).getMonth();
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth(); 
      console.log(currentMonth,globalMonth);
      console.log(globalBatch,globaldate);
      await axios.put(`http://localhost:5000/api/register/${_id}`, { batch });

      if (batch === globalBatch ) {
        setBatchChange('');
        fetchList(); // Fetch the updated list after batch update
        setEditData({
          _id: '',
          name: '',
          age: '',
          startDate: '',
          batch: '',
        })
      } else if(currentMonth===globalBatch){
          alert('try')
          setBatchChange('Cannot change batch within the same month');
      }
    } catch (error) {
      console.error('Error updating batch:', error);
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(()=>{
    fetchList()
  },[])

  return (
    <>
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
                  <td>
                    <button onClick={()=>{deleteList(list._id)}} className='btn bg-success text-white p-3 rounded' >Delete</button>
                    <button onClick={() => handleUpdateClick(list)} className='btn bg-danger text-white p-3 rounded' >Update</button>
                  </td>
                </tr>
                 ))}
              </tbody>  
            </table>
          </div>
      <div>
        <form>
          <label>Name:</label>
          <input type="text" name="name" value={editData.name} onChange={handleEditChange} />
          <label>Age:</label>
          <input type="text" name="age" value={editData.age} onChange={handleEditChange} />
          <label>Start Date:</label>
          <input type="text" name="startDate" value={editData.startDate} onChange={handleEditChange} />
          <label>Batch:</label>
          <input type="text" name="batch" value={editData.batch} onChange={handleEditChange} />
          <button type="button" onClick={handleEditBatch}>Save Changes</button>
        </form>
      </div>
      <div>
        {batchChange !== '' && (
            <h2 className={`text-${batchChange.includes('Cannot change batch within the same month') ? 'warning' : 'success'} pb-3`}>
              {batchChange}
            </h2>
          )}
      </div>
        {/* {batchChange && (
          <h2 className='text-warning pb-3}'>
            {batchChange}
          </h2>
        )} */}
    </>
  );
}

export default MembersList;
