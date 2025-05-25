
const JAVADOC_BASEURL = 'https://www.javadoc.io/static/io.github.autoparams/autoparams';

const JavadocLink = ({version, path, children}) => {
  return (<>
    <a
      href={`${JAVADOC_BASEURL}/${version}/${path}`}
      target="_blank"
      rel="noopener noreferrer"
    >{children}</a>
  </>)
};

export { JavadocLink };