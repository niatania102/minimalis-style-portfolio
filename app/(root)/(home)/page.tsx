import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button, Text } from "@mantine/core";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex mx-10 items-center gap-5">
      <Image src="/assets/icons/me.svg" width={50} height={50} alt="me" />
      <Image src="/assets/icons/arrow.svg" width={50} height={50} alt="arrow"/>
      <Text className="font-handlee bg-pink-300 text-lg" darkHidden>Tania</Text>  
      <Text className="font-handlee bg-gray-600  text-lg" lightHidden>Tania</Text>  
    </div>
    <div className="flex justify-between mt-0 mx-10 flex-wrap">
      {/* <div > */}
        <TextGenerateEffect words="I design top notch websites" className="text-sm w-80"/>
      {/* </div> */}
      <div className="lg:w-80 lg:mr-36">
        <Text>I'll design your website and will develop to
        land it on internet using No-code.</Text>
        <Button variant="filled" size="md" color="dark">Hire me</Button>
      </div>
    </div>
    </>
  );
}
