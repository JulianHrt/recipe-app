import Image from "next/image";
import pizza from "../../public/images/pizza.jpg";

export default function Veggie() {
  return (
    <>
      <h1>Veggie sucks</h1>
      <Image src={pizza} alt="foto of a pizza" layout="responsive"></Image>
      <p>This is shit!</p>
    </>
  );
}
