"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, ArrowUpRight, ArrowDownLeft, FileText, Settings, LogOut, User, Bell } from "lucide-react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  const handleLogout = () => {
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 lg:flex">
      {/* Sidebar (hidden on mobile, visible on desktop) */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-white border-r shadow-sm">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-blue-900">Banco GCM</h1>
          <p className="text-sm text-gray-600 mt-1">Conta Digital</p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start gap-3 h-12 bg-blue-50 text-blue-900">
            <User className="h-5 w-5" />
            <span>Início</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 h-12">
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
        {/* Mobile Header (visible on mobile, hidden on desktop) */}
        <header className="lg:hidden bg-white shadow-sm border-b">
          <div className="px-4 py-4 flex items-center justify-between">
            <h1 className="text-xl font-bold text-blue-900">Banco GCM</h1>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Desktop Header */}
        <header className="hidden lg:block bg-white shadow-sm border-b">
          <div className="px-8 py-4 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-blue-900">Olá, Usuário</h2>
              <p className="text-sm text-gray-600">Bem-vindo de volta ao seu banco digital</p>
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

        {/* Main Content Area */}
        <main className="flex-1 p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Desktop Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Left Column - Balance and Quick Actions */}
              <div className="lg:col-span-2 space-y-6 lg:space-y-8">
                {/* Saldo */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg lg:text-xl text-gray-600">Saldo Disponível</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl lg:text-5xl font-bold text-blue-900">R$ 0,00</p>
                    <p className="text-sm text-gray-500 mt-2">Atualizado agora</p>
                  </CardContent>
                </Card>

                {/* Ações Rápidas */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Ações Rápidas</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="cursor-pointer hover:shadow-lg transition-all hover:scale-105 active:scale-95">
                      <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                        <div className="bg-blue-100 rounded-full p-4">
                          <ArrowUpRight className="h-8 w-8 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium text-center">Transferir</span>
                      </CardContent>
                    </Card>

                    <Card className="cursor-pointer hover:shadow-lg transition-all hover:scale-105 active:scale-95">
                      <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                        <div className="bg-green-100 rounded-full p-4">
                          <ArrowDownLeft className="h-8 w-8 text-green-600" />
                        </div>
                        <span className="text-sm font-medium text-center">Depositar</span>
                      </CardContent>
                    </Card>

                    <Card className="cursor-pointer hover:shadow-lg transition-all hover:scale-105 active:scale-95">
                      <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                        <div className="bg-purple-100 rounded-full p-4">
                          <FileText className="h-8 w-8 text-purple-600" />
                        </div>
                        <span className="text-sm font-medium text-center">Extrato</span>
                      </CardContent>
                    </Card>

                    <Card className="cursor-pointer hover:shadow-lg transition-all hover:scale-105 active:scale-95">
                      <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                        <div className="bg-orange-100 rounded-full p-4">
                          <CreditCard className="h-8 w-8 text-orange-600" />
                        </div>
                        <span className="text-sm font-medium text-center">Cartões</span>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Transações Recentes */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg lg:text-xl">Transações Recentes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-gray-500 text-center py-12">Nenhuma transação recente</p>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Additional Info (Desktop Only) */}
              <div className="hidden lg:block space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Meus Cartões</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-6 text-white">
                      <p className="text-sm opacity-80 mb-2">Cartão de Crédito</p>
                      <p className="text-xl font-bold mb-4">•••• 0000</p>
                      <p className="text-sm">Limite disponível: R$ 0,00</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Atalhos</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      Pagar Conta
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Recarregar Celular
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Investimentos
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
