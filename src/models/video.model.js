import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema({
    videoFile: {
        type: String, //cloudinary link
        required: true
    },
    thumbnail:{
        type: String, //cloudinary link
        required: true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number, //From cloudinary
        required: true
    },
    views: {
        type: Number,
        default:0 
    },
    isPublished: {
        type: Boolean,
        default: true,
    },
}, 
{
    timestamps:true
})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema)