"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "./register.css";

export default function SignUpPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await fetch("https://json-server-lnkp.onrender.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok) {
        toast.success("Signup successful");
        reset();
        router.push("/login");
      } else {
        toast.error(result.message || "Signup failed");
      }
    } catch {
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        {/* Left image */}
        <div className="auth-image">
          <img src="/auth.png" alt="Signup" />
        </div>

        {/* Form */}
        <div className="auth-form">
          <button className="auth-google">
            <img src="/google.png" alt="Google" className="w-5 h-5" />
            Sign up with Google
          </button>

          <div className="auth-divider">or</div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
            {/* Name */}
            <div>
              <label className="auth-label">Name</label>
              <input
                type="text"
                placeholder="What should we call you?"
                {...register("name", { required: "Name is required" })}
                className="auth-input"
              />
              {errors.name && <p className="auth-error">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="auth-label">Email</label>
              <input
                type="email"
                placeholder="you@domain.com"
                {...register("email", { required: "Email is required" })}
                className="auth-input"
              />
              {errors.email && <p className="auth-error">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="auth-label">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                {...register("password", { required: "Password is required" })}
                className="auth-input"
              />
              {errors.password && <p className="auth-error">{errors.password.message}</p>}
            </div>

            <button type="submit" className="auth-submit">
              {loading ? "Signing up..." : "Create Account"}
            </button>
          </form>

          <p className="auth-footer">
            Already have an account?{" "}
            <Link href="/login" className="auth-link">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
