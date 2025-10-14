"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, ArrowUpRight, ArrowDownLeft, FileText, Settings, LogOut } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-900">Banco GCM</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Saldo */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg text-gray-600">Saldo Disponível</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-blue-900">R$ 0,00</p>
          </CardContent>
        </Card>

        {/* Ações Rápidas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="flex flex-col items-center justify-center p-6 space-y-2">
              <ArrowUpRight className="h-8 w-8 text-blue-600" />
              <span className="text-sm font-medium">Transferir</span>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="flex flex-col items-center justify-center p-6 space-y-2">
              <ArrowDownLeft className="h-8 w-8 text-green-600" />
              <span className="text-sm font-medium">Depositar</span>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="flex flex-col items-center justify-center p-6 space-y-2">
              <FileText className="h-8 w-8 text-purple-600" />
              <span className="text-sm font-medium">Extrato</span>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="flex flex-col items-center justify-center p-6 space-y-2">
              <CreditCard className="h-8 w-8 text-orange-600" />
              <span className="text-sm font-medium">Cartões</span>
            </CardContent>
          </Card>
        </div>

        {/* Transações Recentes */}
        <Card>
          <CardHeader>
            <CardTitle>Transações Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 text-center py-8">Nenhuma transação recente</p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
