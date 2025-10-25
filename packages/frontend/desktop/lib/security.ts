export class SecurityModule {
  static encryptData(
    data: { email: string; password: string },
    bank?: "Caixa Econômica" | "Banco do Brasil"
  ): string {
    if (bank === "Caixa Econômica") {
      console.log("Encriptografia da Caixa!")
    } else if (bank === "Banco do Brasil") {
      console.log("Encriptografia do Banco do Brasil!")
    }
    
    const jsonData = JSON.stringify(data)
    const base64 = typeof window !== "undefined" ? btoa(jsonData) : Buffer.from(jsonData).toString("base64")
    const randomChars = Math.random().toString(36).substring(2, 15)
    return `ENC_${randomChars}_${base64}_${Date.now()}`
  }
}