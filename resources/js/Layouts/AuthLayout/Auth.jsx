import React from "react";

export default function Auth({children}){

    const backgroundImage = 'assets/img/register_bg_2.png';
    return (
        <>
            <main>
                <section className="relative w-full h-full py-40 min-h-screen">
                    <div className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full bg-cover"
                        style={{
                        backgroundImage:
                            `url(${backgroundImage})`,
                        }}
                    ></div>
                    {children}
                </section>
            </main>
        </>
    )
}