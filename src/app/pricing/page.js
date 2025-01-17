import PageHeaders from "@/components/PageHeaders";

export default function PricingPage() {
    return (
        <div className="">
            <PageHeaders h1Text="Check Out Our Pricing" h2Text="Simple Pricing, Superior Service" />
            <div className="bg-white text-slate-700 max-w-xs mx-auto px-4 py-3 text-center rounded-lg shadow-slate-600/80 shadow-md">
                <h3 className=" text-3xl font-bold">Free</h3>
                <h3 className="font-medium text-sm">for now</h3>
            </div>
        </div>
    );
}