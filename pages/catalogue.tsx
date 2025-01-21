import React, { useState } from "react";

const Catalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #F5EFFF 0%, #E5D9F2 100%)",
        padding: "50px 20px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          color: "#A294F9",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Tourism Catalogue
      </h1>

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
                backgroundColor: "#CDC1FF",
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
          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category.name ? null : category.name
                )
              }
              style={{
                background: "linear-gradient(145deg, #E5D9F2, #F5EFFF)",
                padding: "20px",
                borderRadius: "12px",
                textAlign: "center",
                cursor: "pointer",
                boxShadow: "0 6px 20px rgba(154, 137, 229, 0.3)",
                transition: "transform 0.3s",
                border: "1px solid #CDC1FF",
              }}
            >
              <h2 style={{ color: "#A294F9", marginBottom: "15px" }}>
                {category.name}
              </h2>
              <p style={{ color: "#7E5FD3", marginBottom: "10px" }}>
                {category.description}
              </p>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <a
          href="https://chatbot-y69cjuqsxtjgkcice2n7vy.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "1.2rem",
            color: "#A294F9",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Click here to chat with our Virtual Tourist Assistant
        </a>
      </div>
    </div>
  );
};

export default Catalogue;
