import { useState,useEffect } from "react";
import axios from "axios";


function Folder() {
    const [existingFolderNames,setExistingFolderNames]=useState({folders:[

    ]})
    useEffect(()=>{
        console.log("hemlo")
        getFolders();
        // axios.get('http://localhost:8000/getfolders')
        // .then(function (response) {
        //     console.log(response);
        //     console.log(response.data.data)
          
        
        //         setExistingFolderNames({folders:response.data.data})
        //         setTimeout(() => {
        //             console.log(existingFolderNames)
        //         },3000);
        //         console.log(existingFolderNames)
          
          
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    },[])
    useEffect(()=>{
        console.log("changed",existingFolderNames)
    },[existingFolderNames])
   
    const [folderName, setFolderName] = useState('')
  
    const [showForm, setShowForm] = useState(false)
    const showAddForm = () => setShowForm(true)
    const addFolderToServer = (e) =>{
        e.preventDefault()
        const folderObj={folderName,"username":localStorage.getItem("username"),"uniqueid":localStorage.getItem("uniqueid")}
        console.log("hello",folderObj)
        axios.post('http://localhost:8000/addfolderforuser', folderObj)
            .then(function (response) {
                console.log(response);
                getFolders();
            })
            .catch(function (error) {
                console.log(error);
            });
            
    }

    const getFolders = ()=>{
        console.log("getfolders")
        const folderObj={"username":localStorage.getItem("username"),"uniqueid":localStorage.getItem("uniqueid")}
        axios.post('http://localhost:8000/getfoldersforuser',folderObj)
        .then(function (response) {
            console.log(response);
            console.log(response.data.data[0].folders)
            if(response.data.data[0].folders.length>0){
          
        
                setExistingFolderNames({folders:response.data.data[0].folders})
                setTimeout(() => {
                    console.log(existingFolderNames)
                },3000);
                console.log(existingFolderNames)
            }
          
          
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    //console.log(existingFolderNames.folders.length)
    function Addfolderform() {
        return (<form onSubmit={addFolderToServer}>
            <label>
                folder name
            </label>
            <input
                type="text"
                value={folderName}
                onChange={(evt) => { setFolderName(evt.target.value) }}
            >
            </input>
            <button
            type="submit">add</button>
        </form>

        )
    }

    return (
        <div>
            <button
                onClick={showAddForm}
            >add folder</button>

            {showForm ? Addfolderform() : null}
           
         
           
           <ul>
           {existingFolderNames.folders.map((element)=>{
               return(
            <li key={element._id}><a href={`/folder/view/`+element.uniqueid}>   {element.foldername} </a></li>)
           })}
           {
               existingFolderNames.folders.forEach((elem)=>{
                   <li>{elem}</li>
               })
           }
       </ul>    
        
        
        

        </div>
     
       
    );

}

export default Folder;
