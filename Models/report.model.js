import mongoose from "mongoose";



const ReportSchema = new mongoose.Schema({
    name:{
        type : String, 
    },
    age : {
        type : Number ,
    } , 

    sex :{
        type : String , 
    },
    reportedOn : {
        type : String, 
        default : (new Date()).getTime()
    },
    tests : [
        {
            name : {
                type : String , 
            } , 
            parameters : [
                {
                    name :{         
                        type : String, 
                        
                    } , 
                    unit : {
                        type : String, 
                    },
                    upperLimit : {
                        type : Number , 
                    },
                    lowerLimit :{
                        type : Number , 
                    },
                    result : {
                        type : Number , 
                    },
                    remarks : {
                        type: String,
                        
                    }
        
                }
            ]
        }
    ]

} , {timestamps : true})

const Report = mongoose.model("Report" , ReportSchema)

export default Report;