import express, {Express} from "express"
import spendRoutes from "../routes/spends"
import { connectDB } from "../database/config"

export class Server {
    app: Express
    constructor(){
        this.app = express()
        this.connectToDB();
        this.middlewares();
        this.routes();
    }
    async connectToDB():Promise<void>{
        await connectDB()
    }

    middlewares(): void {
        this.app.use(express.json())
    }

    routes(): void{
        this.app.use("/spends", spendRoutes)
    }

    listen(): void{
        this.app.listen(8080, () => {
            console.log("Servidor corriendo en puerto 8080")
        })
    }
}