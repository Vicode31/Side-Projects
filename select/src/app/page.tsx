import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <main className="">
      <div className="flex mt-72  items-center justify-center ">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="À toi de choisir" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {/* <SelectLabel>Les choix</SelectLabel> */}
              <SelectItem value="apple">Abonne-toi &#128525; </SelectItem>
              <SelectItem value="banana">Like &#10084;&#65039;</SelectItem>
              <SelectItem value="blueberry">
                Commente "site web" &#x1F917;
              </SelectItem>
              <SelectItem value="grapes">Partage 📩</SelectItem>
              <SelectItem value="pineapple">Enregistre 💾</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </main>
  );
}
