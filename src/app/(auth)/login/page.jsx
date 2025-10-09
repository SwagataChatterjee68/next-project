"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./login.css"

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const onSubmit = async (data) => {
        try {
            setLoading(true);

            const res = await fetch(
                `http://localhost:5000/users?email=${data.email}&password=${data.password}`
            );

            const users = await res.json();

            if (users.length > 0) {
                toast.success("Login successful");
                router.push("/");
                localStorage.setItem("user", JSON.stringify(users[0]));
                reset();
            } else {
                toast.error("Invalid email or password");
            }
        } catch (error) {
            toast.error("Server error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="left-side">
                    <img src="/auth.png" alt="Furniture" />
                </div>

                <div className="right-side">
                    <h1 className="title">Log in to Exclusive</h1>
                    <button className="enter-details-btn">
                        Enter your details below
                    </button>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <input
                                type="email"
                                placeholder="Email or Phone Number"
                                {...register("email", { required: "Email is required" })}
                                className="form-input"
                            />
                            {errors.email && <p className="error-text">{errors.email.message}</p>}
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                {...register("password", { required: "Password is required" })}
                                className="form-input"
                            />
                            {errors.password && <p className="error-text">{errors.password.message}</p>}
                        </div>

                        <div className="submit-container">
                            <button type="submit" className="submit-btn">
                                {loading ? "Logging..." : "Log In"}
                            </button>
                            <Link className="forgot-password" href="/">
                                Forget Password
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
