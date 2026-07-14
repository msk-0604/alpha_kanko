import { preload } from "react-dom";
import { HomePage } from "@/components/home/HomePage";

preload("/images/hero-construction.webp", { as: "image", fetchPriority: "high" });

export default function Home() {
  return <HomePage />;
}
