import React from "react";

// const Project = () => {
//     return(
//         <div className="" >
//             <div className="container grid grid-cols-2 items-center">

// <p className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-7 "><h1 className="text-center">Zero-risk </h1>Pay 100% upfront and put us to the test! If within 20 days we don't hit the right note, claim a 100% refund. No ifs, no buts, just your trust in our commitment.</p>

//                 <p className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"><h1 className="text-center">Tailored ad strategy</h1>Your business isn't cookie-cutter, and neither are our strategies. At Profitcast, it's personalized perfection, always!</p>

//                 <p className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 "><h1 className="text-center">Maximized ROI</h1>Every penny you invest is optimized with precision, ensuring maximum returns with Profitcast's expertise.</p>

//                 <p className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  "><h1 className="text-center">Feedback focused</h1>We listen, adapt, and evolve, always keeping your feedback at the forefront. With Profitcast, it's a collaborative crescendo!</p>

//             </div>
//         </div>
//     )
// }

// export default Project;

const Project = () => {
  const data = [
    {
      img: "https://res.cloudinary.com/du9rsmpex/image/upload/v1698933810/profitcast/Credit-Card-01_qlkg0p.webp",
      titel: "Zero-risk",
      details: `Pay 100% upfront and put us to the test! If within 20 days we don't hit the right note, claim a 100% refund. No ifs, no buts, just your trust in our commitment.`,
    },
    {
      img: "https://res.cloudinary.com/du9rsmpex/image/upload/v1698933810/profitcast/Business-Idea-01_tw9ebk.webp",
      titel: "Tailored ad strategy",
      details: `Your business isn't cookie-cutter, and neither are our strategies. At Profitcast, it's personalized perfection, always!`,
    },
    {
      img: "https://res.cloudinary.com/du9rsmpex/image/upload/v1698933818/profitcast/Puzzle-01_xthm4a.webp",
      titel: "Maximized ROI",
      details: `Every penny you invest is optimized with precision, ensuring maximum returns with Profitcast's expertise.`,
    },
    {
      img: "https://res.cloudinary.com/du9rsmpex/image/upload/v1698933828/profitcast/Work-Process-01_npv7vq.webp",
      titel: "Feedback focused",
      details: `We listen, adapt, and evolve, always keeping your feedback at the forefront. With Profitcast, it's a collaborative crescendo!`,
    },
  ];

  return (
    <div className="shadow-2xl bg-gray-200 rounded-lg m-10 text-center p-5">
      <div>
        <h1 className="font-rubik text-4xl font-bold text-center pt-9">
          Why work with Profitcast?💡🏆
        </h1>
        <p className="text-gray-700">Epic results, zero fluff.</p>
        <div className="container mx-auto p-4 text-left mb-5 grid grid-cols-1 sm:grid-cols-2  gap-8">
          {data.map(({ titel, details, img }, index) => (
            <div
              key={index}
              className="bg-white rounded flex w-[500px] h-[200] p-10"
            >
              <img className="w-20 h-20" src={img} />
              <div>
                <h1 className="text-2xl text-left">{titel}</h1>
                <h1>{details}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button className="bg-orange-600 text-xl font-rubik rounded px-4 py-2 text-white ">
          Contact Us
        </button>
      </div>
    </div>
  );
};
export default Project;
