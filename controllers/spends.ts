import {Request, Response} from "express"

import Spend, {ISpend} from "../models/spends"

export const createSpend = async (req:Request, res: Response) => {
    const spendData:ISpend = req.body

    const spend = new Spend(spendData)

    await spend.save()

    res.json({
        message:"POST Ok",
        spend
    })
}

export const getSpend = async ({}, res:Response) => {
    const condition = {state: true}

    const spend: ISpend[] = await Spend.find(condition)

    res.json({
        message:"GET Ok",
        spend
    })
}

export const getSpendByName = async (req:Request, res:Response) => {
    const { nombre_gasto } = req.params

    const spend: ISpend | null = await Spend.findOne({nombre_gasto:nombre_gasto})

    res.json({
        spend
    })
}