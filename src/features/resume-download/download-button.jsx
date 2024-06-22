import AppButton from "@/components/ui/app-button";
import Resume from "@/commons/assets/pdf/resume.pdf"
import {useCallback} from "react";

const DownloadButton = () => {

    const handleDownload = useCallback(() => {
        const link = document.createElement("a");
        link.href = 'https://drive.google.com/file/d/11wdYnWngy85VlWhl_dopyeQrQaiJhPFH/view';
        link.download = "Resume.pdf";
        link.target = "_blank"
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