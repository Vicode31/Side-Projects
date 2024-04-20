import OrderConfirmation from "./components/order-animation";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center min-h-screen py-2 bg-blue-900">
      <OrderConfirmation />
    </main>
  );
}
