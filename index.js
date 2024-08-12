import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

const catfactsAPI = "https://cat-fact.herokuapp.com/facts"
const catphotoAPI = "https://api.thecatapi.com/v1/images/search"

app.use(express.static("public"));


app.get("/", async (req, res) => {

    try {
        const response = await axios.get(catphotoAPI);
        const result = response.data;                
        res.render("index.ejs", {
            catPhoto: result[0].url
        });
    } catch (error){
        console.error("Failed to make request:", error.message);
        res.status(500);
    };
    
});

app.get("/facts", async (req, res)=>{    

    try{
        const [responseFacts, responsePhotos] = await Promise.all([
            axios.get(catfactsAPI),
            axios.get(catphotoAPI),
        ])
        
        const resultFacts = responseFacts.data
        const catFacts = resultFacts.map(fact => fact.text);         
        
        const resultPhotos = responsePhotos.data;
                    
        res.render("index.ejs", {
            facts: catFacts[Math.floor(Math.random()*catFacts.length)],
            catPhoto: resultPhotos[0].url, 
        }); 

    } catch (error) {
    console.error("Failed to make request:", error.message);
    res.status(500);
    };

});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });