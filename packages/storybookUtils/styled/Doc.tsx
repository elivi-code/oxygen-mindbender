import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface DocProps extends React.PropsWithChildren {
  markdown?: boolean;
}

// Uses Storybook's official .sbdocs class for unified documentation styling
const Doc: React.FunctionComponent<DocProps> = ({ markdown, children }) => {
  return (
    <div className="sbdocs">
      {markdown && typeof children === 'string' ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
      ) : (
        children
      )}
    </div>
  );
};

export default Doc;
