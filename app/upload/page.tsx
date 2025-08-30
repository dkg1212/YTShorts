"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-dropdown-menu'
import React, { useActionState, useState } from 'react'
import {uploadShortsAction} from '@/actions/upload-short'

const Page = () => {

    const [formState, action, isPending] = useActionState(uploadShortsAction, { errors: {} });
    const [videoUrl, setVideoUrl] = useState<string>("");

    const handleSubmit = (formData: FormData) => {
        formData.append('video', videoUrl);
        return action(formData);
    };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className='mb-6 text-2xl font-bold text-center'>Upload Shorts</h1>
      <form action={handleSubmit}>
        <div className='mb-4'>
            <Label>Title</Label>
            <Input
            type="text"
            name='title'
            placeholder="Enter title"
            className='mt-2'
            />
            {
                formState.errors.title && <span
                className='text-red-500 text-sm'
                >{formState.errors.title}</span>
            }

        </div>

        <div className='mb-4'>
            <Label>Description</Label>
            <Input 
            type="text"
            name='description'
            placeholder="Enter description"
            className='mt-2'
            />
            {
                formState.errors.title && <span
                className='text-red-500 text-sm'
                >{formState.errors.description}</span>
            }


        </div>

        <div className='mb-4'>
            <Label>Video File</Label>
            <Input 
            type="file"
            name='video'
            className='mt-2'
            />

           
        </div>
        <Button type='submit' className='w-full'>
            Upload
        </Button>

      </form>
    </div>
  )
}

export default Page
