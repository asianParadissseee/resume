import React from 'react';
import {TagSphere} from "react-tag-sphere";
import {useMediaQuery} from "@/commons/hooks/use-media";

const Stack = () => {
    const isMobile = useMediaQuery("(max-width: 640px)")
    const tags = [
        'HTML',
        'CSS',
        'BEM',
        'Seo',
        'Cross-browser layout',
        'JavaScript',
        'TypeScript',
        'React',
        'Vue',
        'NodeJs',
        'Nest',
        'Express',
        'React-Router',
        'Vue-Router',
        'SSR',
        'Nuxt',
        'Framer-motion',
        'Gsap',
        'SCSS',
        'Tailwind',
        'Hook-form',
        'Redux-toolkit',
        'Pinia',
        'i18next',
        'Rest Api',
        'Vite',
        'RsBuild',
        'GitHub',
        'GitLab',
        'Git',
        'Figma',
        'Adaptive layout',
    ];

    return (
        <section className="my-36">
            <h3
                       className="text-zinc-800 text-3xl sm:text-5xl font-bold whitespace-nowrap gap-10 dark:text-gray-300 text-center">
                My Stack Technology
            </h3>
            <div className="container mx-auto mt-40 w-80 md:w-96 md:min-w-96 px-10 flex justify-between items-center">
                {
                    isMobile ?
                        (
                            <TagSphere
                                className="text-zinc-800 dark:hover:text-white text-lg hover:text-black dark:text-gray-300"
                                fullHeight={true}
                                fullWidth={true}
                                tags={tags}
                                radius={170}
                            />
                        ) : (
                            <TagSphere
                                className="text-zinc-800 dark:hover:text-white text-lg hover:text-black dark:text-gray-300"
                                fullHeight
                                fullWidth
                                tags={tags}
                                radius={400}
                            />
                        )
                }
            </div>
        </section>
    );
};

export default Stack;