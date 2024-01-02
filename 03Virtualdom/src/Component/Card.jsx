// import React from 'react'

const Card = ({ username, btn="visitme" }) => {

    // console.log(props.username);
    console.log(username);
    return (
        <figure className="bg-slate-100 rounded-xl dark:bg-slate-800">
            <img className="w-24 h-24" src="/sarah-dayan.jpg" alt="" width="384" height="512" />

            <div className="pt-6 space-y-4">
                <blockquote>
                    <p className="text-lg">
                        “Tailwind CSS is the only framework thatve seen scale
                        on large teams. It’s easy to customize, adapts to any design,
                        and the build size is tiny.”
                    </p>
                </blockquote>
                <figcaption>
                    <div>
                        {username}
                    </div>
                    <div>
                        {/* {btn || "visit me"} */}
                        {btn}

                    </div>
                </figcaption>
            </div>
        </figure >

    )
}

export default Card
