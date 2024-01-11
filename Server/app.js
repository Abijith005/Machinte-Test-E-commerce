import express from 'express'
import morgan from 'morgan'

const app=express()

app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


const port=process.env.PORT || 5000

app.listen(port,()=>{
console.log('App connected to port');
})
