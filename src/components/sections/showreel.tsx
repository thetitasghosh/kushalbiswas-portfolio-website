"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

export function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section id="showreel" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-kushal text-sm font-medium tracking-widest uppercase">
            Showreel
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-balance">
            See My Work in <span className="text-kushal">Action</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A cinematic compilation of my best video editing, motion graphics,
            and 3D animation work.
          </p>
        </motion.div>

        {/* Video container */}
        <motion.div
          className="relative aspect-video bg-card border border-border rounded-2xl overflow-hidden group"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Placeholder video - replace with actual video */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster=""
            muted={isMuted}
            loop
            playsInline
            onEnded={() => setIsPlaying(false)}
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />

          {/* Play button overlay */}
          {!isPlaying && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.button
                type="button"
                className="w-24 h-24 rounded-full bg-kushal flex items-center justify-center shadow-lg shadow-kushal/25"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                aria-label="Play showreel"
              >
                <Play className="w-10 h-10 text-kushal-foreground ml-1" />
              </motion.button>
            </motion.div>
          )}

          {/* Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="p-2 bg-background/50 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
              </button>
              <button
                type="button"
                className="p-2 bg-background/50 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-foreground">Showreel 2024</span>
              <button
                type="button"
                className="p-2 bg-background/50 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                onClick={toggleFullscreen}
                aria-label="Toggle fullscreen"
              >
                <Maximize className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Decorative corner accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-kushal/50" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-kushal/50" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-kushal/50" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-kushal/50" />
        </motion.div>

        {/* Video info */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-8 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-kushal rounded-full" />
            <span>4K Resolution</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-kushal rounded-full" />
            <span>Motion Graphics</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-kushal rounded-full" />
            <span>3D Animation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-kushal rounded-full" />
            <span>Color Grading</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
