import { FaInfo } from "react-icons/fa";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto my-4">
      <div className="my-2 rounded-lg bg-blue-50 p-1 shadow-sm">
        <div className="flex items-start space-x-2">
          <FaInfo className="ml-1 mt-3 h-5 w-5 flex-shrink-0 text-blue-500" />
          <p className="text-xs leading-relaxed text-gray-700">
            The information presented here is compiled from various sources and
            represents my interpretation and understanding of the subject
            matter. Specific wording may not be entirely original, as it&apos;s
            used to best convey concepts, with credit to the collective
            knowledge base.
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}
