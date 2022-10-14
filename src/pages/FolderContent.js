import { useState,useEffect } from "react";
import axios from "axios";
import {
    useParams
} from 'react-router-dom';



function FolderContent() {
    const [existingFilesNames,setExistingFileNames]=useState({"filename":[

    ]})
    const folderId = useParams()
    const foldername = folderId.id
    useEffect(()=>{
        console.log("hemlo")
        getFolders();
        // axios.get('http://localhost:8000/getfolders')
        // .then(function (response) {
        //     console.log(response);
        //     console.log(response.data.data)
          
        
        //         setExistingFileNames({folders:response.data.data})
        //         setTimeout(() => {
        //             console.log(existingFilesNames)
        //         },3000);
        //         console.log(existingFilesNames)
          
          
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    },[])
    useEffect(()=>{
        console.log("changed",existingFilesNames)
    },[existingFilesNames])
   
    const [filename, setFolderName] = useState('')
  
    const [showForm, setShowForm] = useState(false)
    const showAddForm = () => setShowForm(true)
    const addFolderToServer = (e) =>{
        e.preventDefault()
        const folderObj={filename,"username":localStorage.getItem("username"),"uniqueid":foldername}
        console.log("hello",folderObj)
        axios.post('http://localhost:8000/addfileforuser', folderObj)
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
            var ereer= response.data.data[0].folders
            var reee =ereer.filter(function (e){return e.uniqueid==foldername})
            console.log(ereer,reee)
            if(response.data.data[0].folders.length>0){
          
        
                setExistingFileNames({"filename":reee[0].filename})
                setTimeout(() => {
                    console.log(existingFilesNames)
                },3000);
                console.log(existingFilesNames)
            }
          
          
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    //console.log(existingFilesNames.folders.length)
    function Addfolderform() {
        return (<form onSubmit={addFolderToServer}>
            <label>
                File name
            </label>
            <input
                type="text"
                value={filename}
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
            >add file</button>

            {showForm ? Addfolderform() : null}
           
         
           
           <ul>
           {existingFilesNames.filename.map((element)=>{
               return(
            <li key={element._id}><a href={`/file/view/`+element.uniqueid}>   {element.filename} </a></li>)
           })}
           {
               existingFilesNames.filename.forEach((elem)=>{
                   <li>{elem}</li>
               })
           }
       </ul>    
        
        
        

        </div>
     
       
    );

}

export default FolderContent;
