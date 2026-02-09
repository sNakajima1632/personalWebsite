export default function Documents() {
  return (
    <div className="w-full">
      <div className="site-content">
        <h1>Documents</h1>

        <p className="mt-3 font-bold">Please download my resume (with references) and transcript below.</p>

        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <div className="flex-1">
            <h2 className="mb-3">Resume</h2>
            <object
              className="pdf-embed"
              data="/NakajimaResume.pdf"
              type="application/pdf"
              aria-label="Resume PDF"
            >
              <p>Unable to display PDF file. <a href="/NakajimaResume.pdf">Download</a> instead.</p>
            </object>
          </div>

          <div className="flex-1">
            <h2 className="mb-3">Transcript</h2>
            <object
              className="pdf-embed"
              data="/UTDTranscript5.20.2024.pdf"
              type="application/pdf"
              aria-label="Transcript PDF"
            >
              <p>Unable to display PDF file. <a href="/UTDTranscript5.20.2024.pdf">Download</a> instead.</p>
            </object>
          </div>
        </div>
      </div>
    </div>
  );
}
