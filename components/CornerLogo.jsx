'use client'
import Link from 'next/link'
import Image from 'next/image'
import { DownloadCloud } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CornerLogo = () => {
    const handleDownload = () => {
        // Create a link element
        const link = document.createElement('a');
        // Replace this URL with your actual PDF file URL
        link.href = '/Brochure.pdf';
        link.download = 'company-brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 ">
            <Link href="" className="group">
                <Button
                    onClick={handleDownload}
                    className="group relative overflow-hidden rounded-full "
                >
                    <span className="relative flex items-center gap-2">
                        Brochure
                    </span>
                </Button>
            </Link>
        </div>
    )
}

export default CornerLogo