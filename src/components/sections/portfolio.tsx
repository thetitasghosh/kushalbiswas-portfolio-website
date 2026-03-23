"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  // Play,
  // Pause,
  Volume2,
  VolumeX,
  Maximize,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Category = "all" | "graphic" | "video";
type MediaType = "video" | "image" | "pdf";

interface Project {
  id: number;
  title: string;
  category: Category;
  description: string;
  tags: string[];
  color: string;
  mediaType: MediaType;
  mediaUrl?: string;
  images?: string[];
  thumbnail?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Exelth Promo",
    category: "video",
    description:
      "Promotional video for Exelth brand featuring dynamic motion graphics and cinematic editing with smooth transitions.",
    tags: ["Promo", "Motion Graphics", "Branding"],
    color: "from-cyan-500/20 to-blue-500/20",
    mediaType: "video",
    mediaUrl: "/portfolio/videos/exelth_promo.mp4",
    thumbnail: "/portfolio/thumbnails/exelth_thumbnail.png",
  },
  {
    id: 2,
    title: "Neon Waves",
    category: "video",
    description:
      "Abstract visual reel with neon aesthetic, fluid transitions, and vibrant color grading for a bold visual experience.",
    tags: ["Abstract", "Neon", "Color Grading"],
    color: "from-purple-500/20 to-pink-500/20",
    mediaType: "video",
    mediaUrl: "/portfolio/videos/neon_waves.mp4",
    thumbnail: "/portfolio/thumbnails/neon_thumbnail.png",
  },
  {
    id: 3,
    title: "Netflix Style Reel",
    category: "video",
    description:
      "High-impact intro sequence styled after Netflix aesthetics with bold typography and dramatic transitions.",
    tags: ["Title Sequence", "Typography", "VFX"],
    color: "from-red-500/20 to-rose-500/20",
    mediaType: "video",
    mediaUrl: "/portfolio/videos/netflix.mp4",
    thumbnail: "/portfolio/thumbnails/netflix_thumbnail.png",
  },
  {
    id: 4,
    title: "Susmita Nursery Logo Animation",
    category: "video",
    description:
      "Elegant animated logo reveal for SN brand with smooth motion choreography and synchronized sound design.",
    tags: ["Logo Animation", "Motion", "After Effects"],
    color: "from-slate-500/20 to-zinc-500/20",
    mediaType: "video",
    mediaUrl: "/portfolio/videos/sn_logo_animate_mp4.mp4",
    thumbnail: "/portfolio/thumbnails/sn_logo_thumbnail.png",
  },
  {
    id: 5,
    title: "Your Maker Logo",
    category: "video",
    description:
      "Dynamic logo animation for Your Maker brand with kinetic typography and bold visual energy.",
    tags: ["Logo Animation", "Kinetic", "Branding"],
    color: "from-orange-500/20 to-amber-500/20",
    mediaType: "video",
    mediaUrl: "/portfolio/videos/your_maker_logo_animate.mp4",
    thumbnail: "/portfolio/thumbnails/your_maker_thumbnail.png",
  },
  {
    id: 6,
    title: "Educlass Brand Identity",
    category: "graphic",
    description:
      "Complete brand identity system for Educlass — logo system, business cards, and staff ID card design with a professional yet approachable feel.",
    tags: ["Branding", "Print", "Identity"],
    color: "from-green-500/20 to-teal-500/20",
    mediaType: "image",
    images: [
      "/portfolio/graphics/educlass_preview.png",
      "/portfolio/graphics/educlass_business_card_preview.png",
      "/portfolio/graphics/educlass_id_card_preview.png",
    ],
    thumbnail: "/portfolio/graphics/educlass_preview.png",
  },
  {
    id: 7,
    title: "Krishna's Creation Logo Design",
    category: "graphic",
    description:
      "Minimalist letterform logo design for K brand — concept exploration, refinements, and final presentation deck.",
    tags: ["Logo", "Minimalist", "Presentation"],
    color: "from-indigo-500/20 to-blue-500/20",
    mediaType: "pdf",
    mediaUrl: "/portfolio/pdf/k_logo_presentation.pdf",
    thumbnail: "/portfolio/thumbnails/k_logo_thumbnail.png",
  },
  {
    id: 8,
    title: "Nocturne Logo Design",
    category: "graphic",
    description:
      "Modern geometric logo design for N brand with full brand presentation showcasing real-world applications.",
    tags: ["Logo", "Geometric", "Presentation"],
    color: "from-fuchsia-500/20 to-purple-500/20",
    mediaType: "pdf",
    mediaUrl: "/portfolio/pdf/nlogo_presentation.pdf",
    thumbnail: "/portfolio/thumbnails/nlogo_thumbnail.png",
  },
  {
    id: 9,
    title: "SSD Logo Design",
    category: "graphic",
    description:
      "Dynamic lettermark logo for S brand presented with full usage guidelines, color systems, and brand rules.",
    tags: ["Logo", "Lettermark", "Brand Guidelines"],
    color: "from-amber-500/20 to-yellow-500/20",
    mediaType: "pdf",
    mediaUrl: "/portfolio/pdf/s_logo_presentation.pdf",
    thumbnail: "/portfolio/thumbnails/s_logo_thumbnail.png",
  },
];

const categories = [
  { id: "all" as const, label: "All Work" },
  { id: "graphic" as const, label: "Graphic Design" },
  { id: "video" as const, label: "Video Editing" },
];

// ── Project Info (shared between portrait + stacked layouts) ─────────────────

function ProjectInfo({ project }: { project: Project }) {
  return (
    <>
      <div className="flex flex-wrap gap-2 mb-4 relative">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-secondary rounded-full text-xs text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-1 ">
        {project.title}
      </h3>
      <p className="text-sm text-kushal mb-4">
        {project.category === "graphic" ? "Graphic Design" : "Video Editing"}
      </p>
      <p className="text-muted-foreground leading-relaxed mb-6">
        {project.description}
      </p>
      <Button asChild>
        <a href="#contact">Discuss Similar Project</a>
      </Button>
    </>
  );
}

// ── Video Player ─────────────────────────────────────────────────────────────

function VideoPlayer({
  src,
  portrait = false,
  onAspectDetected,
}: {
  src: string;
  portrait?: boolean;
  onAspectDetected?: (isPortrait: boolean) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    return () => clearTimeout(hideTimerRef.current);
  }, []);

  const scheduleHide = () => {
    clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) setShowControls(false);
    }, 3000);
  };

  const revealControls = () => {
    setShowControls(true);
    scheduleHide();
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
      scheduleHide();
    } else {
      v.pause();
      setIsPlaying(false);
      clearTimeout(hideTimerRef.current);
      setShowControls(true);
    }
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || isNaN(v.duration)) return;
    setCurrentTime(v.currentTime);
    setProgress((v.currentTime / v.duration) * 100);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    const bar = progressBarRef.current;
    if (!v || !bar) return;
    const rect = bar.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    v.currentTime = pct * v.duration;
    setProgress(pct * 100);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const toggleFullscreen = () => {
    const v = videoRef.current;
    if (!v) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    document.fullscreenElement
      ? document.exitFullscreen()
      : v.requestFullscreen();
  };

  const fmt = (s: number) => {
    if (!isFinite(s) || isNaN(s)) return "0:00";
    return `${Math.floor(s / 60)}:${Math.floor(s % 60)
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div
      className={`relative bg-black select-none${portrait ? " h-full flex items-center justify-center" : ""}`}
      onMouseMove={revealControls}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        playsInline
        className={
          portrait
            ? "max-h-full max-w-full w-auto h-auto block"
            : "w-full block"
        }
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => {
          const v = videoRef.current;
          if (!v) return;
          setDuration(v.duration);
          onAspectDetected?.(v.videoHeight > v.videoWidth);
        }}
        onEnded={() => {
          setIsPlaying(false);
          setShowControls(true);
        }}
        onClick={togglePlay}
      />

      {/* Centre play icon when paused */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            key="play-overlay"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            {/* <div className="w-16 h-16 rounded-full bg-kushal/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Play className="w-7 h-7 text-white ml-1" />
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls bar */}
      <motion.div
        animate={{ opacity: showControls ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pt-10 pb-3 px-4"
      >
        {/* Progress bar */}
        <div
          ref={progressBarRef}
          className="w-full h-1 bg-white/20 rounded-full cursor-pointer mb-3 group/prog hover:h-[5px] transition-[height] duration-150"
          onClick={seek}
        >
          <div
            className="h-full bg-kushal rounded-full relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-kushal opacity-0 group-hover/prog:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Buttons row */}
        <div className="flex items-center gap-2">
          {/* <button
            type="button"
            onClick={togglePlay}
            className="text-white hover:text-kushal transition-colors p-1"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button> */}

          <button
            type="button"
            onClick={toggleMute}
            className="text-white/60 hover:text-kushal transition-colors p-1"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>

          <span className="text-white/50 text-xs font-mono">
            {fmt(currentTime)} / {fmt(duration)}
          </span>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="ml-auto text-white/60 hover:text-kushal transition-colors p-1"
          >
            <Maximize className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// ── Image Carousel ────────────────────────────────────────────────────────────

function ImageCarousel({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div className="relative bg-white flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.img
          key={idx}
          src={images[idx]}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="w-full object-contain max-h-[65vh]"
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-kushal hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-kushal hover:text-white transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === idx ? "bg-kushal w-4" : "bg-white/40 w-1.5"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ── Portfolio Section ─────────────────────────────────────────────────────────

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPortraitVideo, setIsPortraitVideo] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Reset portrait detection whenever the open project changes
  useEffect(() => {
    setIsPortraitVideo(false);
  }, [selectedProject?.id]);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const currentIndex = selectedProject
    ? filteredProjects.findIndex((p) => p.id === selectedProject.id)
    : -1;

  const navigate = (dir: "prev" | "next") => {
    if (!selectedProject) return;
    const n =
      dir === "prev"
        ? (currentIndex - 1 + filteredProjects.length) % filteredProjects.length
        : (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[n]);
  };

  return (
    <section id="portfolio" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-kushal text-sm font-medium tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-balance">
            Selected <span className="text-kushal">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated collection of my best projects across graphic design and
            video editing.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-kushal text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] bg-card border border-border rounded-xl overflow-hidden">
                  {/* Thumbnail — real image for image projects, gradient otherwise */}
                  {project.thumbnail ? (
                    <>
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
                    </>
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
                    />
                  )}

                  {/* Video play icon */}
                  {/* {project.mediaType === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-kushal/80 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-5 h-5 text-white ml-0.5" />
                      </div>
                    </div>
                  )} */}

                  {/* PDF icon */}
                  {project.mediaType === "pdf" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
                        <FileText className="w-5 h-5 text-foreground/70" />
                      </div>
                    </div>
                  )}

                  {/* Tags + title */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-background/50 backdrop-blur-sm rounded text-xs text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1 text-white group-hover:text-kushal transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-neutral-300">
                        {project.category === "graphic"
                          ? "Graphic Design"
                          : "Video Editing"}
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-kushal/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-kushal flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-kushal-foreground" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Dialog / Lightbox ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/30 backdrop-blur-lg flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.93, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.93, y: 16 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`relative w-full bg-card border border-border rounded-2xl overflow-hidden flex flex-col max-h-[90vh] ${
                isPortraitVideo && selectedProject.mediaType === "video"
                  ? "max-w-4xl"
                  : selectedProject.mediaType === "pdf"
                    ? "max-w-5xl"
                    : "max-w-3xl"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Dialog header — navigation + close */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 shrink-0">
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => navigate("prev")}
                    className="p-1.5 rounded-lg hover:bg-secondary transition-colors"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-muted-foreground tabular-nums px-1">
                    {currentIndex + 1} / {filteredProjects.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => navigate("next")}
                    className="p-1.5 rounded-lg hover:bg-secondary transition-colors"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg hover:bg-secondary transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* ── Portrait video: video left | info right ── */}
              {selectedProject.mediaType === "video" && isPortraitVideo ? (
                <div className="flex flex-1 overflow-hidden min-h-0">
                  {/* Video column */}
                  <div className="shrink-0 bg-black" style={{ width: "42%" }}>
                    <VideoPlayer
                      key={selectedProject.id}
                      src={selectedProject.mediaUrl!}
                      portrait
                      onAspectDetected={setIsPortraitVideo}
                    />
                  </div>
                  {/* Info column */}
                  <div className="flex-1 overflow-y-auto p-6 min-w-0">
                    <ProjectInfo project={selectedProject} />
                  </div>
                </div>
              ) : (
                /* ── Stacked layout: landscape video / image / pdf ── */
                <div className="overflow-y-auto">
                  {selectedProject.mediaType === "video" &&
                    selectedProject.mediaUrl && (
                      <VideoPlayer
                        key={selectedProject.id}
                        src={selectedProject.mediaUrl}
                        onAspectDetected={setIsPortraitVideo}
                      />
                    )}

                  {selectedProject.mediaType === "image" && (
                    <ImageCarousel
                      key={selectedProject.id}
                      images={
                        selectedProject.images ??
                        (selectedProject.thumbnail
                          ? [selectedProject.thumbnail]
                          : [])
                      }
                    />
                  )}

                  {selectedProject.mediaType === "pdf" &&
                    selectedProject.mediaUrl && (
                      <iframe
                        key={selectedProject.id}
                        src={selectedProject.mediaUrl}
                        className="w-full border-0 bg-white"
                        style={{ height: "60vh" }}
                        title={selectedProject.title}
                      />
                    )}

                  <div className="p-6">
                    <ProjectInfo project={selectedProject} />
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
