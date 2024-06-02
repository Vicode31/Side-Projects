import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 bg-zinc-800">
      <Card className="bg-slate-50">
        <CardHeader>
          <CardTitle>
            <p className="text-4xl font-black">Personnalisation</p>
          </CardTitle>
          <CardDescription className="text-xl">
            Dans les moindres détails...
          </CardDescription>
        </CardHeader>
        <Separator className="w-4/5 mx-auto my-2 mb-6" />
        <CardContent>
          <div className="flex items-center gap-2">
            <Checkbox className="data-[state=checked]:bg-green-600" />
            <p>Checkbox vert</p>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox className="data-[state=checked]:bg-orange-600" />
            <p>Checkbox orange</p>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox className="data-[state=checked]:bg-destructive" />
            <p>Checkbox rouge</p>
          </div>
          <Separator className="w-90% mx-auto my-2 mt-6" />
          <div className="flex flex-col items-center justify-center mt-4 divide-y-2">
            <div className="flex items-center h-14">
              <p className="select-all selection:bg-green-300">
                Sélectionne le texte en vert
              </p>
            </div>
            <div className="flex items-center h-14">
              <p className="select-all selection:bg-red-300">
                Sélectionne le texte en rouge
              </p>
            </div>
            <div className="flex items-center h-14">
              <p className="select-all selection:bg-purple-300">
                Sélectionne le texte en violet
              </p>
            </div>
          </div>
          <Separator className="w-90% mx-auto my-2" />
          <div className="flex items-center w-full max-w-sm mt-8 space-x-2">
            <Input
              type="email"
              placeholder="Même le placeholder"
              className="focus-visible:ring-pink-500"
            />
            <Button
              type="submit"
              className="duration-500 ease-in-out hover:bg-indigo-500 hover:text-black"
            >
              Subscribe
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
