// Módulo de Segurança
export class SecurityModule {
  static encryptData(data: { email: string; password: string }): string {
    console.log("Dados Encriptografados!")

    // Simula criptografia convertendo para base64
    const jsonData = JSON.stringify(data)
    const base64 = btoa(jsonData)
    const randomChars = Math.random().toString(36).substring(2, 15)
    return `ENC_${randomChars}_${base64}_${Date.now()}`
  }
}
