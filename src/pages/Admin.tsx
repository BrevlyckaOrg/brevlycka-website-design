import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';

interface Customer {
  id: string;
  email: string;
  full_name: string;
  stripe_customer_id: string;
  created_at: string;
}

interface Subscription {
  id: string;
  status: string;
  current_period_end: string;
  cancel_at_period_end: boolean;
  customer: Customer;
}

interface Delivery {
  id: string;
  status: string;
  scheduled_date: string;
  sent_date?: string;
  tracking_number?: string;
  letter: {
    letter_number: number;
    title: string;
  };
}

const AdminDashboard = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [selectedSubscription, setSelectedSubscription] = useState<string | null>(null);
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  const fetchSubscriptions = async () => {
    const { data, error } = await supabase
      .from('subscriptions')
      .select(`
        *,
        customer:customers(*)
      `)
      .order('created_at', { ascending: false });

    if (!error && data) {
      setSubscriptions(data as any);
    }
    setLoading(false);
  };

  const fetchDeliveries = async (subscriptionId: string) => {
    const { data, error } = await supabase
      .from('deliveries')
      .select(`
        *,
        letter:letters(letter_number, title)
      `)
      .eq('subscription_id', subscriptionId)
      .order('scheduled_date', { ascending: true });

    if (!error && data) {
      setDeliveries(data as any);
    }
  };

  const markAsSent = async (deliveryId: string, trackingNumber: string) => {
    const { error } = await supabase
      .from('deliveries')
      .update({
        status: 'sent',
        sent_date: new Date().toISOString().split('T')[0],
        tracking_number: trackingNumber,
      })
      .eq('id', deliveryId);

    if (!error && selectedSubscription) {
      fetchDeliveries(selectedSubscription);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'canceled': return 'bg-red-500';
      case 'past_due': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getDeliveryStatusColor = (status: string) => {
    switch (status) {
      case 'sent': return 'bg-blue-500';
      case 'delivered': return 'bg-green-500';
      case 'ready_to_send': return 'bg-yellow-500';
      case 'pending': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  if (loading) {
    return <div className="p-8">Laddar...</div>;
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Prenumerationer */}
        <Card>
          <CardHeader>
            <CardTitle>Aktiva Prenumerationer ({subscriptions.length})</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {subscriptions.map((sub) => (
              <div
                key={sub.id}
                className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                onClick={() => {
                  setSelectedSubscription(sub.id);
                  fetchDeliveries(sub.id);
                }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold">{sub.customer.full_name || sub.customer.email}</p>
                    <p className="text-sm text-gray-600">{sub.customer.email}</p>
                  </div>
                  <Badge className={getStatusColor(sub.status)}>
                    {sub.status}
                  </Badge>
                </div>
                <div className="text-sm text-gray-600">
                  <p>Förnyelse: {new Date(sub.current_period_end).toLocaleDateString('sv-SE')}</p>
                  {sub.cancel_at_period_end && (
                    <p className="text-red-600">Avslutas vid periodens slut</p>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Leveranser */}
        <Card>
          <CardHeader>
            <CardTitle>
              {selectedSubscription ? 'Leveranser' : 'Välj en prenumeration'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {deliveries.map((delivery) => (
              <div key={delivery.id} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold">
                      Brev {delivery.letter.letter_number}
                      {delivery.letter.title && `: ${delivery.letter.title}`}
                    </p>
                    <p className="text-sm text-gray-600">
                      Planerat: {new Date(delivery.scheduled_date).toLocaleDateString('sv-SE')}
                    </p>
                    {delivery.sent_date && (
                      <p className="text-sm text-gray-600">
                        Skickat: {new Date(delivery.sent_date).toLocaleDateString('sv-SE')}
                      </p>
                    )}
                    {delivery.tracking_number && (
                      <p className="text-sm font-mono">{delivery.tracking_number}</p>
                    )}
                  </div>
                  <Badge className={getDeliveryStatusColor(delivery.status)}>
                    {delivery.status}
                  </Badge>
                </div>

                {delivery.status === 'ready_to_send' && (
                  <Button
                    size="sm"
                    onClick={() => {
                      const tracking = prompt('Ange tracking number:');
                      if (tracking) {
                        markAsSent(delivery.id, tracking);
                      }
                    }}
                  >
                    Markera som skickad
                  </Button>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
