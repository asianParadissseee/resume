import BaseLayout from "@/layouts/base-layout";
import WorkList from "../components/work/work-list";

const WorkPage = () => {
    return (
        <BaseLayout>
            <div className="container mx-auto px-10">
                <h1 className="text-zinc-800 dark:text-gray-300 text-6xl sm:text-8xl relative my-20 mt-40 sm:my-48 text-right">
                    All Projects
                </h1>
            </div>
            <WorkList/>
        </BaseLayout>
    );
};

export default WorkPage;