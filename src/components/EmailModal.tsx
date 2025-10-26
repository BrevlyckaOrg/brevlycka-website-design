import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { supabase } from "@/lib/supabase"
import { AlertCircle } from "lucide-react"
import { useState } from "react"

interface EmailModalProps {
  open: boolean
  onClose: () => void
  onSubmit: (email: string) => void
  loading?: boolean
  priceId?: string
  productName?: string
}

export function EmailModal({ open, onClose, onSubmit, loading = false, priceId, productName }: EmailModalProps) {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [warning, setWarning] = useState("")
  const [checking, setChecking] = useState(false)
  const [hasExistingOrder, setHasExistingOrder] = useState(false)
  const [checkCompleted, setCheckCompleted] = useState(false) // Track if check has been done
  const [allowContinue, setAllowContinue] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Returnerar true om prenumeration finns, annars false
  // Returnerar true om prenumeration finns, annars false
  const checkExistingOrder = async (email: string): Promise<boolean> => {
    if (!priceId) {
      return false;
    }
    setChecking(true)
    setWarning("")
    setAllowContinue(false)
    let found = false;
    try {
      const { data, error } = await supabase
        .rpc('check_existing_subscription', {
          customer_email: email.toLowerCase().trim(),
          price_id: priceId
        })
      if (error) {
        console.error('Error checking subscription:', error)
        setChecking(false)
        return false;
      }
      const result = data?.[0]
      if (!result || !result.has_subscription) {
        setChecking(false)
        return false;
      }
      found = true;
      if (result.is_active) {
        const warningMsg = `Du har redan en aktiv prenumeration på "${productName}".`;
        setWarning(warningMsg)
      } else {
        const warningMsg = `Vi ser att du tidigare har beställt "${productName}". Vill du beställa igen?`;
        setWarning(warningMsg)
      }
    } catch (err) {
      console.error('Unexpected error checking order:', err)
    } finally {
      setChecking(false)
    }
    return found;
  }

  const handleEmailBlur = () => {
    if (email && validateEmail(email)) {
      checkExistingOrder(email)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setError("Vänligen ange din e-postadress")
      return
    }
    if (!validateEmail(email)) {
      setError("Vänligen ange en giltig e-postadress")
      return
    }
    setError("")
    if (warning && allowContinue) {
      onSubmit(email)
      setAllowContinue(false)
      return
    }
    // Kör alltid kontrollen direkt och agera på return-värdet
    const found = await checkExistingOrder(email)
    if (!found) {
      onSubmit(email)
    } else {
      setAllowContinue(true)
    }
  }

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading text-wine-dark mb-1">
            Ange din e-postadress
          </DialogTitle>
          <DialogDescription className="text-base text-gray-700">
            Ange din e-postadress för att fortsätta till betalningen. 
            Vi använder den för att hantera din beställning och prenumeration.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-lg font-semibold text-gray-900">
              E-postadress *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="din.email@exempel.se"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError("")
                setWarning("")
                setHasExistingOrder(false)
                setCheckCompleted(false) // Reset check when email changes
              }}
              onBlur={handleEmailBlur}
              disabled={loading || checking}
              autoFocus
              className="text-base h-11 border-2 border-gray-400 focus:border-wine focus:ring-2 focus:ring-wine/20"
            />
            {checking && (
              <p className="text-sm text-gray-600">Kontrollerar...</p>
            )}
            {error && (
              <p className="text-sm text-red-600 font-medium">{error}</p>
            )}
            {warning && (
              <div className="flex gap-2 p-3 bg-amber-50 border-2 border-amber-200 rounded-md">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800 font-medium">{warning}</p>
              </div>
            )}
          </div>
          <div className="pt-4 space-y-3">
            <Button
              type="submit"
              variant="wine"
              size="lg"
              disabled={loading || !email}
              className="w-full h-12 text-lg font-semibold disabled:opacity-100 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:pointer-events-auto"
            >
              {loading ? "Laddar..." : checking ? "Kontrollerar..." : warning ? "Fortsätt ändå" : "Fortsätt till betalning"}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={onClose}
              disabled={loading}
            >
              Avbryt
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
