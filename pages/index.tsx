import React from "react";
import { NextPage } from "next";
import { Layout } from "../components/Layout";
import axios from "axios";

const P: React.FC = ({ children }) => <p className="py-2 px-3">{children}</p>;

const Home: NextPage = () => {
  if (typeof window !== "undefined") {
    const { host, protocol } = window.location;
    axios
      .get(`${protocol}//${host}/.netlify/functions/hello`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <Layout title="Mike Short">
      <div className="home-pic h-screen bg-cover bg-center bg-no-repeat relative">
        <h1 className="text-center text-6xl pt-32 absolute z-10 w-full text-gray-200 tracking-widest font-mono">
          Mike Short
        </h1>
        <div className="h-full bg-gray-800 opacity-50"></div>
      </div>
      <div
        id="about"
        className="px-10 font-mono bg-gray-800 text-white pt-10 pb-16"
      >
        <h2 className="text-4xl text-center">About Me</h2>
        <P>
          I started coding as professional development. I worked with
          international students and found myself needing resources for them
          that weren&apos;t readily available or were outside the budget of our
          program. However, about a month into the FreeCodeCamp curriculum, I
          found myself working until 2-3am every night to develop projects. I
          had to turn to myself and ask, &ldquo;Why am I treating this like a
          side gig?&rdquo;
        </P>
        <P>
          Since then I&apos;ve worked as a freelancer, helping others make their
          dreams and ideas a reality. I&apos;ve also been certified as a Full
          Stack Developer and have gone from making stop-gap products to fully
          functioning applications. What has not changed, however, is that I
          still design my sites for English language learners. What this means
          is that I rely less on written instruction than on the flow and
          simplicity of the user experience.
        </P>
        <P>
          Both in and outside of my coding career, I have frequently been
          described by those I work with as hard-working and innovative. As one
          former employer said &ldquo;Mike will never come to you with a problem
          that he&apos;s discovered, without having at least one viable solution
          for fixing it&rdquo;. This is the effort that I will bring to your
          project. Have a deadline? I&apos;ll meet it. Having issues? I&apos;ll
          help solve them.
        </P>
      </div>
    </Layout>
  );
};

export default Home;
