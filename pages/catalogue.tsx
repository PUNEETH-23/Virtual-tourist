import React, { useState } from "react";

const Catalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    {
      name: "Urban Cities",
      description:
        "Explore the bustling streets and iconic landmarks of the world's most vibrant cities.",
      videos: [
        { name: "London", videoId: "KGerjHMa90s" },
        { name: "Paris", videoId: "Cnvi6oI3Eno" },
        { name: "New York", videoId: "TRnbMTjjNHQ" },
        { name: "Rajasthan", videoId: "QCCDqtepOLY" },
        { name: "Mumbai", videoId: "CZHFu2BSZPs" },
      ],
    },
    {
      name: "Historical Sites",
      description:
        "Step back in time and visit ancient monuments, temples, and other historical treasures.",
      videos: [
        { name: "Pyramids of Egypt", videoId: "mOuvAJRknXk" },
        { name: "The Taj Mahal", videoId: "Bx2S7JpdOp4" },
        { name: "Chichen Itza", videoId: "W7KTl4r00sI" },
        { name: "Angkor Wat", videoId: "B8UzsVY1IE8" },
        { name: "Luxor ruins", videoId: "ZGWNcvnQQtU" },
      ],
    },
    {
      name: "Relaxation & Nature",
      description:
        "Unwind in serene landscapes, tranquil beaches, and peaceful natural settings.",
      videos: [
        { name: "Maldives", videoId: "jqq_ZdD5Zwg" },
        { name: "Nature", videoId: "7AkbUfZjS5k" },
        { name: "Night sky", videoId: "XucTpkjQQLc" },
        { name: "Forest", videoId: "7AkbUfZjS5k" },
        { name: "Galaxy", videoId: "3offgJ5kSM0" },
      ],
    },
    {
      name: "Thrilling",
      description:
        "Get your adrenaline pumping with exciting, action-packed experiences in daring locations.",
      videos: [
        { name: "Roller coaster", videoId: "oAJLKDMihnU" },
        { name: "Snake Chase", videoId: "X_qfq_xGVwE" },
        { name: "Fear of Heights", videoId: "rNVpFXuAXIA" },
        { name: "Scuba diving", videoId: "2OzlksZBTiA" },
        { name: "Sky diving", videoId: "S5XXsRuMPIU" },
      ],
    },
  ];

  const handleFullScreen = (videoElement: HTMLElement | null) => {
    if (videoElement?.requestFullscreen) {
      videoElement.requestFullscreen();
    }
  };

  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.videos.some((video) =>
        video.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #E8E7AB 0%, #F2AE66 100%)",
        padding: "50px 20px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "3.5rem",
          color: "#C30E59",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Tourism Catalogue
      </h1>

      <input
        type="text"
        placeholder="Search for categories or videos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "90%",
          maxWidth: "600px",
          borderRadius: "8px",
          border: "2px solid #E82561",
          marginBottom: "30px",
          fontSize: "1rem",
        }}
      />

      {selectedVideo ? (
        <div style={{ textAlign: "center" }}>
          <iframe
            id="videoPlayer"
            width="80%"
            height="500"
            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&modestbranding=1&controls=0&rel=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => {
              const videoElement = document.getElementById("videoPlayer");
              handleFullScreen(videoElement);
            }}
          ></iframe>
          <div style={{ marginTop: "20px" }}>
            <button
              onClick={() => setSelectedVideo(null)}
              style={{
                padding: "10px 20px",
                backgroundColor: "#E82561",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            >
              Back to Catalogue
            </button>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category.name ? null : category.name
                )
              }
              style={{
                background: "linear-gradient(145deg, #E82561, #F2AE66)",
                padding: "20px",
                borderRadius: "12px",
                textAlign: "center",
                cursor: "pointer",
                boxShadow: "0 6px 20px rgba(227, 37, 97, 0.3)",
                transition: "transform 0.3s",
                border: "1px solid #C30E59",
              }}
            >
              <h2 style={{ color: "#C30E59", marginBottom: "15px" }}>
                {category.name}
              </h2>
              <p style={{ color: "#E8E7AB", marginBottom: "10px" }}>
                {category.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalogue;
