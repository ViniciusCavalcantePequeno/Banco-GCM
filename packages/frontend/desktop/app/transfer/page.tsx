"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  CreditCard,
  ArrowUpRight,
  ArrowDownLeft,
  FileText,
  Settings,
  LogOut,
  User,
  Bell,
  CheckCircle2,
} from "lucide-react"
import { useRouter } from "next/navigation"

export default function TransferPage() {
  const router = useRouter()
  const [step, setStep] = useState<"form" | "processing" | "success">("form")
  const [amount, setAmount] = useState("")
  const [recipient, setRecipient] = useState("")
  const [message, setMessage] = useState("")

  const handleLogout = () => {
    router.push("/login")
  }

  const handleTransfer = () => {
    if (!amount || !recipient) {
      setMessage("Preencha todos os campos antes de continuar.")
      return
    }

    setMessage("")
    setStep("processing")

    // Mock: simula tempo de processamento
    setTimeout(() => {
      setStep("success")
    }, 2500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 lg:flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-white border-r shadow-sm">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-blue-900">Banco GCM</h1>
          <p className="text-sm text-gray-600 mt-1">Conta Digital</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start gap-3 h-12" onClick={() => router.push("/")}>
            <User className="h-5 w-5" />
            <span>Início</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 h-12 bg-blue-50 text-blue-900">
            <ArrowUpRight className="h-5 w-5" />
            <span>Transferir</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 h-12">
            <ArrowDownLeft className="h-5 w-5" />
            <span>Depositar</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 h-12">
            <FileText className="h-5 w-5" />
            <span>Extrato</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 h-12">
            <CreditCard className="h-5 w-5" />
            <span>Cartões</span>
          </Button>
        </nav>

        <div className="p-4 border-t space-y-2">
          <Button variant="ghost" className="w-full justify-start gap-3 h-12">
            <Settings className="h-5 w-5" />
            <span>Configurações</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 h-12 text-red-600" onClick={handleLogout}>
            <LogOut className="h-5 w-5" />
            <span>Sair</span>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header Desktop */}
        <header className="hidden lg:block bg-white shadow-sm border-b">
          <div className="px-8 py-4 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-blue-900">Transferência Bancária</h2>
              <p className="text-sm text-gray-600">Simule uma transferência de forma segura e rápida</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="h-10 w-10 bg-transparent">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="h-10 w-10 bg-transparent">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Main Area */}
        <main className="flex-1 p-4 lg:p-8">
          <div className="max-w-3xl mx-auto">
            {step === "form" && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg lg:text-xl text-gray-800">Nova Transferência</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div>
                    <Label htmlFor="recipient">Destinatário</Label>
                    <Input
                      id="recipient"
                      placeholder="Nome ou número da conta"
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

                  <div>
                    <Label htmlFor="description">Descrição (opcional)</Label>
                    <Input
                      id="description"
                      placeholder="Ex: Pagamento de almoço"
                      className="mt-1"
                    />
                  </div>

                  {message && (
                    <p className="text-sm text-red-500 mt-2">{message}</p>
                  )}

                  <div className="pt-2">
                    <Button
                      className="w-full bg-blue-700 hover:bg-blue-800 text-white"
                      onClick={handleTransfer}
                    >
                      Confirmar Transferência
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {step === "processing" && (
              <Card className="shadow-lg text-center py-12">
                <CardContent>
                  <div className="animate-pulse">
                    <ArrowUpRight className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-700 text-lg font-medium">
                      Processando transferência...
                    </p>
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
                    Você enviou <strong>R$ {amount || "0,00"}</strong> para <strong>{recipient || "destinatário"}</strong>.
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
          </div>
        </main>
      </div>
    </div>
  )
}