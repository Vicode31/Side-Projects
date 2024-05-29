import Image from "next/image";

interface Person {
  imageURL: string;
  name: string;
  title: string;
  phone: string;
}

const people: Person[] = [
  {
    imageURL: "ceo.jpg",
    name: "Marie DUPONT",
    title: "CEO & Founder",
    phone: "555-555-5555",
  },
  {
    imageURL: "cto.jpg",
    name: "John DOE",
    title: "CTO",
    phone: "555-555-5555",
  },
  {
    imageURL: "coo.jpg",
    name: "Jeanne Experte",
    title: "COO",
    phone: "555-555-5555",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-300">
      <ul role="list" className="px-8 rounded-2xl bg-slate-100 shadow-2xl">
        {people.map((person) => (
          <li
            key={person.name}
            className="flex items-center gap-8 group/item hover:bg-slate-200 my-8 py-4 px-6 rounded-xl ease-in-out duration-150"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  className="h-16 w-16 rounded-full"
                  src={`/${person.imageURL}`}
                  alt=""
                  width={64}
                  height={64}
                />
              </div>
              <div>
                <a href={`#`} className="text-lg font-medium text-gray-900">
                  {person.name}
                </a>
                <p className="text-gray-500">{person.title}</p>
              </div>
            </div>
            <a
              className="group/edit invisible hover:bg-slate-300 group-hover/item:visible text-sm font-medium text-gray-700 flex justify-center items-center py-2 px-4 rounded-2xl ml-auto h-fit"
              href={`tel:${person.phone}`}
            >
              <span className="group-hover/edit:text-gray-700 ease-in-out duration-200">
                Call
              </span>

              <svg
                className="w-6 h-6 text-gray-800 dark:text-white group-hover/edit:translate-x-1 group-hover/edit:text-slate-700 ease-in-out duration-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m10 16 4-4-4-4"
                />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
