import { Inter } from "next/font/google";
import Head from "next/head";
import Curve from "@/components/Layouts/Curve";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Page transition 2.0</title>
        <meta name="desciption" content="Generate by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Curve>
        <div className="p-10 bg-red-500">
          <h1 className="text-5xl font-bold">Home</h1>
          <div className="body">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            temporibus quaerat id ut modi animi quas nam unde voluptate
            repellat, nisi explicabo sed ab odio officia est architecto maiores
            harum optio officiis distinctio. Commodi, vero, est voluptatum
            distinctio alias facere suscipit repudiandae quasi minima similique
            iure atque esse reprehenderit doloribus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Laudantium cum culpa, saepe
            voluptatibus autem suscipit enim ratione mollitia eius error quod
            incidunt, repellendus obcaecati eum minima adipisci accusamus sequi
            earum ducimus qui sunt! Nihil ab ea assumenda iste officia tempore
            labore cupiditate sapiente cum inventore totam nisi voluptates
            natus, reprehenderit ullam, rem repellat numquam vero? A, eius?
            Quasi consequatur ipsam vel saepe officiis itaque illum, quam cum
            harum id quis eaque dolor reprehenderit modi facilis! Architecto
            ducimus tempore ut exercitationem corrupti temporibus libero,
            voluptatem molestiae at eligendi iste mollitia autem necessitatibus
            optio magnam rerum, dolore harum perferendis quia aspernatur
            sapiente? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Adipisci temporibus quaerat id ut modi animi quas nam unde voluptate
            repellat, nisi explicabo sed ab odio officia est architecto maiores
            harum optio officiis distinctio. Commodi, vero, est voluptatum
            distinctio alias facere suscipit repudiandae quasi minima similique
            iure atque esse reprehenderit doloribus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Laudantium cum culpa, saepe
            voluptatibus autem suscipit enim ratione mollitia eius error quod
            incidunt, repellendus obcaecati eum minima adipisci accusamus sequi
            earum ducimus qui sunt! Nihil ab ea assumenda iste officia tempore
            labore cupiditate sapiente cum inventore totam nisi voluptates
            natus, reprehenderit ullam, rem repellat numquam vero? A, eius?
            Quasi consequatur ipsam vel saepe officiis itaque illum, quam cum
            harum id quis eaque dolor reprehenderit modi facilis! Architecto
            ducimus tempore ut exercitationem corrupti temporibus libero,
            voluptatem molestiae at eligendi iste mollitia autem necessitatibus
            optio magnam rerum, dolore harum perferendis quia aspernatur
            sapiente? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Adipisci temporibus quaerat id ut modi animi quas nam unde voluptate
            repellat, nisi explicabo sed ab odio officia est architecto maiores
            harum optio officiis distinctio. Commodi, vero, est voluptatum
            distinctio alias facere suscipit repudiandae quasi minima similique
            iure atque esse reprehenderit doloribus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Laudantium cum culpa, saepe
            voluptatibus autem suscipit enim ratione mollitia eius error quod
            incidunt, repellendus obcaecati eum minima adipisci accusamus sequi
            earum ducimus qui sunt! Nihil ab ea assumenda iste officia tempore
            labore cupiditate sapiente cum inventore totam nisi voluptates
            natus, reprehenderit ullam, rem repellat numquam vero? A, eius?
            Quasi consequatur ipsam vel saepe officiis itaque illum, quam cum
            harum id quis eaque dolor reprehenderit modi facilis! Architecto
            ducimus tempore ut exercitationem corrupti temporibus libero,
            voluptatem molestiae at eligendi iste mollitia autem necessitatibus
            optio magnam rerum, dolore harum perferendis quia aspernatur
            sapiente?
          </div>
        </div>
      </Curve>
    </>
  );
}
