import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

type CodeInfo = {
  lang: string,
  label: string,
};

const languages = ['language-java', 'language-kotlin'];

const langMap = new Map<string, CodeInfo>();
langMap.set('language-java', { lang: 'java', label: 'Java'});
langMap.set('language-kotlin', { lang: 'kotlin', label: 'Kotlin'});

const extractCode = (child: JSX.Element) => child.props?.children;

const JavaKotlinCodeBlock = ({children}: { children: JSX.Element[] }) => {
  const codes = children.map(extractCode)
    .filter(code => languages.includes(code?.props?.className))
    .map(code => ({
      langKey: code.props.className,
      children: code
    }));
  
  if (codes.length === 0) {
    return;
  }

  return (
    <Tabs groupId="codeLanguage">
      {codes.map((code, idx) => {
        const codeInfo = langMap.get(code.langKey);
        return codeInfo && (
          <TabItem key={idx} value={codeInfo.lang} label={codeInfo.label}>
            {code.children}
          </TabItem>
        );
      })}
    </Tabs>
  );
}

export { JavaKotlinCodeBlock };
