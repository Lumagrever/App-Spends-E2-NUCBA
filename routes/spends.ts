import {Router} from "express"

import { createSpend, getSpend, getSpendByName } from "../controllers/spends"

const router = Router()

router.post("/", createSpend)

router.get("/", getSpend)

router.get ("/:nombre_gasto", getSpendByName)

export default router