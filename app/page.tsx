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
        <p className="mt-2 mb-4">Working towards M.S. in Biomedical Engineering</p>
        <div className="py-3 text-lg">
          <p className="font-bold">
            Aspiring <u>Medical Device Engineer</u> / <u>Health Care Data Analyst</u>:
          </p>
          <p className="mt-4">
            I am a diligent worker and adaptive learner: Biomedical Engineer, Software Developer, and Researcher 
            with experience developing medical technologies at the intersection of neuroengineering, machine learning, 
            and biomedical signal processing.
            <br/><br/>
            My experience includes <u>software development</u> for peripheral nerve stimulation systems, analysis of <u>neural and 
            electromyography signals</u>, deep learning for <u>medical imaging</u>, and <u>predictive modeling</u> using wearable health 
            data. I have led multidisciplinary engineering projects, developed automated data-processing pipelines, and 
            translated complex research challenges into deployable technical solutions.
            <br/><br/>
            Eligible in the U.S. for internships & full-time - no restrictions
            <br/>
            English (native) and Japanese (native)
            <br/><br/>
            To learn more, visit <b><a href="/about" className="text-blue-600 hover:underline">ABOUT</a></b> for my background, and
            <br/>
            <b><a href="/documents" className="text-blue-600 hover:underline">DOCUMENTS</a></b> for resume and trasncript
          </p>
        </div>
      </div>
    </div>
  );
}
