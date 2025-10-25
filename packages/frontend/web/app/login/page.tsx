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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Banco GCM</CardTitle>
          <CardDescription className="text-center">
            Entre com suas credenciais para acessar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isEncrypting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isEncrypting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bank">Banco</Label>
              <select
                id="bank"
                className="w-full border rounded-md p-2"
                value={bank}
                onChange={(e) => setBank(e.target.value as BankOption)}
                disabled={isEncrypting}
              >
                <option value="Caixa Econômica">Caixa Econômica</option>
                <option value="Banco do Brasil">Banco do Brasil</option>
              </select>
            </div>

            {isEncrypting && (
              <div className="flex items-center justify-center gap-2 text-sm text-blue-600 bg-blue-50 p-3 rounded-md">
                <Lock className="h-4 w-4 animate-pulse" />
                <span>Criptografando dados...</span>
              </div>
            )}

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isEncrypting}>
              {isEncrypting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
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
  )
}
