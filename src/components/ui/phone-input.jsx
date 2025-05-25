"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import Image from "next/image";

// Country codes data
const countries = [
  { value: "uz", label: "UZ", code: "+998" },
  { value: "ru", label: "RU", code: "+7" },
  { value: "us", label: "US", code: "+1" },
  { value: "gb", label: "UK", code: "+44" },
  { value: "kz", label: "KZ", code: "+7" },
  { value: "kg", label: "QZ", code: "+996" },
  { value: "tj", label: "TJ", code: "+992" },
];

export const PhoneInput = React.forwardRef((props, ref) => {
  const {
    className,
    onChange,
    error,
    value = "",
    defaultCountry = "uz",
    ...rest
  } = props;

  const [open, setOpen] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState(
    countries.find((country) => country.value === defaultCountry) ||
      countries[0]
  );

  // Handle phone input change
  const handleInputChange = (e) => {
    // Remove any non-digit characters except the country code
    let inputValue = e.target.value;
    if (inputValue.startsWith(selectedCountry.code)) {
      inputValue = inputValue.substring(selectedCountry.code.length);
    }

    // Remove any non-digit characters
    const digits = inputValue.replace(/\D/g, "");

    // Combine country code with digits
    const newValue = `${selectedCountry.code}${digits}`;

    if (onChange && newValue.length <= 13) {
      onChange(newValue);
    }
  };

  // Handle country selection
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);

    // Update phone value with new country code
    if (onChange) {
      let phoneNumber = value || "";
      // Remove the old country code if it exists
      countries.forEach((c) => {
        if (phoneNumber.startsWith(c.code)) {
          phoneNumber = phoneNumber.substring(c.code.length);
        }
      });

      // Add new country code
      onChange(`${country.code}${phoneNumber}`);
    }

    setOpen(false);
  };

  // Extract phone number without country code for display
  const getDisplayValue = () => {
    if (!value) return "";

    if (value.startsWith(selectedCountry.code)) {
      return value.substring(selectedCountry.code.length);
    }

    return value;
  };

  return (
    <div className={cn("flex gap-2", className)}>
      <Popover open={false} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={`${
              error ? "border-red-500" : "border-[#CFD3D4] "
            } h-12 w-[120px] justify-between border-2`}
          >
            <Image src="/UZ.png" alt="Country Flag" width={40} height={40} />(
            {selectedCountry.code})
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search country..." />
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandList>
              <CommandGroup>
                {countries.map((country) => (
                  <CommandItem
                    key={country.value}
                    value={country.value}
                    onSelect={() => handleCountrySelect(country)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedCountry.value === country.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {country.label} ({country.code})
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <Input
        ref={ref}
        className={`${
          error ? "border-red-500" : "border-[#CFD3D4]"
        } flex-1   border-2 h-12 bg-white focus-visible:ring-[1px] focus-visible:ring-primary transition-all duration-100 ease-linear focus:border-primary`}
        value={getDisplayValue()}
        onChange={handleInputChange}
        type="tel"
        placeholder="Phone number"
        {...rest}
      />
    </div>
  );
});

PhoneInput.displayName = "PhoneInput";
