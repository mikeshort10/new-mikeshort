import React from "react";
import { NextPage } from "next";
import { Layout } from "../components/Layout";
import axios from "axios";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-server-lambda";

const P: React.FC = ({ children }) => (
  <p className="py-2 my-2 mx-auto text-gray-400">{children}</p>
);

const H3: React.FC = ({ children }) => <h3 className="text-2xl">{children}</h3>;

const Home: NextPage = () => {
  if (typeof window !== "undefined") {
    // const { host, protocol } = window.location;
    // axios
    //   .get(`${protocol}//${host}/.netlify/functions/hello`)
    //   .then((res) => console.log("lambda", res.data))
    //   .catch((err) => console.log("lambda", err));
    // axios
    //   .get(`${protocol}//${host}/.netlify/functions/hello`)
    //   .then((res) => console.log("api", res.data))
    //   .catch((err) => console.log("api", err));
  }
  const { data, error } = useQuery(gql`
    query Ping {
      ping
    }
  `);

  console.log(data, error);
  return (
    <Layout title="Mike Short">
      <div className="home-pic h-screen bg-cover bg-center bg-no-repeat relative">
        <h1
          className="text-6xl pt-12 absolute z-10 text-blue-800 tracking-widest font-mono w-1/2 right-0"
          style={{ minWidth: "30rem" }}
        >
          Mike Short
        </h1>
        <div className="h-full bg-gray-200 opacity-25"></div>
      </div>
      <div
        id="about"
        className="px-10 font-mono bg-blue-800 text-white pt-10 pb-16"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl text-center">About Me</h2>
          <H3>Mike the Programmer</H3>
          <P>
            Full-stack developer and big believer in functional, beautiful code.
            Favorite languages include TypeScript and GraphQL.
          </P>
          <H3>Mike the Professional</H3>
          <P>
            Hard-working, innovative developer who loves learning new tech and
            providing create solutions to everyday problems.
          </P>
          <H3>Mike the Person</H3>
          <P> Outdoorsman, lover of literature, and craft beer consumer.</P>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
