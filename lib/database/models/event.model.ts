import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
    _id: string;
    name: string;
    email: string;
    category?:{_id:string,name:string}
    description: string;
    
  }

const ContactSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    category:{type:Schema.Types.ObjectId,ref:'Category'},
    description: { type: String,required: true },
    
  })
  
  const Contact = models.Event || model('ContactUs', ContactSchema);
  
  export default Contact;