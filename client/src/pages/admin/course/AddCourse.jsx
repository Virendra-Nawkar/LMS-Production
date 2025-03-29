import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { useCreateCourseMutation } from '@/features/api/courseApi'
import useDocumentTitle from '@/lib/useDocumentTitle'
import { Loader2, MoveLeft } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const AddCourse = () => {
  useDocumentTitle("Add Course");
  const navigate = useNavigate();
  const [courseTitle, setCourseTitle] = useState("")
  const [category, setCategory] = useState("")

  const [createCourse, { data, error, isSuccess, isLoading }] = useCreateCourseMutation();


  const getSelectedCategory = (value) => {
    setCategory(value);
  }

  const createCourseHandler = async () => {
    await createCourse({ courseTitle, category })
  }

  // use for displaying course
  useEffect(() => {
    if (isSuccess) {
      toast.success(`${data?.message} Mess from addCourse` || "Course Created");
      navigate("/admin/course");
    }
  }, [isSuccess, error])



  return (
    <div className='flex-1  mx-10' >
      <div className='mb-4'>
        <h1 className='font-bold text-xl'>Add Course and Basic details to Course </h1>
        <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, tempore.</p>
      </div>
      <div className='space-y-4'>
        <div>
          <Label>Title</Label>
          <Input type="text"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            name="courseTitle" placeholder="Your Course Name" className="w-1/2" />
        </div>

        <div>
          <Label>Category</Label>
          <Select onValueChange={getSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a Category " />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="Next JS">Next JS</SelectItem>
                <SelectItem value="Data Science">Data Science</SelectItem>
                <SelectItem value="Frontend Development">Frontend Development</SelectItem>
                <SelectItem value="Fullstack Development">Fullstack Development</SelectItem>
                <SelectItem value="MERN Stack Development">MERN Stack Development</SelectItem>
                <SelectItem value="Javascript">Javascript</SelectItem>
                <SelectItem value="Python">Python</SelectItem>
                <SelectItem value="Docker">Docker</SelectItem>
                <SelectItem value="MongoDB">MongoDB</SelectItem>
                <SelectItem value="HTML">HTML</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className='flex gap-2 items-center'>
          <Button variant="outline"
            onClick={() => navigate("/admin/course")
            }>
            <MoveLeft /> Back
          </Button>
          <Button disabled={isLoading} onClick={createCourseHandler}>{
            isLoading ? <><Loader2 className=' h-4 w-4 animate-spin' />Please Wait...</> : <>Save Data</>

          }
          </Button>
        </div>

      </div>
    </div>
  )
}

export default AddCourse