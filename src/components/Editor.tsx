import { Editor as _Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import { stateFromHTML } from "draft-js-import-html";
import draftToHtml from 'draftjs-to-html';
import { FC, useState } from "react";
import { FormikErrors } from "formik"
import { FakeData } from "../App"



const Editor: FC<{value: string, setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void> | Promise<FormikErrors<FakeData>>
}> = ({value, setFieldValue}) => {


  const contentState = stateFromHTML(value);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(contentState)
  );

  return (
    <div>
       <_Editor
        editorState={editorState}
        onEditorStateChange={(editorState) => {
          setEditorState(editorState) 
          const rawContent = convertToRaw(editorState.getCurrentContent())
          setFieldValue("description", draftToHtml(rawContent))
        }}
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }}
      />
    </div>
  )
}

export default Editor