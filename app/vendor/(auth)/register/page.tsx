'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useVendorAuth } from '@/context/VendorAuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Spinner } from '@/components/ui/spinner';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Image from 'next/image';
import { toast } from 'sonner';

export default function RegisterPage() {
  const router = useRouter();
  const { vendorRegister, isVendorAuthLoading } = useVendorAuth();
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');

    // Calculate password strength
    if (name === 'password') {
      let strength = 0;
      if (value.length >= 8) strength++;
      if (/[A-Z]/.test(value)) strength++;
      if (/[0-9]/.test(value)) strength++;
      if (/[^A-Za-z0-9]/.test(value)) strength++;
      setPasswordStrength(strength);
    }
  };

  const validateForm = (): boolean => {
    const { name, companyName, email, password, confirmPassword } = formData;

    if (!name.trim()) {
      setError('Please enter your name');
      return false;
    }

    if (!companyName.trim()) {
      setError('Please enter your company name');
      return false;
    }

    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address');
      return false;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) {
      return;
    }

    try {
      await vendorRegister({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        companyName: formData.companyName,
      });

      setSuccess(
        'Registration successful! Please wait for admin verification before logging in.'
      );

      // Redirect to login after 2 seconds
      setTimeout(() => {
        router.push('/vendor/login');
      }, 2000);
    } catch (err: any) {
      toast.error(err.message || 'Registration failed. Please try again.');
      setError(err.message || 'Registration failed. Please try again.');
    }
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength === 0) return 'bg-slate-200';
    if (passwordStrength === 1) return 'bg-red-500';
    if (passwordStrength === 2) return 'bg-yellow-500';
    if (passwordStrength === 3) return 'bg-blue-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength === 0) return '';
    if (passwordStrength === 1) return 'Weak';
    if (passwordStrength === 2) return 'Fair';
    if (passwordStrength === 3) return 'Good';
    return 'Strong';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary text-white mb-4">
            <Image src={'/brand/betalia-logo.webp'} alt="Betalia Logo" width={50} height={50} />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Betalia Restaurant</h1>
        </div>

        {/* Card */}
        <Card className="p-6 shadow-lg border-0">
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="mb-6 border-green-200 bg-green-50">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">{success}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <Label htmlFor="name" className="text-sm font-medium">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                disabled={isVendorAuthLoading}
                className="mt-1"
              />
            </div>

            {/* Company Name */}
            <div>
              <Label htmlFor="companyName" className="text-sm font-medium">
                Company Name
              </Label>
              <Input
                id="companyName"
                name="companyName"
                type="text"
                placeholder="My Company Ltd."
                value={formData.companyName}
                onChange={handleChange}
                disabled={isVendorAuthLoading}
                className="mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="vendor@restaurant.com"
                value={formData.email}
                onChange={handleChange}
                disabled={isVendorAuthLoading}
                className="mt-1"
              />
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter a strong password"
                value={formData.password}
                onChange={handleChange}
                disabled={isVendorAuthLoading}
                className="mt-1"
              />
              {formData.password && (
                <div className="mt-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getPasswordStrengthColor()} transition-all`}
                        style={{ width: `${(passwordStrength / 4) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-slate-600 font-medium min-w-fit">
                      {getPasswordStrengthText()}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    At least 8 characters, mix of uppercase, numbers, and special characters recommended
                  </p>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <Label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                disabled={isVendorAuthLoading}
                className="mt-1"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary text-white mt-1"
              disabled={isVendorAuthLoading}
            >
              {isVendorAuthLoading ? (
                <>
                  <Spinner className="w-4 h-4 mr-2" />
                  Creating account...
                </>
              ) : (
                'Create Account'
              )}
            </Button>
          </form>

          {/* Login Link */}
          <div className="mt-1 text-center">
            <p className="text-sm text-slate-600">
              Already have an account?{' '}
              <Link href="/vendor/login" className="text-blue-600 hover:text-blue-700 font-medium">
                Login here
              </Link>
            </p>
          </div>
        </Card>

        {/* Footer */}
        <p className="text-center text-xs text-slate-500 mt-4">
          © 2024 Betalia. All rights reserved.
        </p>
      </div>
    </div>
  );
}
