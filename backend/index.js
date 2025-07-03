import mongoose from "mongoose";
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import Inventory from "./models/inventory.js"

dotenv.config()
const app = express()

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(express.json())


app.post("/add-to-store", async (req, res) => {
    try {
        const newInventory = new Inventory(req.body)
        const savedInventory = await newInventory.save()

        res.status(200).json({ message: "Item saved successfully.", data: savedInventory })
    } catch (err) {
        console.error("Failed to add items: ", err)
        res.status(500).json({
            message: "Failed to add item",
            error: err.message
        })
    }
})

app.get("/storage-items", async (req, res) => {
    try {
        const allItems = await Inventory.find()
        if (allItems) {
            res.status(200).json({ message: "Retrieve all items.", data: allItems })
        }
    } catch (err) {
        console.error("Failed to fetch items.", err)
    }

})

app.get("/inventory-items", async (req, res) => {
    try {
        const inventoryItems = await Inventory.find({ entryType: "addToStorage" })

        if (inventoryItems) {
            res.status(200).json({ message: "Retrieve all inventory Items.", data: inventoryItems })
        }

    } catch (err) {
        console.error("Failed to fetched inventory items.", err)
    }
})


app.get("/dispatched-from-store", async (req, res) => {
    try {
        const dispatchedItems = await Inventory.find({ entryType: "removeFromStorage" })

        if (dispatchedItems) {
            res.status(200).json({ message: "Retrieve all dispatched Items.", data: dispatchedItems })
        }

    } catch (err) {
        console.error("Failed to fetched dispatched items.", err)
    }
})

app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello from server!" })
})

const PORT = process.env.PORT
const mongo_Uri = process.env.MONGO_DB

mongoose.connect(mongo_Uri)
    .then(() => {
        console.log("MongoDB connected.")
        app.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`)
        })
    })
    .catch((err) => console.error("MongoDB connection error: ", err))
