'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function ContactForm() {
  const [locationType, setLocationType] = useState<string>('');

  const floorOptions = Array.from({ length: 10 }, (_, i) => (i + 1).toString());

  return (
    <form
      action="https://formspree.io/f/xpwrldwd"
      method="POST"
      className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8 space-y-6"
    >
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white bg-[#1F1F2E] py-4 rounded-t-xl">
          <i className="fa fa-envelope mr-2" />Neem contact op
        </h2>
        <h3 className="text-xl font-semibold mt-2">Reserveer online</h3>
        <p className="text-base mt-1">Alfaladderlift</p>
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Uw naam</Label>
          <Input name="name" required />
        </div>
        <div>
          <Label>Achternaam</Label>
          <Input name="lastname" required />
        </div>
      </div>

      {/* Location Type */}
      <div>
        <Label>Kies aantal locaties</Label>
        <Select
          name="location_type"
          onValueChange={setLocationType}
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Kies aantal locaties" />
          </SelectTrigger>
          <SelectContent className="bg-white text-main">
            <SelectItem value="one">Eén locatie</SelectItem>
            <SelectItem value="two">Twee locaties</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* One Location */}
      {locationType === 'one' && (
        <div key="location-one" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Adres</Label>
            <Input name="from_address" />
          </div>
          <div>
            <Label>Postcode</Label>
            <Input name="postcode1" />
          </div>
          <div>
            <Label>Verdieping</Label>
            <Select name="floor_one" required>
              <SelectTrigger>
                <SelectValue placeholder="Selecteer verdieping" />
              </SelectTrigger>
              <SelectContent className="bg-white text-main">
                {floorOptions.map((floor) => (
                  <SelectItem key={floor} value={floor}>{floor}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {/* Two Locations */}
      {locationType === 'two' && (
        <div key="location-two" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Adres van vertrek</Label>
            <Input name="from_address" id="from_address_two" />
          </div>
          <div>
            <Label>Postcode vertrek</Label>
            <Input name="postcode1" id="postcode1_two" />
          </div>
          <div>
            <Label>Verdieping vertrek</Label>
            <Select name="floor_depart" required>
              <SelectTrigger>
                <SelectValue placeholder="Selecteer verdieping" />
              </SelectTrigger>
              <SelectContent className="bg-white text-main">
                {floorOptions.map((floor) => (
                  <SelectItem key={floor} value={floor}>{floor}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Verhuizen Naar</Label>
            <Input name="to_address" />
          </div>
          <div>
            <Label>Postcode bestemming</Label>
            <Input name="postcode" />
          </div>
          <div>
            <Label>Verdieping bestemming</Label>
            <Select name="floor_dest" required>
              <SelectTrigger>
                <SelectValue placeholder="Selecteer verdieping" />
              </SelectTrigger>
              <SelectContent className="bg-white text-main">
                {floorOptions.map((floor) => (
                  <SelectItem key={floor} value={floor}>{floor}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {/* Time and Date */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Selecteer tijd</Label>
          <Select name="time" required >
            <SelectTrigger>
              <SelectValue placeholder="Selecteer tijd" />
            </SelectTrigger>
            <SelectContent className="bg-white text-main">
              {[
                "7:00", "7:30", "8:00", "8:30", "9:00", "9:30", "10:00", "10:30",
                "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
                "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"
              ].map((time) => (
                <SelectItem key={time} value={time}>{time}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Datum</Label>
          <Input name="date" type="date" required />
        </div>
      </div>

      {/* Price & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full">
          <Label>Selecteer Prijs verhuis</Label>
          <Select name="move_price" required>
            <SelectTrigger>
              <SelectValue placeholder="Selecteer Prijs verhuis" />
            </SelectTrigger>
            <SelectContent className="bg-white text-main ">
              {["70€", "90€", "125€", "350€", "450€", "550€"].map((price) => (
                <SelectItem key={price} value={price}>{price}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Telefoonnummer</Label>
          <Input name="phone" type="tel" />
        </div>
      </div>

      {/* Email */}
      <div>
        <Label>E-mailadres</Label>
        <Input name="email" type="email" required />
      </div>

      {/* Message */}
      <div>
        <Label>Bericht</Label>
        <Textarea name="message" rows={5} />
      </div>

      {/* Submit */}
      <div className="text-center">
        <Button type="submit" className="px-8 py-2 bg-[#1F1F2E] text-white text-lg font-semibold">
          Versturen
        </Button>
      </div>

      {/* Map */}
      <div className="pt-6">
        <iframe
          src="https://www.google.com/maps?q=Grotebaan+24,+2660+Antwerpen,+Belgium&output=embed"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
    </form>
  );
}
