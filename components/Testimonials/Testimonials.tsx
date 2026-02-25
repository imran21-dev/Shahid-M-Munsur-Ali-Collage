import Image from "next/image";

import bgImg from "@/images/2148133106.jpg";
import { GridPattern } from "../ui/grid-pattern";
import { Marquee } from "../ui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Michael Anderson",
    username: "@michael_devfounder",
    body: "Imran delivered exactly what we needed. The website is fast, modern, and fully responsive. His communication was clear throughout the project, and he even suggested improvements we hadn't considered.",
    img: "https://i.postimg.cc/Y2FssPMx/1615724391315.jpg",
  },
  {
    name: "Sarah Williams",
    username: "@sarah_creative",
    body: "Working with Imran was a smooth experience from start to finish. He understood the design vision perfectly and transformed it into a beautiful, high-performing website.",
    img: "https://i.postimg.cc/sfWNNLsc/images-(1).jpg",
  },
  {
    name: "David Thompson",
    username: "@david_startup",
    body: "Imran built our platform using modern technologies and delivered on time. The performance optimization and clean UI really impressed our team.",
    img: "https://i.postimg.cc/7PzWWRwm/1671154974700.jpg",
  },
  {
    name: "Emily Rodriguez",
    username: "@emily_brand",
    body: "Highly professional and detail-oriented. He made sure everything worked perfectly on mobile and desktop. I will definitely work with him again.",
    img: "https://i.postimg.cc/FFSBB6Nb/images-(2).jpg",
  },
  {
    name: "Daniel Kim",
    username: "@daniel_ecom",
    body: "Our e-commerce site feels premium and runs smoothly thanks to Imran’s expertise. He handled both frontend and backend flawlessly.",
    img: "https://i.postimg.cc/zDhccQ8C/images.jpg",
  },
  {
    name: "Olivia Martinez",
    username: "@olivia_marketing",
    body: "Imran’s problem-solving skills are impressive. Whenever we faced an issue, he provided quick and effective solutions. Highly recommended!",
    img: "https://i.postimg.cc/CM8QQ2Sb/images-(3).jpg",
  },
];
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-max max-w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-foreground/20 bg-foreground/5 hover:bg-foreground/10 backdrop-blur-sm",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt="clinets photo"
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium ">{name}</figcaption>
          <p className="text-xs font-medium opacity-80">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Testimonials() {
  return (
    <div className="relative py-20">
      <div className="absolute top-0 left-0 h-full">
        <Image
          src={bgImg}
          alt="bg Image"
          width={1920}
          height={1080}
          className="h-full mix-blend-lighten opacity-60 rotate-180 scale-x-[-1]"
        />
      </div>
      <div className="px-[18.3%] z-10 relative">
        <h3 className="text-7xl font-semibold">Client Experiences</h3>
        <p className="pt-4 pb-10 opacity-80">
          Every project is a collaboration. These testimonials highlight the
          experience, process, and satisfaction of the people I’ve worked with.
        </p>
      </div>
      <div className="relative  flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s] ">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l"></div>
      </div>
      <div className="bg-background absolute bottom-0 right-0 -z-10 flex h-[500px] w-2/4 flex-col items-center justify-center overflow-hidden rounded-lg ">
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [15, 10],
            [10, 15],
            [15, 10],
            [10, 15],
            [15, 10],
          ]}
          className={cn(
            "mask-[radial-gradient(400px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
        <div className="absolute bottom-0 left-0 h-20 w-full bg-linear-to-t from-background via-background/80 to-transparents" />
      </div>
    </div>
  );
}
