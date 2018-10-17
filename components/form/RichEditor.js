import React, { PureComponent, createRef } from 'react';
import dynamic from 'next/dynamic';
import { getJSON, getHTML } from '@/components/DraftEditor/utils';
import CircularProgress from '@material-ui/core/CircularProgress';

const DynamicDraftEditorWithNoSSR = dynamic(() => import('@/components/DraftEditor'), {
  ssr: false,
  loading: () => (
    <div style={{ padding: 16, minHeight: 302 }}>
      <CircularProgress size={20} style={{ margin: 'auto', display: 'block' }} />
    </div>
  ),
});

export default class RichEditor extends PureComponent {
  editor = createRef()

  getJSON = () => {
    const { editorState } = this.editor.state;
    return getJSON(editorState);
  }

  getHTML = () => {
    const { editorState } = this.editor.state;
    return getHTML(editorState);
  }

  render() {
    // const { input: { onChange } } = this.props;
    return (
      <DynamicDraftEditorWithNoSSR
        ref={(c) => { this.editor = c; }}
        // _onChange={(editorState) => {
        //   console.log(this.editor.state);
        //   onChange({
        //     json: JSON.stringify(getJSON(editorState)),
        //     html: getHTML(editorState),
        //   });
        // }}
      />
    );
  }
}
