import { SecurityModule } from "./security"

export class AuthModule {
  static async authenticate(email: string, password: string): Promise<boolean> {
    console.log("Dados da autenticação enviados!")

    const encryptedData = SecurityModule.encryptData({ email, password })

    await new Promise((resolve) => setTimeout(resolve, 500))

    return true
  }
}
