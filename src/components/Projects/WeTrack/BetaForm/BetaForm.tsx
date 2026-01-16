"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import { Send, CheckCircle } from "lucide-react";

export default function BetaForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const t = useTranslations();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section
      id="beta"
      className="section-padding px-4 bg-linear-to-b from-transparent to-primary/10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="glass p-8 md:p-16 rounded-[2.5rem] border-base-content/5 text-center shadow-2xl relative overflow-hidden">
          {/* Decorative background blur */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 blur-3xl -z-10" />

          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            {t("weTrack.betaForm.title")
              .split(" ")
              .map((word, i) =>
                i === 0 ? (
                  <span key={i} className="text-gradient">
                    {word}{" "}
                  </span>
                ) : (
                  word + " "
                )
              )}
          </h2>
          <p className="text-xl md:text-2xl font-medium text-base-content/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            {t("weTrack.betaForm.description")}
          </p>

          <AnimatePresence mode="wait">
            {status !== "success" ? (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center gap-4 max-w-xl mx-auto relative z-10"
              >
                <input
                  type="email"
                  placeholder={t("weTrack.betaForm.placeholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-lg bg-base-100/50 backdrop-blur-md border-base-content/10 rounded-2xl flex-1 focus:border-primary transition-all"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-lg rounded-2xl px-10 shadow-xl shadow-primary/20"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    <>
                      {t("weTrack.betaForm.buttonSend")}
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", damping: 12 }}
                className="py-12 flex flex-col items-center gap-6"
              >
                <div className="w-24 h-24 bg-success/20 rounded-full flex items-center justify-center animate-bounce">
                  <CheckCircle className="w-12 h-12 text-success" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-black">
                    {t("weTrack.betaForm.successMessage")}
                  </h3>
                  <p className="text-base-content/60 font-medium">
                    We&apos;ve sent a confirmation to{" "}
                    <span className="text-primary">{email}</span>
                  </p>
                </div>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setEmail("");
                  }}
                  className="btn btn-ghost btn-sm opacity-50 hover:opacity-100"
                >
                  Register another email
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
