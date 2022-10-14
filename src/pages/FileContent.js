import { useState,useEffect } from "react";
import "../App.css"
import '../editorfiles/dist/builder.css'
import axios from "axios";
import {
    useParams
} from 'react-router-dom';

 //import '../editorfiles/dist/builder.js'
// import '../editorfiles/dist/RssControl.js'
// import '../editorfiles/dist/RssElement.js'
// import RssWidget from'../editorfiles/dist/RssWidget.js'


import $ from 'jquery';


//var {Editor}= require("../editorfiles/dist/builder.js")

function FileContent() {
    const [existingFilesNames,setExistingFileNames]=useState({"filename":[

    ]})
    const folderId = useParams()
    const foldername = folderId.id
    var script = document.createElement('script');
   
    

    script.src = "https://cdn.blackpot.in/dist/builder.js";

    var element = document.createElement('link');
    element.type = 'text/css';
    element.rel = 'stylesheet';
    element.href = "../editorfiles/dist/builder.css"
    var rssscript = document.createElement('script');
   
    

    rssscript.src = "https://cdn.blackpot.in/dist/plugins/rss/RssWidget.js";
    document.head.appendChild(rssscript);


document.head.appendChild(script);
document.getElementsByTagName('head')[0].appendChild(element);
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
    script.onload= function () {
        //do stuff with the script
        

    var params = new URLSearchParams(window.location.search);
    var strict = (params.get('type') == 'custom' ? false : true);
    var templates = [{"name":"Blank","url":"design.php?id=6037a0a8583a7&type=default","thumbnail":"templates\/default\/6037a0a8583a7\/thumb.png"}, {"name":"Pricing Table","url":"design.php?id=6037a2135b974&type=default","thumbnail":"templates\/default\/6037a2135b974\/thumb.png"}, {"name":"Listing & Tables","url":"design.php?id=6037a2250a3a3&type=default","thumbnail":"templates\/default\/6037a2250a3a3\/thumb.png"}, {"name":"Forms Building","url":"design.php?id=6037a23568208&type=default","thumbnail":"templates\/default\/6037a23568208\/thumb.png"}, {"name":"1-2-1 column layout","url":"design.php?id=6037a2401b055&type=default","thumbnail":"templates\/default\/6037a2401b055\/thumb.png"}, {"name":"1-2 column layout","url":"design.php?id=6037a24ebdbd6&type=default","thumbnail":"templates\/default\/6037a24ebdbd6\/thumb.png"}, {"name":"1-3-1 column layout","url":"design.php?id=6037a25ddce80&type=default","thumbnail":"templates\/default\/6037a25ddce80\/thumb.png"}, {"name":"1-3-2 column layout","url":"design.php?id=6037a26b0a286&type=default","thumbnail":"templates\/default\/6037a26b0a286\/thumb.png"}, {"name":"1-3 column layout","url":"design.php?id=6037a275bf375&type=default","thumbnail":"templates\/default\/6037a275bf375\/thumb.png"}, {"name":"One column layout","url":"design.php?id=6037a28418c95&type=default","thumbnail":"templates\/default\/6037a28418c95\/thumb.png"}, {"name":"2-1-2 column layout","url":"design.php?id=6037a29a35e05&type=default","thumbnail":"templates\/default\/6037a29a35e05\/thumb.png"}, {"name":"2-1 column layout","url":"design.php?id=6037a2aa315d4&type=default","thumbnail":"templates\/default\/6037a2aa315d4\/thumb.png"}, {"name":"Two columns layout","url":"design.php?id=6037a2b67ed27&type=default","thumbnail":"templates\/default\/6037a2b67ed27\/thumb.png"}, {"name":"3-1-3 column layout","url":"design.php?id=6037a2c3d7fa1&type=default","thumbnail":"templates\/default\/6037a2c3d7fa1\/thumb.png"}, {"name":"Three columns layout","url":"design.php?id=6037a2dcb6c56&type=default","thumbnail":"templates\/default\/6037a2dcb6c56\/thumb.png"}];
    var tags = [{type: 'label', tag: 'CONTACT_FIRST_NAME'}, {type: 'label', tag: 'CONTACT_LAST_NAME'}, {type: 'label', tag: 'CONTACT_FULL_NAME'}, {type: 'label', tag: 'CONTACT_EMAIL'}, {type: 'label', tag: 'CONTACT_PHONE'}, {type: 'label', tag: 'CONTACT_ADDRESS'}, {type: 'label', tag: 'ORDER_ID'}, {type: 'label', tag: 'ORDER_DUE'}, {type: 'label', tag: 'ORDER_TAX'}, {type: 'label', tag: 'PRODUCT_NAME'}, {type: 'label', tag: 'PRODUCT_PRICE'}, {type: 'label', tag: 'PRODUCT_QTY'}, {type: 'label', tag: 'PRODUCT_SKU'}, {type: 'label', tag: 'AGENT_NAME'}, {type: 'label', tag: 'AGENT_SIGNATURE'}, {type: 'label', tag: 'AGENT_MOBILE_PHONE'}, {type: 'label', tag: 'AGENT_ADDRESS'}, {type: 'label', tag: 'AGENT_WEBSITE'}, {type: 'label', tag: 'AGENT_DISCLAIMER'}, {type: 'label', tag: 'CURRENT_DATE'}, {type: 'label', tag: 'CURRENT_MONTH'}, {type: 'label', tag: 'CURRENT_YEAR'}, {type: 'button', tag: 'PERFORM_CHECKOUT', 'text': 'Checkout'}, {type: 'button', tag: 'PERFORM_OPTIN', 'text': 'Subscribe'}];
    
    // new builder
   
        
  
    var editor = new window.Editor({
        strict: strict, // default == true
        showInlineToolbar: true, // default == true
        root: 'https://cdn.blackpot.in/dist',
        url: '/',
        urlBack: window.location.origin,
        uploadAssetUrl: 'asset.php',
        uploadAssetMethod: 'POST',
        uploadTemplateUrl: 'upload.php',
        uploadTemplateCallback: function(response) {
            window.location = response.url;
        },
        saveUrl: 'save-to-disk.php', // You can try with other sample server scripts like: save-to-mysql.php or save-to-aws-s3.php
        saveMethod: 'POST',
        // data: {
        //     _token: 'CSRF_TOKEN',
        //     type: '<?php echo $_GET['type'] ?>',
        //     template_id: '<?php echo $_GET['id'] ?>'
        // },
        templates: templates,
        tags: tags,
        changeTemplateCallback: function(url) {
            window.location = url;
        },

        /*
            Disable features: 
            change_template|export|save_close|footer_exit|help
        */
        // disableFeatures: [ 'change_template', 'export', 'save_close', 'footer_exit', 'help' ], 
        // disableWidgets: [ 'HeaderBlockWidget' ],
        // Custom header for: save, changeTemplate, export
        // header: { "Authorize": "KEY-DFDJUELDFDKFJDK" },

        export: {
            url: 'export.php'
        },
        backgrounds: [
            '/assets/image/backgrounds/images1.jpg',
            '/assets/image/backgrounds/images2.jpg',
            '/assets/image/backgrounds/images3.jpg',
            '/assets/image/backgrounds/images4.png',
            '/assets/image/backgrounds/images5.jpg',
            '/assets/image/backgrounds/images6.jpg',
            '/assets/image/backgrounds/images9.jpg',
            '/assets/image/backgrounds/images11.jpg',
            '/assets/image/backgrounds/images12.jpg',
            '/assets/image/backgrounds/images13.jpg',
            '/assets/image/backgrounds/images14.jpg',
            '/assets/image/backgrounds/images15.jpg',
            '/assets/image/backgrounds/images16.jpg',
            '/assets/image/backgrounds/images17.png'
        ]
    });

    switch(window.location.protocol) {
        case 'http:':
        case 'https:':
          //remote file over http or https
          break;
        case 'file:':
          alert('Please put the builderjs/ folder into your document root and open it through a web URL');
          window.location.href = "./index.php";
          break;
        default:
          //some other protocol
    }
    
    // @RSS plugin
    // rssscript.onload= function(){
    //     var rssWidget = new window.RssWidget({ handler: 'rss.php' });
    //     editor.addWidget(rssWidget, { index: 10 });
    
    //     document.addEventListener("DOMContentLoaded", function(event) { 
    //         //do work
    //       });
    // }

    editor.init()
    }
    
   
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
        
        <div className="overflow-hidden">
            
           <div style={{textAlign: "center","height": "100vh",verticalAlign: "middle",padding: "auto",display: "flex"}}>
            <div style={{"margin":"auto"}} className="lds-dual-ring"></div>
        </div>
        </div>
     
       
    );

}

export default FileContent;
