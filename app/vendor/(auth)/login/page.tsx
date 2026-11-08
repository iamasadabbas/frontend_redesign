'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useVendorAuth } from '@/context/VendorAuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Spinner } from '@/components/ui/spinner';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Image from 'next/image';
import { toast } from 'sonner';
import { useRegistrationModal } from "@/hooks/useRegistrationModal";

export default function LoginPage() {
  const router = useRouter();
  const { vendorLogin, isVendorAuthLoading } = useVendorAuth();
  const [error, setError] = useState<string>('');
  const { openModal } = useRegistrationModal();

  // Password login state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      await vendorLogin(email, password);
      router.push('/vendor');
    } catch (err: any) {
      toast.error(err.message || 'Login failed. Please try again.');
      setError(err.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="h-screen overflow-hidden">
      <div className="grid h-full lg:grid-cols-[45%_55%]">

        {/* LEFT LOGIN */}

        <div
          className="
          flex
          items-center
          justify-center

          px-6
          md:px-10
          lg:px-16

          bg-white
        "
        >
          <div className="w-full max-w-md">

            {/* Header */}

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center rounded-lg text-white mb-4">
                <Image
                  src="/images/betalia_logo_burgundy.png"
                  alt="Betalia Logo"
                  width={160}
                  height={160}
                />
              </div>
            </div>

            {/* CARD */}

            <Card className="p-6 shadow-lg border-0">

              {error && (
                <Alert variant="destructive" className="mb-2">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <form
                onSubmit={handlePasswordLogin}
                className="space-y-4"
              >
                <div>
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium"
                  >
                    E-post
                  </Label>

                  <Input
                    id="email"
                    type="email"
                    placeholder="vendor@restaurant.com"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    disabled={isVendorAuthLoading}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="password"
                    className="text-sm font-medium"
                  >
                    Passord
                  </Label>

                  <Input
                    id="password"
                    type="password"
                    placeholder="Skriv inn passordet ditt"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    disabled={isVendorAuthLoading}
                    className="mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  className="
                  w-full
                  bg-primary
                  hover:bg-primary-dark
                  text-white
                "
                  disabled={isVendorAuthLoading}
                >
                  {isVendorAuthLoading ? (
                    <>
                      <Spinner className="w-4 h-4 mr-2" />
                      Logger inn...
                    </>
                  ) : (
                    "Logg inn"
                  )}
                </Button>
              </form>

              <div className="mt-3 text-center">
                <Link
                  href="/vendor/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Glemt passord?
                </Link>
              </div>

              <div className=" text-center">
                <p className="text-sm text-slate-600">
                  Har du ikke konto?{" "}
                  <button
                    onClick={openModal}
                    className="
                    text-blue-600
                    hover:text-blue-700
                    font-medium
                  "
                  >
                    Opprett her
                  </button>
                </p>
              </div>

              {/* <div className="mt-2 text-center">
              <p className="text-sm text-slate-600">
                Employee Login?{" "}
                <Link
                  href="/vendor/employee-login"
                  className="
                    text-blue-600
                    hover:text-blue-700
                    font-medium
                  "
                >
                  Login here
                </Link>
              </p>
            </div> */}

            </Card>

            <p
              className="
              text-center
              text-xs
              text-slate-500
              mt-6
            "
            >
              © 2026 Betalia — Alle rettigheter forbeholdt
            </p>

          </div>
        </div>

        {/* RIGHT IMAGE */}

        <div className="relative hidden lg:block">

          <Image
            src="/images/cafes.webp"
            alt="Restaurant"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div
            className="
            absolute
            bottom-14
            left-12

            max-w-lg

            text-white
          "
          >
            <h2
              className="
              text-5xl
              font-heading

              leading-[0.95]
            "
            >
              Alt du trenger for en smartere drift
            </h2>

            <p
              className="
              mt-5
              text-[16px]
              text-white/80
            "
            >
              La oss finne den
              rette løsningen
              for deg
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

