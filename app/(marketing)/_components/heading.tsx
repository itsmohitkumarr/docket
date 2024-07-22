"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4 flex flex-col items-center justify-center gap-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-10">
        Unleash your productivity potential with
      </h1>
      <Image
        src="/logoB.png"
        alt="Logo"
        height={350}
        width={500}
        className="dark:hidden"
      />
      <Image
        src="/logoW.png"
        alt="Logo"
        height={350}
        width={500}
        className="hidden dark:block"
      />
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        where organization meets innovation.
      </h3>
      {isLoading && (
        <div className=" w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Get Docket Free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
    </div>
  );
};
