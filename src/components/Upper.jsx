import Link from "next/link";
import { BsFillArrowUpCircleFill } from "react-icons/bs"

export default function Upper() {
  return (
    <div className="xl:flex hidden fixed bottom-16 right-16 text-[40px]">
      <Link href={"#homepage"}>
        <BsFillArrowUpCircleFill />
      </Link>
    </div>
  );
};
