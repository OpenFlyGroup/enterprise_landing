import Link from "next/link";

export default function Pricing() {
  return (
    <section className="bg-base-100 py-20 px-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-12">Simple Pricing</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="card card-border justify-between bg-base-100 p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Free</h3>
            <p className="text-3xl font-bold mb-6">$0</p>
            <ul className="space-y-2 text-left mb-6">
              <li>5 templates</li>
              <li>PDF export</li>
              <li>Watermark</li>
            </ul>
            <Link href="#" className="btn btn-primary">
              Get Started
            </Link>
          </div>
          <div className="card card-border justify-between bg-linear-to-br from-primary to-accent p-8 shadow-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <p className="text-3xl font-bold mb-6">$2/mo</p>
            <ul className="space-y-2 text-left mb-6">
              <li>Unlimited templates</li>
              <li>Digital signature</li>
              <li>No watermark</li>
              <li>Priority support</li>
            </ul>
            <Link href="#" className="btn btn-outline">
              Go Pro
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
