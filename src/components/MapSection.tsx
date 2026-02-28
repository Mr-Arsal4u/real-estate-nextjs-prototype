export default function MapSection({ address }: { address: string }) {
  const url = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  return (
    <div className="overflow-hidden rounded-lg border border-muted-2 bg-white shadow">
      <iframe
        title="Location map"
        src={url}
        className="h-[360px] w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
