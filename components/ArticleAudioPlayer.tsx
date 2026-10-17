import React, { useEffect, useRef, useState } from 'react';
import { Download, Headphones, Pause, Play, RotateCcw } from 'lucide-react';

interface ArticleAudioPlayerProps {
  title: string;
  url: string;
  downloadUrl: string;
  durationSeconds: number;
}

const PLAYBACK_SPEEDS = [1, 1.25, 1.5, 2];

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';

  const roundedSeconds = Math.floor(seconds);
  const minutes = Math.floor(roundedSeconds / 60);
  const remainingSeconds = roundedSeconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const ArticleAudioPlayer: React.FC<ArticleAudioPlayerProps> = ({
  title,
  url,
  downloadUrl,
  durationSeconds,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(durationSeconds);
  const [buffered, setBuffered] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!('mediaSession' in navigator)) return;

    navigator.mediaSession.metadata = new MediaMetadata({
      title,
      artist: 'Yellowlights.ai Journal',
      album: 'AI-generated audio overview',
    });

    return () => {
      navigator.mediaSession.metadata = null;
    };
  }, [title]);

  const updateDuration = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (Number.isFinite(audio.duration) && audio.duration > 0) {
      setDuration(audio.duration);
    }
    setIsLoading(false);
  };

  const updateBuffered = () => {
    const audio = audioRef.current;
    if (!audio || audio.buffered.length === 0 || !Number.isFinite(audio.duration)) {
      setBuffered(0);
      return;
    }

    setBuffered((audio.buffered.end(audio.buffered.length - 1) / audio.duration) * 100);
  };

  const handleTogglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      return;
    }

    setIsLoading(true);
    try {
      await audio.play();
    } catch {
      setIsLoading(false);
      setError('Playback could not start. Please try again or download the audio.');
    }
  };

  const handleRetry = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    setError(null);
    setIsLoading(true);
    setBuffered(0);
    audio.load();
    audio.playbackRate = playbackRate;

    try {
      await audio.play();
    } catch {
      setIsLoading(false);
      setError('Playback is still unavailable. Please try again or download the audio.');
    }
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const nextTime = Number(event.target.value);
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const handlePlaybackRateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const nextRate = Number(event.target.value);
    audio.playbackRate = nextRate;
    setPlaybackRate(nextRate);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const progressBackground = `linear-gradient(to right, #27272a 0%, #27272a ${progress}%, #c8c2b7 ${progress}%, #c8c2b7 ${Math.max(progress, buffered)}%, #ded8ce ${Math.max(progress, buffered)}%, #ded8ce 100%)`;

  return (
    <section
      aria-labelledby="article-audio-title"
      className="mt-12 rounded-2xl border border-[#ddd5c7] bg-[#f8f5ef] px-5 py-6 sm:px-7 sm:py-7"
    >
      <audio
        ref={audioRef}
        src={url}
        preload="metadata"
        onLoadedMetadata={updateDuration}
        onDurationChange={updateDuration}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onProgress={updateBuffered}
        onLoadStart={() => setIsLoading(true)}
        onWaiting={() => setIsLoading(true)}
        onCanPlay={() => setIsLoading(false)}
        onPlaying={() => {
          setIsPlaying(true);
          setIsLoading(false);
          setError(null);
        }}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onError={() => {
          setIsPlaying(false);
          setIsLoading(false);
          setError('The audio is temporarily unavailable. You can try again or use the download link.');
        }}
      />

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3 text-zinc-800">
          <Headphones aria-hidden="true" className="shrink-0 text-yellow-700" size={22} strokeWidth={1.8} />
          <h2 id="article-audio-title" className="text-sm font-semibold uppercase tracking-[0.12em] sm:text-base">
            Listen to the discussion
          </h2>
        </div>
        <span className="shrink-0 text-sm text-zinc-500">{Math.round(durationSeconds / 60)} min</span>
      </div>

      <h3 className="mt-8 text-xl font-medium leading-snug text-zinc-800 sm:text-2xl">{title}</h3>
      <p className="mt-3 text-base font-light leading-relaxed text-zinc-500 sm:text-lg">
        An AI-generated, podcast-style exploration of the article.
      </p>

      <div className="mt-6 grid grid-cols-[3.5rem_minmax(0,1fr)] items-center gap-x-4 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-x-5">
        <button
          type="button"
          onClick={error ? handleRetry : handleTogglePlayback}
          aria-label={error ? 'Retry audio' : isPlaying ? 'Pause audio' : 'Play audio'}
          className="row-span-2 flex h-14 w-14 items-center justify-center rounded-full bg-zinc-800 text-white transition-colors hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f8f5ef] sm:h-16 sm:w-16"
        >
          {error ? (
            <RotateCcw aria-hidden="true" size={24} />
          ) : isPlaying ? (
            <Pause aria-hidden="true" size={24} fill="currentColor" />
          ) : (
            <Play aria-hidden="true" size={24} fill="currentColor" className="ml-0.5" />
          )}
        </button>

        <input
          type="range"
          min="0"
          max={duration || durationSeconds}
          step="0.1"
          value={Math.min(currentTime, duration || durationSeconds)}
          onChange={handleSeek}
          disabled={Boolean(error)}
          aria-label="Audio position"
          aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
          className="audio-progress h-2 w-full cursor-pointer appearance-none rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-4 focus-visible:ring-offset-[#f8f5ef] disabled:cursor-not-allowed"
          style={{ background: progressBackground }}
        />

        <div className="mt-2 flex min-h-8 items-center justify-between gap-3 text-sm text-zinc-500">
          <span>{formatTime(currentTime)}</span>
          <div className="flex items-center gap-3">
            {isLoading && !error && <span role="status" className="text-xs">Loading audio…</span>}
            <span>{formatTime(duration)}</span>
            <label className="sr-only" htmlFor="audio-playback-speed">Playback speed</label>
            <select
              id="audio-playback-speed"
              value={playbackRate}
              onChange={handlePlaybackRateChange}
              className="min-h-11 rounded-lg bg-transparent px-2 font-medium text-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600"
            >
              {PLAYBACK_SPEEDS.map((speed) => (
                <option key={speed} value={speed}>{speed}×</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-4 text-sm text-red-700">
          {error} Use the Retry button to reload the audio.
        </p>
      )}

      <div className="mt-7 flex flex-col gap-4 border-t border-[#ded7cb] pt-5 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <span>AI-generated audio overview</span>
        <a
          href={downloadUrl}
          download
          className="flex min-h-11 items-center gap-2 self-start rounded-lg px-2 text-zinc-600 transition-colors hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 sm:self-auto"
          aria-label={`Download ${title}`}
        >
          <Download aria-hidden="true" size={18} />
          Download
        </a>
      </div>
    </section>
  );
};

export default ArticleAudioPlayer;
