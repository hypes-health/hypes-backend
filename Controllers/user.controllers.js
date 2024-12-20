import fs from "fs";
import axios from "axios";
import Report from "../Models/report.model.js";
import FormData from "form-data";

export const getReports =async (req , res) =>{
    try {
        //get omoongo code 
        //get all reports 
        //show first 7 tests
        //return to users



        //make a function for sorting categories 
    } catch (error) {
        
    }
}

export const ReportHandler  = async(req,res)=>{
    try {
        
        const filePath = req.file.path;
        const fileStream =await fs.createReadStream(filePath)
        let reportData = new FormData();
        reportData.append('file', fileStream);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:5000/pdf',
            headers: { 
              ...reportData.getHeaders()
            },
            data : reportData
          };
          
            const response = await axios.request(config)
            const report = response.data;
           

            const newReport = new Report(report)
            newReport.name = req.name
            newReport.reportedOn = req.date
            
            console.log(newReport)

            await newReport.save()
            fs.unlinkSync(filePath)
            res.status(200).send(response.data)


    } catch (error) {
        console.log(error)
        res.status(500).send({error : "Error at Report Handler"})
    }
}