"use client";

import React, { useState } from "react";
import { NewsletterFormProps, NewsletterState } from "@/types";
import Button from "./Button";

const NewsletterForm: React.FC<NewsletterFormProps> = ({
  onSubmit,
  className = "",
}) => {
  const [state, setState] = useState<NewsletterState>({
    email: "",
    status: "idle",
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(state.email)) {
      setState(prev => ({
        ...prev,
        status: "error",
        message: "Please enter a valid email address",
      }));
      return;
    }

    setState(prev => ({ ...prev, status: "loading" }));

    try {
      await onSubmit(state.email);
      setState({
        email: "",
        status: "success",
        message: "Thanks for subscribing! Check your email for confirmation.",
      });
    } catch (error) {
      setState(prev => ({
        ...prev,
        status: "error",
        message: "Something went wrong. Please try again.",
      }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(prev => ({
      ...prev,
      email: e.target.value,
      status: "idle",
      message: undefined,
    }));
  };

  return (
    <div className={`w-full max-w-md ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            disabled={state.status === "loading"}
            required
          />
          <Button
            type="submit"
            disabled={state.status === "loading" || !state.email}
            className="whitespace-nowrap"
          >
            {state.status === "loading" ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>
        
        {state.message && (
          <div
            className={`text-sm p-3 rounded-lg ${
              state.status === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {state.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default NewsletterForm;
