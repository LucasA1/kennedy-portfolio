import { useEffect, useRef, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Document, Page, pdfjs } from 'react-pdf'
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

interface ResumePdfPreviewProps {
  fileUrl: string
}

export default function ResumePdfPreview({ fileUrl }: ResumePdfPreviewProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [width, setWidth] = useState<number>()

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width))
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Box 
      ref={containerRef} 
      bg="white" 
      boxShadow="2xl" 
      overflow="hidden" 
      aspectRatio={8.5 / 11}
    >
      <Document file={fileUrl} loading={null} error={null}>
        <Page pageNumber={1} width={width} renderTextLayer={false} renderAnnotationLayer={false} />
      </Document>
    </Box>
  )
}
