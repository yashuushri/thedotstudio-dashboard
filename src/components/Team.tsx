import { motion } from 'framer-motion';

const teamCategories = [
  {
    title: "Head",
    members: [
      {
        name: 'Yash Shrivastava',
        role: 'Founder',
        image: 'https://cdn.discordapp.com/attachments/1483810861393907827/1483811271743766578/IMG_20260218_095923_890.webp?ex=69bbf26f&is=69baa0ef&hm=2c9822a2bf3a43c7391f342924136c1ad666f4a192387c28b63f207bee8e6cd3&',
      },
      {
        name: 'Riya Kapoor',
        role: 'CEO',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQE15Pwn_qVRKg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1682261036554?e=1775692800&v=beta&t=Ed-5vYL3fIyjlWQTWMu_9wAJuNyirrXqxjgI1l2AkMs',
      },
      {
        name: 'Arjun Mehta',
        role: 'CTO',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLPNd7nE9VnLtZjJB3b6QLAvGnFg-hS8KhA&s',
      },
      {
        name: 'Kavya reddy',
        role: 'Head of Operations',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThKvBYm_v0QHKQoDvJYR1QiU9reXn1W6efpw&s',
      }
    ]
  },
  {
    title: "Engineer",
    members: [
      {
        name: 'Rahul Verma',
        role: 'Lead AI Engineer',
        image: 'https://media.discordapp.net/attachments/1416824913607655434/1461054750085611591/images_5.jpg?ex=69bc3745&is=69bae5c5&hm=82fb07f02d7a2bd314f29db21574b0deca48640a0a0d00bb444a60bf1a99c6ba&=&format=webp&width=619&height=774',
      },
      {
        name: 'Elsa Singer',
        role: 'AI Systems Architect',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQEUbUQH2PRYyA/profile-displayphoto-crop_800_800/B4DZieftSVHYAI-/0/1755005769445?e=1775692800&v=beta&t=4CmvJpftrewo-vxGxFiGjmFG9mitfq2UzRdvXSELsd0',
      },
      {
        name: 'Sneha Iyer',
        role: 'Machine Learning Engineer',
        image: 'https://southindiafashion.com/wp-content/uploads/2021/06/Mehreen-pirzada-in-bhumika-grover-anarkali-for-an-ad-shoot-4.jpg',
      },
      {
        name: 'Gurpreet Singh',
        role: 'Backend Engineer',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGb2myW7flKB_Fdt10WXNsQhT67MxwUuLuQg&s',
      },
      {
        name: 'Dev Patel',
        role: 'Full Stack Developer',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6KMG1xd7jDxtHPH2j8XggG9qWACQMIL725w&s',
      },
      {
        name: 'adem',
        role: 'Cloud Engineer',
        image: 'https://media.licdn.com/dms/image/v2/D4E03AQF-x2Q9WTE-FQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729008013061?e=1775692800&v=beta&t=Umn74Qgj_LRsXL1zTwVHZzzX8v0clMBuFes6WAHUTdU',
      },
      {
        name: 'Aman verma',
        role: 'Automation Engineer',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY7PCyQb-fzUy865CVa98lDMbIvKvHMOwaZw&s',
      },
      {
        name: 'Ankit Sharma',
        role: 'AI Research Engineer',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrA-IhzmITprgUnzpxdXgC1ADMQQ_L5MWAqg&s',
      }
    ]
  },
  {
    title: "Specialist",
    members: [
      {
        name: 'Neha Gupta',
        role: 'Creative Director',
        image: 'https://media.licdn.com/dms/image/v2/D4D03AQHBhjmVsWsLzA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706082127119?e=2147483647&v=beta&t=MTHXQk9th3CJKXFc4_mt57Z_dhHplbj2-PbQmiBM0A4',
      },
      {
        name: 'Simran Kaur',
        role: 'Content Manager',
        image: 'https://media.licdn.com/dms/image/v2/D5603AQGYy885_O-0VQ/profile-displayphoto-shrink_200_200/B56ZfLQpcOGoAc-/0/1751461829460?e=2147483647&v=beta&t=8rxLhv3ebXM1peGqnDPnhNEHloJCZqLatokIE_BNekA',
      },
      {
        name: 'Aditya Malhotra',
        role: 'YouTube Strategist',
        image: 'https://www.wahstory.com/images/posts/aditya1620424259.webp',
      },
      {
        name: 'Varun Khanna',
        role: 'Growth Analyst',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hKXg1xipaKfCzxMRCXoqUTRSslHRCwonVg&s',
      }
    ]
  },
  {
    title: "Management",
    members: [
      {
        name: 'Nikhil Bansal',
        role: 'Client Success Manager',
        image: 'https://indianfilmhistory.com/admin_panel_new_dev/media/celebrity/mehul-agaja-celebrities-cb-indian-film-history.jpg',
      },
      {
        name: 'Rohan Sethi',
        role: 'Sales Specialist',
        image: 'https://static.businessworld.in/Untitled%20design%20-%202024-10-04T161926.813_20241004161944_original_image_50.webp',
      },
      {
        name: 'Mehul Joshi',
        role: 'Project Manager',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIiik723n2AiPuakUa06rnYsC4IbWUzNS9HFU9N6aj_g&s',
      },
      {
        name: 'Tania Arora',
        role: 'Workflow Manager',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8xTupieQiRyU1Kh5jWqGyeHO3FgdldrGYxQ&s',
      }
    ]
  }
];

export const Team = () => {
  return (
    <main className="pt-32 pb-20 min-h-screen bg-[#050505] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
          >
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600">Architects</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-3xl mx-auto"
          >
            We are the engineers, strategists, and visionaries building the future of AI content production.
          </motion.p>
        </div>

        <div className="space-y-24">
          {teamCategories.map((category) => (
            <div key={category.title} className="relative">
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-8 md:mb-12 flex items-center gap-4"
              >
                <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">{category.title}</h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent mt-1 md:mt-2"></div>
              </motion.div>

              {/* Members Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {category.members.map((member) => {
                  const isHead = category.title === "Head";
                  return (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="group relative"
                  >
                    {isHead && (
                      <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-2xl opacity-50 blur-[2px] group-hover:opacity-100 transition-opacity duration-500" />
                    )}
                    {/* Card Container */}
                    <div className={`relative h-full backdrop-blur-md rounded-2xl p-6 overflow-hidden transition-all duration-300 ease-out flex flex-col items-center text-center ${isHead ? 'bg-[#0a0a0a] border-white/10 hover:border-purple-500/50 shadow-[0_0_20px_-5px_rgba(168,85,247,0.15)]' : 'bg-white/[0.02] border-white/[0.05] hover:border-purple-500/30'}`}>
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/0 via-transparent to-purple-500/0 group-hover:from-purple-500/5 group-hover:to-transparent transition-all duration-500 opacity-0 group-hover:opacity-100" />
                      
                      {/* Profile Image */}
                      <div className={`relative mb-5 rounded-full overflow-hidden border transition-colors duration-300 ease-out ${isHead ? 'w-32 h-32 md:w-36 md:h-36 border-purple-500/30 group-hover:border-purple-400' : 'w-28 h-28 md:w-32 md:h-32 border-white/10 group-hover:border-purple-500/40'}`}>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          loading="lazy"
                        />
                      </div>

                      {/* Info */}
                      <div className="relative z-10">
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-1.5 tracking-tight">{member.name}</h3>
                        <p className="text-xs md:text-sm font-medium text-purple-400/90 group-hover:text-purple-300 transition-colors duration-300">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
