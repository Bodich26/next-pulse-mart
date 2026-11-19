import { cn } from "../lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};
export const Container = ({ children, className }: Props) => {
  return (
    <div className={cn("max-w-[1200px] px-[15px] mx-auto", className)}>
      {children}
    </div>
  );
};
