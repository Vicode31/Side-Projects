import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "./input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { set } from "react-hook-form";

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: React.ReactNode;
}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref) => {
    const [show, setShow] = React.useState(false);
    return (
      <Input
        type={show ? "text" : "password"}
        suffix={
          show ? (
            <EyeIcon
              className="select-none text-white"
              onClick={() => setShow(false)}
            />
          ) : (
            <EyeOffIcon className="text-white" onClick={() => setShow(true)} />
          )
        }
        className={className}
        {...props}
        ref={ref}
      />
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
