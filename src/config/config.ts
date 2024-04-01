import dotenv from 'dotenv'

type Tconfig = {
    [ key:string ]: EnviromentConfig
}

type EnviromentConfig = {
    app: AppConfig
}

type AppConfig = {
    PORT: string | number
}

console.log(process.env)

if( process.env.NODE_ENV === "production" ) {
    dotenv.config({path: ".env.production"})
}else {
    dotenv.config({path: ".env.development"})
}


const ENV = process.env.NODE_ENV ?? "development"


const CONFIG : Tconfig = {
    development: {
        app: {
            PORT: process.env.PORT || 4001
        }
    },
    production: {
        app: {
            PORT: process.env.PORT || 8081
        }
    }
}


export default CONFIG[ENV]