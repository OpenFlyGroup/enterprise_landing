"use client";
import { useState } from "react";
import { motion } from "motion/react";

export default function BetaForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // await fetch("/api/beta", {
    //   method: "POST",
    //   body: JSON.stringify({ email }),
    //   headers: { "Content-Type": "application/json" },
    // });
    setStatus("success");
  };

  return (
    <section id="beta" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Wanna try it first?</h2>
        <p className="text-lg mb-10">
          The beta test will start in March 2026. The first 500 are free
          forever.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="urmail@email.ru"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered flex-1"
            required
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send"}
          </button>
        </form>

        {status === "success" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-success"
          >
            Ready! The email will be sent to {email}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
