import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-start gap-8">
      <div className="flex-none m-2 md:m-5">
        <Image
          priority={true}
          src="/profile.JPG"
          alt="Profile picture of Shido Nakajima"
          height={500}
          width={500}
          className="profile-image"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h1>Shido Nakajima</h1>
        <p className="mt-2 mb-4">Acquiring M.S. in Biomedical Engineering</p>
        <div className="py-3 text-lg">
          <p className="font-bold">
            Aspiring <u>Medical Device Developer</u> / <u>Health Care Data Analyst</u>:
          </p>
          <p className="mt-4">
            I am a diligent worker and adaptive learner, with experience in 3 different
            research laboratories, proficiency in multiple computer languages, and
            hands-on hardware and fabrication skills.
            <br/><br/>
            Permanent resident, Eligible in the U.S. for internships & full-time positions.
            <br/>
            Native-level proficiency in <i>English and Japanese</i>.
            <br/><br/>
            To learn more, please visit the <b><a href="/about" className="text-blue-600 hover:underline">ABOUT</a></b> page for a brief list of my
            experience, and the <b><a href="/documents" className="text-blue-600 hover:underline">DOCUMENTS</a></b> page for my resume (with references)
            and my Transcript from the University of Texas at Dallas.
          </p>
        </div>
      </div>
    </div>
  );
}
