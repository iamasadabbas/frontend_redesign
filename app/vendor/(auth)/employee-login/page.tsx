'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useVendorAuth } from '@/context/VendorAuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Spinner } from '@/components/ui/spinner';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Image from 'next/image';
import { toast } from 'sonner';

export default function LoginPage() {
  const router = useRouter();
  const { loginWithPin, isVendorAuthLoading } = useVendorAuth();
  const [error, setError] = useState<string>('');

  // PIN login state
  const [number, setNumber] = useState('');
  const [pin, setPin] = useState('');
  const [handle, setHandle] = useState('');

  const handlePinLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!handle || !number || pin.length !== 4) {
      setError('Please enter a valid handle, number, and 4-digit PIN');
      return;
    }

    try {
      await loginWithPin({ number: Number(number), pin, handle });
      router.push('/vendor');
    } catch (err: any) {
      toast.error(err.message || 'Login failed. Please try again.');
      setError(err.message || 'Login failed. Please try again.');
    }
  };

  const handlePinInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
    setPin(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary text-white mb-4">
            <Image src={'/brand/betalia-logo.webp'} alt="Betalia Logo" width={60} height={60} />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Betalia Restaurant</h1>
        </div>

        {/* Card */}
        <Card className="p-6 shadow-lg border-0">
          {error && (
            <Alert variant="destructive" className="mb-2">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}


            {/* PIN Login */}
              <form onSubmit={handlePinLogin} className="space-y-4">

                <div>
                  <Label htmlFor="handle" className="text-sm font-medium">
                    Handle
                  </Label>
                  <Input
                    id="handle"
                    type="text"
                    placeholder="your-restaurant"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    disabled={isVendorAuthLoading}
                    className="mt-1 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>

                <div>
                  <Label htmlFor="pin-number" className="text-sm font-medium">
                    Employee Number
                  </Label>
                  <Input
                    id="pin-number"
                    type="number"
                    placeholder="123456"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    disabled={isVendorAuthLoading}
                    className="mt-1 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>

                <div>
                  <Label htmlFor="pin" className="text-sm font-medium">
                   PIN
                  </Label>
                  <Input
                    id="pin"
                    type="text"
                    placeholder="0000"
                    value={pin}
                    onChange={handlePinInput}
                    maxLength={4}
                    inputMode="numeric"
                    disabled={isVendorAuthLoading}
                    className="mt-1 text-center text-2xl tracking-widest font-mono"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white"
                  disabled={isVendorAuthLoading || pin.length !== 4}
                >
                  {isVendorAuthLoading ? (
                    <>
                      <Spinner className="w-4 h-4 mr-2" />
                      Logging in...
                    </>
                  ) : (
                    'Login'
                  )}
                </Button>
              </form>
        </Card>

        {/* Footer */}
        <p className="text-center text-xs text-slate-500 mt-6">
          © 2024 Betalia. All rights reserved.
        </p>
      </div>
    </div>
  );
}
