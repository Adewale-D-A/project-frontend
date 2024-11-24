export default function EmbedYouTube({
  start,
  end,
}: {
  start: number;
  end: number;
}) {
  return (
    <div className=" w-full">
      <iframe
        className="w-full h-96"
        src={`https://www.youtube.com/embed/BkJMSjbsUEQ?start=${start}&end=${end} `}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}
