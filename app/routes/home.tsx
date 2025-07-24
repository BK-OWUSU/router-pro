import Dashboard from "@/components/custom/Dashboard";
import type { Route } from "./+types/home";




export function meta({}: Route.MetaArgs) {
  return [
    { title: "Just Test" },
    { name: "description", content: "Welcome marks first test" },
  ];
}

export default function Home() {
  return (
    <div>
      <Dashboard/>
    </div>
  )
}
