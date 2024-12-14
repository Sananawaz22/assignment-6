"use client";
import React from 'react';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Logo from '@/components/Logo';
import Category from '@/components/Category';
import Achievements from '@/components/Achievements';
import Courses from '@/components/Courses';
import Team from '@/components/Team';
import Testimonails from '@/components/Testimonails';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Logo />
    <Category />
    <Achievements />
    <Courses />
    <Team />
    <Testimonails />
    <Footer />
    </>
  );
};