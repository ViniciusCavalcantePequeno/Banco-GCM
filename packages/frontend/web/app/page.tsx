import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-blue-900">Banco GCM</h1>
        <p className="text-xl text-blue-700">Seu banco digital de confiança</p>
        <div className="flex gap-4 justify-center mt-8">
          <Link href="/login">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Acessar Conta
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
