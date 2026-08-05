export default function BrowserMockup({ url, children }) {
  return (
    <div className="flex-1 rounded-lg shadow-lg overflow-hidden border border-neutral-200">
      <div className="flex items-center gap-1.5 bg-neutral-100 px-4 py-2">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />

        <div className="mx-4 flex-1 rounded-md bg-white px-3 py-1 text-xs text-neutral-500">
          {url}
        </div>
      </div>

      <div className="relative aspect-[16/9] bg-white">
        {children}
      </div>
    </div>
  );
}
