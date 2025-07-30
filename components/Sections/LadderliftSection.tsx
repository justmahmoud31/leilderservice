"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function LadderliftSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const toastId = toast.loading("Je aanvraag wordt verzonden...");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Fout bij het verzenden");

      toast.success("Je aanvraag is succesvol verzonden!", { id: toastId });
      setFormData({ name: "", email: "", service: "" }); // Clear form
    } catch (error) {
        console.log(error);
        
      toast.error("Er is iets misgegaan, probeer opnieuw.", { id: toastId });
    }
  };

  return (
    <section className="bg-[#f3f4f6] py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12">
      {/* Left Content */}
      <div>
        <p className="text-red-700 font-bold uppercase">LADDERLIFT</p>
        <h2 className="text-3xl font-bold mt-2 mb-4">Direct een ladderlift nodig?</h2>
        <p className="text-gray-600 mb-4">
          Ieder services ladderlift staat 7 op 7 voor u klaar. Met ons polyvalent liftpark
          kunnen wij u binnen het uur voorzien met een verhuislift van de 1ste verdieping tot en met de 10ste verdieping.
        </p>

        <div className="grid grid-cols-3 mt-8 text-center gap-4">
          <div>
            <p className="text-red-700 text-3xl font-bold">10</p>
            <p className="font-semibold">Verdiepingen bereikbaar</p>
          </div>
          <div>
            <p className="text-red-700 text-3xl font-bold">7</p>
            <p className="font-semibold">Dagen per week</p>
          </div>
          <div>
            <p className="text-red-700 text-3xl font-bold">1</p>
            <p className="font-semibold">Uur service</p>
          </div>
        </div>
      </div>

      {/* Right Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-red-700 p-8 rounded-lg space-y-4 text-white"
      >
        <div className="space-y-2">
          <Label htmlFor="name">Uw Naam</Label>
          <Input
            name="name"
            placeholder="Uw Naam"
            value={formData.name}
            onChange={handleChange}
            className="bg-white text-black"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Uw Email</Label>
          <Input
            name="email"
            type="email"
            placeholder="Uw Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white text-black outline-none  "
            required
          />
        </div>

        <div className="space-y-2">
          <Label>Service</Label>
          <Select value={formData.service} onValueChange={handleServiceChange}>
            <SelectTrigger className="bg-white text-black w-full cursor-pointer">
              <SelectValue placeholder="Selecteer een service" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black cursor-pointer">
              <SelectItem value="Ladderlift">Ladderlift</SelectItem>
              <SelectItem value="Verhuizen">Verhuizen</SelectItem>
              <SelectItem value="Opslag">Opslag</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full bg-gray-900 hover:bg-black cursor-pointer">
          Vraag een offerte aan
        </Button>
      </form>
    </section>
  );
}
