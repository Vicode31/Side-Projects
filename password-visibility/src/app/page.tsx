"use client";

import { ProfileForm } from "@/components/ProfileForm";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Home() {
  const form = useForm();
  const formSchema = z.object({
    username: z.string().min(2).max(50),
  });
  return (
    <main className="">
      <ProfileForm />
    </main>
  );
}
