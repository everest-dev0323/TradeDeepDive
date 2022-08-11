import React from "react";

export default function Why() {
  return (
    <div className="flex h-full items-center justify-evenly xs:flex-col xs:mx-28 sm:mx-16">
      <div className="duration-100 hover:scale-[1.1] cursor-pointer">
        <img className="min-w-[100px] min-h-[100px]" src="./assets/svg/play.svg" alt="" />
      </div>
      <div className="text-white font-sans max-w-xl">
        <h3 className="font-bold text-4xl xs:hidden">Testimonials</h3>
        <p className="text-xl xs:text-center">Take a listen to some of the exceptional individuals that have been through the mentor program. Here whats they have to say about the process and the people.
        <br/><br/>One day we hope we can add you to this section to help others get onboard too!s</p>
      </div>
    </div>
  )
}
