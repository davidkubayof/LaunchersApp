import express from 'express'
import { config } from 'dotenv'
import { cors } from 'cors'

config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT, () => {
    console.log(`server run on http://localhost:${process.env.PORT}`);
})