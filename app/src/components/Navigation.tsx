import { ModeToggle } from "@/mode-toggle";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import DokployLogo from "./ui/quickapps-logo";

const Navigation = () => {
  return (
    <div className="flex sticky top-0 bg-background/80 backdrop-blur-xs z-10 justify-between items-center p-2 py-4 lg:p-4 border-b">
      <div className="flex flex-row gap-2 justify-center items-center">
        <DokployLogo className="size-7 lg:size-10 text-black dark:text-white" />
        <h1 className="text-2xl font-bold hidden lg:block">QuickApps Templates</h1>
      </div>
      <div className="flex flex-row gap-2 justify-center items-center">
        <Button
          onClick={() => {
            window.open(
              "https://github.com/quicks-apps-co/templates/issues/new",
              "_blank"
            );
          }}
        >
          Add Template
          <Plus />
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navigation;
