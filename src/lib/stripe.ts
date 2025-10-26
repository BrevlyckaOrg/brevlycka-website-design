export interface CheckoutOptions {
  priceId: string;
  productName: string;
  successUrl?: string;
  cancelUrl?: string;
  isSubscription?: boolean;
  totalLetters?: number;
  customerEmail?: string;
}

export const createStripeCheckout = async ({
  priceId,
  productName,
  successUrl = `${window.location.origin}/?success=true`,
  cancelUrl = window.location.origin,
  isSubscription = false,
  totalLetters,
  customerEmail,
}: CheckoutOptions) => {
  try {
    // Anropa Supabase Edge Function för att skapa checkout session
    const response = await fetch(
      `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-stripe-checkout`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          priceId,
          productName,
          successUrl,
          cancelUrl,
          isSubscription,
          totalLetters,
          customerEmail,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Kunde inte skapa checkout session');
    }

    const { url } = await response.json();

    // Omdirigera direkt till Stripe Checkout URL
    window.location.href = url;
  } catch (error) {
    console.error('Checkout error:', error);
    throw error;
  }
};
