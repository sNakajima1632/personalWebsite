export default function Home() {
  return (
    <div className="flex w-full h-full">
      <div className="flex w-full h-full flex-col mx-20 my-10 min-w-md">
        <h1>Documents</h1>
        <div className="flex flex-col text-lg">
            <p className="flex flex-col font-bold">
                <br />Please download my resume (with references) and transcript below.
                <br/><br/>
            </p>
        </div>
        <div className="flex h-full flex-col justify-between gap-2 md:flex-row">

            {/* Resume embed */}
            <object className="flex flex-row w-full md:h-500"
                data="/NakajimaResume.pdf" type="application/pdf" width="100%" height="50%">
                <p>Unable to display PDF file. <a href="/NakajimaResume.pdf">Download</a> instead.</p>
            </object>

            {/* Transcript embed */}
            <object className="flex flex-row w-full md:h-500"
                data="/UTDTranscript5.20.2024.pdf" type="application/pdf" width="100%" height="50%">
                <p>Unable to display PDF file. <a href="/UTDTranscript5.20.2024.pdf">Download</a> instead.</p>
            </object>
        </div>
      </div>
    </div>
  );
}
