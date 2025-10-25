import { SecurityModule } from "./security"

type BankOption = "Caixa Econômica" | "Banco do Brasil"

export class AuthModule {
  static async authenticate(email: string, password: string, bank?: BankOption): Promise<boolean> {
    console.log("Dados da autenticação enviados!")
    const encryptedData = SecurityModule.encryptData({ email, password }, bank)
    await new Promise((resolve) => setTimeout(resolve, 500))
    return true
  }
}
