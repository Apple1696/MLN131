import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Hero1Props {
  badge?: string;
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  images: {
    src: string;
    alt: string;
  }[];
}

const Hero1 = ({
  heading = "Blocks Built With Shadcn & Tailwind",
  description = "Presented by Group 7",
  buttons = {
    primary: {
      text: "Khám quá ngay ",
      url: "#socialist-democracy",
    },
    secondary: {
      text: "Giới thiệu team",
      url: "#team-section",
    },
  },
  images = [
    {
      src: "/images/home/society.jpg",
      alt: "Hero section demo image 1",
    },
    {
      src: "/images/home/socialist democracy.jpg",
      alt: "Hero section demo image 2",
    },
    {
      src: "/images/home/scale2.jpg",
      alt: "Hero section demo image 3",
    },
    {
      src: "/images/home/bourgeois democracy.jpg",
      alt: "Hero section demo image 4",
    },
  ],
}: Hero1Props) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-2">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* {badge && (
              <Badge variant="outline">
                {badge}
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
            )} */}
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              {heading}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                   <Button asChild className="w-full sm:w-auto">
                  <a 
                    href={buttons.primary.url}
                    onClick={(e) => {
                      if (buttons.primary && buttons.primary.url.startsWith('#')) {
                        e.preventDefault();
                        document.querySelector(buttons.primary.url)?.scrollIntoView({
                          behavior: 'smooth'
                        });
                      }
                    }}
                  >
                    {buttons.primary.text}
                  </a>
                </Button>
              )}
              {buttons.secondary && (
                  <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a 
                    href={buttons.secondary.url}
                    onClick={(e) => {
                      if (buttons.secondary && buttons.secondary.url.startsWith('#')) {
                        e.preventDefault();
                        document.querySelector(buttons.secondary.url)?.scrollIntoView({
                          behavior: 'smooth'
                        });
                      }
                    }}
                  >
                    {buttons.secondary.text}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="h-48 w-full rounded-md object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero1 };