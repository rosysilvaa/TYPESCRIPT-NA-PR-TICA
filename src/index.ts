import express, { Request, Response} from 'express'
import cors from 'cors'

const app = express()
app.use(cors())



enum States {
    MG = "Minas Gerais",
    SP = "São Paulo"
}

interface IAddress {
    street: string;
    number: number;
    state: string ;
}

interface IProducts {
    id:number;
    name: string;
    price:number;
    description: string;
    address: object;
}

let products = IProducts[] = []

app.get('/produtos', (req: Request,  res: Response) => {

    const newProduct = {
        id: Math.random(),
        name:"Batedeira",
        price:300,
        description: "Batedeira, muito boa , boa mesmo",
              address: {
              street: "Rua dos Bobos",
              number: 0,
              state: States.MG
    }
  }
    products.push (newProduct)

    return res.json(products)
})

app.listen(3000, () => {
    console.log('Servidor rodando')
})