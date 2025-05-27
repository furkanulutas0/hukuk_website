'use client';
import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

interface Article {
    title: string;
    content: string;
    date: string;
    slug: string;
}

interface ArticleDetailClientProps {
    article: Article;
}

export default function ArticleDetailClient({ article }: ArticleDetailClientProps) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeIn = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
            className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
        >
            <motion.div 
                variants={stagger}
                className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
            >
                <div className="max-w-3xl mx-auto">
                    {/* Breadcrumb */}
                    <motion.nav 
                        variants={fadeIn}
                        className="flex mb-8 text-sm text-gray-500"
                    >
                        <motion.a
                            href="/haberlerVeMakaleler"
                            className="hover:text-[#9B1B30] transition-colors"
                            whileHover={{ scale: 1.05 }}
                        >
                            Haberler ve Makaleler
                        </motion.a>
                        <span className="mx-2">/</span>
                        <span className="text-[#9B1B30]">{article.title}</span>
                    </motion.nav>

                    {/* Article Header */}
                    <motion.div
                        variants={fadeIn}
                        className="mb-12"
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            {article.title}
                        </h1>
                        <div className="flex items-center space-x-4 text-gray-600">
                            <time className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                {article.date}
                            </time>
                        </div>
                    </motion.div>

                    {/* Article Content */}
                    <motion.div
                        variants={fadeIn}
                        className="prose prose-lg max-w-none"
                    >
                        <div
                            className="article-content text-gray-700"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />
                    </motion.div>

                    {/* Share Section */}
                    <motion.div
                        variants={fadeIn}
                        className="mt-12 pt-8 border-t border-gray-200"
                    >
                        
                    </motion.div>
                </div>
            </motion.div>

            {/* Back to Articles Button */}
            <motion.div
                variants={fadeIn}
                className="fixed bottom-8 right-8"
            >
                <motion.a
                    href="/haberlerVeMakaleler"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-6 py-3 bg-[#9B1B30] text-white rounded-lg shadow-lg hover:bg-[#7a1525] transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Tüm Makaleler
                </motion.a>
            </motion.div>
        </motion.div>
    );
} 