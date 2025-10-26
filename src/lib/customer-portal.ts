
export const openCustomerPortal = async (stripeCustomerId: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-customer-portal`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          customerId: stripeCustomerId,
          returnUrl: window.location.origin,
        }),
      }
    )

    if (!response.ok) {  
      const error = await response.json()
      throw new Error(error.error || 'Failed to create portal session')
    }

    const { url } = await response.json()
    
    // Öppna Stripe Customer Portal
    window.location.href = url
  } catch (error) {
    console.error('Error opening customer portal:', error)
    throw error
  }
}
