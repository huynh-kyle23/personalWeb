import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';

export default function ContentSection() {
    return (
        <div className="relative overflow-hidden bg-gray-100 min-h-screen w-screen pt-40">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div>
            <div className="flex-1 flex flex-col lg:flex-row">
                <div className="flex-1 flex items-center justify-center p-8">
                    <div className="max-w-lg">
                        <p className="text-base font-semibold leading-7 text-indigo-600">Hello!</p>
                        <h1 className="mt-25 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to Kyle Huynh's portfolio</h1>
                        <p className="mt-35 text-xl leading-8 text-gray-700">
                            Hello! My name is Kyle Huynh. I am a current undergraduate student at the University of California Irvine studying data science.
                            Here you can find anything about me from projects, experience, research, and fun facts to get to know me.
                            Feel free to explore the collection!
                        </p>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center p-8">
                    <img
                        alt=""
                        src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                        className="w-[48rem] max-w-full rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                    />
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-4xl">
                    {/* Additional content here */}
                </div>
            </div>
        </div>
    );
}
