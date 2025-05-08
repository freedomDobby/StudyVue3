import { DataSource } from 'typeorm'
import { User } from '../entities/user.entity'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { LoginUser } from '../repositories/user.repository'

const port = process.env.MAIN_VITE_DB_PORT
const database = process.env.MAIN_VITE_DB_DATABASE
const password = process.env.MAIN_VITE_DB_PASSWORD

// console.log("port )))", port)
// console.log("database )))", database)
// console.log("password )))", password)

class DataSourceManager {
  AppDataSource: DataSource

  constructor() {
    this.AppDataSource = new DataSource({
      type: 'postgres',
      host: 'localhost',
      port: Number(port),
      username: 'postgres',
      password: password,
      database: database,
      entities: [User],
      synchronize: true,
      namingStrategy: new SnakeNamingStrategy()
    })
  }

  async initializeDataSource() {
    try {
      await this.AppDataSource.initialize()
      console.log('✅ Data Source has been initialized!')
    } catch (err) {
      console.error('❌ Error during Data Source initialization', err)
    }
  }
}

export const dataSourceManager = new DataSourceManager()
const userRepo = dataSourceManager.AppDataSource.getRepository(User)
export const user = new LoginUser(userRepo)