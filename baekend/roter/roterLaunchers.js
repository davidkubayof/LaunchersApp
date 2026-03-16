import { Router } from "express"
import { createLauncher, deleteLauncher, getLauncher, getLaunchers, updateLauncher } from "../ctrls/ctrlsLaunchers.js";

const roter = Router()

roter.get('/launchers', getLaunchers)
roter.get('/launchers/:id', getLauncher)
roter.post('/launchers', createLauncher)
roter.put('/launchers/:id', updateLauncher)
roter.delete('/launchers/:id', deleteLauncher)

export default roter;