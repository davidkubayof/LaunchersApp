import express from 'express'
import { config } from 'dotenv'
import  cors  from 'cors'

import roterLaunchers from './roter/roterLaunchers.js'

config()

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', roterLaunchers)

app.listen(process.env.PORT, () => {
    console.log(`server run on http://localhost:${process.env.PORT}`);
})
