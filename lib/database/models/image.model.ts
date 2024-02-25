import { Document, Schema, model, models } from "mongoose";

//for Typescript (Interface)

export interface IImage extends Document{
    title : string;
    transformationType: string;
    publicId: string;
    secureUrl: string;

    width?: number;
    height?: number;
    config?: object;
    transformationUrl?:string;
    aspectRatio?:string;
    color?:string;
    prompt?:string;
    author: {
        _id: string;
        firstName: string;
        lastName: string;
    } //as object

    createdAt?:Date;
    updatedAt?:Date;
}

//Schema 

const ImageSchema = new Schema({
    //defination for schema
    title: {type : String, required: true},
    transformationTypes: {type: String, required: true},
    publicId :  {type: String, required : true},
    secureUrl: {type: URL, required: true},

    //properties of images
    width: {type: Number},
    height: {type: Number},
    config: {type: Object},
    transformationUrl: {type: URL},
    aspectRatio: {type: String},
    color: {type: String},
    prompt: {type: String},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

//Turning schema into model

const Image = models?.Image || model('Image', ImageSchema);

export default Image;
