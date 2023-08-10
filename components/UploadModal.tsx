"use client"

import { useState } from "react";
import {FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import useUploadModal from "@/hooks/useUploadModal";
import Input from "./Input";

const UploadModal = () =>{
    const uploadModal = useUploadModal();
    const [isLoading , setIsLoading] = useState();
    const {register , handleSubmit , reset} = useForm<FieldValues>({
        defaultValues:{
            author:'',
            title:'',
            song:null,
            image:null
        }
    })

    const onSubmit:SubmitHandler<FieldValues> = async (values) =>{
        // Upload in supabase
    }

    const onChange = (open:boolean)=>{
        if(!open){
            reset();
            uploadModal.onClose();
        }
    }
    return(
        <Modal
            title="Add a song "
            description="Upload a MP3 file"
            isOpen = {uploadModal.isOpen}
            onChange={onChange}
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-y-4"
            >
                <Input
                    id="title"
                    disabled={isLoading}
                    {...register('title' , {required:true})}
                    placeholder = "Song title"
                />                
                <Input
                    id="author"
                    disabled={isLoading}
                    {...register('author' , {required:true})}
                    placeholder = "Song author"
                />
                <div>
                    <div className="pb-1">
                        Select a Song
                    </div>
                    <Input
                    id="song"
                    type="file"
                    accept=".mp3"
                    disabled={isLoading}
                    {...register('song' , {required:true})}
                    />   
                </div>
                <div>
                    <div className="pb-1">
                        Select an Image
                    </div>
                    <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    disabled={isLoading}
                    {...register('song' , {required:true})}
                    />   
                </div>
            </form>
        </Modal>
    )
}

export default UploadModal;