import  express from "express"
export class Uploader{
    processUpload(metaDataHeader:string|string[]|undefined, body:Buffer){
        if(metaDataHeader===undefined)return 500
        metaDataHeader=(typeof metaDataHeader==="string")?metaDataHeader:metaDataHeader[0]
        let metadata= Buffer.from( metaDataHeader,"base64")
        let parsed=JSON.parse(metadata.toString("ascii"))
        console.log(parsed)
        return 200;
    }
}
if(require.main===module){
    const app=express()
app.use(express.json())
app.post("/upload",(req,res)=>{
   
    res.send("ok")
});
app.listen(3000,()=>{
    console.log("server started")
})
}
