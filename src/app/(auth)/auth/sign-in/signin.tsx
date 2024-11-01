"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/sevices/service";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormData {
  email: string;
  password: string;
}

export function SignInForm() {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<IFormData>();
  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    const { email, password } = data;
    await signIn(email, password);
    router.push("/my-info/time-off");
    reset();
  };
  return (
    <div className="flex min-h-screen bg-black">
      <form className="max-w-sm m-auto " onSubmit={handleSubmit(onSubmit)}>
        <Card className="p-4 ">
          <CardHeader className="mb-4">
            <CardTitle className="text-2xl text-center">Login</CardTitle>
            <CardDescription>Enter your email below to login to your account.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register("email", { required: true })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...register("password", { required: true })} />
            </div>
          </CardContent>
          <CardFooter className="p-0">
            <Button className="w-full bg-green-500 hover:bg-green-400">Login</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
