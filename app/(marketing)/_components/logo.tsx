import Image from "next/image";

export const Logo = () => {
  return (
    <div>
      <Image
        src="/logoB.png"
        alt="Logo"
        height={50}
        width={80}
        className="dark:hidden"
      />
      <Image
        src="/logoW.png"
        alt="Logo"
        height={50}
        width={80}
        className="hidden dark:block"
      />
    </div>
  );
};
