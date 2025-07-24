'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="h-screen flex items-center justify-center relative overflow-hidden"
		>
			<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,1))]" />
			</div>

			<div className="relative z-10 text-center">
				<motion.h1
					initial={{ y: 50 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
				>
					Sharvani Mathur
				</motion.h1>
				<motion.p
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="text-lg md:text-xl text-gray-300 mb-8 px-4"
				>
					Designing Frontends that Scale, Perform, and Delight
				</motion.p>
                <motion.p
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="text-md md:text-md text-gray-300 mt-20 mb-8 px-4 w-1/2 mx-auto"
				>
					I'm a frontend engineer with 8+ years of experience turning complex problems into fast, elegant interfaces. From leading React + TypeScript builds to crafting scalable microfrontends and reusable component libraries, I blend performance engineering with design precision. Whether mentoring teams or optimizing for speed, I build frontends that not only work—but wow.
				</motion.p>

				<div className="mx-auto mb-8 w-64 h-64 rounded-full border-4 border-transparent shadow-lg flex items-center justify-center">
					<img
						src="/sharvani.jpg" // Replace with your image path
						alt="Sharvani Mathur"
						className="w-64 h-64 rounded-full object-cover shadow-lg"
					/>
				</div>
			</div>
			<motion.div
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.6 }}
				className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
			>
				<div className="animate-bounce">
					<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</div>
			</motion.div>
		</motion.section>
	);
}
