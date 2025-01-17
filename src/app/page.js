import DemoSection from "../components/DemoSection";
import PageHeaders from "../components/PageHeaders";
import UploadIcon from "../components/UploadIcon";

export default function Home() {
  return (
    <>
      <PageHeaders
        h1Text="SubSpark: Captions That Hit the Mark"
        h2Text="Just upload your video and we'll handle the Captions"
      />

      <div className="flex justify-center">
        <label className="inline-flex gap-1 font-medium bg-[#1dcb2c] px-4 py-2 rounded-full shadow-lg cursor-pointer">
          <UploadIcon />
          <span>Upload</span>
          <input type="file" className="hidden"></input>
        </label>
      </div>

      <DemoSection />
    </>
  );
}
