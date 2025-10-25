"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Lock } from "lucide-react"
import { AuthModule } from "@/lib/auth"

type BankOption = "Caixa Econômica" | "Banco do Brasil"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [bank, setBank] = useState<BankOption>("Caixa Econômica")
  const [isEncrypting, setIsEncrypting] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsEncrypting(true)
    try {
      await AuthModule.authenticate(email, password, bank)
      router.push("/home")
    } finally {
      setIsEncrypting(false)
    }
  }

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-12 flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-4">Banco GCM</h1>
          <p className="text-blue-100 text-lg">Seu banco digital completo, seguro e moderno</p>
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 rounded-lg p-3">
              <Lock className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Segurança Avançada</h3>
              <p className="text-blue-100 text-sm">Criptografia de ponta a ponta para proteger seus dados</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 rounded-lg p-3">
              <Loader2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Rápido e Eficiente</h3>
              <p className="text-blue-100 text-sm">Transações instantâneas 24 horas por dia</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4 lg:p-12">
        <Card className="w-full max-w-md lg:max-w-lg">
          <CardHeader className="space-y-1 lg:space-y-2">
            <CardTitle className="text-2xl lg:text-3xl font-bold text-center">Bem-vindo</CardTitle>
            <CardDescription className="text-center text-base">
              Entre com suas credenciais para acessar sua conta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4 lg:space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isEncrypting}
                  className="h-11 lg:h-12 text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-base">
                  Senha
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isEncrypting}
                  className="h-11 lg:h-12 text-base"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bank" className="text-base">
                  Banco
                </Label>
                <select
                  id="bank"
                  className="w-full border rounded-md p-2 h-11 lg:h-12 text-base"
                  value={bank}
                  onChange={(e) => setBank(e.target.value as BankOption)}
                  disabled={isEncrypting}
                >
                  <option value="Caixa Econômica">Caixa Econômica</option>
                  <option value="Banco do Brasil">Banco do Brasil</option>
                </select>
              </div>
              {isEncrypting && (
                <div className="flex items-center justify-center gap-2 text-sm lg:text-base text-blue-600 bg-blue-50 p-3 lg:p-4 rounded-md">
                  <Lock className="h-4 w-4 lg:h-5 lg:w-5 animate-pulse" />
                  <span>Criptografando dados...</span>
                </div>
              )}
              <Button
                type="submit"
                className="w-full h-11 lg:h-12 text-base bg-blue-600 hover:bg-blue-700"
                disabled={isEncrypting}
              >
                {isEncrypting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 lg:h-5 lg:w-5 animate-spin" />
                    Processando
                  </>
                ) : (
                  "Entrar"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}