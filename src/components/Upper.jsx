import Link from "next/link";
import { BsFillArrowUpCircleFill } from "react-icons/bs"

export default function Upper() {
  return (
    <div className="md:flex hidden fixed bottom-24 right-24 text-[40px]">
      <Link href={"#homepage"}>
        <BsFillArrowUpCircleFill />
      </Link>
    </div>
  );
};
