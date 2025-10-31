"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, ArrowUpRight, ArrowDownLeft, FileText, Settings, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  const handleLogout = () => {
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-bold text-blue-900">Banco GCM</h1>
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle className="text-base sm:text-lg text-gray-600">Saldo Disponível</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl sm:text-4xl font-bold text-blue-900">R$ 0,00</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Card
            onClick={() => router.push("/transfer")}
            className="cursor-pointer hover:shadow-lg transition-shadow active:scale-95"
          >
            <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 space-y-2">
              <ArrowUpRight className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600" />
              <span className="text-xs sm:text-sm font-medium text-center">Transferir</span>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow active:scale-95">
            <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 space-y-2">
              <ArrowDownLeft className="h-7 w-7 sm:h-8 sm:w-8 text-green-600" />
              <span className="text-xs sm:text-sm font-medium text-center">Depositar</span>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow active:scale-95">
            <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 space-y-2">
              <FileText className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600" />
              <span className="text-xs sm:text-sm font-medium text-center">Extrato</span>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow active:scale-95">
            <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 space-y-2">
              <CreditCard className="h-7 w-7 sm:h-8 sm:w-8 text-orange-600" />
              <span className="text-xs sm:text-sm font-medium text-center">Cartões</span>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">Transações Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base text-gray-500 text-center py-6 sm:py-8">
              Nenhuma transação recente
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}