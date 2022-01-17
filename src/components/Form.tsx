import { useFormik } from "formik"
import { FC } from "react"
import { FakeData } from "../App"
import Editor from "./Editor"




const Form: FC<{data: FakeData}> = ({data}) => {

  const formik = useFormik({initialValues: data, onSubmit: (data) => console.log(data) })
  return (
    <form onSubmit={formik.handleSubmit}>
      <button type="submit">Submit</button>
      <label>Title</label>
      <input name="title" onChange={formik.handleChange} value={formik.values.title} />
      <Editor setFieldValue={formik.setFieldValue} value={formik.values.description} />
    </form>
  )
}

export default Form