"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowUpRight, CheckCircle2, Settings, LogOut } from "lucide-react"

export default function TransferPage() {
  const router = useRouter()
  const [step, setStep] = useState<"form" | "processing" | "success">("form")
  const [amount, setAmount] = useState("")
  const [recipient, setRecipient] = useState("")
  const [message, setMessage] = useState("")

  const handleTransfer = () => {
    if (!amount || !recipient) {
      setMessage("Preencha todos os campos antes de continuar.")
      return
    }

    setMessage("")
    setStep("processing")
    setTimeout(() => setStep("success"), 2500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-blue-900">Transferência</h1>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => router.push("/login")}>
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-8">
        {step === "form" && (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-gray-800">Nova Transferência</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="recipient">Destinatário</Label>
                <Input
                  id="recipient"
                  placeholder="Nome ou conta"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="amount">Valor</Label>
                <Input
                  id="amount"
                  placeholder="Ex: 150.00"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="mt-1"
                />
              </div>

              {message && <p className="text-sm text-red-500">{message}</p>}

              <Button
                className="w-full bg-blue-700 hover:bg-blue-800 text-white"
                onClick={handleTransfer}
              >
                Confirmar Transferência
              </Button>
            </CardContent>
          </Card>
        )}

        {step === "processing" && (
          <Card className="shadow-lg text-center py-12">
            <CardContent>
              <div className="animate-pulse">
                <ArrowUpRight className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-700 text-lg font-medium">Processando transferência...</p>
              </div>
            </CardContent>
          </Card>
        )}

        {step === "success" && (
          <Card className="shadow-lg text-center py-12">
            <CardContent>
              <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">Transferência Concluída!</h3>
              <p className="text-gray-600 mb-6">
                Você enviou <strong>R$ {amount || "0,00"}</strong> para{" "}
                <strong>{recipient || "destinatário"}</strong>.
              </p>
              <Button
                className="bg-blue-700 hover:bg-blue-800 text-white"
                onClick={() => router.push("/home")}
              >
                Voltar ao Início
              </Button>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
