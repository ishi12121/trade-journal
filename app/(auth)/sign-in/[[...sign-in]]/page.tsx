import { LoginForm } from "@/components/login-form";
import { TradeMatrixLogo } from "@/components/tradematrix";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="hidden h-full items-center justify-center bg-primary lg:flex">
        <TradeMatrixLogo size={200} />
      </div>
    </div>
  );
}
