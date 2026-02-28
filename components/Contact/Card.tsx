"use client";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import styled from "styled-components";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";
import { CircleCheck, CircleX, Loader } from "lucide-react";
import { toast } from "sonner";

// Register English locale
countries.registerLocale(en);

// Create typed country list
type Country = {
  code: string;
  name: string;
};

const countryList: Country[] = Object.entries(
  countries.getNames("en", { select: "official" }),
).map(([code, name]) => ({
  code,
  name,
}));

const Card = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    setLoading(true);
    const form = event.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      ?.value;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "a4282212-2c5d-4fd6-92bb-52a6a6c5358e",
          name,
          email,
          message,
          Country: value,
        }),
      });

      const result: { success: boolean; message?: string } =
        await response.json();

      setLoading(false);

      if (result.success) {
        setStatus("success");
        toast.success("Message sent to Imran 😛", {
          position: "bottom-right",
        });
        form.reset();
      } else {
        setStatus("error");
        toast.error("Failed to send message 😔", { position: "bottom-right" });
      }
    } catch (error) {
      toast.error("Failed to send message 😔", { position: "bottom-right" });
      console.error("Error submitting form:", error);
      setLoading(false);
      setStatus("error");
    }

    // Hide success/error after 3 seconds
    setTimeout(() => {
      setStatus("idle");
    }, 3000);
  };

  return (
    <StyledWrapper>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="unopaq" y="-100%" height="300%" x="-100%" width="300%">
          <feColorMatrix
            values="1 0 0 0 0 
                    0 1 0 0 0 
                    0 0 1 0 0 
                    0 0 0 5 0"
          />
        </filter>

        <filter id="unopaq2" y="-100%" height="300%" x="-100%" width="300%">
          <feColorMatrix
            values="1 0 0 0 0 
                    0 1 0 0 0 
                    0 0 1 0 0 
                    0 0 0 10 0"
          />
        </filter>

        <filter id="unopaq3" y="-100%" height="300%" x="-100%" width="300%">
          <feColorMatrix
            values="1 0 0 1 0 
                    0 1 0 1 0 
                    0 0 1 1 0 
                    0 0 0 2 0"
          />
        </filter>
      </svg>

      <div className="card-container">
        <div className="spin spin-blur" />
        <div className="spin spin-intense" />
        <div className="backdrop" />
        <div className="card-border">
          <div className="spin spin-inside" />
        </div>
        <div className="card">
          <form onSubmit={handleSubmit} className="w-full p-8">
            <FieldGroup>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="form-name">
                    Name<span className="text-destructive">*</span>
                  </FieldLabel>
                  <Input
                    name="name"
                    id="form-name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="border-foreground/20"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="form-country">Country</FieldLabel>
                  <Select value={value} onValueChange={setValue}>
                    <SelectTrigger
                      id="form-country"
                      className="border-foreground/20"
                    >
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>

                    <SelectContent className="bg-background/10 backdrop-blur-lg overflow-y-auto border-foreground/20">
                      {countryList.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </div>

              <Field>
                <FieldLabel htmlFor="form-email">
                  Email <span className="text-destructive">*</span>
                </FieldLabel>
                <Input
                  name="email"
                  id="form-email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="border-foreground/20"
                />
                <FieldDescription>
                  I&apos;ll never share your email with anyone.
                </FieldDescription>
              </Field>

              <Field>
                <FieldLabel htmlFor="form-message">
                  Message <span className="text-destructive">*</span>
                </FieldLabel>
                <Textarea
                  name="message"
                  className="h-28 resize-none border-foreground/20"
                  required
                  placeholder="Type your message here."
                />
              </Field>
              <div>
                <button
                  type="submit"
                  className="bg-foreground/10 px-4 py-2 text-sm font-medium rounded-full cursor-pointer ring-offset-2 hover:ring-2 hover:ring-secondary dark:ring-offset-black flex items-center gap-2 transition-all duration-700 ease-in-out"
                >
                  {loading && <Loader className="w-4 h-4 animate-spin" />}
                  {status === "success" && !loading && (
                    <CircleCheck className="w-4 h-4 text-green-500 transition-all duration-300" />
                  )}
                  {status === "error" && !loading && (
                    <CircleX className="w-4 h-4 text-red-500 transition-all duration-300" />
                  )}
                  <span className="transition-all duration-700">
                    Send message
                  </span>
                </button>
              </div>
            </FieldGroup>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card-container {
    position: relative;
    width: 600px;
    height: 500px;
    border-radius: 1em;
  }

  .card-border {
    position: absolute;
    inset: 0;
    background: #0a0a0a;
    border-radius: inherit;
  }

  .card {
    position: absolute;
    inset: 0.125em;
    border-radius: 0.875em;
    background: #0a0a0a;
    overflow: hidden;
  }

  .backdrop {
    position: absolute;
    inset: -100%;
    background: radial-gradient(
      circle at 50% 50%,
      #0000 0,
      #0000 20%,
      #0a0a0a 100%
    );
    background-size: 3px 3px;
    z-index: -1;
  }

  .spin {
    position: absolute;
    inset: 0;
    z-index: -2;
    overflow: hidden;
  }

  .spin-blur {
    filter: blur(3em) url(#unopaq);
  }

  .spin-intense {
    inset: -0.125em;
    filter: blur(0.5em) url(#unopaq2);
    border-radius: 0.75em;
  }

  .spin-inside {
    inset: -2px;
    border-radius: inherit;
    filter: blur(2px) url(#unopaq3);
    z-index: 0;
  }

  .spin::before {
    content: "";
    position: absolute;
    inset: -30%;
    animation: speen 8s cubic-bezier(0.56, 0.15, 0.28, 0.86) infinite;
  }

  .spin-blur::before {
    background: linear-gradient(-45deg, #f50, #0000 46% 54%, #05f);
  }

  .spin-intense::before {
    background: linear-gradient(-45deg, #f95, #0000 35% 65%, #59f);
  }

  .spin-inside::before {
    background: linear-gradient(-45deg, #fc9, #0000 35% 65%, #9cf);
  }

  @keyframes speen {
    0% {
      rotate: 10deg;
    }
    50% {
      rotate: 190deg;
    }
    100% {
      rotate: 370deg;
    }
  }
`;

export default Card;
