'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaUser, FaLock } from 'react-icons/fa';

interface Props {
  onLogin: (success: boolean) => void;
}

export default function LoginForm({ onLogin }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Environment variables'dan giriş bilgilerini al
    const validUsername = process.env.NEXT_PUBLIC_USERNAME;
    const validPassword = process.env.NEXT_PUBLIC_PASSWORD;
    
    if (username === validUsername && password === validPassword) {
      onLogin(true);
      // Başarılı girişi localStorage'da sakla
      localStorage.setItem('isAuthenticated', 'true');
    } else {
      setError('Kullanıcı adı veya şifre hatalı');
      onLogin(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4"
    >
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-2xl">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6">
            <Image 
              src="/images/logo.png" 
              alt="Logo" 
              width={60} 
              height={60} 
              className="h-15 w-auto"
              priority 
            />
            <Image 
              src="/images/Gedikli_hukuk_yazi2.png" 
              alt="Gedikli Hukuk Yazı" 
              width={180} 
              height={60} 
              className="h-10 w-auto"
              priority 
            />
            {/* <Image 
              src="/images/Gedikli_hukuk1.png" 
              alt="Gedikli Hukuk Yazı" 
              width={160} 
              height={100} 
              className="h-40 w-auto"
              priority 
            /> */}
          </div>
          <h2 className="text-3xl font-light text-gray-900 mb-2">
            Ekibimiz
          </h2>
          <div className="w-16 h-1 bg-rose-800 mb-4"></div>
          <p className="text-sm text-gray-600">
            Lütfen giriş yapınız
          </p>
        </div>

        <motion.form 
          className="mt-8 space-y-6" 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-800 focus:border-rose-800 focus:z-10 sm:text-sm transition-all duration-200"
                placeholder="Kullanıcı Adı"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-800 focus:border-rose-800 focus:z-10 sm:text-sm transition-all duration-200"
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <motion.div 
              className="text-red-500 text-sm text-center bg-red-50 py-2 px-4 rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {error}
            </motion.div>
          )}

          <div>
            <motion.button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-rose-800 hover:bg-rose-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-800 transition-all duration-200 transform hover:scale-[1.02]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Giriş Yap
            </motion.button>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
} 