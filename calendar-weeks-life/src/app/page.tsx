"use client";
import DateOfBirthInput from "@/components/DateOfBirth";
import Calendrier from "@/components/calendrier/Calendrier";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { useState } from "react";

const getWeeksDifference = (dateOfBirth: Date) => {
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // Milliseconds in a day
  const oneWeekInMilliseconds = 7 * oneDayInMilliseconds; // Milliseconds in a week

  const today = new Date();
  const timeDifference = today.getTime() - dateOfBirth.getTime();

  return Math.floor(timeDifference / oneWeekInMilliseconds);
};

export default function Home() {
  const [dateOfBirthInput, setDateOfBirthInput] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [weeksDifference, setWeeksDifference] = useState(0);

  const handleDateOfBirthChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;
    setDateOfBirthInput(inputValue);

    if (inputValue.match(/^\d{4}-\d{2}-\d{2}$/)) {
      // Check if the input value is a valid date string in the format "yyyy-mm-dd"
      const selectedDate = new Date(inputValue);
      setDateOfBirth(selectedDate);
      setWeeksDifference(getWeeksDifference(selectedDate));
    }
  };

  return (
    <main>
      <h1 className="text-center text-4xl font-semibold bg-white rounded-2xl px-4 py-6 mt-10 max-w-xs lg:max-w-2xl mx-auto">
        90 ans de Vie Humaine en semaines
      </h1>

      <Card className=" mx-2 lg:mx-20 mt-10">
        <CardHeader className="bg-[#FFF2D7] border-[#102C57] rounded-t-lg">
          <p className="text-center font-semibold lg:text-xl">
            Entrez votre de naissance pour voir combien de semaines de vie vous
            avez passé?
          </p>
          <div className="lg:ml-10">
            <DateOfBirthInput
              value={dateOfBirth ? dateOfBirth.toISOString().split("T")[0] : ""}
              onChange={handleDateOfBirthChange}
            />
            {dateOfBirth && (
              <p className="mt-4">
                Nombre de semaine: {weeksDifference} sur 4680 (90ans)
              </p>
            )}
            {/* You can display the selected date of birth here */}
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-4">
          <p className="lg:text-xl font-semibold text-center">
            Nombre de semaines dans une annnée
          </p>
          <p className="-rotate-90 absolute lg:text-xl font-semibold translate-y-32 -translate-x-[4.5rem] lg:-translate-x-6">
            Nombre d&apos;année
          </p>
          <Calendrier weeksDifference={weeksDifference} />
        </CardContent>
      </Card>
    </main>
  );
}
