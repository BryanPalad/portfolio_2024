"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAppStore, FaGooglePlay, FaLocationArrow } from "react-icons/fa6";

export const CardHoverEffect = ({
  items,
  className,
}: {
  items: {
    id: number;
    title: string;
    des: string;
    img: string;
    iconLists: string[];
    link: string;
    googleplayLink: string;
    appstoreLink: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 pt-8",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <Image
              src={item.img}
              alt={item.title}
              width={600}
              height={600}
              className="rounded-xl"
            />
            <CardTitle className="font-bold lg:text-xl md:text-xl text-base">
              {item.title}
            </CardTitle>
            <CardDescription className="lg:text-sm lg:font-normal font-light text-sm">
              {item.des}
            </CardDescription>
            {item.appstoreLink !== "" && item.googleplayLink !== "" ? (
              <div className="flex items-center justify-between mt-4">
                <Link href={item.googleplayLink} target="_blank">
                  <div className="flex gap-2 items-center">
                    <p className="font-base lg:text-md text-sm">Google Play</p>
                    <FaGooglePlay size={22} color="white" />
                  </div>
                </Link>

                <Link href={item.appstoreLink} target="_blank">
                  <div className="flex gap-2 items-center">
                    <p className="font-base lg:text-md text-sm">App Store</p>
                    <FaAppStore size={22} color="white" />
                  </div>
                </Link>
              </div>
            ) : (
              <div className="flex justify-between items-center pt-4">
                <div key={item.id} className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-transparent/[0.2] rounded-full bg-[#212121] w-10 h-10 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <Image
                        src={icon}
                        alt={icon}
                        className="p-2"
                        width={600}
                        height={600}
                      />
                    </div>
                  ))}
                </div>
                <Link
                  href={item.link}
                  target="_blank"
                  className="flex items-center gap-1 font-base lg:text-md text-sm text-purple"
                >
                  Live Demo
                  <FaLocationArrow />
                </Link>
              </div>
            )}
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full pt-2 pb-0 px-2 overflow-hidden bg-slate-900/[0.8] border border-transparent dark:border-transparent/[0.2] group-hover:border-transparent relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
