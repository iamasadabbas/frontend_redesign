'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Spinner } from '@/components/ui/spinner';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { vendorApiClient } from '@/lib/vendor-api-client';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }
    setLoading(true);
    try {
      await vendorApiClient.forgotPassword(email.trim());
      setSent(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-4">
            <Image src="/images/betalia_logo_burgundy.png" alt="Betalia Logo" width={160} height={160} />
          </div>
        </div>

        <Card className="p-6 shadow-lg border-0">
          <h1 className="text-xl font-semibold mb-1">Glemt passord?</h1>
          <p className="text-sm text-slate-600 mb-4">
            Skriv inn e-postadressen din, så sender vi deg en lenke for å tilbakestille passordet.
          </p>

          {sent ? (
            <Alert className="mb-2">
              <CheckCircle2 className="h-4 w-4" />
              <AlertDescription>
                Hvis det finnes en konto for denne e-postadressen, har vi sendt en lenke for tilbakestilling av passord. Lenken er gyldig i 30 minutter.
              </AlertDescription>
            </Alert>
          ) : (
            <>
              {error && (
                <Alert variant="destructive" className="mb-2">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-sm font-medium">E-post</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="vendor@restaurant.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    className="mt-1"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white" disabled={loading}>
                  {loading ? (<><Spinner className="w-4 h-4 mr-2" />Sender...</>) : 'Send tilbakestillingslenke'}
                </Button>
              </form>
            </>
          )}

          <div className="mt-4 text-center">
            <Link href="/vendor/login" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              Tilbake til innlogging
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
