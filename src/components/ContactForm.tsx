"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 600));
    setStatus("submitted");
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-3">
      <input
        required
        value={form.name}
        onChange={(e) => update("name", e.target.value)}
        placeholder="Full name"
        className="w-full rounded border border-muted-2 px-3 py-2 text-sm outline-none focus:border-primary"
      />
      <input
        required
        type="email"
        value={form.email}
        onChange={(e) => update("email", e.target.value)}
        placeholder="Email"
        className="w-full rounded border border-muted-2 px-3 py-2 text-sm outline-none focus:border-primary"
      />
      <input
        value={form.phone}
        onChange={(e) => update("phone", e.target.value)}
        placeholder="Phone (optional)"
        className="w-full rounded border border-muted-2 px-3 py-2 text-sm outline-none focus:border-primary"
      />
      <textarea
        required
        value={form.message}
        onChange={(e) => update("message", e.target.value)}
        placeholder="How can we help?"
        rows={5}
        className="w-full rounded border border-muted-2 px-3 py-2 text-sm outline-none focus:border-primary"
      />
      <button
        disabled={status !== "idle"}
        type="submit"
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-600 disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Submit inquiry"}
      </button>
      {status === "submitted" && (
        <div className="text-sm text-green-700">Thanks — we will reach out shortly.</div>
      )}
    </form>
  );
}
