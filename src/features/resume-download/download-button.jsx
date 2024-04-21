import AppButton from "@/components/ui/app-button";
import Resume from "@/commons/assets/pdf/resume.pdf"
import {useCallback} from "react";

const DownloadButton = () => {

    const handleDownload = useCallback(() => {
        const link = document.createElement("a");
        link.href = "@/commons/assets/pdf/resume.pdf";
        link.download = "Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, []);


    return (
        <AppButton onClick={handleDownload}>
                Download Resume
        </AppButton>
    );
};

export default DownloadButton;