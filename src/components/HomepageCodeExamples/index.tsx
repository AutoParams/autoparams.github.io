import styles from './styles.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Translate from '@docusaurus/Translate';

const simpleExampleJavaCode = `@Test
@AutoParams
void testMethod(int a, int b) {
    var sut = new Calculator();
    int actual = sut.add(a, b);
    assertEquals(a + b, actual);
}`;

const simpleExampleKotlinCode = `@Test
@AutoParams
fun testMethod(a: Int, b: Int) {
    val sut = Calculator()
    val actual = sut.add(a, b)
    assertEquals(a + b, actual)
}`;

export default function HomepageCodeExamples(): JSX.Element {
    return (
        <section className={styles.codeExamples}>
            <div className="container">
                <div className="row">
                    <div className={"col col--5"}>
                        <h2><Translate id="homepage.codeExample.title">A Simple Example</Translate></h2>
                        <p>
                            <Translate id="homepage.codeExample.description">The automatic generation of test data by AutoParams can potentially eliminate
                            the need for triangulation in tests, streamlining the testing process.</Translate>
                        </p>
                    </div>
                    <div className="col col--7">
                        <Tabs groupId="codeLanguage">
                            <TabItem value="java" label="Java">
                                <CodeBlock language="java">{simpleExampleJavaCode}</CodeBlock>
                            </TabItem>
                            <TabItem value="kotlin" label="Kotlin">
                                <CodeBlock language="kotlin">{simpleExampleKotlinCode}</CodeBlock>
                            </TabItem>
                        </Tabs>
                    </div>
                    
                </div>
            </div>
            
        </section>
    );
}