"use client"
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import PlayIcon from '../../../public/icons/playIcon';
import { cn } from '@/lib/utils';

const VideoPopup = ({color}) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className={cn('absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer', color)} onClick={() => setOpen(true)}> <PlayIcon/> </div>
            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="TKnufs85hXk"
                onClose={() => setOpen(false)}
            />
        </>
    )
}

export default VideoPopup