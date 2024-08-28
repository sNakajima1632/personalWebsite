import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <div className="m-5 md:m-10">
        <Image 
          priority={true}
          src="/profile.JPG"
          alt="Profile picture of Shido Nakajima"
          height={500}
          width={500}
          className="flex-none rounded-full max-w-2xs md:max-w-sm"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col mx-20 my-20 min-w-md">
        <h1>Shido Nakajima</h1>
        <p className="mx-5">B.S. in Biomedical Engineering</p>
        <div className="py-3 text-lg">
          <p className="font-bold">
            <br />Aspiring Medical Researcher/<br/>Medical Device Developer:<br/><br/>
          </p>
          <p>
            I am a dilligent worker and adaptive learner, with experience in two different
             research laboratories, proficiency in multiple computer languages, and 
             hands-on hardware and fabrication skills.
            <br/><br/>
            To lean more, please visit the <b>ABOUT</b> page for brief list of my 
             experience, and the <b>DOCUMENTS</b> page for my resume (with references) 
             and my Transcript from the University of Texas at Dallas.
          </p>
        </div>
      </div>
    </div>
  );
}
