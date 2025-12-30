"use client";

import * as React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
} from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      className={cn(
        "bg-transparent border-none text-white [&_*]:text-white",
        className
      )}
      classNames={{
        root: "w-fit",
        months: "flex flex-col md:flex-row gap-4",
        month: "flex flex-col gap-4",
        nav: "flex items-center justify-between absolute top-0 inset-x-0",
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-8 p-0 text-white hover:bg-transparent focus-visible:ring-0"
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-8 p-0 text-white hover:bg-transparent focus-visible:ring-0"
        ),
        month_caption: "flex justify-center h-8",
        caption_label: "text-sm font-medium select-none",
        table: "w-full border-collapse",
        weekdays: "flex",
        weekday: "flex-1 text-center text-xs font-normal text-white opacity-70",
        week: "flex w-full mt-2",
        day: "w-full aspect-square select-none",
        today: "bg-primary text-primary-foreground rounded-md",
        outside: "opacity-50",
        disabled: "opacity-40",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, className, ...props }) => {
          if (orientation === "left") {
            return <ChevronLeftIcon className={cn("size-4", className)} />;
          }
          if (orientation === "right") {
            return <ChevronRightIcon className={cn("size-4", className)} />;
          }
          return <ChevronDownIcon className={cn("size-4", className)} />;
        },
        DayButton: CalendarDayButton,
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (modifiers.focused) ref.current?.blur();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      tabIndex={-1}
      data-day={day.date.toLocaleDateString()}
      className={cn(
        "w-full aspect-square text-white font-normal",
        "hover:bg-transparent hover:text-white",
        "focus-visible:ring-0 focus-visible:outline-none",
        "data-[selected=true]:bg-transparent",
        "data-[range-start=true]:bg-transparent",
        "data-[range-end=true]:bg-transparent",
        "data-[range-middle=true]:bg-transparent",
        className
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
