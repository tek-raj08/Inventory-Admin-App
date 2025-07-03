import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },
    entryType: {
        type: String,
        required: true
    }
},

    {
        timestamps: true
    }
)

const Inventory = mongoose.model("Inventory", inventorySchema)
export default Inventory;