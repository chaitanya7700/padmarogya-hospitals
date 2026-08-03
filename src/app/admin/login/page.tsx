"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { HospitalLogo } from "@/components/ui/LotusIcon";
export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-light-gray p-4">
      <Card className="w-full max-w-md" hover={false}>
        <div className="mb-8 text-center">
          <HospitalLogo className="justify-center" />
          <h1 className="mt-4 font-heading text-xl font-semibold text-navy">
            Admin Login
          </h1>
          <p className="mt-1 text-sm text-text-muted">
            Sign in to manage website content
          </p>
        </div>
        <form className="space-y-4">
          <Input label="Email" type="email" placeholder="admin@padmarogya.com" />
          <Input label="Password" type="password" placeholder="••••••••" />
          <Button type="submit" variant="primary" className="w-full">
            Sign In
          </Button>
        </form>
        <p className="mt-4 text-center text-xs text-text-muted">
          Roles: Super Admin · Content Manager · Department Manager
        </p>
      </Card>
    </div>
  );
}
