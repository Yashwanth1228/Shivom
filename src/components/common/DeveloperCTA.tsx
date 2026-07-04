"use client";

import Button from "@/components/common/Button";
import { MessageSquare, ExternalLink } from "lucide-react";

interface DeveloperCTAProps {
  portfolioUrl?: string;
  whatsappUrl: string;
}

export default function DeveloperCTA({ portfolioUrl, whatsappUrl }: DeveloperCTAProps) {
  return (
    <div className="text-center bg-gold/5 border border-gold/15 p-5 md:p-6 rounded-2xl mb-6">
      <h4 className="font-outfit text-sm font-extrabold text-white mb-1 uppercase tracking-wider">
        Like this website?
      </h4>
      <p className="text-zinc-400 text-xs md:text-sm mb-5 font-medium leading-none">
        Let's build something amazing together.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {/* Primary Hire Me Button */}
        <Button
          href={whatsappUrl}
          external
          variant="primary"
          className="py-2.5! px-6! text-[11px]! tracking-widest! hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]! flex items-center gap-2"
        >
          <MessageSquare size={13} />
          Hire Me
        </Button>

        {/* Support for Future Portfolio Url */}
        {portfolioUrl && (
          <Button
            href={portfolioUrl}
            external
            variant="outline"
            className="py-2.5! px-6! text-[11px]! tracking-widest! hover:bg-gold! hover:text-dark-bg! hover:border-gold! flex items-center gap-2"
          >
            <ExternalLink size={13} />
            View Portfolio
          </Button>
        )}
      </div>
    </div>
  );
}
