import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export default function Demo() {
  const navigate = useNavigate();

  const YOUTUBE_IDS = [
    'sTYDamz_9a8',
    'RFGfkOLGsEM',
    'F4e2kqM2b4w',
    'HoYxnaJwFPI',
    'ACbfd5cy6AA',
    'apA3ZZlRhD8',
  ];

  const VEED_CLIPS = [
    'https://cdn-site-assets.veed.io/HP_Autosubtitles_re_encoded_64dd26ed76/HP_Autosubtitles_re_encoded_64dd26ed76.webm',
    'https://cdn-site-assets.veed.io/HP_AI_Text_to_Video_re_encoded_265b4aa7f3/HP_AI_Text_to_Video_re_encoded_265b4aa7f3.webm',
    'https://cdn-site-assets.veed.io/HP_Clips_re_encoded_b6c576105e/HP_Clips_re_encoded_b6c576105e.webm',
    'https://cdn-site-assets.veed.io/HP_AI_Avatars_re_encoded_fb515cae14/HP_AI_Avatars_re_encoded_fb515cae14.webm',
    'https://cdn-site-assets.veed.io/AI_Magic_Cut_722bac84a2/AI_Magic_Cut_722bac84a2.mp4',
    'https://cdn-site-assets.veed.io/AI_AI_Translate_3466d5d16d/AI_AI_Translate_3466d5d16d.mp4',
    'https://cdn-site-assets.veed.io/AI_AI_Background_Removal_22e08373c0/AI_AI_Background_Removal_22e08373c0.mp4',
    'https://cdn-site-assets.veed.io/AI_Clone_Yourself_3dde6b2809/AI_Clone_Yourself_3dde6b2809.mp4',
    'https://cdn-site-assets.veed.io/AI_AI_Voice_Cloning_89a96ce0e4/AI_AI_Voice_Cloning_89a96ce0e4.mp4',
    'https://cdn-site-assets.veed.io/AI_Text_to_Speech_188ca261ce/AI_Text_to_Speech_188ca261ce.mp4'
  ];

  const PLATFORM_IMAGES = [
    'https://cdn-site-assets.veed.io/cdn-cgi/image/width=1536,quality=75,format=auto/One_click_editing_with_AI_81f0a7ee99/One_click_editing_with_AI_81f0a7ee99.png',
    'https://cdn-site-assets.veed.io/cdn-cgi/image/width=1536,quality=75,format=auto/Online_video_maker_for_social_media_and_business_e8b06ea664/Online_video_maker_for_social_media_and_business_e8b06ea664.png',
    'https://cdn-site-assets.veed.io/cdn-cgi/image/width=1536,quality=75,format=auto/Translate_subtitles_audio_and_more_07a7246f63/Translate_subtitles_audio_and_more_07a7246f63.png',
    'https://cdn-site-assets.veed.io/cdn-cgi/image/width=1536,quality=75,format=auto/A_complete_video_editing_software_for_content_creators_5c4f025075/A_complete_video_editing_software_for_content_creators_5c4f025075.png',
    'https://cdn.prod.website-files.com/616e938268c8f0a92cb2b540/67c1b691636e27f0a75ce6ba_AI%20Video%20Production-p-1600.png'
  ];

  return (
    <div className="min-h-screen bg-[#030303] pt-32 pb-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-900/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute top-[40%] left-1/4 w-[800px] h-[800px] bg-cyan-900/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-white/80">The Full AI Engine in Action</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight"
          >
            Stop guessing. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-cyan-400">
              Watch the System Work.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto mb-10"
          >
            From generating scripts to publishing hyper-realistic AI videos. Take a look inside the pipeline that produces millions of views.
          </motion.p>
        </div>

        {/* SECTION 1: YouTube Showcases (Vertical & Horizontal Outputs) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Creator Showcases</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent ml-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {YOUTUBE_IDS.map((id, index) => (
              <div 
                key={id}
                className="relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-2xl group aspect-[9/16] md:aspect-video"
                style={{
                  gridRowEnd: index % 2 === 0 ? "span 2" : "span 1"
                }}
              >
                {/* 
                  Trick to hide YouTube elements:
                  - modestbranding=1
                  - controls=0 
                  - scale-105 to crop edges
                */}
                <iframe
                  src={`https://www.youtube.com/embed/${id}?autoplay=0&controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&playsinline=1`}
                  title={`Demo Video ${index}`}
                  className="absolute top-0 left-0 w-full h-full scale-[1.05]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {/* Optional overlay to prevent clicking and forcing pause/play only if needed, but if they want to play it, they need to click the iframe. We leave it clickable. */}
                <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* SECTION 2: Platform Features (Webm / Mp4 loops) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Automated Production Lines</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent ml-6"></div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {VEED_CLIPS.map((src, index) => (
              <div 
                key={index} 
                className="relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/5 break-inside-avoid shadow-2xl group"
              >
                <video
                  src={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* SECTION 3: Platform UX Images */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Inside The Engine</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent ml-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PLATFORM_IMAGES.map((src, index) => (
              <div 
                key={index}
                className={`relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 group ${index === 0 ? 'md:col-span-2' : ''}`}
              >
                <img 
                  src={src} 
                  alt="Platform Interface" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center relative py-20 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Seen Enough?</h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto font-light">
            You've seen the quality. You've seen the automation. Now it's time to build your own channels.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <Button size="xl" onClick={() => navigate('/')}>
              Get Full System
            </Button>
            <Button size="xl" variant="outline" onClick={() => navigate('/pricing')}>
              View Pricing
            </Button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
